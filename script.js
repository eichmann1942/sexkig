/* =====================================================
   전체 9개 문화유산 완벽 데이터베이스
===================================================== */
const heritageData = [
  {
    id: "h1",
    name: "춘천 봉의산성",
    region: "강원",
    subRegion: "강원 춘천",
    era: "삼국시대(추정)",
    category: "성곽",
    desc: "봉의산 정상부를 둘러싸 쌓은 '테퇴식' 산성으로, 고구려~신라 등 삼국시대에 처음 축조된 것으로 추정됩니다. 성곽길을 따라 한 바퀴 돌다 보면 춘천의 전경이 한눈에 펼쳐집니다.",
    icon: "🏯",
    bg: "#1f8a70",
    quiz: {
      q: "Q. 춘천 봉의산성은 언제 처음 축조된 것으로 추정되나요?",
      options: ["고구려·신라 등 삼국시대", "고려시대", "조선시대", "일제강점기"],
      answer: 0,
      explanation: "봉의산성은 산 정상부를 둘러싸 쌓는 '테퇴식' 산성으로, 삼국시대에 처음 만들어진 것으로 추정돼요."
    },
    routeIds: ["r1", "r2"],
    aiPresetResponses: {
      "왜 중요한가요?": "삼국시대부터 고려, 조선시대에 이르기까지 춘천 지역을 지켜온 요새이자 지방 방어 체계의 핵심 유적지이기 때문입니다.",
      "쉽게 설명해주세요": "산 꼭대기 둘레에 띠를 두르듯 돌을 쌓은 옛날 산성으로, 춘천을 지키던 성벽이에요!",
      "관련 인물은 누구인가요?": "고려시대 몽골 침입 당시 봉의산성에서 끝까지 저항했던 춘천의 산성 방호별감 신의군 및 수호 군사들입니다.",
      "시험에 나올 내용만 알려주세요": "1. 산 정상 테두리를 따라 쌓은 '테퇴식 산성' / 2. 삼국시대 기와 출토 / 3. 춘천의 대표적 방어 산성 유적!"
    }
  },
  {
    id: "h2",
    name: "춘천향교",
    region: "강원",
    subRegion: "강원 춘천",
    era: "조선시대",
    category: "교육",
    desc: "조선시대 관아에서 설립하여 지역 인재를 양성하고 성현들에게 제사를 지내던 지방 유학 교육의 중심 기관입니다.",
    icon: "🏫",
    bg: "#e05627",
    quiz: {
      q: "Q. 조선시대 향교에서 중앙 정부가 직접 파견했던 교관의 명칭은 무엇일까요?",
      options: ["훈도 및 교수", "사또", "집사", "암행어사"],
      answer: 0,
      explanation: "향교에는 중앙 정부에서 직접 훈도나 교수를 파견하여 지방 학생들의 교육을 전담하도록 했습니다."
    },
    routeIds: ["r2"],
    aiPresetResponses: {
      "왜 중요한가요?": "조선시대 지방 유교 문화와 공립 교육 시스템의 실체를 증명하는 강원 지역의 귀중한 유교 문화유산입니다.",
      "쉽게 설명해주세요": "조선시대 지방 학생들이 모여 글을 읽고 시험을 준비하던 공립 학교라고 생각하면 편해요!",
      "관련 인물은 누구인가요?": "조선 시대 성균관 및 지방 향교에서 모시는 공자를 비롯한 유교 5성 18현의 성현들입니다.",
      "시험에 나올 내용만 알려주세요": "1. 조선시대 지방 공립 교육기관 / 2. 공부하는 공간 '명륜당'과 제사 지내는 공간 '대성전' 배치 구조!"
    }
  },
  {
    id: "h3",
    name: "강릉 오죽헌",
    region: "강원",
    subRegion: "강원 강릉",
    era: "조선시대",
    category: "가옥",
    desc: "검은 대나무가 둘러싼 고즈넉한 조선 중기 목조건물로, 신사임당과 율곡 이이가 태어난 역사적 명소입니다.",
    icon: "🎋",
    bg: "#5856d6",
    quiz: {
      q: "Q. 강릉 오죽헌의 '몽룡실'에서 태어난 조선의 대표 학자는 누구일까요?",
      options: ["율곡 이이", "퇴계 이황", "정약용", "이순신"],
      answer: 0,
      explanation: "신사임당이 용 꿈을 꾸고 율곡 이이 선생을 낳은 방이 바로 오죽헌의 '몽룡실'입니다."
    },
    routeIds: [],
    aiPresetResponses: {
      "왜 중요한가요?": "조선시대 주택 건축 중 가장 오래된 유구 중 하나이며 율곡 이이 선생의 탄생지로서 문화적 가치가 매우 높습니다.",
      "쉽게 설명해주세요": "신사임당과 율곡 이이 모자가 살았던 집으로, 집 주변에 검은 대나무(오죽)가 많아 오죽헌이라 불려요!",
      "관련 인물은 누구인가요?": "한국 최고의 여성 예술가 신사임당과 조선 최고의 대학자 율곡 이이 선생입니다.",
      "시험에 나올 내용만 알려주세요": "1. 율곡 이이 탄생지 (몽룡실) / 2. 검은 대나무 오죽 / 3. 조선 중기 목조건축 양식!"
    }
  },
  {
    id: "h4",
    name: "강릉 경포대",
    region: "강원",
    subRegion: "강원 강릉",
    era: "고려~조선",
    category: "정자",
    desc: "경포호수가 한눈에 내려다보이는 경승지로, 고려시대부터 시인 묵객들이 시를 읊으며 풍류를 즐기던 대표적 누정입니다.",
    icon: "🌊",
    bg: "#1f8a70",
    quiz: {
      q: "Q. 관동팔경 중 으뜸으로 꼽히며 경포호가 내려다보이는 정자는 어디일까요?",
      options: ["강릉 경포대", "삼척 죽서루", "양양 의상대", "청간정"],
      answer: 0,
      explanation: "경포대는 관동팔경의 으뜸으로, 경포호수와 동해바다의 아름다운 경관을 조망할 수 있는 정자입니다."
    },
    routeIds: [],
    aiPresetResponses: {
      "왜 중요한가요?": "관동팔경 중 대표적 누정으로 숙종의 어제시와 율곡 이이의 경포대부 등 수많은 조선 시대 명시가 전해지는 문학의 장소입니다.",
      "쉽게 설명해주세요": "경포호수의 아름다운 풍경을 한눈에 감상할 수 있는 경치 좋은 나무 누각이에요!",
      "관련 인물은 누구인가요?": "경포대에 올라 명시를 남긴 율곡 이이, 숙종 임금, 그리고 관동별곡을 지은 송강 정철입니다.",
      "시험에 나올 내용만 알려주세요": "1. 관동팔경 대표 누정 / 2. 경포호 조망 명소 / 3. 숙종의 어제시 현판!"
    }
  },
  {
    id: "h5",
    name: "남한산성",
    region: "경기",
    subRegion: "경기 광주",
    era: "조선시대",
    category: "성곽",
    desc: "병자호란의 아픔이 서려 있는 유네스코 세계문화유산으로, 조선 왕조의 비상시 임시 수도 역할을 담당했던 산성입니다.",
    icon: "🏰",
    bg: "#e05627",
    quiz: {
      q: "Q. 병자호란 당시 인조 임금이 피난하여 47일간 청나라에 맞서 항전했던 산성은 어디일까요?",
      options: ["남한산성", "북한산성", "봉의산성", "행주산성"],
      answer: 0,
      explanation: "1636년 병자호란 때 인조 임금과 신하들이 남한산성으로 피난하여 항전했습니다."
    },
    routeIds: ["r2"],
    aiPresetResponses: {
      "왜 중요한가요?": "동아시아 군사 건축 기술의 집약체이자 험준한 지형을 활용한 국방 도시로서 유네스코 세계유산에 등재되었습니다.",
      "쉽게 설명해주세요": "임금님이 비상시에 피난할 수 있도록 성 안에 행궁과 마을까지 갖춰놓은 거대한 성곽 도시예요!",
      "관련 인물은 누구인가요?": "병자호란 당시 남한산성에서 항전을 이끈 조선 제16대 임금 인조와 김상헌, 최명길 등 신하들입니다.",
      "시험에 나올 내용만 알려주세요": "1. 유네스코 세계문화유산 등재 / 2. 병자호란 국왕 피난지 / 3. 남한산성 행궁!"
    }
  },
  {
    id: "h6",
    name: "수원 화성",
    region: "경기",
    subRegion: "경기 수원",
    era: "조선시대",
    category: "성곽",
    desc: "조선 정조대왕이 효심과 개혁 정치를 바탕으로 거중기 등 실학 기술을 동원해 완공한 과학적 성곽 도시입니다.",
    icon: "🧱",
    bg: "#f3ab28",
    quiz: {
      q: "Q. 정조의 명을 받아 수원 화성 건축에 필요한 '거중기'를 발명한 실학자는 누구일까요?",
      options: ["정약용", "박지원", "김정호", "홍대용"],
      answer: 0,
      explanation: "실학자 정약용 선생이 도르래의 원리를 이용해 무거운 돌을 끌어올리는 거중기를 발명해 화성을 축조했습니다."
    },
    routeIds: [],
    aiPresetResponses: {
      "왜 중요한가요?": "동서양 성곽 건축 기술의 장점을 융합하고 거중기·유형거 등 과학 기구를 활용해 건설한 유네스코 세계문화유산입니다.",
      "쉽게 설명해주세요": "정조 임금님이 아버지 사도세자에 대한 효심을 담아 정약용 선생의 과학 도구로 만든 성곽 도시예요!",
      "관련 인물은 누구인가요?": "화성 건설을 총지휘한 정조대왕, 거중기를 발명한 실학자 정약용 선생입니다.",
      "시험에 나올 내용만 알려주세요": "1. 정약용의 거중기 활용 / 2. 유네스코 세계문화유산 / 3. 화성성역의궤 문서에 기록!"
    }
  },
  {
    id: "h7",
    name: "경복궁",
    region: "서울",
    subRegion: "서울",
    era: "조선시대",
    category: "궁궐",
    desc: "1395년 태조 이성계가 창건한 조선 왕조 최고의 법궁으로, 정치와 왕실 생활의 중심이 되었던 으뜸 궁궐입니다.",
    icon: "🏛️",
    bg: "#e05627",
    quiz: {
      q: "Q. 경복궁의 정문이자 광화문 광장과 맞닿아 있는 문의 이름은 무엇일까요?",
      options: ["광화문", "흥인지문", "돈의문", "숙정문"],
      answer: 0,
      explanation: "경복궁의 남쪽에 위치한 정문이 바로 광화문입니다."
    },
    routeIds: [],
    aiPresetResponses: {
      "왜 중요한가요?": "조선 왕조의 으뜸 궁궐(법궁)로서 근정전, 경회루 등 최고의 왕실 건축물과 유학적 국가 이념이 담겨 있습니다.",
      "쉽게 설명해주세요": "조선시대 임금님이 나라를 다스리고 신하들과 회의를 하던 제일 크고 중심이 되는 궁궐이에요!",
      "관련 인물은 누구인가요?": "경복궁을 창건한 태조 이성계와 정도전, 훈민정음을 창제한 세종대왕, 궁궐을 재건한 흥선대원군입니다.",
      "시험에 나올 내용만 알려주세요": "1. 조선의 으뜸 궁궐(법궁) / 2. 정도전이 '큰 복을 누리라'는 뜻으로 명명 / 3. 근정전과 경회루!"
    }
  },
  {
    id: "h8",
    name: "경주 첨성대",
    region: "경북",
    subRegion: "경북 경주",
    era: "신라",
    category: "천문",
    desc: "신라 선덕여왕 때 건립된 동양에서 가장 오래된 천문대로, 하늘의 별자리를 관측하고 절기를 계산하던 과학 유산입니다.",
    icon: "⭐",
    bg: "#5856d6",
    quiz: {
      q: "Q. 경주 첨성대는 신라 어느 왕 때 건립되었을까요?",
      options: ["선덕여왕", "진흥왕", "무열왕", "경순왕"],
      answer: 0,
      explanation: "첨성대는 신라 제27대 선덕여왕 재위 기간(632~647년)에 건립되었습니다."
    },
    routeIds: ["r1"],
    aiPresetResponses: {
      "왜 중요한가요?": "동양에서 현존하는 가장 오래된 천문 관측 건축물로, 신라의 우수한 수학적·천문학적 지식을 입증합니다.",
      "쉽게 설명해주세요": "신라시대 사람들이 별과 달의 움직임을 관찰하여 농사짓는 절기를 정하던 하늘 우체통 모양의 관측대예요!",
      "관련 인물은 누구인가요?": "첨성대를 만들도록 지시한 신라 선덕여왕과 당시 신라의 천문학 기술자들입니다.",
      "시험에 나올 내용만 알려주세요": "1. 동양 최고의 천문대 / 2. 신라 선덕여왕 때 건립 / 3. 27단 돌 구조와 365개 안팎의 석재!"
    }
  },
  {
    id: "h9",
    name: "서울 덕수궁",
    region: "서울",
    subRegion: "서울",
    era: "조선·대한제국",
    category: "궁궐",
    desc: "임진왜란 당시 선조의 임시 거처로 사용된 후, 고종 황제가 대한제국을 선포하고 근대적 개혁을 추진했던 역사적 장소입니다.",
    icon: "🕌",
    bg: "#f3ab28",
    quiz: {
      q: "Q. 1897년 고종 황제가 덕수궁(경운궁)에서 선포한 나라의 이름은 무엇일까요?",
      options: ["대한제국", "조선", "고려", "대한민국"],
      answer: 0,
      explanation: "고종 황제는 덕수궁에서 환구단에 올라 황제 즉위식을 거행하고 '대한제국'을 선포했습니다."
    },
    routeIds: [],
    aiPresetResponses: {
      "왜 중요한가요?": "조선 말기 서양식 석조전과 전통 한옥 전각이 함께 자리잡고 있어 대한제국 자주 개혁의 역사를 보여줍니다.",
      "쉽게 설명해주세요": "고종 임금님이 대한제국을 선포하고 전통 한옥 궁궐과 서양식 석조건물을 함께 지은 근대적 궁궐이에요!",
      "관련 인물은 누구인가요?": "대한제국을 선포하고 자주 독립을 추진했던 고종 황제와 순종 황제입니다.",
      "시험에 나올 내용만 알려주세요": "1. 1897년 대한제국 선포 장소 / 2. 전통 전각과 서양식 '석조전'의 공존!"
    }
  }
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
    desc: "봉의산성과 남한산성, 춘천향교를 모아 우리 고장의 역사와 호국 정신을 살펴보는 탐험 코스입니다.",
    rewardBadge: "🛡️ 호국 역사 탐험가",
    rewardDesc: "전쟁과 지역의 역사 루트 완주",
    steps: ["h1", "h5", "h2"]
  }
];

