/* =====================================================
   문화유산 데이터베이스
===================================================== */
const heritageData = [
  {
    id: "h1",
    name: "춘천 봉의산성",
    region: "강원",
    subRegion: "강원 춘천",
    era: "삼국시대(추정)",
    category: "성곽",
    desc: "봉의산 정상부를 둘러싸 쌓는 '테퇴식' 산성으로, 고구려~신라 등 삼국시대의 기와가 출토된 것으로 추정합니다.",
    icon: "🏯",
    bg: "#1f8a70",
    quiz: {
      q: "Q. 춘천 봉의산성은 언제 처음 축조된 것으로 추정되나요?",
      options: [
        "고구려·신라 등 삼국시대",
        "고려시대",
        "조선시대",
        "일제강점기"
      ],
      answer: 0,
      explanation: "봉의산성은 산 정상율 둘러싸 쌓는 '테퇴식' 산성으로, 삼국시대에 처음 만들어진 것으로 추정돼요."
    },
    aiPresetResponses: {
      "왜 중요한가요?": "삼국시대 지방의 방어 체계를 보여주는 중요한 유적으로, 지금의 춘천이 오래전부터 요새 도시였다는 사실을 증명해 줍니다.",
      "쉽게 설명해주세요": "산 꼭대기를 띠 모양으로 둘러쌓아 만든 테퇴식 산성으로, 춘천을 지키는 든든한 옛날 울타리였다고 생각하면 쉬워요!",
      "관련 인물은 누구인가요?": "삼국시대 및 고려·조선 시대에 춘천을 지키던 장수들과 백성들의 호국 정신이 담긴 곳입니다.",
      "시험에 나올 내용만 알려주세요": "1. 산 정상에 쌓은 '테퇴식 산성' / 2. 삼국시대 기와 출토 / 3. 춘천 지방의 핵심 방어 유적, 이 3가지를 꼭 기억해!"
    }
  },
  {
    id: "h2",
    name: "춘천향교",
    region: "강원",
    subRegion: "강원 춘천",
    era: "조선시대",
    category: "교육",
    desc: "조선시대 관아에서 운영한 지방 교육 기관입니다.",
    icon: "🏫",
    bg: "#e05627",
    quiz: {
      q: "Q. 향교의 주요 기능은 무엇이었나요?",
      options: ["지방 교육 및 제례", "군사 훈련", "무역 상업", "의료 기관"],
      answer: 0,
      explanation: "향교는 조선시대 지방의 유학 교육과 성현의 제사를 담당하던 기관입니다."
    },
    aiPresetResponses: {
      "왜 중요한가요?": "조선시대 지방 교육의 거점으로서 인재를 양성하던 중요한 역사 장소입니다.",
      "쉽게 설명해주세요": "조선시대의 국립 지방 학교라고 생각하면 편해요!",
      "관련 인물은 누구인가요?": "공자를 비롯한 유교 성현들과 춘천의 옛 유학자들이 관련되어 있습니다.",
      "시험에 나올 내용만 알려주세요": "1. 조선시대 지방 교육기관 / 2. 대성전과 명륜당 구조 기억하기!"
    }
  },
  { id: "h3", name: "강릉 오죽헌", region: "강원", subRegion: "강원 강릉", era: "조선시대", icon: "🎋", bg: "#5856d6" },
  { id: "h4", name: "강릉 경포대", region: "강원", subRegion: "강원 강릉", era: "고려~조선", icon: "🌊", bg: "#1f8a70" },
  { id: "h5", name: "남한산성", region: "경기", subRegion: "경기 광주", era: "조선시대", icon: "🏰", bg: "#e05627" },
  { id: "h6", name: "수원 화성", region: "경기", subRegion: "경기 수원", era: "조선시대", icon: "🧱", bg: "#f3ab28" },
  { id: "h7", name: "경복궁", region: "서울", subRegion: "서울", era: "조선시대", icon: "🏛️", bg: "#e05627" },
  { id: "h8", name: "경주 첨성대", region: "경북", subRegion: "경북 경주", era: "신라", icon: "⭐", bg: "#5856d6" },
  { id: "h9", name: "서울 덕수궁", region: "서울", subRegion: "서울", era: "조선·대한제국", icon: "🕌", bg: "#f3ab28" }
];

