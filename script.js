/* =====================================================
   문화유산 & 위도·경도(GPS) 좌표 데이터베이스
===================================================== */
const heritageData = [
  {
    id: "h1",
    name: "춘천 봉의산성",
    region: "강원",
    subRegion: "강원 춘천",
    era: "삼국시대(추정)",
    category: "성곽",
    lat: 37.8885,
    lng: 127.7312,
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
    lat: 37.8812,
    lng: 127.7335,
    desc: "조선시대 지방 관아에서 인재를 양성하던 공립 교육 기관입니다.",
    icon: "🏫",
    bg: "#e05627",
    quiz: {
      q: "Q. 조선시대 향교에서 중앙 정부가 직접 파견했던 교관의 명칭은 무엇일까요?",
      options: ["훈도 및 교수", "사또", "집사", "암행어사"],
      answer: 0,
      explanation: "향교에는 중앙 정부에서 직접 훈도나 교수를 파견하여 교육을 전담했습니다."
    },
    routeIds: ["r2"],
    aiPresetResponses: {
      "왜 중요한가요?": "조선시대 지방 유학 교육의 중심지 역할을 한 역사적 공간입니다.",
      "쉽게 설명해주세요": "조선시대의 국립 지방 학교라고 보면 돼요!"
    }
  },
  {
    id: "h3",
    name: "강릉 오죽헌",
    region: "강원",
    subRegion: "강원 강릉",
    era: "조선시대",
    category: "가옥",
    lat: 37.7792,
    lng: 128.8794,
    desc: "검은 대나무가 둘러싼 조선 중기 목조건물로, 신사임당과 율곡 이이가 태어난 명소입니다.",
    icon: "🎋",
    bg: "#5856d6",
    quiz: {
      q: "Q. 강릉 오죽헌의 '몽룡실'에서 태어난 조선의 대표 학자는 누구일까요?",
      options: ["율곡 이이", "퇴계 이황", "정약용", "이순신"],
      answer: 0,
      explanation: "신사임당이 용 꿈을 꾸고 율곡 이이 선생을 낳은 방이 몽룡실입니다."
    },
    routeIds: [],
    aiPresetResponses: {
      "왜 중요한가요?": "조선시대 주택 중 가장 오래된 유구 중 하나이며 율곡 이이 선생의 탄생지입니다."
    }
  },
  {
    id: "h7",
    name: "경복궁",
    region: "서울",
    subRegion: "서울",
    era: "조선시대",
    category: "궁궐",
    lat: 37.5796,
    lng: 126.9770,
    desc: "1395년 태조 이성계가 창건한 조선 왕조 최고의 법궁입니다.",
    icon: "🏛️",
    bg: "#e05627",
    quiz: {
      q: "Q. 경복궁의 정문이자 광화문 광장과 맞닿아 있는 문의 이름은 무엇일까요?",
      options: ["광화문", "흥인지문", "돈의문", "숙정문"],
      answer: 0,
      explanation: "경복궁의 남쪽에 위치한 정문이 광화문입니다."
    },
    routeIds: [],
    aiPresetResponses: {
      "왜 중요한가요?": "조선 왕조의 으뜸 궁궐(법궁)로서 근정전, 경회루 등 최고의 왕실 건축물입니다."
    }
  }
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
  {
    id: "r1",
    name: "삼국시대의 흔적",
    icon: "🏹",
    bg: "#1f8a70",
    desc: "춘천 봉의산성과 경주 첨성대를 통해 삼국시대 사람들의 방어 기술과 과학 수준을 만나봐요.",
    rewardBadge: "🏆 삼국 역사 탐험가",
    rewardDesc: "삼국시대의 흔적 루트 완주",
    steps: ["h1", "h8"]
  },
  {
    id: "r2",
    name: "전쟁과 지역의 역사",
    icon: "⚔️",
    bg: "#e05627",
    desc: "봉의산성과 남한산성, 춘천향교를 모아 우리 고장의 호국 정신을 살펴보는 코스입니다.",
    rewardBadge: "🛡️ 호국 역사 탐험가",
    rewardDesc: "전쟁과 지역의 역사 루트 완주",
    steps: ["h1", "h5", "h2"]
  }
];

