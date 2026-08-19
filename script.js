/* =====================================================
   문화유산 & 한국 실제 학교 데이터베이스
===================================================== */
const heritageData = [
  {
    id: "h1",
    name: "춘천 봉의산성",
    region: "강원",
    subRegion: "강원 춘천",
    era: "삼국시대(추정)",
    category: "성곽",
    desc: "봉의산 정상부를 둘러싸 쌓은 '테퇴식' 산성으로, 고구려~신라 등 삼국시대에 처음 축조된 것으로 추정됩니다.",
    icon: "🏯",
    bg: "#1f8a70",
    quiz: {
      q: "Q. 춘천 봉의산성은 언제 처음 축조된 것으로 추정되나요?",
      options: ["고구려·신라 등 삼국시대", "고려시대", "조선시대", "일제강점기"],
      answer: 0,
      explanation: "봉의산성은 삼국시대에 처음 만들어진 것으로 추정돼요."
    },
    routeIds: ["r1", "r2"],
    aiPresetResponses: {
      "왜 중요한가요?": "삼국시대부터 춘천을 지켜온 요새이자 국방의 핵심 유적지이기 때문입니다.",
      "쉽게 설명해주세요": "산 정상에 띠를 두르듯 돌을 쌓아 만든 춘천의 옛 성벽이에요!",
      "관련 인물은 누구인가요?": "고려시대 몽골 침입 당시 저항했던 춘천의 군사들과 백성들입니다.",
      "시험에 나올 내용만 알려주세요": "1. 테퇴식 산성 / 2. 삼국시대 기와 출토 / 3. 춘천의 대표 방어 유적!"
    }
  },
  {
    id: "h2",
    name: "춘천향교",
    region: "강원",
    subRegion: "강원 춘천",
    era: "조선시대",
    category: "교육",
    desc: "조선시대 지방 관아에서 인재를 양성하던 공립 교육 기관입니다.",
    icon: "🏫",
    bg: "#e05627",
    quiz: {
      q: "Q. 향교의 주요 기능은 무엇이었나요?",
      options: ["지방 교육 및 제례", "군사 훈련", "무역 상업", "의료 기관"],
      answer: 0,
      explanation: "향교는 조선시대 지방의 교육과 성현의 제사를 담당했습니다."
    },
    routeIds: ["r2"],
    aiPresetResponses: {
      "왜 중요한가요?": "조선시대 지방 유학 교육의 중심지 역할을 한 유치 기관입니다.",
      "쉽게 설명해주세요": "조선 시대의 국립 지방 학교라고 보면 돼요!"
    }
  },
  { id: "h3", name: "강릉 오죽헌", region: "강원", subRegion: "강원 강릉", era: "조선시대", icon: "🎋", bg: "#5856d6", routeIds: [] },
  { id: "h4", name: "강릉 경포대", region: "강원", subRegion: "강원 강릉", era: "고려~조선", icon: "🌊", bg: "#1f8a70", routeIds: [] },
  { id: "h5", name: "남한산성", region: "경기", subRegion: "경기 광주", era: "조선시대", icon: "🏰", bg: "#e05627", routeIds: ["r2"] },
  { id: "h6", name: "수원 화성", region: "경기", subRegion: "경기 수원", era: "조선시대", icon: "🧱", bg: "#f3ab28", routeIds: [] },
  { id: "h7", name: "경복궁", region: "서울", subRegion: "서울", era: "조선시대", icon: "🏛️", bg: "#e05627", routeIds: [] },
  { id: "h8", name: "경주 첨성대", region: "경북", subRegion: "경북 경주", era: "신라", icon: "⭐", bg: "#5856d6", routeIds: ["r1"] },
  { id: "h9", name: "서울 덕수궁", region: "서울", subRegion: "서울", era: "조선·대한제국", icon: "🕌", bg: "#f3ab28", routeIds: [] }
];