/* 상태 관리 */
let state = JSON.parse(localStorage.getItem("heritageGO_v7")) || {
  tab: "home",
  detailId: null,
  routeId: null,
  points: 40,
  nickname: "유산 탐험가",
  visits: {},
  quizzes: { h1: 0 },
  selectedIconVisit: 0,
  selectedIconChange: 4,
  selectedChangeTag: "특별한 변화 없음",
  aiChat: {},
  filterRegion: "전체보기"
};

function save() {
  localStorage.setItem("heritageGO_v7", JSON.stringify(state));
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
  save();
  render();
}

function openDetail(id) {
  state.detailId = id;
  state.routeId = null;
  save();
  render();
}

function openRoute(routeId) {
  state.routeId = routeId;
  save();
  render();
}

function goBack() {
  if (state.routeId) {
    state.routeId = null;
  } else if (state.detailId) {
    state.detailId = null;
  }
  save();
  render();
}

/* =====================================================
   [1] 홈 화면 렌더링 (Image 2 디자인 구현)
===================================================== */
function renderHome() {
  const visitedCount = Object.keys(state.visits).length;
  const quizCount = Object.keys(state.quizzes).length;
  const collectionRate = Math.round((visitedCount / heritageData.length) * 100);

  return `
    <div class="page-title" style="font-size:16px; color:#555; margin-bottom:12px;">
      오늘은 어떤 역사를 탐험할까?
    </div>

    <!-- 포인트/수집률 배너 -->
    <div class="home-banner">
      <h3>🌱 문화유산 새싹</h3>
      <div class="banner-stats">
        <div class="stat-item">🪙 내 포인트 <strong>${state.points}P</strong></div>
        <div class="stat-item">🏛️ 방문한 문화유산 <strong>${visitedCount}곳</strong></div>
        <div class="stat-item">🧠 퀴즈 정답 <strong>${quizCount}개</strong></div>
        <div class="stat-item">📖 수집률 <strong>${collectionRate}%</strong></div>
      </div>
    </div>

    <!-- 퀵 버튼 그리드 -->
    <div class="quick-grid">
      <button class="quick-btn orange" onclick="switchTab('explore')">
        <span style="font-size:24px;">🗺️</span>
        문화유산 탐험하기
      </button>
      <button class="quick-btn yellow" onclick="openDetail('h1')">
        <span style="font-size:24px;">🧠</span>
        오늘의 역사 퀴즈
      </button>
      <button class="quick-btn teal" onclick="switchTab('collection')">
        <span style="font-size:24px;">📖</span>
        나의 문화유산 도감
      </button>
      <button class="quick-btn white" onclick="toast('학교 클럽 기능은 준비 중입니다.')">
        <span style="font-size:24px;">🏫</span>
        학교 클럽
      </button>
    </div>

    <!-- 오늘의 추천 문화유산 (경복궁 바로 연결) -->
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

/* =====================================================
   [2] 도감 화면 렌더링 (Image 1 디자인 구현)
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
        <div style="height:100%; width:${collectionRate}%; background:#e05627; border-radius:10px; transition:width 0.3s;"></div>
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
          <div class="collection-card ${isVisited ? '' : 'unvisited'}" onclick="openDetail('${h.id}')">
            <span class="visit-badge ${isVisited ? 'visited' : 'unvisited'}">
              ${isVisited ? '방문완료' : '🔒 미방문'}
            </span>
            <div class="icon">${isVisited ? h.icon : '🏛️'}</div>
            <h5>${h.name}</h5>
            <p>📍 ${h.subRegion} · ${h.era}</p>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

/* =====================================================
   [3] 문화유산 상세 페이지 렌더링
===================================================== */
function renderHeritageDetail(id) {
  const h = heritageData.find(x => x.id === id) || heritageData[0];
  const isVisited = state.visits[h.id];
  const quizSolved = state.quizzes[h.id] !== undefined;
  const selectedOpt = state.quizzes[h.id];

  const presetIcons = ["🏯", "🏛️", "👘", "🏰", "⛩️", "🏺"];

  if (!state.aiChat[h.id]) {
    state.aiChat[h.id] = [
      { sender: "ai", text: `안녕! 나는 ${h.name}을 알려주는 데모 역사 도우미야. 아래 버튼으로 궁금한 걸 골라봐!` }
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

    <!-- 1. 방문 인증 -->
    <div class="card">
      <div class="section-title">📸 방문 인증</div>
      <div class="section-sub">${isVisited ? '📸 이미 방문한 유산입니다. 재방문 인증도 가능해요!' : '아직 방문하지 않았어요. 첫 방문 시 +10P!'}</div>

      <div class="upload-wrapper">
        <div class="upload-wrapper-title">📷 인증 사진 선택</div>
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

    <!-- 3. AI 역사 도우미 (고품질 답변 적용) -->
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

    <!-- 5. 변화 기록 남기기 -->
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

/* =====================================================
   [4] 탐험 루트 상세 페이지 렌더링
===================================================== */
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

/* =====================================================
   이벤트 및 AI 대화 처리
===================================================== */
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
function submitVisit(id) {
  state.visits[id] = true;
  state.points += 10;
  toast("📸 방문 인증이 완료되었습니다! (+10P)");
  save(); render();
}

function submitChangeRecord() {
  toast("🔄 변화 기록이 성공적으로 저장되었습니다!");
  save(); render();
}

function answerQuiz(heritageId, selectedIdx) {
  const h = heritageData.find(x => x.id === heritageId);
  if (!h || !h.quiz) return;
  if (state.quizzes[heritageId] !== undefined) { toast("이미 보상을 받은 퀴즈입니다."); return; }
  state.quizzes[heritageId] = selectedIdx;
  if (selectedIdx === h.quiz.answer) {
    state.points += 20;
    toast("🎉 정답입니다! (+20P)");
  } else {
    toast("❌ 오답입니다. 다시 도전해보세요!");
  }
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
    : `${h.name}에 관한 질문입니다: "${questionText}"의 정보가 등록되어 있습니다.`;

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

function setFilter(region) { state.filterRegion = region; save(); render(); }
function renderRanking() { return `<h2 class="page-title">랭킹</h2><div class="rank-item my-rank"><div class="rank-num">7</div><div class="rank-user"><span>🎓</span> ${state.nickname}</div><div class="rank-points">${state.points}P</div></div>`; }
function renderProfile() { return `<div class="profile-card"><h2>👤 ${state.nickname}</h2><p>🪙 ${state.points}P</p></div>`; }

/* 전체 화면 렌더러 */
function render() {
  document.getElementById("headerPoints").textContent = state.points;
  
  const headerTitle = document.getElementById("headerTitle");
  if (state.routeId) {
    headerTitle.innerHTML = `<button class="header-back-btn" onclick="goBack()">← 탐험 루트</button>`;
  } else if (state.detailId) {
    headerTitle.innerHTML = `<button class="header-back-btn" onclick="goBack()">← 문화유산 상세</button>`;
  } else {
    headerTitle.innerHTML = `🏛️ 유산GO`;
  }

  document.querySelectorAll(".nav-item").forEach((el, idx) => {
    const tabs = ['home', 'explore', 'collection', 'ranking', 'profile'];
    if (tabs[idx] === state.tab) el.classList.add("active");
    else el.classList.remove("active");
  });

  const content = document.getElementById("content");
  if (state.routeId) {
    content.innerHTML = renderRouteDetail(state.routeId);
  } else if (state.detailId) {
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
