/* Firebase 연동 설정 */
const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  databaseURL: "https://your-app-default-rtdb.firebaseio.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef"
};

let db = null;
try {
  if (typeof firebase !== 'undefined' && firebaseConfig.apiKey !== "YOUR_FIREBASE_API_KEY") {
    firebase.initializeApp(firebaseConfig);
    db = firebase.database();
  }
} catch(e) {}

/* [전체 복원] 국가유산청 공식 지정 14종 문화유산 데이터베이스 */
let heritageData = [
  {
    id: "h1",
    name: "춘천 봉의산성",
    region: "강원",
    subRegion: "강원 춘천",
    era: "삼국시대(추정)",
    category: "기념물",
    lat: 37.8885,
    lng: 127.7312,
    desc: "봉의산 정상부를 둘러싸 쌓은 '테퇴식' 산성으로, 삼국시대에 처음 축조된 것으로 추정됩니다.",
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
    category: "유형문화유산",
    lat: 37.8812,
    lng: 127.7335,
    desc: "조선시대 지방 관아에서 인재를 양성하던 공립 교육 기관입니다.",
    icon: "🏫",
    bg: "#e05627",
    quiz: {
      q: "Q. 조선시대 향교에서 중앙 정부가 직접 파견했던 교관의 명칭은 무엇일까요?",
      options: ["훈도 및 교수", "사또", "집사", "암행어사"],
      answer: 0,
      explanation: "향교에는 중앙 정부에서 직접 훈도나 교수를 파견했습니다."
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
    category: "보물",
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
    id: "h4",
    name: "강릉 경포대",
    region: "강원",
    subRegion: "강원 강릉",
    era: "고려~조선",
    category: "보물",
    lat: 37.7950,
    lng: 128.8965,
    desc: "경포호수가 한눈에 내려다보이는 경승지로, 관동팔경 중 으뜸으로 꼽히는 정자입니다.",
    icon: "🌊",
    bg: "#1f8a70",
    quiz: {
      q: "Q. 관동팔경 중 으뜸으로 꼽히며 경포호가 내려다보이는 정자는 어디일까요?",
      options: ["강릉 경포대", "삼척 죽서루", "양양 의상대", "청간정"],
      answer: 0,
      explanation: "경포대는 경포호수와 동해바다의 아름다운 경관을 한눈에 조망하는 정자입니다."
    },
    routeIds: [],
    aiPresetResponses: {
      "왜 중요한가요?": "관동팔경 중 대표적 누정으로 수많은 조선 시대 명시가 전해지는 문학 명소입니다."
    }
  },
  {
    id: "h5",
    name: "남한산성",
    region: "경기",
    subRegion: "경기 광주",
    era: "조선시대",
    category: "사적·세계유산",
    lat: 37.4786,
    lng: 127.1837,
    desc: "병자호란의 아픔이 서려 있는 유네스코 세계문화유산으로, 비상시 임시 수도 역할을 한 산성입니다.",
    icon: "🏰",
    bg: "#e05627",
    quiz: {
      q: "Q. 병자호란 당시 인조 임금이 피난하여 47일간 항전했던 산성은 어디일까요?",
      options: ["남한산성", "북한산성", "봉의산성", "행주산성"],
      answer: 0,
      explanation: "1636년 병자호란 때 인조 임금과 신하들이 남한산성으로 피난하여 항전했습니다."
    },
    routeIds: ["r2"],
    aiPresetResponses: {
      "왜 중요한가요?": "동아시아 군사 건축 기술의 집약체로서 유네스코 세계문화유산에 등재되었습니다."
    }
  },
  {
    id: "h6",
    name: "수원 화성",
    region: "경기",
    subRegion: "경기 수원",
    era: "조선시대",
    category: "사적·세계유산",
    lat: 37.2851,
    lng: 127.0163,
    desc: "정조대왕이 효심과 실학 기술을 동원해 완공한 과학적 성곽 도시입니다.",
    icon: "🧱",
    bg: "#f3ab28",
    quiz: {
      q: "Q. 정조의 명을 받아 수원 화성 건축에 필요한 '거중기'를 발명한 실학자는 누구일까요?",
      options: ["정약용", "박지원", "김정호", "홍대용"],
      answer: 0,
      explanation: "정약용 선생이 도르래의 원리를 이용한 거중기를 발명해 화성을 축조했습니다."
    },
    routeIds: [],
    aiPresetResponses: {
      "왜 중요한가요?": "거중기 등 과학 기구를 활용해 건설한 유네스코 세계문화유산입니다."
    }
  },
  {
    id: "h7",
    name: "경복궁",
    region: "서울",
    subRegion: "서울 종로",
    era: "조선시대",
    category: "사적",
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
  },
  {
    id: "h8",
    name: "서울 덕수궁",
    region: "서울",
    subRegion: "서울 중구",
    era: "조선·대한제국",
    category: "사적",
    lat: 37.5658,
    lng: 126.9751,
    desc: "고종 황제가 대한제국을 선포하고 근대적 개혁을 추진했던 역사적 장소입니다.",
    icon: "🕌",
    bg: "#f3ab28",
    quiz: {
      q: "Q. 1897년 고종 황제가 덕수궁에서 선포한 나라의 이름은 무엇일까요?",
      options: ["대한제국", "조선", "고려", "대한민국"],
      answer: 0,
      explanation: "고종 황제는 덕수궁에서 황제 즉위식을 거행하고 대한제국을 선포했습니다."
    },
    routeIds: [],
    aiPresetResponses: {
      "왜 중요한가요?": "전통 한옥 전각과 서양식 석조전이 함께 자리잡은 근대 역사의 현장입니다."
    }
  },
  {
    id: "h9",
    name: "창덕궁",
    region: "서울",
    subRegion: "서울 종로",
    era: "조선시대",
    category: "사적·세계유산",
    lat: 37.5794,
    lng: 126.9910,
    desc: "자연 지형과 아름답게 조화를 이루는 후원이 특징인 유네스코 세계유산입니다.",
    icon: "🌺",
    bg: "#339982",
    quiz: {
      q: "Q. 조선 임금들이 가장 오래 거주했던 궁궐로 후원의 아름다움으로 유네스코 세계유산에 등재된 궁은?",
      options: ["창덕궁", "경복궁", "창경궁", "경희궁"],
      answer: 0,
      explanation: "창덕궁은 자연 배치가 뛰어나 1997년 유네스코 세계유산으로 등재되었습니다."
    },
    routeIds: [],
    aiPresetResponses: {
      "왜 중요한가요?": "한국의 전통 궁궐 조경 기법을 가장 잘 간직한 세계적 유산입니다."
    }
  },
  {
    id: "h10",
    name: "경주 첨성대",
    region: "경북",
    subRegion: "경북 경주",
    era: "신라",
    category: "국보",
    lat: 35.8347,
    lng: 129.2190,
    desc: "신라 선덕여왕 때 건립된 동양에서 가장 오래된 천문대입니다.",
    icon: "⭐",
    bg: "#5856d6",
    quiz: {
      q: "Q. 경주 첨성대는 신라 어느 왕 때 건립되었을까요?",
      options: ["선덕여왕", "진흥왕", "무열왕", "경순왕"],
      answer: 0,
      explanation: "첨성대는 신라 선덕여왕 재위 기간에 건립되었습니다."
    },
    routeIds: ["r1"],
    aiPresetResponses: {
      "왜 중요한가요?": "동양에서 현존하는 가장 오래된 천문 관측 건축물입니다."
    }
  },
  {
    id: "h11",
    name: "경주 불국사",
    region: "경북",
    subRegion: "경북 경주",
    era: "신라",
    category: "사적·세계유산",
    lat: 35.7901,
    lng: 129.3320,
    desc: "신라 경덕왕 때 김대성이 창건한 사찰로 석가탑과 다보탑이 우뚝 서 있습니다.",
    icon: "🔔",
    bg: "#e05627",
    quiz: {
      q: "Q. 불국사 대웅전 앞마당에 마주 보고 서 있는 유명한 두 탑은 석가탑과 무엇일까요?",
      options: ["다보탑", "분황사탑", "감은사지탑", "정림사지탑"],
      answer: 0,
      explanation: "불국사 대웅전 앞에는 석가탑(무영탑)과 다보탑이 조화롭게 서 있습니다."
    },
    routeIds: ["r1"],
    aiPresetResponses: {
      "왜 중요한가요?": "신라 불교 예술과 건축 기술의 최고봉을 보여주는 유네스코 세계유산입니다."
    }
  },
  {
    id: "h12",
    name: "공주 무령왕릉",
    region: "충남",
    subRegion: "충남 공주",
    era: "백제",
    category: "사적·세계유산",
    lat: 36.4601,
    lng: 127.1136,
    desc: "백제 25대 무령왕과 왕비가 묻힌 벽돌무덤으로, 삼국시대 왕릉 중 유일하게 피장자가 확인되었습니다.",
    icon: "👑",
    bg: "#f3ab28",
    quiz: {
      q: "Q. 도굴되지 않은 상태로 발견되어 백제 문화의 정수를 보여준 무령왕릉의 무덤 양식은?",
      options: ["벽돌무덤(전축분)", "굴식 돌방무덤", "돌무지 무덤", "돌무지 덧널무덤"],
      answer: 0,
      explanation: "무령왕릉은 중국 남조의 영향을 받은 벽돌무덤(전축분) 양식입니다."
    },
    routeIds: [],
    aiPresetResponses: {
      "왜 중요한가요?": "삼국시대 왕릉 중 무덤의 주인과 축조 연대가 정확히 밝혀진 유일한 무덤입니다."
    }
  },
  {
    id: "h13",
    name: "순천 낙안읍성",
    region: "전남",
    subRegion: "전남 순천",
    era: "조선시대",
    category: "사적",
    lat: 34.9070,
    lng: 127.3418,
    desc: "조선시대 성곽, 관아, 초가집이 원형 그대로 보존되어 현재도 주민들이 살고 있는 민속마을입니다.",
    icon: "🌾",
    bg: "#1f8a70",
    quiz: {
      q: "Q. 조선 시대 읍성의 형태와 초가집 주민 삶의 모습이 가장 잘 보존된 전남의 사적은?",
      options: ["순천 낙안읍성", "해미읍성", "고창읍성", "진주성"],
      answer: 0,
      explanation: "낙안읍성은 전통 초가집과 성곽이 실제 삶의 터전으로 유지되는 대표적 민속 성곽입니다."
    },
    routeIds: [],
    aiPresetResponses: {
      "왜 중요한가요?": "조선 시대 평지 읍성의 형태와 소박한 민가 문화가 살아 숨 쉬는 공간입니다."
    }
  },
  {
    id: "h14",
    name: "제주 목관아",
    region: "제주",
    subRegion: "제주 제주",
    era: "조선시대",
    category: "사적",
    lat: 33.5134,
    lng: 126.5218,
    desc: "조선시대 제주 행정의 중심지였던 관아 터로 탐라국 이래 제주의 역사가 담긴 곳입니다.",
    icon: "🍊",
    bg: "#5856d6",
    quiz: {
      q: "Q. 조선시대 제주목사가 집무를 보던 중심 행정 관아 유적은 어디일까요?",
      options: ["제주 목관아", "삼양동 유적", "항파두리 항몽유적", "알뜨르 비행장"],
      answer: 0,
      explanation: "제주 목관아는 관덕정을 비롯해 조선 시대 제주 행정 관아가 복원된 사적입니다."
    },
    routeIds: [],
    aiPresetResponses: {
      "왜 중요한가요?": "제주의 정치·행정·문화 중심지로서 역사적 정체성을 지닌 핵심 유적입니다."
    }
  }
];

const allUserDB = [
  { id: "u1", nickname: "유산 탐험가", level: "🌱 문화유산 새싹", points: 40, visits: 0, icon: "🎓", badges: ["b1", "b2"] },
  { id: "u2", nickname: "역사박사님", level: "🔹 문화유산 탐험가", points: 840, visits: 18, icon: "🦁", badges: ["b1", "b2", "b3"] },
  { id: "u3", nickname: "춘천유적왕", level: "👑 유산 수호자", points: 1520, visits: 32, icon: "🐯", badges: ["b1", "b2", "b3", "b6"] },
  { id: "u4", nickname: "강원탐험러", level: "🌱 문화유산 새싹", points: 210, visits: 5, icon: "🦊", badges: ["b1"] }
];

/* [전체 복원] 클럽 목록 데이터베이스 */
let schoolData = [
  { id: "s1", name: "원주고 역사탐험클럽", region: "원주", members: 26, points: 8960, visits: 131, tag: "🔥 성장 클럽", icon: "🏫", desc: "원주고등학교 학생들의 대표 문화유산 탐험 클럽입니다.", memberList: ["u2", "u4"] },
  { id: "s2", name: "춘천고 역사탐험클럽", region: "춘천", members: 38, points: 11200, visits: 185, tag: "🏆 명예 클럽", icon: "🏫", desc: "춘천 지역 문화유산을 중심으로 매주 모임을 가집니다.", memberList: ["u3"] },
  { id: "s3", name: "봉의고 역사탐험클럽", region: "춘천", members: 29, points: 6400, visits: 92, tag: "🌱 열정 클럽", icon: "🏫", desc: "봉의산성 유적 수호 소모임입니다.", memberList: [] },
  { id: "s4", name: "강원고 역사탐험클럽", region: "춘천", members: 25, points: 5800, visits: 78, tag: "🔥 성장 클럽", icon: "🏫", desc: "역사 상식 퀴즈와 야외 사진 인증 소모임입니다.", memberList: [] }
];

/* 도전과제 자동 연동형 클럽 미션 데이터 */
const clubMissions = [
  { id: "m1", icon: "🗺️", title: "우리 지역 문화유산 30곳 방문하기", target: 30, current: 15, myContrib: 0 },
  { id: "m2", icon: "🧠", title: "역사 퀴즈 500문제 해결하기", target: 500, current: 210, myContrib: 0 },
  { id: "m3", icon: "📷", title: "문화유산 변화 기록 50건 만들기", target: 50, current: 12, myContrib: 0 },
  { id: "m4", icon: "🔍", title: "새로운 문화유산 5곳 등록하기", target: 5, current: 0, myContrib: 0 },
  { id: "m5", icon: "🏛️", title: "역사 탐험 루트 20회 완주하기", target: 20, current: 5, myContrib: 0 }
];

/* [전체 복원] 탐험 루트 데이터베이스 */
const routeData = [
  {
    id: "r1",
    name: "삼국시대의 흔적",
    icon: "🏹",
    bg: "#1f8a70",
    desc: "춘천 봉의산성과 경주 첨성대, 불국사를 통해 삼국시대 사람들의 방어 기술과 건축 예술을 만나봐요.",
    rewardBadge: "🏆 삼국 역사 탐험가",
    rewardDesc: "삼국시대의 흔적 루트 완주",
    steps: ["h1", "h10", "h11"]
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

/* [전체 복원] 배지 목록 */
const badgePool = [
  { id: "b1", icon: "🗺️", title: "클럽 방문왕", desc: "문화유산 30곳 방문", unlocked: true },
  { id: "b2", icon: "🧠", title: "퀴즈 달인", desc: "역사 퀴즈 10개 정답", unlocked: true },
  { id: "b3", icon: "📸", title: "인증 수집가", desc: "첫 방문 인증 성공", unlocked: true },
  { id: "b4", icon: "🛡️", title: "호국 탐험가", desc: "산성 코스 완주", unlocked: false },
  { id: "b5", icon: "🏛️", title: "궁궐 박사", desc: "모든 궁궐 방문", unlocked: false },
  { id: "b6", icon: "👑", title: "유산 수호자", desc: "누적 1,000P 달성", unlocked: false }
];

/* 애플리케이션 통합 상태 관리 */
let state = JSON.parse(localStorage.getItem("heritageGO_v18")) || {
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
  selectedChangeTag: "특별한 변화 없음",
  aiChat: {},
  activities: [
    { type: "quiz", title: "춘천 봉의산성 퀴즈 정답", time: "2026.08.20 18:46" },
    { type: "quiz", title: "경복궁 퀴즈 정답 (+20P)", time: "2026.08.20 18:43" },
    { type: "club", title: "원주고 역사탐험클럽 가입", time: "2026.08.19 19:13" }
  ],
  filterRegion: "전체보기",
  selectedCreateClubImg: "🏫",
  reports: [],
  friends: ["u2"],
  clubChats: [
    { user: "역사박사님", text: "이번 주말 봉의산성 탐험가실 분 계신가요?", time: "18:20" },
    { user: "유산 탐험가", text: "저 참여하고 싶습니다!", time: "18:22" }
  ]
};

function save() {
  localStorage.setItem("heritageGO_v18", JSON.stringify(state));
}

function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2200);
}

/* 도전과제 자동 연동 카운트 */
function updateClubMissionProgress(missionId) {
  const m = clubMissions.find(x => x.id === missionId);
  if (m) {
    m.current = Math.min(m.target, m.current + 1);
    m.myContrib += 1;
    toast(`🎯 클럽 도전과제 자동 연동! (${m.title})`);
  }
}

/* Haversine GPS 거리 계산 */
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

/* 50m 이내 GPS + 현장 사진 필수 검증 */
function verifyGPSVisit(heritageId) {
  const fileInput = document.getElementById("visitFile");
  if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
    toast("📸 현장에서 촬영한 사진을 먼저 업로드해 주세요! (필수)");
    return;
  }

  const h = heritageData.find(x => x.id === heritageId);
  if (!h || !h.lat || !h.lng) {
    toast("해당 유산의 GPS 위치 좌표가 없습니다.");
    return;
  }

  toast("📡 현재 GPS 위치를 정밀 측위 중입니다...");

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const userLat = position.coords.latitude;
      const userLng = position.coords.longitude;
      const distanceMeters = getDistanceMeters(userLat, userLng, h.lat, h.lng);

      const distanceBox = document.getElementById("gpsDistanceText");
      if (distanceBox) {
        distanceBox.textContent = `📍 현재 유산과의 거리: ${distanceMeters}m (인증 기준: 50m 이내)`;
      }

      if (distanceMeters <= 50) {
        submitVisit(heritageId);
      } else {
        toast(`❌ 인증 실패: 유산과 ${distanceMeters}m 떨어져 있습니다. (50m 이내 필요)`);
      }
    },
    (error) => {
      toast("❌ 위치 권한을 확인해주세요.");
    },
    { enableHighAccuracy: true, timeout: 10000 }
  );
}

