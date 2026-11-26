import test from 'node:test';
import assert from 'node:assert/strict';
import {
  APPLY_URL,
  CORPORATE_METRICS,
  PERSONNEL_DATA,
  WORLDVIEW_PILLARS,
} from '../data/medifitData';
import {
  filterPersonnel,
  getDepartmentCounts,
  getSpeciesCounts,
  validateInquiryForm,
} from './personnelFilter';

test('dataset contains all 10 Medifit personnel members with cupSize, 1 quote, privateInfo, portrait URL, and no appearance field', () => {
  assert.equal(PERSONNEL_DATA.length, 10);
  const expectedNames = [
    '김모리',
    '도민아',
    '유다미',
    '박아윤',
    '강세리',
    '송미지',
    '윤채나',
    '한정서',
    '백서나',
    '오수빈',
  ];

  PERSONNEL_DATA.forEach((member, index) => {
    assert.equal(member.name, expectedNames[index]);
    assert.equal(member.imageUrl, `https://igx.kr/f/lqc/10/${index + 1}.webp`);
    assert.ok(member.cupSize.endsWith('컵'), `${member.name} should have a cupSize`);
    assert.equal('appearance' in member, false, `${member.name} should not have appearance field`);
    assert.equal(member.quotes.length, 1, `${member.name} should have exactly 1 representative quote`);
    assert.ok(member.privateInfo.length >= 2, `${member.name} should have privateInfo entries`);
  });

  const subin = PERSONNEL_DATA.find((m) => m.id === 'oh-subin');
  assert.ok(subin);
  assert.ok(subin.dressCode.includes('검정 반바지'));
  assert.equal(subin.dressCode.includes('롱 스커트'), false);
});

test('department counts match expected organization breakdown', () => {
  const counts = getDepartmentCounts(PERSONNEL_DATA);
  assert.deepEqual(counts, {
    all: 10,
    executive: 1,
    biopolymer: 3,
    hq: 4,
    factory: 2,
  });
});

test('species counts match human vs beastkin breakdown', () => {
  const counts = getSpeciesCounts(PERSONNEL_DATA);
  assert.deepEqual(counts, {
    all: 10,
    human: 4,
    beastkin: 6,
  });
});

test('filtering by biopolymer department returns Do Min-ah, Yoo Da-mi, and Park Ah-yoon', () => {
  const results = filterPersonnel(PERSONNEL_DATA, {
    department: 'biopolymer',
    species: 'all',
    query: '',
  });
  assert.deepEqual(
    results.map((m) => m.name),
    ['도민아', '유다미', '박아윤']
  );
});

test('combined department and species filter narrows to beastkin in biopolymer team', () => {
  const results = filterPersonnel(PERSONNEL_DATA, {
    department: 'biopolymer',
    species: 'beastkin',
    query: '',
  });
  assert.deepEqual(
    results.map((m) => m.name),
    ['유다미']
  );
});

test('search query matches MBTI, species, role, and keywords case-insensitively', () => {
  const mbtiMatch = filterPersonnel(PERSONNEL_DATA, {
    department: 'all',
    species: 'all',
    query: 'intp',
  });
  assert.deepEqual(
    mbtiMatch.map((m) => m.name),
    ['윤채나']
  );

  const keywordMatch = filterPersonnel(PERSONNEL_DATA, {
    department: 'all',
    species: 'all',
    query: '법인카드',
  });
  assert.deepEqual(
    keywordMatch.map((m) => m.name),
    ['송미지']
  );

  const emptyMatch = filterPersonnel(PERSONNEL_DATA, {
    department: 'all',
    species: 'all',
    query: '존재하지않는직원',
  });
  assert.equal(emptyMatch.length, 0);
});

test('inquiry form validation rejects empty or invalid inputs and accepts valid submission', () => {
  const emptyErrors = validateInquiryForm({
    name: '',
    organization: '',
    email: '',
    category: '투자·IR 문의',
    message: '',
  });
  assert.ok(emptyErrors.name);
  assert.ok(emptyErrors.email);
  assert.ok(emptyErrors.message);

  const invalidEmailErrors = validateInquiryForm({
    name: '김투자',
    organization: '바이오벤처스',
    email: 'not-an-email',
    category: '투자·IR 문의',
    message: '3등급 바이오폴리머 샘플 검토 요청드립니다.',
  });
  assert.equal(invalidEmailErrors.name, undefined);
  assert.ok(invalidEmailErrors.email);
  assert.equal(invalidEmailErrors.message, undefined);

  const validErrors = validateInquiryForm({
    name: '김투자',
    organization: '바이오벤처스',
    email: 'invest@bioventures.kr',
    category: '투자·IR 문의',
    message: '3등급 바이오폴리머 샘플 및 IR 미팅을 요청드립니다.',
  });
  assert.deepEqual(validErrors, {});
});

test('worldview pillars hide Coexistence Standard in internal mode, use {user}, and omit removed parentheticals', () => {
  const internalPillars = WORLDVIEW_PILLARS.filter((p) => p.showInInternal !== false);
  assert.equal(internalPillars.length, 2);
  assert.equal(
    internalPillars.some((p) => p.kicker === 'Coexistence Standard'),
    false
  );

  const allCopy = WORLDVIEW_PILLARS.map((p) =>
    [p.irTitle, p.irSummary, ...p.irHighlights, p.internalTitle, p.internalSummary, ...p.internalHighlights].join(' ')
  ).join(' ');

  assert.equal(allCopy.includes('동물 귀·꼬리 보유'), false);
  assert.equal(allCopy.includes('소동물 체형 비해당'), false);
  assert.equal(allCopy.includes('{user}'), true);
  assert.equal(APPLY_URL, 'https://share.crack.wrtn.ai/eshft72');

  const regulatoryMetric = CORPORATE_METRICS[0];
  assert.equal(regulatoryMetric.value, '2·3등급');
  assert.ok(regulatoryMetric.detail.includes('저주파 근육 마사지기'));
  assert.ok(regulatoryMetric.detail.includes('차세대 광선 비염 치료기(2등급)'));
  assert.ok(regulatoryMetric.detail.includes('3등급'));
});
