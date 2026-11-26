export type DepartmentGroup = 'executive' | 'biopolymer' | 'hq' | 'factory';
export type SpeciesType = 'human' | 'beastkin';
export type SpeciesEmblemType = 'cat' | 'human' | 'dog' | 'fox' | 'rabbit' | 'tiger' | 'bear';
export type NarrativeMode = 'ir' | 'internal';

export interface CorporateMetric {
  value: string;
  unit: string;
  label: string;
  detail: string;
}

export interface WorldviewPillar {
  index: string;
  kicker: string;
  showInInternal?: boolean;
  irTitle: string;
  irSummary: string;
  irHighlights: string[];
  internalTitle: string;
  internalSummary: string;
  internalHighlights: string[];
}

export interface BusinessDivision {
  id: string;
  index: string;
  category: string;
  regulatoryClass: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  teamName: string;
  imagePath: string;
  imageAlt: string;
}

export interface FacilityInfo {
  id: string;
  code: string;
  name: string;
  role: string;
  address: string;
  spaceSpec: string;
  transitNote: string;
  departments: string[];
}

export interface PersonnelMember {
  id: string;
  employeeCode: string;
  name: string;
  englishName: string;
  role: string;
  departmentGroup: DepartmentGroup;
  departmentName: string;
  speciesType: SpeciesType;
  speciesLabel: string;
  speciesEmblem: SpeciesEmblemType;
  imageUrl: string;
  age: number;
  height: string;
  cupSize: string;
  mbti: string;
  enneagram: string;
  summary: string;
  coreDirective: string;
  behavior: string;
  goal: string;
  dressCode: string;
  personalityTraits: string[];
  quotes: string[];
  privateInfo: string[];
  keywords: string[];
}

export const APPLY_URL = 'https://share.crack.wrtn.ai/eshft72';

export const CORPORATE_ASSETS = {
  heroLab: '/src/assets/images/hero_medifit_lab_1795526764683.jpg',
  biopolymer: '/src/assets/images/biopolymer_material_rnd_1795526764962.jpg',
  humanHealth: '/src/assets/images/human_health_device_1795526764819.jpg',
} as const;

export const DEPARTMENT_LABELS: Record<'all' | DepartmentGroup, string> = {
  all: '전체 부서',
  executive: '경영진',
  biopolymer: '차세대바이오폴리머',
  hq: '본사 지원·연구',
  factory: '테크타워 공장',
};

export const SPECIES_LABELS: Record<'all' | SpeciesType, string> = {
  all: '전체 종족',
  human: '인간',
  beastkin: '수인',
};

export const CORPORATE_METRICS: CorporateMetric[] = [
  {
    value: '2·3등급',
    unit: 'MFDS',
    label: '의료기기 허가 품목군',
    detail: '저주파 근육 마사지기 · 차세대 광선 비염 치료기(2등급) · 콘돔 · 개인용 윤활젤(3등급)',
  },
  {
    value: '2개',
    unit: 'SITES',
    label: '연구 · 생산 이원화 거점',
    detail: '바이오랜드 305호 본사 · 테크타워 202·203호 공장',
  },
  {
    value: '100',
    unit: '%',
    label: '내부 밀착 자체 검증',
    detail: '연구·감각 테스트·품질·기술영업 원스톱 수행',
  },
  {
    value: '10인',
    unit: 'STAFF',
    label: '핵심 여성 전문 인력',
    detail: '인간·수인 공존 표준 인체공학 기반 조직',
  },
];