const badgePool = [
  { id: "b1", icon: "🗺️", title: "클럽 방문왕", desc: "문화유산 30곳 방문", unlocked: true },
  { id: "b2", icon: "🧠", title: "퀴즈 달인", desc: "역사 퀴즈 10개 정답", unlocked: true },
  { id: "b3", icon: "📸", title: "인증 수집가", desc: "첫 방문 인증 성공", unlocked: true },
  { id: "b4", icon: "🛡️", title: "호국 탐험가", desc: "산성 코스 완주", unlocked: false },
  { id: "b5", icon: "🏛️", title: "궁궐 박사", desc: "모든 궁궐 방문", unlocked: false },
  { id: "b6", icon: "👑", title: "유산 수호자", desc: "누적 1,000P 달성", unlocked: false }
];

/* 상태 관리 */
let state = JSON.parse(localStorage.getItem("heritageGO_v12")) || {
  tab: "home",
  detailId: null,
  routeId: null,
  viewSchoolClub: false,
  points: 40,
  nickname: "유산 탐험가",
  lastNicknameChange: null,
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
  localStorage.setItem("heritageGO_v12", JSON.stringify(state));
}

function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2200);
}

/* =====================================================
   [GPS 거리 계산 알고리즘 (Haversine Formula)]
===================================================== */
function getDistanceMeters(lat1, lon1, lat2, lon2) {
  const R = 6371e3;
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  return Math.round(R * c);
}

/* GPS 기반 위치 인증 실행 로직 */
function verifyGPSVisit(heritageId) {
  const h = heritageData.find(x => x.id === heritageId);
  if (!h || !h.lat || !h.lng) {
    toast("해당 문화유산의 좌표 정보가 존재하지 않습니다.");
    return;
  }

  if (!navigator.geolocation) {
    toast("이 브라우저는 GPS 위치 정보 기능을 지원하지 않습니다.");
    return;
  }

  toast("📡 현재 GPS 위치를 측정하는 중입니다...");

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const userLat = position.coords.latitude;
      const userLng = position.coords.longitude;
      const distanceMeters = getDistanceMeters(userLat, userLng, h.lat, h.lng);

      const distanceBox = document.getElementById("gpsDistanceText");
      if (distanceBox) {
        distanceBox.textContent = `📍 현재 유산과의 거리: ${distanceMeters}m`;
      }

      if (distanceMeters <= 500) {
        submitVisit(heritageId);
      } else {
        toast(`❌ 인증 실패: 유산과 ${distanceMeters}m 떨어져 있습니다. (500m 이내 필요)`);
      }
    },
    (error) => {
      toast("❌ 위치 정보를 가져올 수 없습니다. GPS 권한을 확인해 주세요.");
    },
    { enableHighAccuracy: true, timeout: 10000 }
  );
}

/* 카카오 지도 로딩 및 마커 생성 */
function loadKakaoMap(heritageId) {
  const h = heritageData.find(x => x.id === heritageId);
  const container = document.getElementById("mapContainer");
  if (!container || !h || typeof kakao === 'undefined' || !kakao.maps) return;

  const options = {
    center: new kakao.maps.LatLng(h.lat, h.lng),
    level: 3
  };

  const map = new kakao.maps.Map(container, options);
  const markerPosition = new kakao.maps.LatLng(h.lat, h.lng);
  const marker = new kakao.maps.Marker({ position: markerPosition });
  marker.setMap(map);
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

/* 닉네임 변경 30일 쿨타임 */
function openNicknameModal() {
  const NOW = new Date();
  if (state.lastNicknameChange) {
    const lastDate = new Date(state.lastNicknameChange);
    const diffTime = NOW - lastDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 30) {
      const remainingDays = 30 - diffDays;
      toast(`닉네임은 30일에 한 번만 변경 가능합니다. (${remainingDays}일 남음)`);
      return;
    }
  }

  document.getElementById("nicknameInput").value = state.nickname;
  document.getElementById("nicknameModal").classList.add("show");
}

