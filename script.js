/* =====================================================
   데이터 베이스
===================================================== */
const heritageData = [
  { id: "h1", name: "춘천 봉의산성", region: "강원", subRegion: "강원 춘천", era: "삼국시대(추정)", desc: "춘천 시내가 한눈에 내려다보이는 산 위에 쌓은 옛 성터", icon: "🏯", bg: "#1f8a70" },
  { id: "h2", name: "춘천향교", region: "강원", subRegion: "강원 춘천", era: "조선시대", desc: "조선시대 관아에서 운영한 지방 교육 기관", icon: "🏫", bg: "#e05627" },
  { id: "h3", name: "강릉 오죽헌", region: "강원", subRegion: "강원 강릉", era: "조선시대", desc: "신사임당과 율곡 이이를 낳은 조선시대 가옥", icon: "🎋", bg: "#5856d6" },
  { id: "h4", name: "강릉 경포대", region: "강원", subRegion: "강원 강릉", era: "고려~조선", desc: "경포호를 바라보며 시를 읊던 고려·조선의 정자", icon: "🌊", bg: "#1f8a70" },
  { id: "h5", name: "남한산성", region: "경기", subRegion: "경기 광주", era: "조선시대", desc: "병자호란 때 인조가 피난했던 유네스코 세계문화유산", icon: "🏰", bg: "#e05627" },
  { id: "h6", name: "수원 화성", region: "경기", subRegion: "경기 수원", era: "조선시대", desc: "정조가 만든 신도시를 둘러싼 과학적인 성곽", icon: "🧱", bg: "#f3ab28" },
  { id: "h7", name: "경복궁", region: "서울", subRegion: "서울", era: "조선시대", desc: "조선의 법궁, 정치와 왕실의 중심", icon: "🏛️", bg: "#e05627" },
  { id: "h8", name: "경주 첨성대", region: "경북", subRegion: "경북 경주", era: "신라", desc: "신라의 별을 관측하던 동양 최고(最古)의 천문대", icon: "⭐", bg: "#5856d6" },
  { id: "h9", name: "서울 덕수궁", region: "서울", subRegion: "서울", era: "조선·대한제국", desc: "대한제국 시절 고종이 머물던 근대의 궁궐", icon: "🕌", bg: "#f3ab28" }
];

const rankList = [
  { rank: 1, name: "김지민", points: 1350, icon: "🦊" },
  { rank: 2, name: "이도윤", points: 980, icon: "🐯" },
  { rank: 3, name: "박서준", points: 860, icon: "🐰" },
  { rank: 4, name: "최하준", points: 720, icon: "🐻" },
  { rank: 5, name: "정은우", points: 540, icon: "🐱" },
  { rank: 6, name: "한소율", points: 410, icon: "🐼" }
];

/* 상태 관리 */
let state = JSON.parse(localStorage.getItem("heritageGO_v2")) || {
  tab: "home",
  points: 20,
  nickname: "유산 탐험가",
  visits: {},
  quizzes: 1,
  filterRegion: "전체보기",
  logs: [
    { title: "원주고 역사탐험클럽에 가입했어요!", time: "2026.08.19 19:13", icon: "🏫" },
    { title: "클럽 미션 참여: 우리 지역 문화유산 30곳 방문하기", time: "2026.08.19 19:13", icon: "🎯" }
  ]
};

function save() {
  localStorage.setItem("heritageGO_v2", JSON.stringify(state));
}

function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2000);
}

function switchTab(tabName) {
  state.tab = tabName;
  save();
  render();
}