function loadKakaoMap(heritageId) {
  const h = heritageData.find(x => x.id === heritageId);
  const container = document.getElementById("mapContainer");
  if (!container || !h) return;

  if (typeof kakao === 'undefined' || !kakao.maps) {
    container.innerHTML = `<div style="padding:20px; text-align:center; color:#888; font-size:11px;">⚠️ 카카오 지도 SDK를 로드 중입니다.</div>`;
    return;
  }

  kakao.maps.load(() => {
    const moveLatLng = new kakao.maps.LatLng(h.lat, h.lng);
    const map = new kakao.maps.Map(container, { center: moveLatLng, level: 3 });
    const marker = new kakao.maps.Marker({ position: moveLatLng });
    marker.setMap(map);
  });
}

function switchTab(tabName) {
  state.tab = tabName;
  state.detailId = null;
  state.routeId = null;
  state.viewSchoolClub = false;
  save(); render();
}

function openDetail(id) { state.detailId = id; state.routeId = null; state.viewSchoolClub = false; save(); render(); }
function openRoute(routeId) { state.routeId = routeId; state.viewSchoolClub = false; save(); render(); }
function openSchoolClub() { state.viewSchoolClub = true; save(); render(); }
function goBack() { state.viewSchoolClub = false; state.routeId = null; state.detailId = null; save(); render(); }

