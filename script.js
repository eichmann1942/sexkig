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
    desc: "봉의산 정상부를 둘러싸 쌓는 '테퇴식' 산성으로, 고구려~신라 등 삼국시대에 처음 축조된 것으로 추정됩니다. 성곽길을 따라 한 바퀴 돌다 보면 춘천의 전경이 한눈에 펼쳐지며, 가볍게 즐기는 트래킹 명소로도 사랑받고 있어요.",
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
    routes: ["🏹 삼국시대의 흔적", "⚔️ 전쟁과 지역의 역사"],
    aiPresetResponses: {
      "왜 중요한가요?": "삼국시대 지방의 방어 체계를 보여주는 중요한 유적으로, 지금의 춘천이 오래전부터 요새 도시였다는 사실을 증명해 줍니다.",
      "쉽게 설명해주세요": "산 꼭대기를 띠 모양으로 둘러쌓아 만든 테퇴식 산성으로, 춘천을 지키는 든든한 옛날 울타리였다고 생각하면 쉬워요!",
      "관련 인물은 누구인가요?": "삼국시대 및 고려·조선 시대에 춘천을 지키던 장수들과 백성들의 호국 정신이 담긴 곳입니다.",
      "시험에 나올 내용만 알려주세요": "1. 산 정상에 쌓은 '테퇴식 산성' / 2. 삼국시대 기와 출토 / 3. 춘천 지방의 핵심 방어 유적!"
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
    routes: ["👑 왕조의 발자취"],
    aiPresetResponses: {
      "왜 중요한가요?": "조선시대 지방 교육의 거점으로서 인재를 양성하던 중요한 역사 장소입니다.",
      "쉽게 설명해주세요": "조선시대의 국립 지방 학교라고 생각하면 편해요!",
      "관련 인물은 누구인가요?": "공자를 비롯한 유교 성현들과 춘천의 옛 유학자들입니다.",
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
let state = JSON.parse(localStorage.getItem("heritageGO_v5")) || {
  tab: "explore",
  detailId: "h1",
  points: 40,
  nickname: "유산 탐험가",
  visits: {},
  quizzes: { h1: 0 },
  selectedIconVisit: 0,
  selectedIconChange: 4,
  selectedChangeTag: "특별한 변화 없음",
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
  localStorage.setItem("heritageGO_v5", JSON.stringify(state));
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
   상세 페이지 렌더링 (이미지 스크린샷과 100% 동일)
===================================================== */
function renderHeritageDetail(id) {
  const h = heritageData.find(x => x.id === id) || heritageData[0];
  const isVisited = state.visits[h.id];
  const quizSolved = state.quizzes[h.id] !== undefined;
  const selectedOpt = state.quizzes[h.id];

  const presetIcons = ["🏯", "🏛️", "👘", "🏰", "⛩️", "🏺"];

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
            <span class="detail-tag">🏛️ ${h.category || '문화유산'}</span>
          </div>
        </div>
      </div>
      <p class="detail-desc">${h.desc}</p>
    </div>

    <!-- 1. 방문 인증 -->
    <div class="card">
      <div class="section-title">📸 방문 인증</div>
      <div class="section-sub">${isVisited ? '📸 방문 기록 있음! 재방문도 환영해요' : '아직 방문하지 않았어요. 첫 방문 시 +10P!'}</div>

      <div class="upload-wrapper">
        <div class="upload-wrapper-title">📷 인증 사진 선택</div>
        <div class="upload-box" onclick="triggerFileUpload('visitFile')">
          <div id="visitPreviewText">
            <div style="font-size:28px; margin-bottom:4px;">📷</div>
            아래에서 바스콘 이미지를 선택하거나<br>사진을 업로드하세요
          </div>
          <img id="visitImgPreview" style="display:none;" />
          <input type="file" id="visitFile" accept="image/*" style="display:none;" onchange="handleImagePreview(this, 'visitImgPreview', 'visitPreviewText')" />
        </div>

        <div class="icon-selector-row">
          ${presetIcons.map((ic, idx) => `
            <div class="icon-badge-btn icon-bg-${idx+1} ${state.selectedIconVisit === idx ? 'selected' : ''}" onclick="selectIcon('visit', ${idx})">
              ${ic}
            </div>
          `).join('')}
        </div>

        <button class="dashed-upload-btn" onclick="triggerFileUpload('visitFile')">
          📷 사진 업로드하기
        </button>
      </div>

      <button class="btn-primary-orange" onclick="submitVisit('${h.id}')">
        📸 방문 인증하기
      </button>
    </div>

    <!-- 2. 역사 퀴즈 -->
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

    <!-- 3. AI 역사 도우미 -->
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

    <!-- 4. 연결된 탐험 루트 -->
    ${h.routes ? `
      <div class="card">
        <div class="section-title">🗺️ 연결된 탐험 루트</div>
        <div class="route-chip-group">
          ${h.routes.map(r => `<div class="route-chip">${r}</div>`).join('')}
        </div>
      </div>
    ` : ''}

    <!-- 5. 변화 기록 남기기 -->
    <div class="card">
      <div class="section-title">🔄 변화 기록 남기기</div>
      <div class="section-sub">
        업로드된 인증은 삭제되지 않고, 직접 관찰한 사실을 기록하세요.<br>
        이전 방문 사진과 비교할 수 있도록 사진을 첨부한 후 제출해주세요.
      </div>

      <div class="upload-wrapper">
        <div class="upload-wrapper-title">📷 새로운 사진 첨부 (필수)</div>
        <div class="upload-box" onclick="triggerFileUpload('changeFile')">
          <div id="changePreviewText">
            <div style="font-size:28px; margin-bottom:4px;">📷</div>
            아래에서 바스콘 이미지를 선택하거나<br>사진을 업로드하세요
          </div>
          <img id="changeImgPreview" style="display:none;" />
          <input type="file" id="changeFile" accept="image/*" style="display:none;" onchange="handleImagePreview(this, 'changeImgPreview', 'changePreviewText')" />
        </div>

        <div class="icon-selector-row">
          ${presetIcons.map((ic, idx) => `
            <div class="icon-badge-btn icon-bg-${idx+1} ${state.selectedIconChange === idx ? 'selected' : ''}" onclick="selectIcon('change', ${idx})">
              ${ic}
            </div>
          `).join('')}
        </div>

        <button class="dashed-upload-btn" onclick="triggerFileUpload('changeFile')">
          📷 사진 업로드하기
        </button>
      </div>

      <div class="section-title" style="font-size:13px; margin-bottom:8px;">변화 내용 선택</div>
      <div class="change-tag-grid">
        ${["주변 환경 변화", "안내판 변화", "시설물 변화", "보존 상태 변화", "특별한 변화 없음", "기타 직접 내용"].map(tag => `
          <div class="change-tag-btn ${state.selectedChangeTag === tag ? 'active' : ''}" onclick="selectChangeTag('${tag}')">
            ${tag}
          </div>
        `).join('')}
      </div>

      <textarea class="change-textarea" placeholder="춘천 봉의산성에서 직접 관찰한 사실을 메모로 남겨보세요. 예) &quot;안내판의 디자인이 이전 방문과 달라졌습니다.&quot;"></textarea>

      <button class="btn-primary-orange btn-pink-gradient" onclick="submitChangeRecord()">
        변화 기록 저장하기
      </button>

      <div class="footer-note">변화 기록은 보너스 포인트 지급 대상이 아닙니다.</div>
    </div>
  `;
}

/* 인터랙션 이벤트 처리 */
function triggerFileUpload(id) {
  document.getElementById(id).click();
}

function handleImagePreview(input, imgId, textId) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = document.getElementById(imgId);
      img.src = e.target.result;
      img.style.display = 'block';
      document.getElementById(textId).style.display = 'none';
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function selectIcon(type, idx) {
  if (type === 'visit') state.selectedIconVisit = idx;
  else state.selectedIconChange = idx;
  save();
  render();
}

function selectChangeTag(tag) {
  state.selectedChangeTag = tag;
  save();
  render();
}

function submitVisit(id) {
  state.visits[id] = true;
  state.points += 10;
  toast("📸 방문 인증이 성공적으로 완료되었습니다! (+10P)");
  save();
  render();
}

function submitChangeRecord() {
  toast("🔄 변화 기록이 성공적으로 저장되었습니다!");
  save();
  render();
}

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

function askAIPreset(heritageId, questionText) {
  const h = heritageData.find(x => x.id === heritageId);
  if (!h) return;

  if (!state.aiChat[heritageId]) {
    state.aiChat[heritageId] = [
      { sender: "ai", text: `안녕! 나는 ${h.name}을 알려주는 데모 역사 도우미야. 아래 버튼으로 궁금한 걸 골라봐!` }
    ];
  }

  state.aiChat[heritageId].push({ sender: "user", text: questionText });

  const aiAnswer = (h.aiPresetResponses && h.aiPresetResponses[questionText]) 
    ? h.aiPresetResponses[questionText]
    : `${h.name}에 대한 질문입니다: "${questionText}" 정보가 등록되어 있습니다.`;

  state.aiChat[heritageId].push({ sender: "ai", text: aiAnswer });

  save();
  render();

  setTimeout(() => {
    const chatLog = document.getElementById("aiChatLog");
    if (chatLog) chatLog.scrollTop = chatLog.scrollHeight;
  }, 50);
}

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
   기타 메인 탭 화면들
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
    headerTitle.innerHTML = `<button class="header-back-btn" onclick="closeDetail()">← 문화유산 탐험</button>`;
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