/* =====================================================
   페이지 별 렌더링
===================================================== */
function renderHome() {
  const visitedCount = Object.keys(state.visits).length;
  const rate = Math.round((visitedCount / heritageData.length) * 100);

  return `
    <div class="page-title" style="font-size:16px; font-weight:700; color:#555; margin-bottom:12px;">
      오늘은 어떤 역사를 탐험할까?
    </div>

    <div class="home-banner">
      <h3>🌱 문화유산 새싹</h3>
      <div class="banner-stats">
        <div class="stat-item">🪙 내 포인트 <strong>${state.points}P</strong></div>
        <div class="stat-item">🏛️ 방문한 곳 <strong>${visitedCount}곳</strong></div>
        <div class="stat-item">🧠 퀴즈 정답 <strong>${state.quizzes}개</strong></div>
        <div class="stat-item">📖 수집률 <strong>${rate}%</strong></div>
      </div>
    </div>

    <div class="quick-grid">
      <button class="quick-btn orange" onclick="switchTab('explore')">
        <span style="font-size:24px;">🗺️</span>
        문화유산 탐험하기
      </button>
      <button class="quick-btn yellow" onclick="toast('오늘의 역사 퀴즈로 이동합니다.')">
        <span style="font-size:24px;">🧠</span>
        오늘의 역사 퀴즈
      </button>
      <button class="quick-btn teal" onclick="switchTab('collection')">
        <span style="font-size:24px;">📖</span>
        나의 문화유산 도감
      </button>
      <button class="quick-btn white" onclick="toast('학교 클럽 페이지는 준비 중입니다.')">
        <span style="font-size:24px;">🏫</span>
        학교 클럽
      </button>
    </div>

    <div style="font-size:15px; font-weight:800; margin-bottom:10px; display:flex; justify-content:space-between; align-items:center;">
      오늘의 추천 문화유산
      <span style="font-size:11px; background:#e8e2d5; padding:3px 8px; border-radius:10px; color:#666;">서울</span>
    </div>

    <div class="recommend-card">
      <div class="icon">🏛️</div>
      <div>
        <h4>경복궁</h4>
        <p>📜 조선시대 · 궁궐</p>
        <p>조선의 법궁, 정치와 왕실의 중심</p>
      </div>
    </div>
    <button class="btn-action-outline" onclick="verifyHeritage('h7')">
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
        <div class="heritage-card" onclick="verifyHeritage('${h.id}')">
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

    <button class="dashed-btn" onclick="toast('제보 양식이 열렸습니다.')">
      ➕ 새로운 문화유산 제보하기
    </button>
  `;
}