function closeNicknameModal() {
  document.getElementById("nicknameModal").classList.remove("show");
}

function submitNicknameChange() {
  const newName = document.getElementById("nicknameInput").value.trim();
  if (newName.length < 2 || newName.length > 10) {
    toast("닉네임은 2자 이상 10자 이하로 입력해 주세요.");
    return;
  }

  state.nickname = newName;
  state.lastNicknameChange = new Date().toISOString();
  closeNicknameModal();
  toast(`✏️ 닉네임이 '${newName}'(으)로 변경되었습니다.`);
  save(); render();
}

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

    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
      <span style="font-size:15px; font-weight:800; color:#1a1513;">오늘의 추천 문화유산</span>
      <span style="font-size:11px; background:#e8e2d5; padding:3px 8px; border-radius:10px; color:#666; font-weight:700;">서울</span>
    </div>

    <div class="recommend-card" onclick="openDetail('h7')">
      <div class="icon">🏛️</div>
      <div>
        <h4>경복궁</h4>
        <p>📜 조선시대 · 궁궐</p>
        <p>조선의 법궁, 정치와 왕실의 중심</p>
      </div>
    </div>

    <button class="btn-action-outline" onclick="openDetail('h7')">
      📍 이 문화유산 방문 인증하러 가기
    </button>
  `;
}

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
            <p style="font-size:11px; color:#888; margin:0;">${h.desc}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function setFilter(region) {
  state.filterRegion = region;
  save(); render();
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
      <div style="display:flex; justify-content:space-between; font-size:11px; color:#888; margin-top:6px;">
        <span>수집률 ${collectionRate}%</span>
        <span style="font-weight:800; color:#e05627;">${collectionRate}%</span>
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
            <div style="font-size:34px; margin-bottom:6px;">${isVisited ? h.icon : '🏛️'}</div>
            <h5 style="margin:0 0 4px 0; font-size:14px; font-weight:800;">${h.name}</h5>
            <p style="margin:0; font-size:10px; color:#8c827a;">📍 ${h.subRegion} · ${h.era}</p>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderRanking() {
  return `
    <h2 class="page-title">랭킹</h2>
    <p class="page-sub">열심히 탐험하고 순위를 올려보세요!</p>

    <div class="rank-item my-rank">
      <div class="rank-num">7</div>
      <div class="rank-user"><span>🎓</span> ${state.nickname}</div>
      <div style="font-weight:900; font-size:15px;">${state.points}P</div>
    </div>
  `;
}

function renderSchoolClub() {
  const currentSchool = schoolData.find(s => s.id === state.joinedSchool) || schoolData[0];
  const completedMissions = clubMissions.filter(m => m.current >= m.target).length;

  return `
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

    <div class="section-title" style="margin-bottom:2px;">
      <span>🎯 클럽 미션</span>
    </div>
    <div class="page-sub" style="margin-bottom:14px;">
      ${currentSchool.name}의 미션 진행도입니다. 클럽을 바꿔도 다른 클럽의 미션 데이터와 섞이지 않아요.
    </div>

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