const schoolData = [
  { id: "s1", name: "원주고등학교 역사탐험클럽", region: "강원 원주", members: 42, points: 1280 },
  { id: "s2", name: "춘천고등학교 역사탐험클럽", region: "강원 춘천", members: 38, points: 1150 },
  { id: "s3", name: "봉의고등학교 역사탐험클럽", region: "강원 춘천", members: 29, points: 940 },
  { id: "s4", name: "강원고등학교 역사탐험클럽", region: "강원 춘천", members: 25, points: 810 },
  { id: "s5", name: "유봉여자고등학교 역사탐험클럽", region: "강원 춘천", members: 31, points: 890 }
];

const routeData = [
  { id: "r1", name: "삼국시대의 흔적", icon: "🏹", bg: "#1f8a70", desc: "삼국시대 방어 기술과 과학 수준을 만나요.", steps: ["h1", "h8"] },
  { id: "r2", name: "전쟁과 지역의 역사", icon: "⚔️", bg: "#e05627", desc: "우리 고장의 호국 정신을 살펴보는 코스입니다.", steps: ["h1", "h5", "h2"] }
];

/* 상태 관리 */
let state = JSON.parse(localStorage.getItem("heritageGO_v8")) || {
  tab: "profile",
  detailId: null,
  routeId: null,
  viewSchoolClub: false,
  points: 40,
  nickname: "유산 탐험가",
  joinedSchool: "s1",
  visits: {},
  quizzes: { h1: 0, h5: 0, h7: 0 },
  selectedIconVisit: 0,
  selectedIconChange: 4,
  selectedChangeTag: "특별한 변화 없음",
  aiChat: {},
  activities: [
    { type: "quiz", title: "춘천 봉의산성 퀴즈 정답", time: "2026.08.19 20:46" },
    { type: "quiz", title: "춘천 봉의산성 퀴즈 오답", time: "2026.08.19 20:45" },
    { type: "quiz", title: "남한산성 퀴즈 정답 (+20P)", time: "2026.08.19 20:43" },
    { type: "club", title: "원주고 역사탐험클럽에 가입했어요!", time: "2026.08.19 19:13" },
    { type: "mission", title: "클럽 미션 참여: 우리 지역 문화유산 30곳 방문하기", time: "2026.08.19 19:13" }
  ],
  filterRegion: "전체보기"
};

function save() {
  localStorage.setItem("heritageGO_v8", JSON.stringify(state));
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
  state.routeId = null;
  state.viewSchoolClub = false;
  save(); render();
}

function openDetail(id) {
  state.detailId = id;
  state.routeId = null;
  save(); render();
}

function openRoute(routeId) {
  state.routeId = routeId;
  save(); render();
}

function goBack() {
  if (state.viewSchoolClub) state.viewSchoolClub = false;
  else if (state.routeId) state.routeId = null;
  else if (state.detailId) state.detailId = null;
  save(); render();
}

