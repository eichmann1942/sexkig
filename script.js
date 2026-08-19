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
    desc: "봉의산 정상부를 둘러싼 미상의 산성으로, 고구려~신라 등 삼국시대의 기와가 출토된 것으로 추정합니다. 산성길을 따라 한 굽이 돌다 보면 춘천의 전경이 한눈에 펼쳐지며, 가볍게 즐기는 트래킹 코스로 사랑받고 있어요.",
    icon: "🏯",
    bg: "#1f8a70",
    quiz: {
      q: "Q. 춘천 봉의산성을 가장 처음 축조한 거로 추정되나요?",
      options: [
        "1. 고구려·신라 등 삼국시대",
        "2. 고려시대",
        "3. 조선시대",
        "4. 일제강점기"
      ],
      answer: 0
    },
    aiGreeting: "안녕! 나는 춘천봉의산성을 수호하는 장군 역사도우미야. 봉의산성에 대해 궁금한 점이 있다면 얼마든지 물어봐!",
    courses: ["📍 봉의산 성곽 탐방", "🌿 봉의산 생태와 역사"]
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
    quiz: { q: "Q. 향교의 주요 기능은 무엇이었나요?", options: ["1. 지방 교육 및 제례", "2. 군사 훈련", "3. 무역 상업", "4. 의료 기관"], answer: 0 },
    aiGreeting: "반가워! 조선시대 춘천향교의 유학자 도우미란다.",
    courses: ["📍 춘천 유교 문화길"]
  },
  {
    id: "h3",
    name: "강릉 오죽헌",
    region: "강원",
    subRegion: "강원 강릉",
    era: "조선시대",
    category: "가옥",
    desc: "신사임당과 율곡 이이를 낳은 조선시대 가옥입니다.",
    icon: "🎋",
    bg: "#5856d6",
    quiz: { q: "Q. 오죽헌에서 태어난 인물은?", options: ["1. 신사임당과 율곡 이이", "2. 세종대왕", "3. 이순신 장군", "4. 김정호"], answer: 0 },
    aiGreeting: "안녕하세요! 오죽헌의 문학 도우미입니다.",
    courses: ["📍 강릉 인물 역사길"]
  },
  { id: "h4", name: "강릉 경포대", region: "강원", subRegion: "강원 강릉", era: "고려~조선", category: "정자", desc: "경포호를 바라보며 시를 읊던 정자입니다.", icon: "🌊", bg: "#1f8a70" },
  { id: "h5", name: "남한산성", region: "경기", subRegion: "경기 광주", era: "조선시대", category: "성곽", desc: "병자호란의 역사가 담긴 유네스코 세계문화유산입니다.", icon: "🏰", bg: "#e05627" },
  { id: "h6", name: "수원 화성", region: "경기", subRegion: "경기 수원", era: "조선시대", category: "성곽", desc: "정조가 만든 과학적 신도시 성곽입니다.", icon: "🧱", bg: "#f3ab28" },
  { id: "h7", name: "경복궁", region: "서울", subRegion: "서울", era: "조선시대", category: "궁궐", desc: "조선의 법궁, 정치와 왕실의 중심입니다.", icon: "🏛️", bg: "#e05627" },
  { id: "h8", name: "경주 첨성대", region: "경북", subRegion: "경북 경주", era: "신라", category: "천문", desc: "신라의 별을 관측하던 동양 최고의 천문대입니다.", icon: "⭐", bg: "#5856d6" },
  { id: "h9", name: "서울 덕수궁", region: "서울", subRegion: "서울", era: "조선·대한제국", category: "궁궐", desc: "대한제국 고종 황제가 머물던 근대 궁궐입니다.", icon: "🕌", bg: "#f3ab28" }
];

/* 상태 관리 */
let state = JSON.parse(localStorage.getItem("heritageGO_v3")) || {
  tab: "explore",
  detailId: null,
  points: 20,
  nickname: "유산 탐험가",
  visits: {},
  quizzes: {},
  filterRegion: "전체보기",
  selectedChangeTags: []
};