function renderProfile() {
  const visitedCount = Object.keys(state.visits).length;
  const quizCount = Object.keys(state.quizzes).length;
  const collectionRate = Math.round((visitedCount / heritageData.length) * 100);
  const unlockedCount = badgePool.filter(b => b.unlocked).length;

  return `
    <div class="profile-main-header">
      <div class="profile-user-row">
        <div class="profile-avatar-circle">🎓</div>
        <div class="profile-user-info">
          <h3>
            <span>${state.nickname}</span>
            <span class="nickname-edit-icon" onclick="openNicknameModal()" title="닉네임 변경">✏️</span>
          </h3>
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
        <span style="font-size:11px; color:#e05627; font-weight:800; cursor:pointer;" onclick="toast('대표 배지는 최대 6개까지 선택할 수 있습니다.')">편집 ></span>
      </div>
      <div style="font-size:11px; color:#888; margin-bottom:12px;">
        획득 배지 ${unlockedCount}개 · 대표 배지는 최대 6개까지 선택할 수 있어요.
      </div>

      <div class="rep-badge-grid">
        ${badgePool.map(b => `
          <div class="badge-badge-card ${b.unlocked ? '' : 'locked'}">
            <div class="icon">${b.unlocked ? b.icon : '🔒'}</div>
            <div class="title">${b.title}</div>
            <div class="desc">${b.desc}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="menu-list-card">
      <div class="menu-link-item is-locked">
        <div class="menu-link-left"><span style="font-size:16px;">🎖️</span><span>배지 전체 보기</span></div>
        <span>🔒</span>
      </div>
      <div class="menu-link-item" onclick="switchTab('explore')">
        <div class="menu-link-left"><span style="font-size:16px;">🗺️</span><span>탐험 루트</span></div>
        <span>🗺️</span>
      </div>
      <div class="menu-link-item" onclick="openSchoolClub()">
        <div class="menu-link-left"><span style="font-size:16px;">🏫</span><span>학교 클럽</span></div>
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
        <span style="font-size:11px; color:#888;">${unlockedCount} / 17</span>
      </div>
      <div class="rep-badge-grid">
        ${badgePool.filter(b => b.unlocked).map(b => `
          <div class="badge-badge-card">
            <div class="icon">${b.icon}</div>
            <div class="title">${b.title}</div>
            <div class="desc">${b.desc}</div>
          </div>
        `).join('')}
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
  localStorage.removeItem("heritageGO_v12");
  location.reload();
}

