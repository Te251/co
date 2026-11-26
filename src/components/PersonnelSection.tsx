import { useMemo, useState } from 'react';
import { ArrowUpRight, Search, X } from 'lucide-react';
import {
  APPLY_URL,
  DEPARTMENT_LABELS,
  PERSONNEL_DATA,
  SPECIES_LABELS,
  type DepartmentGroup,
  type PersonnelMember,
  type SpeciesType,
} from '../data/medifitData';
import {
  filterPersonnel,
  getDepartmentCounts,
  getSpeciesCounts,
} from '../utils/personnelFilter';
import { SpeciesEmblem } from './SpeciesEmblem';
import { PersonnelModal } from './PersonnelModal';
import { SafeImage } from './SafeImage';

const DEPARTMENT_ORDER: Array<'all' | DepartmentGroup> = [
  'all',
  'executive',
  'biopolymer',
  'hq',
  'factory',
];

const SPECIES_ORDER: Array<'all' | SpeciesType> = ['all', 'human', 'beastkin'];

export function PersonnelSection() {
  const [department, setDepartment] = useState<'all' | DepartmentGroup>('all');
  const [species, setSpecies] = useState<'all' | SpeciesType>('all');
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const departmentCounts = useMemo(() => getDepartmentCounts(PERSONNEL_DATA), []);
  const speciesCounts = useMemo(() => getSpeciesCounts(PERSONNEL_DATA), []);

  const filteredMembers = useMemo(
    () => filterPersonnel(PERSONNEL_DATA, { department, species, query }),
    [department, species, query]
  );

  const selectedIndex = useMemo(
    () => (selectedId ? filteredMembers.findIndex((m) => m.id === selectedId) : -1),
    [filteredMembers, selectedId]
  );

  const selectedMember: PersonnelMember | null =
    selectedIndex >= 0 ? filteredMembers[selectedIndex] : null;

  const handleResetFilters = () => {
    setDepartment('all');
    setSpecies('all');
    setQuery('');
  };

  const handlePrevMember = () => {
    if (filteredMembers.length <= 1 || selectedIndex < 0) return;
    const prevIdx = (selectedIndex - 1 + filteredMembers.length) % filteredMembers.length;
    setSelectedId(filteredMembers[prevIdx].id);
  };

  const handleNextMember = () => {
    if (filteredMembers.length <= 1 || selectedIndex < 0) return;
    const nextIdx = (selectedIndex + 1) % filteredMembers.length;
    setSelectedId(filteredMembers[nextIdx].id);
  };

  const hasActiveFilters = department !== 'all' || species !== 'all' || query.trim() !== '';

  return (
    <section id="personnel" className="scroll-mt-16 py-20 lg:py-28 bg-[#F6F8FA] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-[#005B96] mb-3">
              핵심 인력 및 조직 디렉토리
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B192C] leading-tight">
              (주)메디핏을 움직이는 10인의 핵심 실무진
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              경영진부터 차세대바이오폴리머 연구팀, 본사 지원·인허가 부서, 테크타워 생산 공장까지
              각 부서별 담당자의 프로필과 성향을 한눈에 확인하실 수 있습니다.
            </p>
          </div>

          <p className="text-sm text-slate-600 font-mono tabular-nums shrink-0" data-testid="personnel-count">
            표시 인원 {filteredMembers.length} / {PERSONNEL_DATA.length}명
          </p>
        </div>

        {/* Interactive Filter & Search Controls */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Department Filter Tabs */}
            <div
              role="tablist"
              aria-label="부서별 필터"
              className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1 rounded-lg"
            >
              {DEPARTMENT_ORDER.map((deptKey) => {
                const isActive = department === deptKey;
                return (
                  <button
                    key={deptKey}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setDepartment(deptKey)}
                    className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-white text-[#0B192C] shadow-sm'
                        : 'text-slate-600 hover:text-[#0B192C]'
                    }`}
                  >
                    {DEPARTMENT_LABELS[deptKey]}{' '}
                    <span className="font-mono tabular-nums text-xs opacity-75">
                      ({departmentCounts[deptKey]})
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72 shrink-0">
              <label htmlFor="personnel-search" className="sr-only">
                인력 이름, 직급, MBTI, 키워드 검색
              </label>
              <Search
                aria-hidden="true"
                className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              />
              <input
                id="personnel-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="이름, 직급, MBTI, 키워드 검색"
                className="w-full h-10 pl-10 pr-9 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#005B96] transition-colors"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="검색어 지우기"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Species Sub-Filter & Active Reset */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
            <div role="group" aria-label="종족 필터" className="flex items-center gap-1.5">
              <span className="text-xs font-medium text-slate-500 mr-1.5">종족 구분</span>
              {SPECIES_ORDER.map((specKey) => {
                const isActive = species === specKey;
                return (
                  <button
                    key={specKey}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setSpecies(specKey)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-[#0B192C] text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                    }`}
                  >
                    {SPECIES_LABELS[specKey]}{' '}
                    <span className="font-mono tabular-nums opacity-80">
                      ({speciesCounts[specKey]})
                    </span>
                  </button>
                );
              })}
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-xs font-medium text-[#005B96] hover:text-[#004675] underline underline-offset-4 whitespace-nowrap shrink-0"
              >
                필터 초기화
              </button>
            )}
          </div>
        </div>

        {/* Profile Cards Grid */}
        {filteredMembers.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-xl p-12 text-center space-y-4">
            <p className="text-base font-semibold text-[#0B192C]">
              조건에 일치하는 인력 프로필이 없습니다.
            </p>
            <p className="text-sm text-slate-500">
              부서·종족 필터를 변경하거나 다른 검색어로 다시 조회해 주세요.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#0B192C] hover:bg-[#005B96] rounded-lg transition-colors"
            >
              필터 초기화
            </button>
          </div>
        ) : (
          <div
            data-testid="personnel-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredMembers.map((member) => (
              <article
                key={member.id}
                data-testid={`personnel-card-${member.id}`}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col hover:border-slate-300 transition-colors"
              >
                {/* Character Portrait */}
                <button
                  type="button"
                  onClick={() => setSelectedId(member.id)}
                  aria-label={`${member.name} 상세 프로필 열기`}
                  className="group relative aspect-square w-full overflow-hidden bg-slate-100 border-b border-slate-200 block text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#005B96]"
                >
                  <SafeImage
                    src={member.imageUrl}
                    alt={`${member.name} (${member.role}) 프로필 이미지`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                    fallbackNode={
                      <>
                        <SpeciesEmblem
                          emblem={member.speciesEmblem}
                          department={member.departmentGroup}
                          size="lg"
                        />
                        <span className="text-xs font-medium text-slate-500">{member.name}</span>
                      </>
                    }
                  />
                </button>

                <div className="p-6 flex-1 flex flex-col justify-between gap-5">
                  <div className="flex-1 flex flex-col gap-4">
                    {/* Card Header: Code + Department + Name + Role + Inline Metadata */}
                    <div className="min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-mono tabular-nums text-slate-400">
                          {member.employeeCode}
                        </span>
                        <span className="text-xs font-medium text-[#005B96] truncate">
                          {member.departmentName}
                        </span>
                      </div>
                      <div className="mt-1 flex items-baseline gap-2 flex-wrap">
                        <h3 className="text-lg font-bold text-[#0B192C]">{member.name}</h3>
                        <span className="text-sm font-medium text-slate-600">{member.role}</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-500 flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
                        <span>{member.speciesLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono tabular-nums">{member.age}세</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono tabular-nums">{member.height}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono tabular-nums">{member.cupSize}</span>
                      </p>
                    </div>

                    {/* Summary Prose */}
                    <p className="text-sm text-slate-700 leading-relaxed">{member.summary}</p>

                    {/* Structured Spec Metadata Row */}
                    <dl className="mt-auto grid grid-cols-2 gap-3 py-3.5 border-y border-slate-100 text-xs">
                      <div>
                        <dt className="text-slate-400 font-medium">성향 지표</dt>
                        <dd className="mt-1 font-mono tabular-nums font-medium text-slate-800">
                          {member.mbti} / {member.enneagram}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-slate-400 font-medium">핵심 성향</dt>
                        <dd className="mt-1 font-medium text-slate-800 truncate">
                          {member.personalityTraits.slice(0, 3).join(' · ')}
                        </dd>
                      </div>
                    </dl>

                    {/* Representative Quote Block (No border-l-4; soft inset surface) */}
                    <blockquote className="bg-[#F6F8FA] rounded-lg px-4 py-3 min-h-[4.5rem] flex items-center text-xs sm:text-sm text-slate-700 leading-relaxed">
                      “{member.quotes[0]}”
                    </blockquote>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-1 flex items-center justify-between gap-3">
                    <span className="text-xs text-slate-500 truncate">
                      목표: {member.goal}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedId(member.id)}
                      aria-label={`${member.name} 상세 프로필 보기`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#005B96] hover:text-[#0B192C] transition-colors whitespace-nowrap shrink-0 py-1.5"
                    >
                      상세 프로필
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Recruitment CTA Banner after Character Directory */}
        <div className="mt-12 bg-[#0B192C] text-white rounded-xl p-7 sm:p-9 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-mono text-sky-300 tracking-wide">CAREERS · MEDIFIT R&amp;D</p>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              차세대바이오폴리머 연구팀의 새 동료 {'{user}'}를 기다립니다
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              개성 넘치는 10인의 동료들과 함께하는 (주)메디핏 연구실에 지금 바로 출근해 보세요.
            </p>
          </div>
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-bold text-[#0B192C] bg-white hover:bg-sky-50 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            입사하러 가기
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Detailed Personnel Dossier Modal */}
      {selectedMember && (
        <PersonnelModal
          member={selectedMember}
          currentIndex={selectedIndex}
          totalCount={filteredMembers.length}
          onClose={() => setSelectedId(null)}
          onPrev={handlePrevMember}
          onNext={handleNextMember}
        />
      )}
    </section>
  );
}
