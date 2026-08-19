/* =====================================================
   문화유산 & 한국 실제 학교 & 클럽 미션 데이터베이스
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
  { id: "s1", name: "원주고 역사탐험클럽", region: "원주", members: 26, points: 8960, visits: 131, tag: "🔥 성장 클럽" },
  { id: "s2", name: "춘천고 역사탐험클럽", region: "춘천", members: 38, points: 11200, visits: 185, tag: "🏆 명예 클럽" },
  { id: "s3", name: "봉의고 역사탐험클럽", region: "춘천", members: 29, points: 6400, visits: 92, tag: "🌱 열정 클럽" },
  { id: "s4", name: "강원고 역사탐험클럽", region: "춘천", members: 25, points: 5800, visits: 78, tag: "🔥 성장 클럽" }
];

const clubMissions = [
  { id: "m1", icon: "🗺️", title: "우리 지역 문화유산 30곳 방문하기", target: 30, current: 15, myContrib: 0 },
  { id: "m2", icon: "🧠", title: "역사 퀴즈 500문제 해결하기", target: 500, current: 210, myContrib: 0 },
  { id: "m3", icon: "📷", title: "문화유산 변화 기록 50건 만들기", target: 50, current: 12, myContrib: 0 },
  { id: "m4", icon: "🔍", title: "새로운 문화유산 5곳 등록하기", target: 5, current: 0, myContrib: 0 },
  { id: "m5", icon: "🏛️", title: "역사 탐험 루트 20회 완주하기", target: 20, current: 5, myContrib: 0 }
];

const routeData = [
  { id: "r1", name: "삼국시대의 흔적", icon: "🏹", bg: "#1f8a70", desc: "삼국시대 방어 기술과 과학 수준을 만나요.", steps: ["h1", "h8"] },
  { id: "r2", name: "전쟁과 지역의 역사", icon: "⚔️", bg: "#e05627", desc: "우리 고장의 호국 정신을 살펴보는 코스입니다.", steps: ["h1", "h5", "h2"] }
];

/* 상태 관리 */
let state = JSON.parse(localStorage.getItem("heritageGO_v9")) || {
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
  localStorage.setItem("heritageGO_v9", JSON.stringify(state));
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
  state.viewSchoolClub = false;
  save(); render();
}

function openRoute(routeId) {
  state.routeId = routeId;
  state.viewSchoolClub = false;
  save(); render();
}

function openSchoolClub() {
  state.viewSchoolClub = true;
  save(); render();
}

function goBack() {
  if (state.viewSchoolClub) state.viewSchoolClub = false;
  else if (state.routeId) state.routeId = null;
  else if (state.detailId) state.detailId = null;
  save(); render();
}