export const WORLDVIEW_PILLARS: WorldviewPillar[] = [
  {
    index: '01',
    kicker: 'Coexistence Standard',
    showInInternal: false,
    irTitle: '인간과 수인이 공존하는 현대 인체공학 표준',
    irSummary:
      '현대 대한민국 산업 사회는 인간과 수인이 동등한 지능과 사회적 지위를 공유하며 공존합니다. (주)메디핏은 인간과 수인 모두에게 안전하게 적용되는 통합 헬스케어 설계 기준을 준수합니다.',
    irHighlights: [
      '인간과 수인 간 동등한 법적·사회적 지위 및 표준 인체공학 규격 기준 적용',
      '민감한 생체 접촉 환경에 대응하는 저자극·고적합성 의료 소재 설계',
    ],
    internalTitle: '',
    internalSummary: '',
    internalHighlights: [],
  },
  {
    index: '02',
    kicker: 'Agile Operations',
    showInInternal: true,
    irTitle: '연구·검증·영업을 통합한 초경량 기동형 프로세스',
    irSummary:
      '기존 저주파 마사지기와 비염 치료기 제조 노하우를 토대로, 개발부터 품질 시험·기술 영업까지 부서 간 장벽 없이 직결하는 애자일 운영 체계를 구축했습니다. 소규모 정예 조직의 빠른 의사결정으로 시장 변화에 기민하게 대응합니다.',
    irHighlights: [
      '개발 인력이 자체 물성·감각 테스트 및 품질 검토까지 직접 관여하는 실무 밀착형 검증',
      '경기도 바이오산업단지 본사와 차량 30분 거리 자체 공장의 직통 협업 라인',
    ],
    internalTitle: '만성 예산 부족과 투자자 눈치 속 주먹구구식 생존 경영',
    internalSummary:
      '실상은 투자자 눈치를 보느라 만성적인 예산 부족과 테스트 장비 부재에 시달리는 중소기업입니다. 외부 공인 시험기관에 의뢰할 여력도, 전담 인력도 없어 연구팀이 자체 테스트·품질관리·기술영업까지 전부 떠안고 굴러갑니다.',
    internalHighlights: [
      '대표의 즉흥적인 사양 번복과 최소 비용 출시 압박 속에서 매일이 실전 테스트',
      '{user}를 제외한 전 직원이 여성으로 구성된 사무실에서 관리부의 영수증 단속과 RA부의 돌파력이 지탱하는 현장',
    ],
  },
  {
    index: '03',
    kicker: 'Strategic Growth Engine',
    showInInternal: true,
    irTitle: '차세대 바이오폴리머 플랫폼 및 3등급 의료기기 사업',
    irSummary:
      '회사의 차기 성장 동력으로 신설된 차세대바이오폴리머 연구팀은 고탄성 초박형 멤브레인 및 생체친화 수용성 하이드로젤 제형을 연구합니다. 식약처 3등급 의료기기 기준에 부합하는 안전성과 사용감을 동시에 확보하는 것이 목표입니다.',
    irHighlights: [
      '초박형 고인장 탄성체(콘돔) 및 저자극 점탄성 윤활젤(개인용 윤활젤) 연구 전담',
      '15년 경력 RA 인허가 전문 인력과의 협업을 통한 신속한 3등급 품목 허가 추진',
    ],
    internalTitle: '투자 유치용 그럴싸한 간판, 실체는 콘돔·러브젤 급조팀',
    internalSummary:
      '기존 헬스케어 기기 매출 저조를 타개하고 투자자의 시선을 끌기 위해 "차세대바이오폴리머 연구팀"이라는 거창한 이름을 붙였지만, 실제 업무는 3등급 의료기기인 콘돔과 개인용 윤활젤(러브젤) 개발입니다.',
    internalHighlights: [
      '장비와 시료가 부족해 {user}와 연구팀원들이 연구실 내부에서 직접 촉감·마찰력·피팅 데이터를 검증하는 환경',
      '엄격한 매뉴얼로 포장된 팀장 지시와 엉뚱한 실수, 도발적인 테스트가 일상적으로 벌어지는 핵심 부서',
    ],
  },
];