/* 등급 로드맵 모달 */
function openLevelRoadmapModal() { document.getElementById("levelRoadmapModal").classList.add("show"); }
function closeLevelRoadmapModal() { document.getElementById("levelRoadmapModal").classList.remove("show"); }

/* 닉네임 변경 */
function openNicknameModal() { document.getElementById("nicknameInput").value = state.nickname; document.getElementById("nicknameModal").classList.add("show"); }
function closeNicknameModal() { document.getElementById("nicknameModal").classList.remove("show"); }

function submitNicknameChange() {
  const newName = document.getElementById("nicknameInput").value.trim();
  if (newName.length < 2 || newName.length > 10) { toast("닉네임은 2~10자로 입력해주세요."); return; }
  state.nickname = newName;
  allUserDB[0].nickname = newName;
  closeNicknameModal();
  toast(`✏️ 닉네임이 '${newName}'(으)로 변경되었습니다.`);
  save(); render();
}

/* 클럽 생성 및 모달 */
function openCreateClubModal() { closeClubModal(); document.getElementById("createClubModal").classList.add("show"); }
function closeCreateClubModal() { document.getElementById("createClubModal").classList.remove("show"); }

function selectClubImg(imgSymbol) {
  state.selectedCreateClubImg = imgSymbol;
  document.querySelectorAll(".club-img-btn").forEach(btn => {
    if (btn.textContent === imgSymbol) btn.classList.add("selected");
    else btn.classList.remove("selected");
  });
}