/* =====================================================
   [1] 프로필 화면 렌더링 (업로드 이미지 100% 동일)
===================================================== */
function renderProfile() {
  const visitedCount = Object.keys(state.visits).length;
  const quizCount = Object.keys(state.quizzes).length;
  const collectionRate = Math.round((visitedCount / heritageData.length) * 100);

  return `
    <!-- 1. 프로필 상단 헤더 -->
    <div class="profile-main-header">
      <div class="profile-user-row">
        <div class="profile-avatar-circle">🎓</div>
        <div class="profile-user-info">
          <h3>${state.nickname} ✏️</h3>
          <span class="badge-label">🌱 문화유산 새싹</span>
        </div>
      </div>

      <div class="level-progress-box">
        <div class="level-progress-text">
          <span>현재 문화유산 새싹</span>
          <span>다음 등급까지 60P</span>
        </div>
        <div class="level-bar-bg">
          <div class="level-bar-fill" style="width:40%;"></div>
        </div>
        <div class="level-sub-title">🔹 문화유산 탐험가</div>
      </div>
    </div>

    <!-- 2. 스탯 4개 그리드 -->
    <div class="profile-stats-grid">
      <div class="stat-box-card">
        <div class="stat-box-val orange">🪙 ${state.points}P</div>
        <div class="stat-box-lbl">총 포인트</div>
      </div>
      <div class="stat-box-card">
        <div class="stat-box-val">🏛️ ${visitedCount}곳</div>
        <div class="stat-box-lbl">방문한 문화유산</div>
      </div>
      <div class="stat-box-card">
        <div class="stat-box-val pink">🧠 ${quizCount}개</div>
        <div class="stat-box-lbl">퀴즈 정답</div>
      </div>
      <div class="stat-box-card">
        <div class="stat-box-val blue">📖 ${collectionRate}%</div>
        <div class="stat-box-lbl">수집률</div>
      </div>
    </div>

    <!-- 3. 대표 배지 -->
    <div class="card">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <span class="section-title">🎖️ 대표 배지</span>
        <span style="font-size:11px; color:#e05627; font-weight:800; cursor:pointer;" onclick="toast('대표 배지 편집 기능')">편집 ></span>
      </div>
      <div style="font-size:11px; color:#888; margin-bottom:12px;">
        획득 배지 1개 · 대표 배지는 최대 6개까지 선택할 수 있어요.
      </div>
      <div class="badge-badge-card">
        <div class="icon">🗺️</div>
        <div class="title">클럽 방문왕</div>
        <div class="desc">문화유산 30곳 방문</div>
      </div>
    </div>

    <!-- 4. 메뉴 링크 -->
    <div class="menu-list-card">
      <div class="menu-link-item is-locked">
        <div class="menu-link-left">
          <span class="menu-link-icon">🎖️</span>
          <span>배지 전체 보기</span>
        </div>
        <span>🔒</span>
      </div>
      <div class="menu-link-item" onclick="switchTab('explore')">
        <div class="menu-link-left">
          <span class="menu-link-icon">🗺️</span>
          <span>탐험 루트</span>
        </div>
        <span>🗺️</span>
      </div>
      <div class="menu-link-item" onclick="openSchoolClub()">
        <div class="menu-link-left">
          <span class="menu-link-icon">🏫</span>
          <span>학교 클럽</span>
        </div>
        <span>🏫</span>
      </div>
    </div>

    <!-- 5. 최근 활동 -->
    <div class="card">
      <div class="section-title">📌 최근 활동</div>
      <div class="activity-list">
        ${state.activities.map(act => `
          <div class="activity-item">
            <span class="activity-icon">
              ${act.type === 'quiz' ? '🧠' : act.type === 'club' ? '🏫' : '🎯'}
            </span>
            <div class="activity-content">
              <div class="activity-title">${act.title}</div>
              <div class="activity-time">${act.time}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- 6. 방문 기록 -->
    <div class="card">
      <div class="section-title">📌 방문 기록</div>
      <div style="text-align:center; padding:20px; font-size:12px; color:#aaa;">
        ${visitedCount === 0 ? '아직 방문 기록이 없어요.' : `총 ${visitedCount}곳의 문화유산을 방문했습니다.`}
      </div>
    </div>

    <!-- 7. 획득한 배지 -->
    <div class="card">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <span class="section-title">🎖️ 획득한 배지</span>
        <span style="font-size:11px; color:#888;">1 / 17</span>
      </div>
      <div class="badge-badge-card">
        <div class="icon">🗺️</div>
        <div class="title">클럽 방문왕</div>
        <div class="desc">클럽 미션: 문화유산 30곳 방문</div>
      </div>
    </div>

    <!-- 8. 개발용 테스트 도구 -->
    <div class="test-tools-card">
      <div class="section-title" style="font-size:13px;">🧪 테스트 도구 (개발용)</div>
      <div class="test-btn-grid">
        <button class="test-btn" onclick="testTimePass(7)">⏰ 7일 경과 시뮬레이션</button>
        <button class="test-btn" onclick="testTimePass(1)">⏰ 1일 경과</button>
        <button class="test-btn" onclick="resetTestData()">✏️ 테스트 데이터 초기화</button>
        <button class="test-btn danger" onclick="fullReset()">🔥 전체 초기화</button>
      </div>
    </div>
  `;
}

/* =====================================================
   [2] 학교 클럽 화면 렌더링 (한국 실제 학교 연동)
===================================================== */
function openSchoolClub() {
  state.viewSchoolClub = true;
  save(); render();
}

function renderSchoolClub() {
  return `
    <h2 class="page-title">🏫 학교 클럽</h2>
    <p class="page-sub">우리 학교 친구들과 함께 문화유산을 탐험하세요!</p>

    <div style="margin-bottom:14px;">
      ${schoolData.map(s => {
        const isJoined = state.joinedSchool === s.id;
        return `
          <div class="school-card">
            <div class="school-info">
              <h4>${s.name}</h4>
              <p>📍 ${s.region} · 👥 회원 ${s.members}명 · 🪙 ${s.points}P</p>
            </div>
            <button class="join-btn ${isJoined ? 'joined' : ''}" onclick="joinSchool('${s.id}', '${s.name}')">
              ${isJoined ? '가입됨' : '가입하기'}
            </button>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function joinSchool(schoolId, schoolName) {
  state.joinedSchool = schoolId;
  const now = new Date();
  const timeStr = `${now.getFullYear()}.${String(now.getMonth()+1).padStart(2,'0')}.${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
  
  state.activities.unshift({
    type: "club",
    title: `${schoolName}에 가입했어요!`,
    time: timeStr
  });
  
  toast(`🏫 ${schoolName}에 가입되었습니다!`);
  save(); render();
}

/* =====================================================
   [3] 도감 화면 (미방문 항목 클릭 완전 차단 적용)
===================================================== */
function renderCollection() {
  const visitedCount = Object.keys(state.visits).length;
  const collectionRate = Math.round((visitedCount / heritageData.length) * 100);

  return `
    <h2 class="page-title">나의 문화유산 도감</h2>
    <p class="page-sub">방문한 문화유산을 수집해 도감을 채워보세요!</p>

    <div class="card" style="margin-bottom:16px;">
      <div style="display:flex; justify-content:space-between; font-weight:800; font-size:14px; margin-bottom:8px;">
        <span>수집 현황</span>
        <span style="color:#e05627;">${visitedCount} / ${heritageData.length}</span>
      </div>
      <div style="height:8px; background:#eee8df; border-radius:10px; overflow:hidden;">
        <div style="height:100%; width:${collectionRate}%; background:#e05627; border-radius:10px;"></div>
      </div>
      <div style="display:flex; justify-content:space-between; font-size:11px; color:#888; margin-top:6px;">
        <span>수집률 ${collectionRate}%</span>
        <span style="font-weight:800; color:#e05627;">${collectionRate}%</span>
      </div>
    </div>

    <div class="collection-grid">
      ${heritageData.map(h => {
        const isVisited = state.visits[h.id];
        return `
          <!-- 잠겨 있으면(미방문) pointer-events: none 으로 아예 클릭 불가 -->
          <div class="collection-card ${isVisited ? '' : 'is-locked'}" ${isVisited ? `onclick="openDetail('${h.id}')"` : ''}>
            <span class="visit-badge ${isVisited ? 'visited' : 'unvisited'}">
              ${isVisited ? '방문완료' : '🔒 미방문'}
            </span>
            <div class="icon" style="font-size:34px; margin-bottom:6px;">${isVisited ? h.icon : '🏛️'}</div>
            <h5 style="margin:0 0 4px 0; font-size:14px; font-weight:800;">${h.name}</h5>
            <p style="margin:0; font-size:10px; color:#8c827a;">📍 ${h.subRegion} · ${h.era}</p>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

/* =====================================================
   테스트 도구 및 기타 로직
===================================================== */
function testTimePass(days) {
  toast(`⏰ ${days}일 시뮬레이션이 경과되었습니다.`);
}

function resetTestData() {
  state.quizzes = { h1: 0 };
  state.visits = {};
  toast("✏️ 테스트 데이터가 초기화되었습니다.");
  save(); render();
}

function fullReset() {
  localStorage.removeItem("heritageGO_v8");
  location.reload();
}

/* 홈 & 탐험 목록 렌더링 */
function renderHome() {
  const visitedCount = Object.keys(state.visits).length;
  const quizCount = Object.keys(state.quizzes).length;
  const collectionRate = Math.round((visitedCount / heritageData.length) * 100);

  return `
    <div style="font-size:16px; color:#555; margin-bottom:12px; font-weight:800;">오늘은 어떤 역사를 탐험할까?</div>
    <div class="home-banner">
      <h3>🌱 문화유산 새싹</h3>
      <div class="banner-stats">
        <div class="stat-item">🪙 내 포인트 <strong>${state.points}P</strong></div>
        <div class="stat-item">🏛️ 방문 유산 <strong>${visitedCount}곳</strong></div>
        <div class="stat-item">🧠 퀴즈 정답 <strong>${quizCount}개</strong></div>
        <div class="stat-item">📖 수집률 <strong>${collectionRate}%</strong></div>
      </div>
    </div>
    <div class="quick-grid">
      <button class="quick-btn orange" onclick="switchTab('explore')"><span style="font-size:24px;">🗺️</span>문화유산 탐험하기</button>
      <button class="quick-btn yellow" onclick="openDetail('h1')"><span style="font-size:24px;">🧠</span>오늘의 역사 퀴즈</button>
      <button class="quick-btn teal" onclick="switchTab('collection')"><span style="font-size:24px;">📖</span>나의 문화유산 도감</button>
      <button class="quick-btn white" onclick="openSchoolClub()"><span style="font-size:24px;">🏫</span>학교 클럽</button>
    </div>
  `;
}

function renderExplore() {
  return `
    <h2 class="page-title">문화유산 탐험</h2>
    <div>${heritageData.map(h => `
      <div class="heritage-card" onclick="openDetail('${h.id}')">
        <div class="heritage-icon" style="background:${h.bg}; color:white;">${h.icon}</div>
        <div class="heritage-info">
          <h4>${h.name}</h4>
          <div class="tag-group"><span class="tag region">${h.subRegion}</span><span class="tag era">${h.era}</span></div>
          <p style="font-size:11px; color:#888; margin:0;">${h.desc}</p>
        </div>
      </div>
    `).join('')}</div>
  `;
}

function renderRanking() { return `<h2 class="page-title">랭킹</h2><div class="rank-item my-rank"><div class="rank-num">7</div><div class="rank-user"><span>🎓</span> ${state.nickname}</div><div class="rank-points">${state.points}P</div></div>`; }

/* 전체 화면 메인 렌더러 */
function render() {
  document.getElementById("headerPoints").textContent = state.points;
  const headerTitle = document.getElementById("headerTitle");
  
  if (state.viewSchoolClub) {
    headerTitle.innerHTML = `<button class="header-back-btn" onclick="goBack()">← 학교 클럽</button>`;
  } else if (state.routeId) {
    headerTitle.innerHTML = `<button class="header-back-btn" onclick="goBack()">← 탐험 루트</button>`;
  } else if (state.detailId) {
    headerTitle.innerHTML = `<button class="header-back-btn" onclick="goBack()">← 문화유산 상세</button>`;
  } else {
    headerTitle.innerHTML = `🏛️ 유산GO`;
  }

  document.querySelectorAll(".nav-item").forEach((el, idx) => {
    const tabs = ['home', 'explore', 'collection', 'ranking', 'profile'];
    if (tabs[idx] === state.tab && !state.viewSchoolClub && !state.detailId) el.classList.add("active");
    else el.classList.remove("active");
  });

  const content = document.getElementById("content");
  if (state.viewSchoolClub) content.innerHTML = renderSchoolClub();
  else if (state.detailId) content.innerHTML = renderHeritageDetail(state.detailId);
  else {
    if (state.tab === "home") content.innerHTML = renderHome();
    else if (state.tab === "explore") content.innerHTML = renderExplore();
    else if (state.tab === "collection") content.innerHTML = renderCollection();
    else if (state.tab === "ranking") content.innerHTML = renderRanking();
    else if (state.tab === "profile") content.innerHTML = renderProfile();
  }
}

render();