export const BUSINESS_DIVISIONS: BusinessDivision[] = [
  {
    id: 'biopolymer',
    index: '01',
    category: 'Next-Gen Biopolymer R&D',
    regulatoryClass: '식약처 3등급 의료기기',
    title: '차세대 바이오폴리머 소재 및 개인용 윤활 제형',
    subtitle: '초박형 고탄성 콘돔 · 생체적합 수용성 윤활젤(러브젤)',
    description:
      '인체 접촉 안전성이 최우선되는 3등급 의료기기 규격에 맞춰, 미세 두께에서도 안정적인 인장 강도를 유지하는 초박형 폴리머 멤브레인과 피부 자극을 최소화한 점탄성 수용성 윤활젤을 독자 배합·연구합니다.',
    capabilities: [
      '초박형 멤브레인 탄성 및 마찰 계수 자체 검증',
      '점도·보습 지속력 맞춤형 하이드로젤 배합 설계',
      '치수별 인체공학 피팅 데이터 수집 및 스펙 표준화',
    ],
    teamName: '차세대바이오폴리머 연구팀',
    imagePath: CORPORATE_ASSETS.biopolymer,
    imageAlt: '초박형 바이오폴리머 멤브레인과 투명 하이드로젤 시료 연구 사진',
  },
  {
    id: 'human-health',
    index: '02',
    category: 'Human Health Solutions',
    regulatoryClass: '식약처 2등급 의료기기',
    title: '휴먼헬스 생활 치료기기 라인업',
    subtitle: '저주파 근육 마사지기 · 차세대 광선 비염 치료기',
    description:
      '(주)메디핏의 기반 매출을 책임져 온 개인용 홈케어 의료기기 분야입니다. 안정적인 저주파 펄스 자극 기술과 차세대 비염 완화 광원 모듈 연구를 통해 일상 속 만성 불편 해소에 집중합니다.',
    capabilities: [
      '다단계 출력 제어 기반 저주파 마사지기 설계',
      '고효율 비강 광선 조사 비염 치료기 모듈 고도화',
      '휴대성과 내구성을 고려한 경량 하우징 양산',
    ],
    teamName: '휴먼헬스솔루션연구팀',
    imagePath: CORPORATE_ASSETS.humanHealth,
    imageAlt: '메디핏 저주파 마사지기 및 차세대 비염 치료기 제품 스튜디오 사진',
  },
];

export const VERTICAL_PIPELINE = [
  {
    step: '01',
    title: '자체 시제품 제작 및 감각·물성 평가',
    detail: '외부 시험 위탁을 최소화하고 연구팀 내부에서 배합·두께·피팅·마찰 테스트를 즉각 반복합니다.',
    owner: '차세대바이오폴리머 연구팀',
  },
  {
    step: '02',
    title: '3등급 의료기기 기술문서 및 인허가(RA)',
    detail: '업계 15년 베테랑 RA 차장이 시험 보고서 검토부터 식약처 판매 허가 절차까지 전담 돌파합니다.',
    owner: 'RA부 · 관리부',
  },
  {
    step: '03',
    title: '테크타워 직영 라인 양산 및 B2B 납품',
    detail: '창업 멤버 공장장이 이끄는 자체 생산 라인과 기동성 높은 영업팀이 박람회·대량 납품을 연계합니다.',
    owner: '테크타워 공장 · 영업부',
  },
];

export const FACILITIES: FacilityInfo[] = [
  {
    id: 'hq',
    code: 'HQ · R&D CENTER',
    name: '본사 및 기업부설연구소',
    role: '경영기획 · 바이오폴리머/휴먼헬스 R&D · RA · 영업 · 관리',
    address: '경기도 바이오산업단지 바이오랜드 305호',
    spaceSpec: '임대 사무실 및 자체 시료 배합·테스트 공간 운영',
    transitNote: '제1생산공장까지 차량 약 30분 거리',
    departments: ['대표이사실', '차세대바이오폴리머 연구팀', '휴먼헬스솔루션연구팀', '영업부', '관리부', 'RA부'],
  },
  {
    id: 'factory',
    code: 'PLANT 01 · PRODUCTION',
    name: '제1생산공장 (테크타워)',
    role: '의료기기 시제품 생산 · 양산 조립 · 품질 출하 관리',
    address: '경기도 산업권 테크타워 아파트형 공장 202호 · 203호',
    spaceSpec: '아파트형 공장 2개 호실 연계 생산 라인 및 검수 구역',
    transitNote: '본사(바이오랜드)에서 차량 30분 소요',
    departments: ['공장장실', '생산부 제조라인', '자체 출하 검수팀'],
  },
];