function submitCreateClub() {
  const name = document.getElementById("newClubName").value.trim();
  const desc = document.getElementById("newClubDesc").value.trim();
  if (name.length < 2) { toast("클럽 이름을 2자 이상 입력해주세요."); return; }

  const newClub = {
    id: "s" + (schoolData.length + 1),
    name: name,
    region: "신규",
    members: 1,
    points: 0,
    visits: 0,
    tag: "🆕 신생 클럽",
    icon: state.selectedCreateClubImg,
    desc: desc || "신규 생성된 문화유산 탐험 클럽입니다.",
    memberList: ["u1"]
  };

  schoolData.unshift(newClub);
  state.joinedSchool = newClub.id;
  closeCreateClubModal();
  toast(`🏫 '${name}' 클럽이 생성 및 선택되었습니다!`);
  save(); render();
}

/* @닉네임 제보 시스템 */
function openReportModal() { document.getElementById("reportModal").classList.add("show"); }
function closeReportModal() { document.getElementById("reportModal").classList.remove("show"); }

function submitReport() {
  const name = document.getElementById("reportName").value.trim();
  const region = document.getElementById("reportRegion").value;
  const desc = document.getElementById("reportDesc").value.trim();

  if (!name || !desc) { toast("유산 이름과 설명을 작성해주세요."); return; }

  const reportItem = {
    id: "rep_" + Date.now(),
    name: name,
    region: region,
    desc: desc,
    user: "@" + state.nickname,
    status: "검토 대기 중",
    date: new Date().toLocaleDateString()
  };

  state.reports.unshift(reportItem);
  updateClubMissionProgress('m4');
  closeReportModal();
  toast(`📢 ${reportItem.user} 님의 제보가 접수되었습니다!`);
  save(); render();
}

/* 관리자 툴 */
let adminCurrentTab = 'review';
function openAdminReviewModal() { switchAdminTab('review'); document.getElementById("adminReviewModal").classList.add("show"); }
function closeAdminReviewModal() { document.getElementById("adminReviewModal").classList.remove("show"); }