function renderHeritageDetail(id) {
  const h = heritageData.find(x => x.id === id) || heritageData[0];
  const isVisited = state.visits[h.id];
  const quizSolved = state.quizzes[h.id] !== undefined;
  const selectedOpt = state.quizzes[h.id];

  const presetIcons = ["🏯", "🏛️", "👘", "🏰", "⛩️", "🏺"];

  if (!state.aiChat[h.id]) {
    state.aiChat[h.id] = [
      { sender: "ai", text: `안녕! 나는 ${h.name}을 알려주는 데모 역사 도우미야. 질문을 선택해줘!` }
    ];
  }
  const chatLogs = state.aiChat[h.id];
  const connectedRoutes = routeData.filter(r => h.routeIds && h.routeIds.includes(r.id));

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

    <!-- 1. 지도 API & GPS 방문 인증 -->
    <div class="card">
      <div class="section-title">📍 실시간 지도 및 GPS 방문 인증</div>
      <div class="section-sub">${isVisited ? '📸 이미 방문 인증을 완료한 유산입니다!' : '유산 반경 500m 이내 현위치에서 GPS 버튼을 눌러 인증하세요.'}</div>

      <div id="mapContainer" class="map-container"></div>

      <div class="gps-info-box" id="gpsDistanceText">
        <span>📡 위치를 측정한 후 거리 정보가 표기됩니다.</span>
      </div>

      <button class="btn-primary-orange" onclick="verifyGPSVisit('${h.id}')">
        📡 GPS 위치 측정하여 방문 인증하기
      </button>
    </div>

    <!-- 2. 인증 사진 선택 -->
    <div class="card">
      <div class="section-title">📸 현장 인증 사진 업로드</div>
      <div class="upload-wrapper">
        <div class="upload-wrapper-title">📷 사진 선택 및 변경</div>
        <div class="upload-box" onclick="triggerFileUpload('visitFile')">
          <div id="visitPreviewText">
            <div style="font-size:28px; margin-bottom:4px;">📷</div>
            아래에서 아이콘을 선택하거나<br>사진을 업로드하세요
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
          📷 사진 파일 선택
        </button>
      </div>
    </div>

    <!-- 3. 역사 퀴즈 -->
    ${h.quiz ? `
      <div class="card">
        <div class="quiz-header-bar">
          <span class="quiz-badge">🧠 역사 퀴즈</span>
          <span class="quiz-notice">보상은 최초 1회만 지급돼요</span>
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

        ${quizSolved ? `
          <div class="quiz-result-box">
            <div class="quiz-result-title">🎉 정답! 보상은 이미 지급되었어요</div>
            <p class="quiz-result-desc">${h.quiz.explanation}</p>
          </div>
        ` : ''}
      </div>
    ` : ''}

    <!-- 4. AI 역사 도우미 -->
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

    <!-- 5. 연결된 탐험 루트 -->
    ${connectedRoutes.length > 0 ? `
      <div class="card">
        <div class="section-title">🗺️ 연결된 탐험 루트</div>
        <div class="route-chip-group">
          ${connectedRoutes.map(r => `
            <div class="route-chip" onclick="openRoute('${r.id}')">
              ${r.icon} ${r.name}
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <!-- 6. 변화 기록 남기기 -->
    <div class="card">
      <div class="section-title">🔄 변화 기록 남기기</div>
      <div class="section-sub">
        직접 관찰한 사실을 기록하세요.<br>
        이전 방문 사진과 비교할 수 있도록 사진을 첨부한 후 제출해주세요.
      </div>

      <div class="upload-wrapper">
        <div class="upload-wrapper-title">📷 새로운 사진 첨부 (필수)</div>
        <div class="upload-box" onclick="triggerFileUpload('changeFile')">
          <div id="changePreviewText">
            <div style="font-size:28px; margin-bottom:4px;">📷</div>
            아래에서 아이콘을 선택하거나<br>사진을 업로드하세요
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

      <textarea class="change-textarea" placeholder="${h.name}에서 직접 관찰한 사실을 메모로 남겨보세요. 예) &quot;안내판의 디자인이 이전 방문과 달라졌습니다.&quot;"></textarea>

      <button class="btn-primary-orange btn-pink-gradient" onclick="submitChangeRecord()">
        변화 기록 저장하기
      </button>

      <div class="footer-note">변화 기록은 보너스 포인트 지급 대상이 아닙니다.</div>
    </div>
  `;
}

function renderRouteDetail(routeId) {
  const r = routeData.find(x => x.id === routeId) || routeData[0];
  const totalSteps = r.steps.length;
  const visitedSteps = r.steps.filter(hId => state.visits[hId]).length;
  const progressPercent = Math.round((visitedSteps / totalSteps) * 100);

  return `
    <div class="detail-banner" style="background:${r.bg};">
      <div style="font-size:32px; margin-bottom:6px;">${r.icon}</div>
      <h2 style="font-size:20px; font-weight:900; margin:0 0 6px 0;">${r.name}</h2>
      <p style="font-size:12px; opacity:0.95; line-height:1.5; margin:0 0 14px 0;">${r.desc}</p>

      <div style="display:flex; justify-content:space-between; font-size:11px; font-weight:800; margin-bottom:4px;">
        <span>진행률</span>
        <span>${visitedSteps}/${totalSteps}</span>
      </div>
      <div style="height:8px; background:rgba(255,255,255,0.3); border-radius:10px; overflow:hidden;">
        <div style="height:100%; width:${progressPercent}%; background:#f3ab28; border-radius:10px;"></div>
      </div>
    </div>

    <div class="card" style="text-align:center;">
      <div style="font-size:12px; font-weight:800; color:#444; margin-bottom:8px;">완주 보상</div>
      <div style="font-size:36px; margin-bottom:4px;">🏛️</div>
      <div style="font-size:15px; font-weight:900; color:#1a1513; margin-bottom:2px;">${r.rewardBadge}</div>
      <div style="font-size:11px; color:#888; margin-bottom:8px;">${r.rewardDesc}</div>
      <div style="font-size:11px; color:#aaa;">루트의 모든 문화유산을 방문하면 자동으로 획득해요!</div>
    </div>

    <div class="card">
      <div class="section-title">🗺️ 루트 스텝</div>
      <div style="display:flex; flex-direction:column; gap:12px; margin-top:10px;">
        ${r.steps.map((hId, idx) => {
          const h = heritageData.find(x => x.id === hId);
          const isVisited = state.visits[hId];
          return `
            <div style="display:flex; align-items:center; gap:12px;">
              <div style="width:32px; height:32px; border-radius:50%; background:${isVisited ? '#1f8a70' : '#eee8df'}; color:${isVisited ? 'white' : '#777'}; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:13px; flex-shrink:0;">
                ${idx + 1}
              </div>
              <div style="flex:1; background:#faf8f5; border:1.5px solid #eae5db; border-radius:14px; padding:12px 14px; display:flex; align-items:center; justify-content:space-between;">
                <div>
                  <h5 style="margin:0 0 2px 0; font-size:14px; font-weight:800; color:#2c2523;">${h.name}</h5>
                  <p style="margin:0; font-size:11px; color:#8c827a;">${h.subRegion} · ${h.era}</p>
                </div>
                <button style="font-size:12px; font-weight:800; color:#e05627;" onclick="openDetail('${h.id}')">
                  방문하기 >
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function triggerFileUpload(id) { document.getElementById(id).click(); }
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
  save(); render();
}

function selectChangeTag(tag) { state.selectedChangeTag = tag; save(); render(); }
function submitVisit(id) { state.visits[id] = true; state.points += 10; toast("📸 방문 인증 완료! (+10P)"); save(); render(); }
function submitChangeRecord() { toast("🔄 변화 기록이 성공적으로 저장되었습니다!"); save(); render(); }

function answerQuiz(heritageId, selectedIdx) {
  const h = heritageData.find(x => x.id === heritageId);
  if (!h || !h.quiz) return;
  if (state.quizzes[heritageId] !== undefined) { toast("이미 보상을 받은 퀴즈입니다."); return; }
  state.quizzes[heritageId] = selectedIdx;
  if (selectedIdx === h.quiz.answer) { state.points += 20; toast("🎉 정답입니다! (+20P)"); }
  else { toast("❌ 오답입니다. 다시 도전해보세요!"); }
  save(); render();
}

function askAIPreset(heritageId, questionText) {
  const h = heritageData.find(x => x.id === heritageId);
  if (!h) return;
  if (!state.aiChat[heritageId]) {
    state.aiChat[heritageId] = [{ sender: "ai", text: `안녕! 나는 ${h.name}을 알려주는 데모 역사 도우미야.` }];
  }
  state.aiChat[heritageId].push({ sender: "user", text: questionText });
  const aiAnswer = (h.aiPresetResponses && h.aiPresetResponses[questionText]) 
    ? h.aiPresetResponses[questionText] 
    : `${h.name}에 대한 질문입니다: "${questionText}" 정보가 등록되어 있습니다.`;
  state.aiChat[heritageId].push({ sender: "ai", text: aiAnswer });
  save(); render();
  setTimeout(() => {
    const chatLog = document.getElementById("aiChatLog");
    if (chatLog) chatLog.scrollTop = chatLog.scrollHeight;
  }, 50);
}

function resetAIChat(heritageId) {
  const h = heritageData.find(x => x.id === heritageId);
  state.aiChat[heritageId] = [{ sender: "ai", text: `안녕! 나는 ${h.name}을 알려주는 데모 역사 도우미야.` }];
  toast("💬 AI 대화 내용이 초기화되었습니다.");
  save(); render();
}

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
    if (tabs[idx] === state.tab && !state.viewSchoolClub && !state.detailId && !state.routeId) el.classList.add("active");
    else el.classList.remove("active");
  });

  const content = document.getElementById("content");
  if (state.viewSchoolClub) content.innerHTML = renderSchoolClub();
  else if (state.routeId) content.innerHTML = renderRouteDetail(state.routeId);
  else if (state.detailId) {
    content.innerHTML = renderHeritageDetail(state.detailId);
    setTimeout(() => loadKakaoMap(state.detailId), 100);
  }
  else {
    if (state.tab === "home") content.innerHTML = renderHome();
    else if (state.tab === "explore") content.innerHTML = renderExplore();
    else if (state.tab === "collection") content.innerHTML = renderCollection();
    else if (state.tab === "ranking") content.innerHTML = renderRanking();
    else if (state.tab === "profile") content.innerHTML = renderProfile();
  }
}

render();