/* 상태 관리 */
let state = JSON.parse(localStorage.getItem("heritageGO_v4")) || {
  tab: "explore",
  detailId: "h1",
  points: 20,
  nickname: "유산 탐험가",
  visits: {},
  quizzes: { h1: 0 }, // 기본적으로 봉의산성 정답 풀이 상태 예시
  aiChat: {
    h1: [
      { sender: "ai", text: "안녕! 나는 춘천 봉의산성을 알려주는 데모 역사 도우미야. 아래 버튼으로 궁금한 걸 골라봐!" },
      { sender: "user", text: "왜 중요한가요?" },
      { sender: "ai", text: "삼국시대 지방의 방어 체계를 보여주는 중요한 유적으로, 지금의 춘천이 오래전부터 요새 도시였다는 사실을 증명해 줍니다." },
      { sender: "user", text: "쉽게 설명해주세요" }
    ]
  },
  filterRegion: "전체보기"
};

function save() {
  localStorage.setItem("heritageGO_v4", JSON.stringify(state));
}

function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2000);
}

function switchTab(tabName) {
  state.tab = tabName;
  state.detailId = null;
  save();
  render();
}

function openDetail(id) {
  state.detailId = id;
  save();
  render();
}

function closeDetail() {
  state.detailId = null;
  save();
  render();
}

/* =====================================================
   상세 페이지 렌더링 (업로드해주신 이미지 완벽 구현)
===================================================== */
function renderHeritageDetail(id) {
  const h = heritageData.find(x => x.id === id) || heritageData[0];
  const quizSolved = state.quizzes[h.id] !== undefined;
  const selectedOpt = state.quizzes[h.id];

  // AI 채팅 기록 가져오기
  const chatLogs = state.aiChat[h.id] || [
    { sender: "ai", text: `안녕! 나는 ${h.name}을 알려주는 데모 역사 도우미야. 아래 버튼으로 궁금한 걸 골라봐!` }
  ];

  return `
    <div class="detail-banner" style="background:${h.bg};">
      <div class="detail-banner-top">
        <div class="detail-banner-icon">${h.icon}</div>
        <div>
          <h2 class="detail-banner-title">${h.name}</h2>
          <div class="detail-tags">
            <span class="detail-tag">📍 ${h.subRegion}</span>
            <span class="detail-tag">📜 ${h.era}</span>
          </div>
        </div>
      </div>
      <p class="detail-desc">${h.desc}</p>
    </div>

    <!-- [1] 역사 퀴즈 영역 -->
    ${h.quiz ? `
      <div class="card">
        <div class="quiz-header-bar">
          <span class="quiz-badge">🧠 역사 퀴즈</span>
          <span class="quiz-notice">보상은 최초 1회만 지급돼요</span>
        </div>

        <div class="quiz-question-title">${h.quiz.q}</div>

        <div class="quiz-option-list">
          ${h.quiz.options.map((optText, idx) => {
            const isSelected = selectedOpt === idx;
            const numSymbols = ['①', '②', '③', '④'];
            return `
              <button class="quiz-option-btn ${isSelected ? 'selected' : ''}" onclick="answerQuiz('${h.id}', ${idx})">
                <span class="quiz-opt-num">${numSymbols[idx]}</span>
                <span>${optText}</span>
              </button>
            `;
          }).join('')}
        </div>

        ${quizSolved ? `
          <div class="quiz-result-box">
            <div class="quiz-result-title">🎉 정답! 보상은 이미 지급되었어요</div>
            <p class="quiz-result-desc">${h.quiz.explanation}</p>
          </div>
        ` : ''}
      </div>
    ` : ''}

    <!-- [2] AI 역사 도우미 영역 -->
    <div class="ai-card-container">
      <div class="ai-header">
        <div class="ai-header-info">
          <span class="ai-header-icon">🤖</span>
          <div>
            <div class="ai-header-title">AI 역사 도우미</div>
            <div class="ai-header-sub">🤖 데모 도우미 · 실제 AI 엔진 전 테스트 버전</div>
          </div>
        </div>
        <button class="ai-reset-btn" onclick="resetAIChat('${h.id}')">🔄 초기화</button>
      </div>

      <div class="ai-chat-body" id="aiChatLog">
        ${chatLogs.map(log => `
          <div class="${log.sender === 'ai' ? 'chat-bubble-ai' : 'chat-bubble-user'}">
            ${log.text}
          </div>
        `).join('')}
      </div>

      <div class="ai-preset-grid">
        <button class="ai-preset-btn" onclick="askAIPreset('${h.id}', '왜 중요한가요?')">💡 왜 중요한가요?</button>
        <button class="ai-preset-btn" onclick="askAIPreset('${h.id}', '쉽게 설명해주세요')">✨ 쉽게 설명해주세요</button>
        <button class="ai-preset-btn" onclick="askAIPreset('${h.id}', '관련 인물은 누구인가요?')">👤 관련 인물은 누구인가요?</button>
        <button class="ai-preset-btn" onclick="askAIPreset('${h.id}', '시험에 나올 내용만 알려주세요')">📝 시험에 나올 내용만 알려주세요</button>
      </div>
    </div>
  `;
}