function renderCollection() {
  const visitedCount = Object.keys(state.visits).length;
  const rate = Math.round((visitedCount / heritageData.length) * 100);

  return `
    <h2 class="page-title">나의 문화유산 도감</h2>
    <p class="page-sub">방문한 문화유산을 수집해 도감을 채워보세요!</p>

    <div class="card" style="margin-bottom:16px;">
      <div style="display:flex; justify-content:space-between; font-weight:800; font-size:14px; margin-bottom:8px;">
        <span>수집 현황</span>
        <span style="color:#e05627;">${visitedCount} / ${heritageData.length}</span>
      </div>
      <div class="progress-bar-bg" style="background:#eee8df;">
        <div class="progress-bar-fill" style="width:${rate}%; background:#e05627;"></div>
      </div>
      <div style="text-align:right; font-size:11px; color:#888; margin-top:4px;">수집률 ${rate}%</div>
    </div>

    <div class="collection-grid">
      ${heritageData.map(h => {
        const isUnlocked = state.visits[h.id];
        return `
          <div class="collection-card ${isUnlocked ? '' : 'locked'}">
            ${isUnlocked ? '' : '<span class="lock-badge">🔒 미해금</span>'}
            <div class="icon">${isUnlocked ? h.icon : '🏛️'}</div>
            <h5>${h.name}</h5>
            <p>📍 ${h.subRegion} · ${h.era}</p>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderRanking() {
  return `
    <h2 class="page-title">랭킹</h2>
    <p class="page-sub">나의 순위와 클럽, 지역 랭킹을 확인해보세요!</p>

    <div class="rank-tabs">
      <div class="rank-tab active">🥇 개인</div>
      <div class="rank-tab">🏫 학교 클럽</div>
      <div class="rank-tab">🗺️ 지역</div>
    </div>

    <div style="background:#f4ece1; padding:10px; border-radius:12px; font-size:12px; font-weight:800; text-align:center; margin-bottom:12px; color:#666;">
      현재 내 순위: <span style="color:#e05627;">7위</span> · ${state.points}P
    </div>

    <div>
      ${rankList.map(r => `
        <div class="rank-item">
          <div class="rank-num">${r.rank <= 3 ? ['🥇','🥈','🥉'][r.rank-1] : r.rank}</div>
          <div class="rank-user"><span>${r.icon}</span> ${r.name}</div>
          <div class="rank-points" style="color:#e05627;">${r.points.toLocaleString()}P</div>
        </div>
      `).join('')}

      <div class="rank-item my-rank">
        <div class="rank-num">7</div>
        <div class="rank-user"><span>🎓</span> ${state.nickname} <span style="font-size:10px; opacity:0.8;">★나</span></div>
        <div class="rank-points">${state.points}P</div>
      </div>
    </div>
  `;
}

function renderProfile() {
  const visitedCount = Object.keys(state.visits).length;
  const rate = Math.round((visitedCount / heritageData.length) * 100);

  return `
    <div class="profile-card">
      <div class="profile-header">
        <div class="profile-avatar">🎓</div>
        <div>
          <div class="profile-name">${state.nickname} ✏️</div>
          <div class="profile-tier">🌱 문화유산 새싹</div>
        </div>
      </div>
      <div style="font-size:11px; display:flex; justify-content:space-between; margin-bottom:4px;">
        <span>현재 문화유산 새싹</span>
        <span>다음 등급까지 80P</span>
      </div>
      <div class="progress-bar-bg">
        <div class="progress-bar-fill" style="width:20%;"></div>
      </div>
    </div>

    <div class="profile-stats-grid">
      <div class="stat-box">
        <div class="value" style="color:#f3ab28;">🪙 ${state.points}P</div>
        <div class="label">총 포인트</div>
      </div>
      <div class="stat-box">
        <div class="value" style="color:#e05627;">🏛️ ${visitedCount}곳</div>
        <div class="label">방문한 문화유산</div>
      </div>
      <div class="stat-box">
        <div class="value" style="color:#3aa693;">🧠 ${state.quizzes}개</div>
        <div class="label">퀴즈 정답</div>
      </div>
      <div class="stat-box">
        <div class="value" style="color:#5856d6;">📖 ${rate}%</div>
        <div class="label">수집률</div>
      </div>
    </div>

    <div class="card">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <strong style="font-size:14px;">🏅 대표 배지</strong>
        <span style="font-size:12px; color:#e05627; font-weight:700;">편집 ></span>
      </div>
      <p style="font-size:11px; color:#888; margin:0 0 10px 0;">획득 배지 1개 · 대표 배지는 최대 6개까지 선택할 수 있어요.</p>
      <div style="display:flex; gap:8px;">
        <div style="background:#f3ab28; color:white; padding:10px; border-radius:12px; font-size:20px;">🗺️</div>
      </div>
    </div>

    <div class="card">
      <strong style="font-size:14px;">📌 최근 활동</strong>
      <div style="margin-top:10px; display:flex; flex-direction:column; gap:8px;">
        ${state.logs.map(log => `
          <div style="font-size:12px; color:#444; display:flex; gap:8px; align-items:flex-start;">
            <span>${log.icon}</span>
            <div>
              <div>${log.title}</div>
              <div style="font-size:10px; color:#aaa;">${log.time}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="test-tools">
      <h5>🧪 테스트 도구 (개발용)</h5>
      <div class="test-btn-group">
        <button class="btn-sm" onclick="addPoints(10)">⏱️ 1일 경과 (+10P)</button>
        <button class="btn-sm" onclick="addPoints(50)">⏱️ 7일 경과 (+50P)</button>
        <button class="btn-sm" onclick="resetData()">✏️ 테스트 데이터 초기화</button>
        <button class="btn-sm danger" onclick="resetData()">♻️ 전체 초기화</button>
      </div>
    </div>
  `;
}

/* 액션 함수 */
function setFilter(region) {
  state.filterRegion = region;
  save();
  render();
}

function addPoints(pts) {
  state.points += pts;
  toast(`+${pts}P가 추가되었습니다.`);
  save();
  render();
}

function verifyHeritage(id) {
  const h = heritageData.find(x => x.id === id);
  state.visits[id] = true;
  state.points += 10;
  state.logs.unshift({
    title: `${h.name} 방문 인증 완료!`,
    time: new Date().toISOString().slice(0, 16).replace('T', ' '),
    icon: '📸'
  });
  toast(`📸 ${h.name} 방문 인증 완료! (+10P)`);
  save();
  render();
}

function resetData() {
  localStorage.removeItem("heritageGO_v2");
  location.reload();
}

/* 메인 렌더러 */
function render() {
  document.getElementById("headerPoints").textContent = state.points;
  
  // 탭 네비게이션 활성화 표시
  document.querySelectorAll(".nav-item").forEach((el, idx) => {
    const tabs = ['home', 'explore', 'collection', 'ranking', 'profile'];
    if (tabs[idx] === state.tab) el.classList.add("active");
    else el.classList.remove("active");
  });

  const content = document.getElementById("content");
  if (state.tab === "home") content.innerHTML = renderHome();
  else if (state.tab === "explore") content.innerHTML = renderExplore();
  else if (state.tab === "collection") content.innerHTML = renderCollection();
  else if (state.tab === "ranking") content.innerHTML = renderRanking();
  else if (state.tab === "profile") content.innerHTML = renderProfile();
}

render();
