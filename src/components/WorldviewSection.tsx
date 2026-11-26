import { useState } from 'react';
import { ArrowRight, Users } from 'lucide-react';
import { WORLDVIEW_PILLARS, type NarrativeMode } from '../data/medifitData';

export function WorldviewSection() {
  const [mode, setMode] = useState<NarrativeMode>('ir');

  const visiblePillars =
    mode === 'internal'
      ? WORLDVIEW_PILLARS.filter((pillar) => pillar.showInInternal !== false)
      : WORLDVIEW_PILLARS;

  return (
    <section id="overview" className="scroll-mt-16 py-20 lg:py-28 bg-[#F6F8FA] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header + Mode Switch */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-12 border-b border-slate-200">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-[#005B96] mb-3">
              기업개요 및 세계관 브리핑
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B192C] leading-tight">
              정밀 의료기기 기업의 외형 아래,<br className="hidden sm:inline" /> 치열한 실무가 공존하는 (주)메디핏
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              인간과 수인이 동등하게 살아가는 현대사회에서, (주)메디핏은 투자 유치와 신제품 상용화라는
              과제를 안고 3등급 바이오폴리머 의료기기 시장에 도전하고 있습니다.
            </p>
          </div>

          {/* Interactive Narrative Tone Segmented Control */}
          <div className="shrink-0">
            <span className="block text-xs font-medium text-slate-500 mb-2">
              브리핑 열람 모드
            </span>
            <div
              role="group"
              aria-label="브리핑 열람 모드 선택"
              className="inline-flex p-1 bg-slate-200/80 rounded-lg"
            >
              <button
                type="button"
                onClick={() => setMode('ir')}
                aria-pressed={mode === 'ir'}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  mode === 'ir'
                    ? 'bg-white text-[#0B192C] shadow-sm'
                    : 'text-slate-600 hover:text-[#0B192C]'
                }`}
              >
                대외 홍보 브리핑
              </button>
              <button
                type="button"
                onClick={() => setMode('internal')}
                aria-pressed={mode === 'internal'}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  mode === 'internal'
                    ? 'bg-[#0B192C] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#0B192C]'
                }`}
              >
                내부 실무 현황
              </button>
            </div>
          </div>
        </div>

        {/* Editorial Numbered Rows */}
        <div className="divide-y divide-slate-200">
          {visiblePillars.map((pillar, idx) => {
            const displayIndex = String(idx + 1).padStart(2, '0');
            const title = mode === 'ir' ? pillar.irTitle : pillar.internalTitle;
            const summary = mode === 'ir' ? pillar.irSummary : pillar.internalSummary;
            const highlights = mode === 'ir' ? pillar.irHighlights : pillar.internalHighlights;

            return (
              <article
                key={pillar.index}
                className="py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start"
              >
                <div className="lg:col-span-4">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono tabular-nums text-sm font-semibold text-[#005B96]">
                      {displayIndex}.
                    </span>
                    <span className="text-xs font-medium text-slate-500">{pillar.kicker}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-[#0B192C] leading-snug">{title}</h3>
                </div>

                <div className="lg:col-span-8 space-y-5">
                  <p className="text-base text-slate-700 leading-relaxed max-w-3xl">{summary}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {highlights.map((item) => (
                      <li
                        key={item}
                        className="bg-white border border-slate-200 rounded-lg p-4 text-sm text-slate-700 leading-relaxed"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        {/* Prominent Character Showcase Callout */}
        <div className="mt-8 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="space-y-1.5">
            <p className="text-xs font-semibold text-[#005B96]">핵심 인력 프로필</p>
            <h3 className="text-lg sm:text-xl font-bold text-[#0B192C]">
              {'{user}'}와 함께 일할 (주)메디핏 10인의 동료를 만나보세요
            </h3>
            <p className="text-sm text-slate-600">
              경영진·차세대바이오폴리머 연구팀·본사 지원·테크타워 공장 전 직원의 프로필을 한눈에 확인할 수 있습니다.
            </p>
          </div>
          <a
            href="#personnel"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-[#005B96] hover:bg-[#004675] rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0"
          >
            <Users className="w-4 h-4" aria-hidden="true" />
            직원 보기
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