/* 퀴즈 정답 처리 */
function answerQuiz(heritageId, selectedIdx) {
  const h = heritageData.find(x => x.id === heritageId);
  if (!h || !h.quiz) return;

  if (state.quizzes[heritageId] !== undefined) {
    toast("이미 보상을 받은 퀴즈입니다.");
    return;
  }

  state.quizzes[heritageId] = selectedIdx;
  if (selectedIdx === h.quiz.answer) {
    state.points += 20;
    toast("🎉 정답입니다! (+20P)");
  } else {
    toast("❌ 오답입니다. 다시 도전해보세요!");
  }
  save();
  render();
}

/* AI 채팅 질문하기 */
function askAIPreset(heritageId, questionText) {
  const h = heritageData.find(x => x.id === heritageId);
  if (!h) return;

  if (!state.aiChat[heritageId]) {
    state.aiChat[heritageId] = [
      { sender: "ai", text: `안녕! 나는 ${h.name}을 알려주는 데모 역사 도우미야. 아래 버튼으로 궁금한 걸 골라봐!` }
    ];
  }

  // 사용자 질문 추가
  state.aiChat[heritageId].push({ sender: "user", text: questionText });

  // AI 답변 추가
  const aiAnswer = (h.aiPresetResponses && h.aiPresetResponses[questionText]) 
    ? h.aiPresetResponses[questionText]
    : `${h.name}에 대한 질문입니다: "${questionText}" 정보가 등록되어 있습니다.`;

  state.aiChat[heritageId].push({ sender: "ai", text: aiAnswer });

  save();
  render();

  // 채팅 스크롤을 맨 아래로
  setTimeout(() => {
    const chatLog = document.getElementById("aiChatLog");
    if (chatLog) chatLog.scrollTop = chatLog.scrollHeight;
  }, 50);
}

/* AI 채팅 초기화 */
function resetAIChat(heritageId) {
  const h = heritageData.find(x => x.id === heritageId);
  state.aiChat[heritageId] = [
    { sender: "ai", text: `안녕! 나는 ${h.name}을 알려주는 데모 역사 도우미야. 아래 버튼으로 궁금한 걸 골라봐!` }
  ];
  toast("💬 AI 대화 내용이 초기화되었습니다.");
  save();
  render();
}