/* =====================================================
   [1] 학교 클럽 화면 렌더링 (업로드 스크린샷 100% 동일)
===================================================== */
function renderSchoolClub() {
  const currentSchool = schoolData.find(s => s.id === state.joinedSchool) || schoolData[0];
  const completedMissions = clubMissions.filter(m => m.current >= m.target).length;

  return `
    <!-- 클럽 메인 그래디언트 카너 -->
    <div class="club-main-card">
      <div class="club-top-row">
        <div class="club-title">
          <span>🏫</span>
          <span>${currentSchool.name}</span>
        </div>
        <button class="club-change-btn" onclick="openClubModal()">
          <span>⇄</span> 클럽 변경
        </button>
      </div>

      <div class="club-badge-row">
        <span class="club-tag-badge">${currentSchool.tag}</span>
        <span class="club-tag-badge">미션 ${completedMissions} / ${clubMissions.length}완료</span>
      </div>

      <div class="club-stats-grid">
        <div>
          <div class="club-stat-val">${currentSchool.members}명</div>
          <div class="club-stat-lbl">회원 수</div>
        </div>
        <div>
          <div class="club-stat-val">${currentSchool.points.toLocaleString()}P</div>
          <div class="club-stat-lbl">클럽 포인트</div>
        </div>
        <div>
          <div class="club-stat-val">${currentSchool.visits}회</div>
          <div class="club-stat-lbl">방문 기록</div>
        </div>
        <div>
          <div class="club-stat-val">2개</div>
          <div class="club-stat-lbl">지역 ${currentSchool.region}</div>
        </div>
      </div>

      <div class="club-my-activity-bar">
        <span>👤 내 활동이 클럽에 반영되고 있어요</span>
        <span>•</span>
        <span>방문 ${Object.keys(state.visits).length}회</span>
        <span>•</span>
        <span>포인트 ${state.points}P</span>
      </div>
    </div>

    <!-- 클럽 미션 섹션 헤더 -->
    <div class="section-title" style="margin-bottom:2px;">
      <span>🎯 클럽 미션</span>
    </div>
    <div class="page-sub" style="margin-bottom:14px;">
      ${currentSchool.name}의 미션 진행도입니다. 클럽을 바꿔도 다른 클럽의 미션 데이터와 섞이지 않아요.
    </div>

    <!-- 미션 카드 5개 목록 -->
    <div>
      ${clubMissions.map((m, idx) => {
        const percent = Math.min(100, Math.round((m.current / m.target) * 100));
        return `
          <div class="mission-card">
            <div class="mission-top-row">
              <div class="mission-title-group">
                <span class="mission-icon">${m.icon}</span>
                <h4>${m.title}</h4>
              </div>
              <div class="mission-count-text">${m.current} / ${m.target}</div>
            </div>

            <div class="mission-sub">목표: ${m.target}${m.title.includes('방문') ? '곳 방문' : m.title.includes('해결') ? '문제 해결' : m.title.includes('기록') ? '건 기록' : m.title.includes('등록') ? '곳 등록' : '회 완주'}</div>

            <div class="mission-progress-bg">
              <div class="mission-progress-fill" style="width: ${percent}%;"></div>
            </div>

            <div class="mission-bottom-row">
              <div class="mission-my-contrib">${percent}% · 내 기여 ${m.myContrib}회</div>
              <button class="btn-participate" onclick="participateMission(${idx})">
                🎯 참여하기
              </button>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function participateMission(idx) {
  const m = clubMissions[idx];
  m.current = Math.min(m.target, m.current + 1);
  m.myContrib += 1;
  state.points += 5;
  
  const now = new Date();
  const timeStr = `${now.getFullYear()}.${String(now.getMonth()+1).padStart(2,'0')}.${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
  
  state.activities.unshift({
    type: "mission",
    title: `클럽 미션 참여: ${m.title}`,
    time: timeStr
  });

  toast(`🎯 미션에 참여하셨습니다! (+5P)`);
  save(); render();
}

/* 클럽 변경 모달 로직 */
function openClubModal() {
  const modalList = document.getElementById("clubModalList");
  modalList.innerHTML = schoolData.map(s => `
    <div class="modal-school-item ${s.id === state.joinedSchool ? 'active' : ''}" onclick="selectSchoolClub('${s.id}')">
      <div>
        <div style="font-weight:800; font-size:14px; color:#2c2523;">${s.name}</div>
        <div style="font-size:11px; color:#888;">📍 ${s.region} · 회원 ${s.members}명 · ${s.points.toLocaleString()}P</div>
      </div>
      <div style="font-size:12px; font-weight:800; color:#e55322;">${s.id === state.joinedSchool ? '선택됨' : '선택'}</div>
    </div>
  `).join('');

  document.getElementById("clubModal").classList.add("show");
}

function closeClubModal() {
  document.getElementById("clubModal").classList.remove("show");
}

function selectSchoolClub(schoolId) {
  state.joinedSchool = schoolId;
  closeClubModal();
  const s = schoolData.find(x => x.id === schoolId);
  toast(`🏫 ${s.name}(으)로 클럽이 변경되었습니다.`);
  save(); render();
}

/* =====================================================
   [2] 프로필 화면 렌더링
===================================================== */
function renderProfile() {
  const visitedCount = Object.keys(state.visits).length;
  const quizCount = Object.keys(state.quizzes).length;
  const collectionRate = Math.round((visitedCount / heritageData.length) * 100);

  return `
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
        <div style="font-size:10px; font-weight:800;">🔹 문화유산 탐험가</div>
      </div>
    </div>

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

    <div class="card">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <span class="section-title">🎖️ 대표 배지</span>
        <span style="font-size:11px; color:#e05627; font-weight:800; cursor:pointer;" onclick="toast('대표 배지 편집')">편집 ></span>
      </div>
      <div style="font-size:11px; color:#888; margin-bottom:12px;">획득 배지 1개 · 대표 배지는 최대 6개까지 선택할 수 있어요.</div>
      <div class="badge-badge-card">
        <div class="icon">🗺️</div>
        <div class="title">클럽 방문왕</div>
        <div class="desc">문화유산 30곳 방문</div>
      </div>
    </div>

    <div class="menu-list-card">
      <div class="menu-link-item is-locked">
        <div class="menu-link-left"><span class="menu-link-icon">🎖️</span><span>배지 전체 보기</span></div>
        <span>🔒</span>
      </div>
      <div class="menu-link-item" onclick="switchTab('explore')">
        <div class="menu-link-left"><span class="menu-link-icon">🗺️</span><span>탐험 루트</span></div>
        <span>🗺️</span>
      </div>
      <div class="menu-link-item" onclick="openSchoolClub()">
        <div class="menu-link-left"><span class="menu-link-icon">🏫</span><span>학교 클럽</span></div>
        <span>🏫</span>
      </div>
    </div>

    <div class="card">
      <div class="section-title">📌 최근 활동</div>
      <div class="activity-list">
        ${state.activities.map(act => `
          <div class="activity-item">
            <span style="font-size:16px;">${act.type === 'quiz' ? '🧠' : act.type === 'club' ? '🏫' : '🎯'}</span>
            <div>
              <div class="activity-title">${act.title}</div>
              <div class="activity-time">${act.time}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="card">
      <div class="section-title">📌 방문 기록</div>
      <div style="text-align:center; padding:16px; font-size:12px; color:#aaa;">
        ${visitedCount === 0 ? '아직 방문 기록이 없어요.' : `총 ${visitedCount}곳의 문화유산을 방문했습니다.`}
      </div>
    </div>

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

    <div class="test-tools-card">
      <div class="section-title" style="font-size:13px;">🧪 테스트 도구 (개발용)</div>
      <div class="test-btn-grid">
        <button class="test-btn" onclick="toast('⏰ 7일 경과 시뮬레이션 완료')">⏰ 7일 경과 시뮬레이션</button>
        <button class="test-btn" onclick="toast('⏰ 1일 경과 시뮬레이션 완료')">⏰ 1일 경과</button>
        <button class="test-btn" onclick="resetTestData()">✏️ 테스트 데이터 초기화</button>
        <button class="test-btn danger" onclick="fullReset()">🔥 전체 초기화</button>
      </div>
    </div>
  `;
}

function resetTestData() {
  state.quizzes = { h1: 0 };
  state.visits = {};
  toast("✏️ 테스트 데이터가 초기화되었습니다.");
  save(); render();
}

function fullReset() {
  localStorage.removeItem("heritageGO_v9");
  location.reload();
}

/* =====================================================
   [3] 메인 화면 및 문화유산 상세 페이지
===================================================== */
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
    </div>

    <div class="collection-grid">
      ${heritageData.map(h => {
        const isVisited = state.visits[h.id];
        return `
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

function renderHeritageDetail(id) {
  const h = heritageData.find(x => x.id === id) || heritageData[0];
  const isVisited = state.visits[h.id];
  const quizSolved = state.quizzes[h.id] !== undefined;
  const selectedOpt = state.quizzes[h.id];

  const presetIcons = ["🏯", "🏛️", "👘", "🏰", "⛩️", "🏺"];

  if (!state.aiChat[h.id]) {
    state.aiChat[h.id] = [
      { sender: "ai", text: `안녕! 나는 ${h.name}을 알려주는 데모 역사 도우미야.` }
    ];
  }

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

    <div class="card">
      <div class="section-title">📸 방문 인증</div>
      <button class="btn-primary-orange" onclick="submitVisit('${h.id}')">📸 방문 인증하기</button>
    </div>

    ${h.quiz ? `
      <div class="card">
        <div class="quiz-header-bar">
          <span class="quiz-badge">🧠 역사 퀴즈</span>
        </div>
        <div class="quiz-question-title">${h.quiz.q}</div>
        <div class="quiz-option-list">
          ${h.quiz.options.map((optText, idx) => `
            <button class="quiz-option-btn ${selectedOpt === idx ? 'selected' : ''}" onclick="answerQuiz('${h.id}', ${idx})">
              <span class="quiz-opt-num">${['①','②','③','④'][idx]}</span>
              <span>${optText}</span>
            </button>
          `).join('')}
        </div>
      </div>
    ` : ''}
  `;
}

function submitVisit(id) { state.visits[id] = true; state.points += 10; toast("📸 방문 인증 완료! (+10P)"); save(); render(); }
function answerQuiz(heritageId, selectedIdx) {
  const h = heritageData.find(x => x.id === heritageId);
  if (!h || !h.quiz) return;
  if (state.quizzes[heritageId] !== undefined) { toast("이미 보상을 받은 퀴즈입니다."); return; }
  state.quizzes[heritageId] = selectedIdx;
  if (selectedIdx === h.quiz.answer) { state.points += 20; toast("🎉 정답입니다! (+20P)"); }
  else { toast("❌ 오답입니다. 다시 도전해보세요!"); }
  save(); render();
}

function renderExplore() {
  return `
    <h2 class="page-title">문화유산 탐험</h2>
    <div>${heritageData.map(h => `
      <div class="heritage-card" onclick="openDetail('${h.id}')">
        <div class="heritage-icon" style="background:${h.bg}; color:white;">${h.icon}</div>
        <div class="heritage-info">
          <h4>${h.name}</h4>
          <p style="font-size:11px; color:#888; margin:0;">${h.desc}</p>
        </div>
      </div>
    `).join('')}</div>
  `;
}

function renderRanking() { return `<h2 class="page-title">랭킹</h2><div class="rank-item my-rank"><div class="rank-num">7</div><div class="rank-user"><span>🎓</span> ${state.nickname}</div><div class="rank-points">${state.points}P</div></div>`; }

/* 전체 화면 렌더러 */
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
