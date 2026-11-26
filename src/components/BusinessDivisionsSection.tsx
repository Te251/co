import { BUSINESS_DIVISIONS, VERTICAL_PIPELINE } from '../data/medifitData';
import { SafeImage } from './SafeImage';

export function BusinessDivisionsSection() {
  const [biopolymer, humanHealth] = BUSINESS_DIVISIONS;

  return (
    <section id="divisions" className="scroll-mt-16 py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-semibold tracking-wide text-[#005B96] mb-3">
            핵심 사업영역 및 R&amp;D 파이프라인
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B192C] leading-tight">
            고기능 바이오폴리머부터 생활 의료기기까지
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            (주)메디핏은 3등급 생체접촉 의료기기 신사업과 안정적인 개인용 헬스케어 기기 사업의
            이원화 포트폴리오를 바탕으로, 자체 검증과 신속한 인허가 역량을 결합하고 있습니다.
          </p>
        </div>

        {/* Asymmetric 12-Column Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Featured Marquee Division: Biopolymer (7 cols) */}
          <article className="lg:col-span-7 bg-[#F6F8FA] border border-slate-200 rounded-xl overflow-hidden flex flex-col">
            <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-slate-200">
              <SafeImage
                src={biopolymer.imagePath}
                alt={biopolymer.imageAlt}
                fallbackLabel={biopolymer.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between gap-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span className="font-mono tabular-nums font-semibold text-[#005B96]">
                    {biopolymer.index}.
                  </span>
                  <span>{biopolymer.regulatoryClass}</span>
                  <span aria-hidden="true">·</span>
                  <span>{biopolymer.teamName}</span>
                </div>
                <h3 className="mt-2.5 text-xl sm:text-2xl font-bold text-[#0B192C]">
                  {biopolymer.title}
                </h3>
                <p className="mt-1.5 text-sm font-medium text-[#005B96]">{biopolymer.subtitle}</p>
                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {biopolymer.description}
                </p>
              </div>

              <div className="pt-5 border-t border-slate-200">
                <h4 className="text-xs font-semibold text-slate-500 mb-3">핵심 연구 항목</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  {biopolymer.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2.5">
                      <span className="font-mono text-xs text-[#005B96] mt-0.5">—</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          {/* Secondary Division: Human Health Solutions (5 cols) */}
          <article className="lg:col-span-5 bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col">
            <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 border-b border-slate-200">
              <SafeImage
                src={humanHealth.imagePath}
                alt={humanHealth.imageAlt}
                fallbackLabel={humanHealth.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between gap-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span className="font-mono tabular-nums font-semibold text-[#005B96]">
                    {humanHealth.index}.
                  </span>
                  <span>{humanHealth.regulatoryClass}</span>
                  <span aria-hidden="true">·</span>
                  <span>{humanHealth.teamName}</span>
                </div>
                <h3 className="mt-2.5 text-xl font-bold text-[#0B192C]">{humanHealth.title}</h3>
                <p className="mt-1.5 text-sm font-medium text-[#0D7A72]">{humanHealth.subtitle}</p>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  {humanHealth.description}
                </p>
              </div>

              <div className="pt-5 border-t border-slate-200">
                <h4 className="text-xs font-semibold text-slate-500 mb-3">주요 기술 역량</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  {humanHealth.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2.5">
                      <span className="font-mono text-xs text-[#0D7A72] mt-0.5">—</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>

        {/* Full-Width Vertical Integration Strip */}
        <div className="mt-6 bg-[#0B192C] text-white rounded-xl p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-8 border-b border-white/15">
            <div>
              <p className="text-xs font-mono text-sky-300 tracking-wide">03. VERTICAL PROCESS</p>
              <h3 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight">
                원스톱 자체 검증 · RA 인허가 · 직영 생산 체계
              </h3>
            </div>
            <p className="text-sm text-slate-300 max-w-md leading-relaxed">
              외부 공인 시험 의존도를 줄이고 연구팀의 밀착 테스트부터 식약처 인허가, 테크타워 공장
              생산까지 사내 부서가 긴밀히 연결됩니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            {VERTICAL_PIPELINE.map((item) => (
              <div key={item.step} className="space-y-2.5">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="font-mono tabular-nums font-semibold text-sky-300">
                    STEP {item.step}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{item.owner}</span>
                </div>
                <h4 className="text-base font-semibold text-white">{item.title}</h4>
                <p className="text-sm text-slate-300 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