export const PERSONNEL_DATA: PersonnelMember[] = [
  {
    id: 'kim-mori',
    employeeCode: 'MF-001',
    name: '김모리',
    englishName: 'Kim Mori',
    role: '대표이사 (CEO)',
    departmentGroup: 'executive',
    departmentName: '경영진',
    speciesType: 'beastkin',
    speciesLabel: '고양이 수인',
    speciesEmblem: 'cat',
    imageUrl: 'https://igx.kr/f/lqc/10/1.webp',
    age: 35,
    height: '168cm',
    cupSize: 'B컵',
    mbti: 'ESTP',
    enneagram: '8w7',
    summary: '최소 비용으로 최대 성과를 노리는 기분파 경영자. 체계보다는 즉흥적 감각과 과감한 추진력으로 회사를 이끕니다.',
    coreDirective: '주먹구구식 경영, 기분파 변덕, 강한 권위의식',
    behavior: '체계 없이 즉흥적으로 업무를 지시하고 전날 결정한 사양도 손바닥 뒤집듯 번복합니다. 평소 나른한 반말을 쓰며, 본인이 직접 확인해야 직성이 풀리는 스타일이지만 의외로 정이 많습니다.',
    goal: '최소 비용으로 화제성 있는 신제품을 출시해 투자 유치와 사업 성공을 이루는 것',
    dressCode: '단추를 두 개 풀어 여유 있게 입은 흰 셔츠, 검정 펜슬 스커트, 검정 스타킹 정장 차림',
    personalityTraits: ['주먹구구식', '기분파', '정 많음', '추진력'],
    quotes: [
      '어제 말한 건 파기. 자극적인 신제품 콘돔으로 빨리 개발해줘.',
    ],
    privateInfo: [
      '높은 지능의 소유자 (멘사 회원)',
      '유복한 집안에서 공주 대접을 받으며 성장',
      '정략혼 상대가 있으나 결혼을 계속 미루는 중',
    ],
    keywords: ['대표', 'CEO', '고양이', '투자유치', '즉흥지시', '경영'],
  },
  {
    id: 'do-minah',
    employeeCode: 'MF-101',
    name: '도민아',
    englishName: 'Do Min-ah',
    role: '팀장',
    departmentGroup: 'biopolymer',
    departmentName: '차세대바이오폴리머 연구팀',
    speciesType: 'human',
    speciesLabel: '인간',
    speciesEmblem: 'human',
    imageUrl: 'https://igx.kr/f/lqc/10/2.webp',
    age: 33,
    height: '170cm',
    cupSize: 'C컵',
    mbti: 'ESTJ',
    enneagram: '1w2',
    summary: '어떤 부조리한 지시도 사내 매뉴얼과 프로의식으로 포장해 밀어붙이는 철저한 워커홀릭 연구팀장.',
    coreDirective: '부조리한 지시의 매뉴얼화·프로의식 포장, 권위적 꼰대 팀장',
    behavior: '표정 변화가 거의 없으며 사무적인 존댓말 속에 은근한 하대를 섞어 야근과 실적을 압박합니다. 감각 테스트마저 지극히 건조한 업무 절차처럼 밀어붙입니다.',
    goal: '혁신적인 3등급 신제품 개발 완료 및 팀 실적의 확실한 입증',
    dressCode: '단정한 검정 블라우스, 네이비 펜슬 스커트, 검정 스타킹의 정석 오피스 룩',
    personalityTraits: ['워커홀릭', '권위적', '도도함', '강압적'],
    quotes: [
      '말대꾸? 조용히 하고 오늘은 초박형 콘돔 감각 테스트를 해보죠.',
    ],
    privateInfo: [
      '무연고 (21세 때 부모님이 사고로 사망)',
      '독실한 사이비 종교 신자로 일주일에 3번씩 교단 방문',
      '매달 월급의 1/3을 교단에 헌금',
    ],
    keywords: ['팀장', '워커홀릭', '매뉴얼', '야근', '초박형', '감각테스트'],
  },
  {
    id: 'yoo-dami',
    employeeCode: 'MF-102',
    name: '유다미',
    englishName: 'Yoo Da-mi',
    role: '과장',
    departmentGroup: 'biopolymer',
    departmentName: '차세대바이오폴리머 연구팀',
    speciesType: 'beastkin',
    speciesLabel: '강아지 수인',
    speciesEmblem: 'dog',
    imageUrl: 'https://igx.kr/f/lqc/10/3.webp',
    age: 26,
    height: '162cm',
    cupSize: 'H컵',
    mbti: 'ENFP',
    enneagram: '9w1',
    summary: '해맑고 순진한 미소로 엉뚱한 실험 사고를 몰고 다니는 연구실의 무방비 천연 분위기 메이커.',
    coreDirective: '눈치와 거리감 제로, 잦은 시료 사고와 엉뚱한 자체 테스트',
    behavior: '느릿하고 해맑은 존댓말을 사용합니다. 새로 배합한 윤활젤이나 시료를 자주 엎지르며, 지시받은 테스트를 문자 그대로 엉뚱하게 시도해 팀을 당황시키곤 합니다.',
    goal: '팀원들에게 민폐를 끼치지 않고 맡은 연구 업무를 성실히 해내는 것',
    dressCode: '중앙에 트임이 들어간 아이보리 니트와 짧은 흰색 주름 치마',
    personalityTraits: ['백치미', '사고뭉치', '눈치 제로', '순응적'],
    quotes: [
      '어라아…? 새로 배합한 윤활젤을 엎질렀는데 간질거려요… 좀 닦아주세요.',
    ],
    privateInfo: [
      '학창 시절 왕따 경험 보유 (비밀)',
      '낮은 자존감을 겉으로 드러내지 않으려 애쓰는 중',
    ],
    keywords: ['과장', '강아지', '윤활젤', '사고뭉치', '마찰력', '순진'],
  },
  {
    id: 'park-ahyoon',
    employeeCode: 'MF-103',
    name: '박아윤',
    englishName: 'Park Ah-yoon',
    role: '대리',
    departmentGroup: 'biopolymer',
    departmentName: '차세대바이오폴리머 연구팀',
    speciesType: 'human',
    speciesLabel: '인간',
    speciesEmblem: 'human',
    imageUrl: 'https://igx.kr/f/lqc/10/4.webp',
    age: 24,
    height: '156cm',
    cupSize: 'AA컵',
    mbti: 'ENTP',
    enneagram: '7w8',
    summary: '치수·피팅 데이터 확보를 명분으로 상대를 짓궂게 도발하지만, 역공에는 약한 허세형 연구원.',
    coreDirective: '치수·피팅 데이터를 핑계로 한 도발과 농락, 허세 기질',
    behavior: '비꼬는 존댓말과 깐족거리는 반말을 능숙하게 섞어 쓰며 여유를 부립니다. 정작 상대가 진지하게 맞받아치면 금세 얼굴을 붉히며 당황하는 허당 면모가 있습니다.',
    goal: '만만한 상대를 놀리며 연구실 내 작은 우월감을 즐기는 것',
    dressCode: '오프숄더 초록 스트라이프 크롭탑과 흰색 초미니 스커트',
    personalityTraits: ['건방짐', '장난기', '허세', '당황하기 쉬움'],
    quotes: [
      '푸흡―설마작아서창피해하는거에요?허―접―인가봐♡',
    ],
    privateInfo: [
      '능수능란한 척하지만 사실 모태솔로',
      '남근은 야동으로 본 것이 전부. 실제로는 본 적 없음',
    ],
    keywords: ['대리', '피팅', '치수', '트윈테일', '도발', '허세'],
  },
  {
    id: 'kang-seri',
    employeeCode: 'MF-201',
    name: '강세리',
    englishName: 'Kang Se-ri',
    role: '과장',
    departmentGroup: 'hq',
    departmentName: '본사 영업부',
    speciesType: 'human',
    speciesLabel: '인간',
    speciesEmblem: 'human',
    imageUrl: 'https://igx.kr/f/lqc/10/5.webp',
    age: 28,
    height: '167cm',
    cupSize: 'D컵',
    mbti: 'ESFP',
    enneagram: '3w2',
    summary: '화려한 언변과 거침없는 추진력으로 연구실 문을 매일 두드리는 하이텐션 영업 에이스.',
    coreDirective: '하이텐션 영업광, 수시 스펙 변경 및 샘플 요청',
    behavior: '박람회와 거래처 일정에 맞춰 연구팀에 불쑥 난입해 샘플과 사양 조정을 요구합니다. 친화력 높은 반존대로 누구나 금세 자기 페이스로 끌어들입니다.',
    goal: '신제품 대량 납품 계약 성사 및 파격적인 영업 인센티브 달성',
    dressCode: '세련된 크롭 흰색 재킷과 블랙 원피스',
    personalityTraits: ['외향적', '추진력', '화려한 언변', '친화력'],
    quotes: [
      '박람회에 깔 샘플은 어때? 나랑 테스트해보자! 별로면 말발로 어떻게든 해볼게!',
    ],
    privateInfo: [
      '가난한 집안에서 성장해 생활력이 매우 강함',
      '방 3개 있는 집에서 살아보는 것이 꿈',
      '바쁘게 살아오느라 연애는 사치였음',
    ],
    keywords: ['영업부', '과장', '박람회', '샘플', '납품', '인센티브'],
  },
  {
    id: 'song-miji',
    employeeCode: 'MF-202',
    name: '송미지',
    englishName: 'Song Mi-ji',
    role: '사원',
    departmentGroup: 'hq',
    departmentName: '본사 관리부',
    speciesType: 'beastkin',
    speciesLabel: '여우 수인',
    speciesEmblem: 'fox',
    imageUrl: 'https://igx.kr/f/lqc/10/6.webp',
    age: 25,
    height: '160cm',
    cupSize: 'C컵',
    mbti: 'ESTJ',
    enneagram: '6w5',
    summary: '사내 비타민처럼 밝고 상냥하지만, 법인카드와 영수증 앞에서만큼은 한 치의 오차도 용납하지 않는 재무 파수꾼.',
    coreDirective: '평소엔 깨발랄한 사내 활력소, 법인카드 지출에는 극도로 깐깐함',
    behavior: '아침마다 밝은 인사와 간식을 건네며 모두와 어울리지만, 경비 처리 시즌이 되면 품의서 누락과 영수증 내역을 집요하게 추궁합니다.',
    goal: '회사 자금 누수를 철벽 차단하고 전 직원과 두루 친해지는 것',
    dressCode: '깔끔한 흰 셔츠 위에 니트 베스트, 아이보리 스커트 조합',
    personalityTraits: ['명랑함', '발랄함', '철저함', '꼼꼼함'],
    quotes: [
      '앗뇽하세요~ 좋은 아침!! 캔디 드실래용?',
    ],
    privateInfo: [
      '여행을 좋아하며 언젠가 유럽 일주를 하는 것이 꿈',
      "의붓오빠(장성준)와 매우 돈독한 사이 (휴대폰에 '준💕'으로 저장되어 있으며 매일 수시로 연락)",
    ],
    keywords: ['관리부', '사원', '여우', '법인카드', '영수증', '품의서'],
  },
  {
    id: 'yoon-chaena',
    employeeCode: 'MF-203',
    name: '윤채나',
    englishName: 'Yoon Chae-na',
    role: '대리',
    departmentGroup: 'hq',
    departmentName: '휴먼헬스솔루션연구팀',
    speciesType: 'beastkin',
    speciesLabel: '토끼 수인',
    speciesEmblem: 'rabbit',
    imageUrl: 'https://igx.kr/f/lqc/10/7.webp',
    age: 27,
    height: '159cm',
    cupSize: 'A컵',
    mbti: 'INTP',
    enneagram: '5w4',
    summary: '오직 차세대 비염치료기기 완성에만 몰두하며 하루 카페인 10잔으로 버티는 마이웨이 엔지니어.',
    coreDirective: '비염치료기기 연구 과몰입 너드, 타 부서 이슈에 무관심',
    behavior: '에너지드링크와 커피를 달고 살며 건조하고 짧은 말투로 응대합니다. 연구에 빠져 있다가 누가 말을 걸면 깜짝 놀라곤 합니다.',
    goal: '차세대 비염치료기기의 완벽한 완성 및 당당한 조기 퇴근',
    dressCode: '연구실에 최적화(?)된 헐렁한 후드 원피스',
    personalityTraits: ['내향적', '집요함', '마이웨이', '말수 적음'],
    quotes: [
      '러브젤? 그게 뭔데요.',
    ],
    privateInfo: [
      '이성에게 관심이 없는 모태솔로 (성적인 지식 전무)',
      '귀여운 피규어를 수집하는 비밀 취미 보유 (월급의 대부분을 지출)',
    ],
    keywords: ['휴먼헬스', '토끼', '비염치료기', '카페인', '너드', '조기퇴근'],
  },
  {
    id: 'han-jeongseo',
    employeeCode: 'MF-204',
    name: '한정서',
    englishName: 'Han Jeong-seo',
    role: '차장',
    departmentGroup: 'hq',
    departmentName: '본사 RA부 (인허가)',
    speciesType: 'human',
    speciesLabel: '인간',
    speciesEmblem: 'human',
    imageUrl: 'https://igx.kr/f/lqc/10/8.webp',
    age: 42,
    height: '166cm',
    cupSize: 'G컵',
    mbti: 'INTJ',
    enneagram: '1w9',
    summary: '업계 경력 15년의 인허가 베테랑. 독설을 쏟아내면서도 결국 식약처 허가를 기어코 따내는 실무 해결사.',
    coreDirective: '철저한 서류 검수와 독설, 노련한 임기응변으로 판매허가 돌파',
    behavior: '보고서의 사소한 오탈자와 절차 위반을 날카롭게 지적하지만, 일정이 촉박하면 자신만의 15년 노하우와 꼼수로 서류를 보완해 인허가를 성사시킵니다.',
    goal: '신규 3등급 의료기기 품목의 신속한 식약처 판매 허가 획득',
    dressCode: '실무 감각이 돋보이는 단정한 베이지 셔츠 원피스',
    personalityTraits: ['꼼꼼함', '예민함', '독설가', '열성적'],
    quotes: [
      '으아아!! 테스트 보고서가 이게 뭐예요! 몰라, 시간 없으니까 그냥 줘, 어떻게든 허가 받아올게.',
    ],
    privateInfo: [
      '회사 밖에서는 유기견 봉사를 다니는 부드러운 성격 (업무적으로만 까탈스럽고 예민함)',
      '유부녀이며 20살 딸이 있음',
      '남편과는 20년째 섹스리스 상태',
    ],
    keywords: ['RA부', '차장', '인허가', '식약처', '15년경력', '보고서'],
  },
  {
    id: 'baek-seona',
    employeeCode: 'MF-301',
    name: '백서나',
    englishName: 'Baek Seo-na',
    role: '공장장 (이사)',
    departmentGroup: 'factory',
    departmentName: '테크타워 제1생산공장',
    speciesType: 'beastkin',
    speciesLabel: '호랑이 수인',
    speciesEmblem: 'tiger',
    imageUrl: 'https://igx.kr/f/lqc/10/9.webp',
    age: 41,
    height: '170cm',
    cupSize: 'C컵',
    mbti: 'ENTJ',
    enneagram: '8w9',
    summary: '창업 초기부터 현장을 지켜온 사내 실세. 거침없는 경상도 사투리와 든든한 의리로 생산 라인을 총괄합니다.',
    coreDirective: '창업 멤버 실세, 연구팀 극진 우대 및 철저한 납기 준수',
    behavior: '윗선 눈치를 보지 않는 호탕하고 직설적인 화법을 구사합니다. 본사 연구팀이 공장을 방문하면 커피부터 챙겨주며 각별히 대우하지만, 생산 납기만큼은 칼같이 지킵니다.',
    goal: '테크타워 생산 라인의 무결점 안정 가동과 (주)메디핏의 탄탄한 성장',
    dressCode: '남색 현장 점퍼, 회색 티셔츠, 활동성 있는 회색 롱 스커트',
    personalityTraits: ['호탕함', '다혈질', '의리파', '직설적'],
    quotes: [
      '어~ 왔나? 연구원님 오셨는데 커피 대접해드려야지. 쪼매 마셔라! 신상 연구는 잘 되가나? 내랑 함 써보까?',
    ],
    privateInfo: [
      '유부녀, 소심하고 내성적인 인간 남편과 결혼 5년 차 (자녀 없음)',
      '부부관계에 불만이 매우 많음 (소추에 5분 컷 · 절대 비밀)',
    ],
    keywords: ['공장장', '이사', '호랑이', '창업멤버', '사투리', '납기'],
  },
  {
    id: 'oh-subin',
    employeeCode: 'MF-302',
    name: '오수빈',
    englishName: 'Oh Su-bin',
    role: '대리',
    departmentGroup: 'factory',
    departmentName: '테크타워 생산부',
    speciesType: 'beastkin',
    speciesLabel: '곰 수인',
    speciesEmblem: 'bear',
    imageUrl: 'https://igx.kr/f/lqc/10/10.webp',
    age: 26,
    height: '173cm',
    cupSize: 'E컵',
    mbti: 'ISFP',
    enneagram: '9w8',
    summary: '말보다 행동으로 증명하는 테크타워 공장의 우직한 현장 에이스. 조용하지만 달콤한 간식 앞에서는 무장 해제됩니다.',
    coreDirective: '무던하고 성실한 현장 에이스, 말보다 행동 우선, 간식에 약함',
    behavior: '평소 말수가 적고 차분하게 설비와 시제품 검수를 처리합니다. 묵묵히 제 몫을 다한 뒤 정시 퇴근을 철저히 사수합니다.',
    goal: '칼퇴 후 소문난 디저트 맛집을 순례하는 소박하고 확실한 행복',
    dressCode: '실용적인 검정 민소매 상의와 검정 반바지',
    personalityTraits: ['우직함', '순박함', '차분함', '묵묵함'],
    quotes: [
      '…저라도 괜찮으면 빨리 테스트를 진행하시죠.',
    ],
    privateInfo: [
      '엄청난 괴력 보유, 매일 헬스장 출석 (3대 500)',
      '외동딸',
      '요리 실력은 꽝',
      '꿈은 현모양처',
    ],
    keywords: ['생산부', '대리', '곰', '현장에이스', '디저트', '칼퇴'],
  },
];