/* =====================================================
   메인 화면들
===================================================== */
function renderExplore() {
  const regions = ["전체보기", "강원", "경기", "서울", "경북"];
  const filtered = state.filterRegion === "전체보기" 
    ? heritageData 
    : heritageData.filter(h => h.region === state.filterRegion);

  return `
    <h2 class="page-title">문화유산 탐험</h2>
    <p class="page-sub">문화유산을 방문하고 포인트를 모아보세요!</p>

    <div class="filter-scroll">
      ${regions.map(r => `
        <button class="filter-chip ${state.filterRegion === r ? 'active' : ''}" onclick="setFilter('${r}')">
          ${r}
        </button>
      `).join('')}
    </div>

    <div>
      ${filtered.map(h => `
        <div class="heritage-card" onclick="openDetail('${h.id}')">
          <div class="heritage-icon" style="background:${h.bg}; color:white;">${h.icon}</div>
          <div class="heritage-info">
            <h4>${h.name}</h4>
            <div class="tag-group">
              <span class="tag region">${h.subRegion}</span>
              <span class="tag era">${h.era}</span>
            </div>
            <p class="heritage-desc">${h.desc}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function setFilter(region) {
  state.filterRegion = region;
  save();
  render();
}

function renderHome() {
  return `
    <div class="home-banner">
      <h3>🌱 문화유산 새싹</h3>
      <div class="banner-stats">
        <div class="stat-item">🪙 내 포인트 <strong>${state.points}P</strong></div>
        <div class="stat-item">🏛️ 방문한 곳 <strong>${Object.keys(state.visits).length}곳</strong></div>
      </div>
    </div>
    <div class="quick-grid">
      <button class="quick-btn orange" onclick="switchTab('explore')"><span style="font-size:24px;">🗺️</span> 문화유산 탐험하기</button>
      <button class="quick-btn yellow" onclick="openDetail('h1')"><span style="font-size:24px;">🏯</span> 봉의산성 상세보기</button>
    </div>
  `;
}

function renderCollection() {
  return `<h2 class="page-title">나의 문화유산 도감</h2><div class="collection-grid">${heritageData.map(h => `<div class="collection-card" onclick="openDetail('${h.id}')"><div style="font-size:30px;">${h.icon}</div><h5>${h.name}</h5></div>`).join('')}</div>`;
}

function renderRanking() {
  return `<h2 class="page-title">랭킹</h2><div class="rank-item my-rank"><div class="rank-num">7</div><div class="rank-user"><span>🎓</span> ${state.nickname}</div><div class="rank-points">${state.points}P</div></div>`;
}

function renderProfile() {
  return `<div class="profile-card"><h2>👤 ${state.nickname}</h2><p>🪙 ${state.points}P</p></div>`;
}

/* 전체 화면 렌더러 */
function render() {
  document.getElementById("headerPoints").textContent = state.points;
  
  const headerTitle = document.getElementById("headerTitle");
  if (state.detailId) {
    headerTitle.innerHTML = `<button class="header-back-btn" onclick="closeDetail()">← 문화유산 상세</button>`;
  } else {
    headerTitle.innerHTML = `🏛️ 유산GO`;
  }

  document.querySelectorAll(".nav-item").forEach((el, idx) => {
    const tabs = ['home', 'explore', 'collection', 'ranking', 'profile'];
    if (tabs[idx] === state.tab) el.classList.add("active");
    else el.classList.remove("active");
  });

  const content = document.getElementById("content");
  if (state.detailId) {
    content.innerHTML = renderHeritageDetail(state.detailId);
  } else {
    if (state.tab === "home") content.innerHTML = renderHome();
    else if (state.tab === "explore") content.innerHTML = renderExplore();
    else if (state.tab === "collection") content.innerHTML = renderCollection();
    else if (state.tab === "ranking") content.innerHTML = renderRanking();
    else if (state.tab === "profile") content.innerHTML = renderProfile();
  }
}

render();