function save() {
  localStorage.setItem("heritageGO_v3", JSON.stringify(state));
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
   상세 페이지 렌더링 (봉의산성 스크린샷과 동일)
===================================================== */
function renderHeritageDetail(id) {
  const h = heritageData.find(x => x.id === id) || heritageData[0];
  const isVisited = state.visits[h.id];

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
      <div class="section-sub">마지막 방문이 없어 최초 인증 시 <strong>+10P</strong></div>

      <div class="upload-box" onclick="triggerFileUpload('visitFile')">
        <div id="visitPreviewText">📷 대표 사진을 올리거나 선택해주세요</div>
        <img id="visitImgPreview" style="display:none;" />
        <input type="file" id="visitFile" accept="image/*" style="display:none;" onchange="handleImagePreview(this, 'visitImgPreview', 'visitPreviewText')" />
      </div>

      <div class="icon-selector">
        <div class="icon-opt selected">🏯</div>
        <div class="icon-opt">🏛️</div>
        <div class="icon-opt">👘</div>
        <div class="icon-opt">🌸</div>
        <div class="icon-opt">⛩️</div>
        <div class="icon-opt">🏺</div>
      </div>

      <button class="btn-upload-secondary" onclick="triggerFileUpload('visitFile')">
        📷 사진 업로드하기
      </button>

      <button class="btn-primary-orange" onclick="submitVisit('${h.id}')">
        📸 방문 인증하기
      </button>
    </div>

    <!-- 2. 역사 퀴즈 -->
    ${h.quiz ? `
      <div class="card">
        <div class="section-title">🧠 역사 퀴즈 <span style="font-size:11px; color:#e05627;">퀴즈만 풀어도 포인트 획득!</span></div>
        <div style="font-size:13px; font-weight:800; margin-bottom:10px;">${h.quiz.q}</div>
        
        <div>
          ${h.quiz.options.map((opt, idx) => `
            <button class="quiz-opt-btn ${state.quizzes[h.id] === idx ? 'selected' : ''}" onclick="answerQuiz('${h.id}', ${idx}, ${h.quiz.answer})">
              ${opt}
            </button>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <!-- 3. AI 역사 도우미 -->
    <div class="card">
      <div class="ai-helper-card">
        <div style="font-weight:800; font-size:14px;">🤖 AI 역사 도우미</div>
        <button style="font-size:11px; color:white; background:rgba(255,255,255,0.2); padding:4px 8px; border-radius:10px;" onclick="resetAIChat()">🔄 새로고침</button>
      </div>

      <div class="ai-speech-bubble" id="aiSpeechText">
        ${h.aiGreeting || "안녕! 나는 이 문화유산을 안내해주는 AI 도우미야. 무엇이든 물어봐!"}
      </div>

      <div class="ai-preset-grid">
        <button class="ai-preset-btn" onclick="askAIPreset('배경')">💡 배경을 알려줘</button>
        <button class="ai-preset-btn" onclick="askAIPreset('위치')">📍 위치를 설명해줘</button>
        <button class="ai-preset-btn" onclick="askAIPreset('인물')">👤 관련 인물은 누구인가요?</button>
        <button class="ai-preset-btn" onclick="askAIPreset('목적')">📜 시대적 배경과 축조 목적을 알려줘</button>
      </div>
    </div>

    <!-- 4. 관련 탐험 코스 -->
    ${h.courses ? `
      <div class="card">
        <div class="section-title">🗺️ 관련 탐험 코스</div>
        <div style="display:flex; gap:8px; margin-top:8px;">
          ${h.courses.map(c => `
            <button style="padding:8px 14px; background:#f4ece1; border-radius:12px; font-size:12px; font-weight:800; color:#555;">
              ${c}
            </button>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <!-- 5. 변화 기록 남기기 -->
    <div class="card">
      <div class="section-title">🔄 변화 기록 남기기</div>
      <div class="section-sub">유산 주변을 관찰하고 변화된 사진을 기록해보세요.</div>

      <div class="upload-box" onclick="triggerFileUpload('changeFile')">
        <div id="changePreviewText">📷 변화된 사진을 올려주세요</div>
        <img id="changeImgPreview" style="display:none;" />
        <input type="file" id="changeFile" accept="image/*" style="display:none;" onchange="handleImagePreview(this, 'changeImgPreview', 'changePreviewText')" />
      </div>

      <button class="btn-upload-secondary" onclick="triggerFileUpload('changeFile')">
        📷 사진 업로드하기
      </button>

      <div class="section-title" style="font-size:13px; margin-top:10px;">변화 항목 선택</div>
      <div class="change-tag-grid">
        ${["주변 환경 변화", "안내판 변화", "시설물 변화", "보존 상태 변화", "포토존 변화/신설", "기타 건물 신축"].map(tag => `
          <div class="change-tag-btn ${state.selectedChangeTags.includes(tag) ? 'active' : ''}" onclick="toggleChangeTag('${tag}')">
            ${tag}
          </div>
        `).join('')}
      </div>

      <textarea class="change-textarea" placeholder="관찰한 사실을 자유롭게 기록하세요 (예: 안내판 디자인이 새로 변경되었습니다)"></textarea>

      <button class="btn-primary-orange" style="background:#f3ab28;" onclick="submitChangeRecord()">
        변화 기록 제출하기
      </button>
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

function submitVisit(id) {
  state.visits[id] = true;
  state.points += 10;
  toast("📸 방문 인증 완료! (+10P)");
  save();
  render();
}

function answerQuiz(heritageId, selectedIdx, correctIdx) {
  state.quizzes[heritageId] = selectedIdx;
  if (selectedIdx === correctIdx) {
    state.points += 20;
    toast("🧠 정답입니다! (+20P)");
  } else {
    toast("❌ 아쉽습니다. 다시 시도해보세요!");
  }
  save();
  render();
}

function askAIPreset(type) {
  const chat = document.getElementById("aiSpeechText");
  if (type === '배경') chat.textContent = "봉의산성은 삼국시대에 축조된 산성으로, 춘천 지역을 방어하던 주요 거점이었습니다.";
  else if (type === '위치') chat.textContent = "강원특별자치도 춘천시 봉의산 정상부에 위치하고 있습니다.";
  else if (type === '인물') chat.textContent = "삼국시대 및 고려 시대 춘천을 지키던 장수들과 백성들의 호국 정신이 서린 곳입니다.";
  else if (type === '목적') chat.textContent = "침입하는 외세를 방어하고 춘천 시내 조망을 확보하기 위한 전략적 목적으로 쌓은 성곽입니다.";
}

function resetAIChat() {
  document.getElementById("aiSpeechText").textContent = "안녕! 궁금한 질문을 아래 버튼 중에서 눌러봐!";
}

function toggleChangeTag(tag) {
  const idx = state.selectedChangeTags.indexOf(tag);
  if (idx > -1) state.selectedChangeTags.splice(idx, 1);
  else state.selectedChangeTags.push(tag);
  save();
  render();
}

function submitChangeRecord() {
  toast("🔄 변화 기록이 제출되었습니다!");
  state.selectedChangeTags = [];
  save();
  render();
}

/* =====================================================
   탭 별 메인 렌더링
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