function switchAdminTab(tab) {
  adminCurrentTab = tab;
  document.getElementById("adminTab1").className = `admin-tab-btn ${tab === 'review' ? 'active' : ''}`;
  document.getElementById("adminTab2").className = `admin-tab-btn ${tab === 'add' ? 'active' : ''}`;
  
  const container = document.getElementById("adminTabContent");
  if (tab === 'review') {
    const pending = state.reports.filter(r => r.status === "검토 대기 중");
    container.innerHTML = pending.length === 0 ? '<div style="font-size:12px; color:#888; text-align:center; padding:16px;">대기 중인 제보가 없습니다.</div>' :
      pending.map(rep => `
        <div class="admin-review-card">
          <div style="font-weight:900; font-size:13px;">${rep.name} (${rep.region})</div>
          <div style="font-size:11px; color:#e05627; margin:2px 0 6px 0;">작성자: ${rep.user}</div>
          <p style="font-size:11px; color:#555; margin:0;">${rep.desc}</p>
          <div class="admin-review-actions">
            <button class="btn-approve" onclick="approveReport('${rep.id}')">✅ 승인 (도감 추가)</button>
            <button class="btn-reject" onclick="rejectReport('${rep.id}')">❌ 거절하기</button>
          </div>
        </div>
      `).join('');
  } else {
    container.innerHTML = `
      <label class="input-label">유산 이름</label>
      <input type="text" id="adminAddName" class="modal-input" placeholder="유산 이름">
      <label class="input-label" style="margin-top:8px;">설명</label>
      <textarea id="adminAddDesc" class="modal-textarea" placeholder="유산 설명"></textarea>
      <button class="btn-primary-orange" style="margin-top:10px;" onclick="adminDirectAdd()">즉시 추가하기</button>
    `;
  }
}

function approveReport(repId) {
  const rep = state.reports.find(r => r.id === repId);
  if (!rep) return;
  rep.status = "승인 완료";
  heritageData.unshift({
    id: "h_" + Date.now(),
    name: rep.name,
    region: rep.region,
    subRegion: `${rep.region} 유적지`,
    era: "미상(제보)",
    desc: rep.desc,
    icon: "🏛️",
    bg: "#1f8a70"
  });
  toast(`🎉 '${rep.name}' 승인 완료!`);
  closeAdminReviewModal(); save(); render();
}

function rejectReport(repId) {
  const rep = state.reports.find(r => r.id === repId);
  if (rep) rep.status = "거절됨";
  closeAdminReviewModal(); save(); render();
}

function adminDirectAdd() {
  const name = document.getElementById("adminAddName").value.trim();
  const desc = document.getElementById("adminAddDesc").value.trim();
  if (!name) return;
  heritageData.unshift({
    id: "h_" + Date.now(),
    name: name,
    region: "강원",
    subRegion: "강원 춘천",
    era: "조선시대",
    desc: desc,
    icon: "🏛️",
    bg: "#e05627"
  });
  toast(`👑 '${name}' 직접 등록 완료!`);
  closeAdminReviewModal(); save(); render();
}

/* 클럽 채팅 제출 */
function sendClubChat() {
  const input = document.getElementById("clubChatInput");
  if (!input || !input.value.trim()) return;
  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
  
  state.clubChats.push({
    user: state.nickname,
    text: input.value.trim(),
    time: timeStr
  });
  input.value = "";
  save(); render();
}

/* 친구 프로필 열람 (배지 및 상세 정보 표기) */
function openMemberProfile(userId) {
  const user = allUserDB.find(u => u.id === userId) || { id: userId, nickname: userId, level: "🌱 문화유산 새싹", points: 100, visits: 2, icon: "👤", badges: ["b1"] };
  const isFriend = state.friends.includes(userId);

  document.getElementById("memberProfileTitle").textContent = `${user.nickname}님의 프로필`;
  document.getElementById("memberProfileBody").innerHTML = `
    <div style="text-align:center; padding:10px 0;">
      <div style="font-size:48px; margin-bottom:6px;">${user.icon}</div>
      <h3 style="margin:0 0 4px 0; font-size:18px;">${user.nickname}</h3>
      <span style="font-size:11px; background:#eee8df; padding:3px 8px; border-radius:10px; font-weight:700;">${user.level}</span>
    </div>

    <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin:14px 0;">
      <div style="background:#faf6f0; padding:12px; border-radius:12px; text-align:center;">
        <div style="font-size:16px; font-weight:900; color:#e05627;">🪙 ${user.points}P</div>
        <div style="font-size:11px; color:#888;">포인트</div>
      </div>
      <div style="background:#faf6f0; padding:12px; border-radius:12px; text-align:center;">
        <div style="font-size:16px; font-weight:900;">🏛️ ${user.visits}곳</div>
        <div style="font-size:11px; color:#888;">방문 유산</div>
      </div>
    </div>

    <div class="section-title" style="font-size:13px; margin-bottom:8px;">🎖️ 친구의 대표 배지</div>
    <div class="rep-badge-grid" style="margin-bottom:16px;">
      ${(user.badges || []).map(bId => {
        const b = badgePool.find(x => x.id === bId);
        return b ? `
          <div class="badge-badge-card">
            <div class="icon">${b.icon}</div>
            <div class="title">${b.title}</div>
          </div>
        ` : '';
      }).join('')}
    </div>

    ${userId !== "u1" ? `
      <button class="btn-primary-orange" onclick="toggleFriend('${userId}')">
        ${isFriend ? '🤝 친구 해제하기' : '➕ 친구 추가하기'}
      </button>
    ` : ''}
  `;

  document.getElementById("memberProfileModal").classList.add("show");
}

function closeMemberProfileModal() { document.getElementById("memberProfileModal").classList.remove("show"); }
function toggleFriend(userId) {
  const idx = state.friends.indexOf(userId);
  if (idx > -1) { state.friends.splice(idx, 1); toast("🤝 친구 해제되었습니다."); }
  else { state.friends.push(userId); toast("➕ 친구 추가되었습니다!"); }
  closeMemberProfileModal(); save(); render();
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
        <p>📜 조선시대 · 사적</p>
        <p>조선의 법궁, 정치와 왕실의 중심</p>
      </div>
    </div>

    <button class="btn-action-outline" onclick="openReportModal()" style="margin-top:10px;">
      📢 없는 유산 제보하기 (관리자 검토)
    </button>
  `;
}

function renderExplore() {
  const regions = ["전체보기", "강원", "경기", "서울", "경북", "충남", "전남", "제주"];
  const filtered = state.filterRegion === "전체보기" ? heritageData : heritageData.filter(h => h.region === state.filterRegion);

  return `
    <h2 class="page-title">문화유산 탐험</h2>
    <p class="page-sub">국가유산청 등록 유산을 방문하고 포인트를 모아보세요!</p>
    <div class="filter-scroll">
      ${regions.map(r => `<button class="filter-chip ${state.filterRegion === r ? 'active' : ''}" onclick="setFilter('${r}')">${r}</button>`).join('')}
    </div>
    <div>
      ${filtered.map(h => `
        <div class="heritage-card" onclick="openDetail('${h.id}')">
          <div class="heritage-icon" style="background:${h.bg}; color:white;">${h.icon}</div>
          <div class="heritage-info">
            <h4>${h.name}</h4>
            <div class="tag-group"><span class="tag region">${h.subRegion}</span><span class="tag era">${h.era}</span></div>
            <p style="font-size:11px; color:#888; margin:0;">${h.desc}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function setFilter(r) { state.filterRegion = r; save(); render(); }

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
            <span class="visit-badge ${isVisited ? 'visited' : 'unvisited'}">${isVisited ? '방문완료' : '🔒 미방문'}</span>
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
        <div class="club-title"><span>${currentSchool.icon || '🏫'}</span><span>${currentSchool.name}</span></div>
        <button class="club-change-btn" onclick="openClubModal()">⇄ 클럽 변경</button>
      </div>
      <p style="font-size:11px; opacity:0.9;">${currentSchool.desc || ''}</p>
      <div class="club-badge-row">
        <span class="club-tag-badge">${currentSchool.tag}</span>
        <span class="club-tag-badge">미션 ${completedMissions} / ${clubMissions.length}완료</span>
      </div>
      <div class="club-stats-grid">
        <div><div class="club-stat-val">${currentSchool.members}명</div><div class="club-stat-lbl">회원 수</div></div>
        <div><div class="club-stat-val">${currentSchool.points.toLocaleString()}P</div><div class="club-stat-lbl">클럽 포인트</div></div>
        <div><div class="club-stat-val">${currentSchool.visits}회</div><div class="club-stat-lbl">방문 기록</div></div>
        <div><div class="club-stat-val">2개</div><div class="club-stat-lbl">지역 ${currentSchool.region}</div></div>
      </div>
    </div>

    <div class="card">
      <div class="section-title">👥 클럽 멤버 목록 (클릭 시 프로필 열람)</div>
      <div style="margin-top:8px;">
        <div class="member-item-btn" onclick="openMemberProfile('u1')">
          <div class="member-item-left">🎓 <span>${state.nickname} (나)</span></div>
          <span style="font-size:11px; color:#e05627; font-weight:800;">내 프로필</span>
        </div>
        ${(currentSchool.memberList || []).map(mId => {
          const user = allUserDB.find(u => u.id === mId) || { nickname: mId, icon: "👤" };
          return `
            <div class="member-item-btn" onclick="openMemberProfile('${mId}')">
              <div class="member-item-left">${user.icon} <span>${user.nickname}</span></div>
              <span style="font-size:11px; color:#888;">프로필 보기 ></span>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <!-- 클럽 실시간 대화창 -->
    <div class="card">
      <div class="section-title">💬 클럽 멤버 실시간 대화</div>
      <div class="club-chat-box">
        ${state.clubChats.map(c => `
          <div class="chat-item"><strong>${c.user}:</strong> ${c.text} <span style="font-size:9px; color:#aaa;">(${c.time})</span></div>
        `).join('')}
      </div>
      <div style="display:flex; gap:6px;">
        <input type="text" id="clubChatInput" class="modal-input" placeholder="메시지를 입력하세요..." style="padding:8px 12px;">
        <button class="btn-primary-orange" style="width:auto; padding:8px 14px;" onclick="sendClubChat()">전송</button>
      </div>
    </div>

    <!-- 도전과제 자동 연동형 클럽 미션 구획 -->
    <div class="section-title" style="margin-bottom:2px;"><span>🎯 클럽 미션 (도전과제)</span></div>
    <div class="page-sub" style="margin-bottom:14px;">활동 내용이 클럽 미션으로 자동으로 누적 반영됩니다.</div>

    <div>
      ${clubMissions.map((m) => {
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

            <div class="mission-progress-bg">
              <div class="mission-progress-fill" style="width: ${percent}%;"></div>
            </div>

            <div class="mission-auto-status">
              <span>${percent}% 완수 · 내 기여 ${m.myContrib}회</span>
              <span class="auto-badge">🔥 실시간 자동 연동 중</span>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function openClubModal() {
  const modalList = document.getElementById("clubModalList");
  modalList.innerHTML = schoolData.map(s => `
    <div class="modal-school-item ${s.id === state.joinedSchool ? 'active' : ''}" onclick="selectSchoolClub('${s.id}')">
      <div><div style="font-weight:800; font-size:14px;">${s.icon || '🏫'} ${s.name}</div></div>
    </div>
  `).join('');
  document.getElementById("clubModal").classList.add("show");
}

function closeClubModal() { document.getElementById("clubModal").classList.remove("show"); }
function selectSchoolClub(sId) { state.joinedSchool = sId; closeClubModal(); save(); render(); }

/* [전체 복원] 프로필 탭 (활동 로그, 대표 배지, 테스트 도구 포함) */
function renderProfile() {
  const visitedCount = Object.keys(state.visits).length;
  const quizCount = Object.keys(state.quizzes).length;
  const collectionRate = Math.round((visitedCount / heritageData.length) * 100);

  return `
    <div class="profile-main-header">
      <div class="profile-user-row">
        <div class="profile-avatar-circle">🎓</div>
        <div class="profile-user-info">
          <h3><span>${state.nickname}</span> <span class="nickname-edit-icon" onclick="openNicknameModal()">✏️</span></h3>
          <span class="badge-label" onclick="openLevelRoadmapModal()">🌱 문화유산 새싹 (로드맵 보기)</span>
        </div>
      </div>

      <div class="level-progress-box" onclick="openLevelRoadmapModal()">
        <div class="level-progress-text"><span>현재 문화유산 새싹</span><span>상세 등급 로드맵 보기 ></span></div>
        <div class="level-bar-bg"><div class="level-bar-fill" style="width:40%;"></div></div>
      </div>
    </div>

    <div class="profile-stats-grid">
      <div class="stat-box-card"><div class="stat-box-val orange">🪙 ${state.points}P</div><div class="stat-box-lbl">총 포인트</div></div>
      <div class="stat-box-card"><div class="stat-box-val">🏛️ ${visitedCount}곳</div><div class="stat-box-lbl">방문 유산</div></div>
      <div class="stat-box-card"><div class="stat-box-val pink">🧠 ${quizCount}개</div><div class="stat-box-lbl">퀴즈 정답</div></div>
      <div class="stat-box-card"><div class="stat-box-val blue">📖 ${collectionRate}%</div><div class="stat-box-lbl">수집률</div></div>
    </div>

    <div class="card">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <div class="section-title">👑 관리자 제보 검토 & 직접 추가</div>
        <button class="btn-primary-orange" style="width:auto; padding:6px 12px; font-size:12px;" onclick="openAdminReviewModal()">관리자 열기</button>
      </div>
    </div>

    <div class="card">
      <div class="section-title">🤝 나의 친구 목록 (${state.friends.length}명)</div>
      <div style="margin-top:8px;">
        ${state.friends.map(fId => {
          const user = allUserDB.find(u => u.id === fId) || { nickname: fId, icon: "👤" };
          return `
            <div class="member-item-btn" onclick="openMemberProfile('${fId}')">
              <div class="member-item-left">${user.icon} <span>${user.nickname}</span></div>
              <span style="font-size:11px; color:#e05627; font-weight:800;">프로필 열람</span>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <div class="card">
      <div class="section-title">📢 내가 제보한 유산 현황</div>
      <div style="margin-top:8px;">
        ${state.reports.length === 0 ? '<div style="font-size:12px; color:#aaa; text-align:center;">제보 내역이 없습니다.</div>' : ''}
        ${state.reports.map(rep => `
          <div style="padding:8px 10px; background:#faf6f0; border-radius:10px; margin-bottom:4px; font-size:12px;">
            <div style="display:flex; justify-content:space-between; font-weight:800;">
              <span>${rep.name}</span><span style="color:#e05627;">${rep.status}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="card">
      <div class="section-title">🎖️ 대표 배지</div>
      <div class="rep-badge-grid" style="margin-top:8px;">
        ${badgePool.map(b => `
          <div class="badge-badge-card ${b.unlocked ? '' : 'locked'}">
            <div class="icon">${b.unlocked ? b.icon : '🔒'}</div>
            <div class="title">${b.title}</div>
            <div class="desc">${b.desc}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="card">
      <div class="section-title">📜 최근 활동 기록</div>
      <div class="activity-list">
        ${state.activities.map(a => `
          <div class="activity-item">
            <div>
              <div class="activity-title">${a.title}</div>
              <div class="activity-time">${a.time}</div>
            </div>
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

function resetTestData() { state.quizzes = { h1: 0 }; state.visits = {}; toast("✏️ 데이터 초기화 완료"); save(); render(); }
function fullReset() { localStorage.removeItem("heritageGO_v18"); location.reload(); }

/* [전체 복원] 문화유산 상세화면 (GPS 50m 제한, AI 도우미, 변화 기록 전체) */
function renderHeritageDetail(id) {
  const h = heritageData.find(x => x.id === id) || heritageData[0];
  const isVisited = state.visits[h.id];
  const quizSolved = state.quizzes[h.id] !== undefined;
  const selectedOpt = state.quizzes[h.id];

  if (!state.aiChat[h.id]) {
    state.aiChat[h.id] = [{ sender: "ai", text: `안녕! 나는 ${h.name}을 알려주는 역사 도우미야.` }];
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
          </div>
        </div>
      </div>
      <p class="detail-desc">${h.desc}</p>
    </div>

    <!-- 1. 지도 API & GPS 방문 인증 (50m 제한) -->
    <div class="card">
      <div class="section-title">📍 실시간 지도 및 GPS 방문 인증 (50m 이내)</div>
      <div id="mapContainer" class="map-container"></div>
      <div class="gps-info-box" id="gpsDistanceText"><span>📡 현장 사진 첨부 및 유산 50m 이내 위치 필요</span></div>

      <div class="upload-wrapper">
        <div class="upload-wrapper-title">📷 현장 인증 사진 첨부 (필수)</div>
        <div class="upload-box" onclick="triggerFileUpload('visitFile')">
          <div id="visitPreviewText">📸 사진 업로드하기</div>
          <img id="visitImgPreview" style="display:none;" />
          <input type="file" id="visitFile" accept="image/*" style="display:none;" onchange="handleImagePreview(this, 'visitImgPreview', 'visitPreviewText')" />
        </div>
      </div>

      <button class="btn-primary-orange" onclick="verifyGPSVisit('${h.id}')">📡 50m 위치 검증 및 방문 인증</button>
    </div>

    <!-- 2. 역사 퀴즈 -->
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
        ${quizSolved ? `<div class="quiz-result-box"><p class="quiz-result-desc">${h.quiz.explanation}</p></div>` : ''}
      </div>
    ` : ''}

    <!-- 3. AI 역사 도우미 모듈 -->
    <div class="ai-card-container">
      <div class="ai-header">
        <div class="ai-header-info">
          <span class="ai-header-icon">🤖</span>
          <div class="ai-header-title">AI 역사 도우미</div>
        </div>
        <button class="ai-reset-btn" onclick="resetAIChat('${h.id}')">🔄 초기화</button>
      </div>

      <div class="ai-chat-body" id="aiChatLog">
        ${chatLogs.map(log => `<div class="${log.sender === 'ai' ? 'chat-bubble-ai' : 'chat-bubble-user'}">${log.text}</div>`).join('')}
      </div>

      <div class="ai-preset-grid">
        <button class="ai-preset-btn" onclick="askAIPreset('${h.id}', '왜 중요한가요?')">💡 왜 중요한가요?</button>
        <button class="ai-preset-btn" onclick="askAIPreset('${h.id}', '쉽게 설명해주세요')">✨ 쉽게 설명해주세요</button>
      </div>
    </div>

    <!-- 4. 연결된 탐험 루트 -->
    ${connectedRoutes.length > 0 ? `
      <div class="card">
        <div class="section-title">🗺️ 연결된 탐험 루트</div>
        <div class="route-chip-group">
          ${connectedRoutes.map(r => `<div class="route-chip" onclick="openRoute('${r.id}')">${r.icon} ${r.name}</div>`).join('')}
        </div>
      </div>
    ` : ''}

    <!-- 5. 변화 기록 남기기 -->
    <div class="card">
      <div class="section-title">🔄 변화 기록 남기기</div>
      <div class="change-tag-grid" style="margin-top:8px;">
        ${["주변 환경 변화", "안내판 변화", "시설물 변화"].map(tag => `
          <div class="change-tag-btn ${state.selectedChangeTag === tag ? 'active' : ''}" onclick="selectChangeTag('${tag}')">${tag}</div>
        `).join('')}
      </div>
      <textarea class="change-textarea" placeholder="직접 관찰한 사실을 메모로 남겨보세요."></textarea>
      <button class="btn-primary-orange btn-pink-gradient" onclick="submitChangeRecord()">변화 기록 저장하기</button>
    </div>
  `;
}

function renderRouteDetail(routeId) {
  const r = routeData.find(x => x.id === routeId) || routeData[0];
  const totalSteps = r.steps.length;
  const visitedSteps = r.steps.filter(hId => state.visits[hId]).length;

  return `
    <div class="detail-banner" style="background:${r.bg};">
      <div style="font-size:32px;">${r.icon}</div>
      <h2 style="font-size:20px; font-weight:900; margin:4px 0;">${r.name}</h2>
      <p style="font-size:12px; margin:0;">${r.desc}</p>
    </div>

    <div class="card">
      <div class="section-title">🗺️ 루트 스텝</div>
      <div style="display:flex; flex-direction:column; gap:10px; margin-top:8px;">
        ${r.steps.map((hId, idx) => {
          const h = heritageData.find(x => x.id === hId);
          return `
            <div style="display:flex; justify-content:space-between; align-items:center; background:#faf8f5; padding:10px 14px; border-radius:12px;">
              <div><strong>${idx + 1}. ${h.name}</strong></div>
              <button style="font-size:12px; color:#e05627; font-weight:800;" onclick="openDetail('${h.id}')">방문하기 ></button>
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

function selectChangeTag(tag) { state.selectedChangeTag = tag; save(); render(); }

function submitVisit(id) {
  state.visits[id] = true;
  state.points += 10;
  state.activities.unshift({ type: "visit", title: "유산 현장 인증 완료 (+10P)", time: new Date().toLocaleString() });
  updateClubMissionProgress('m1');
  toast("📸 50m 현장 방문 인증 완료! (+10P)");
  save(); render();
}

function answerQuiz(heritageId, selectedIdx) {
  const h = heritageData.find(x => x.id === heritageId);
  if (!h || !h.quiz) return;
  if (state.quizzes[heritageId] !== undefined) { toast("이미 푼 퀴즈입니다."); return; }
  state.quizzes[heritageId] = selectedIdx;
  if (selectedIdx === h.quiz.answer) {
    state.points += 20;
    state.activities.unshift({ type: "quiz", title: `${h.name} 퀴즈 정답 (+20P)`, time: new Date().toLocaleString() });
    updateClubMissionProgress('m2');
    toast("🎉 정답입니다! (+20P)");
  } else { toast("❌ 오답입니다."); }
  save(); render();
}

function askAIPreset(heritageId, questionText) {
  const h = heritageData.find(x => x.id === heritageId);
  if (!h) return;
  state.aiChat[heritageId].push({ sender: "user", text: questionText });
  const aiAnswer = (h.aiPresetResponses && h.aiPresetResponses[questionText]) ? h.aiPresetResponses[questionText] : `${h.name} 관련 답변입니다.`;
  state.aiChat[heritageId].push({ sender: "ai", text: aiAnswer });
  save(); render();
}

function resetAIChat(heritageId) {
  const h = heritageData.find(x => x.id === heritageId);
  state.aiChat[heritageId] = [{ sender: "ai", text: `안녕! 나는 ${h.name}을 알려주는 역사 도우미야.` }];
  toast("💬 대화 초기화 완료");
  save(); render();
}

function submitChangeRecord() {
  updateClubMissionProgress('m3');
  toast("🔄 변화 기록 저장 완료!");
  save(); render();
}

function render() {
  document.getElementById("headerPoints").textContent = state.points;
  const headerTitle = document.getElementById("headerTitle");
  
  if (state.viewSchoolClub) headerTitle.innerHTML = `<button class="header-back-btn" onclick="goBack()">← 학교 클럽</button>`;
  else if (state.routeId) headerTitle.innerHTML = `<button class="header-back-btn" onclick="goBack()">← 탐험 루트</button>`;
  else if (state.detailId) headerTitle.innerHTML = `<button class="header-back-btn" onclick="goBack()">← 문화유산 상세</button>`;
  else headerTitle.innerHTML = `🏛️ 유산GO`;

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
  } else {
    if (state.tab === "home") content.innerHTML = renderHome();
    else if (state.tab === "explore") content.innerHTML = renderExplore();
    else if (state.tab === "collection") content.innerHTML = renderCollection();
    else if (state.tab === "ranking") content.innerHTML = renderRanking();
    else if (state.tab === "profile") content.innerHTML = renderProfile();
  }
}

render();
