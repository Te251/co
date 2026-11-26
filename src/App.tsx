/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, ArrowUpRight, Users } from 'lucide-react';
import { APPLY_URL, CORPORATE_ASSETS, CORPORATE_METRICS } from './data/medifitData';
import { Header } from './components/Header';
import { SafeImage } from './components/SafeImage';
import { WorldviewSection } from './components/WorldviewSection';
import { BusinessDivisionsSection } from './components/BusinessDivisionsSection';
import { PersonnelSection } from './components/PersonnelSection';
import { FacilitiesAndContactSection } from './components/FacilitiesAndContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div id="top" className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />

      <main className="flex-1">
        {/* Hero Section: Asymmetric 2-Column Split + Full-Width 4-Column KPI Strip */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-12 pb-16 lg:pt-20 lg:pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
              {/* Left Narrative Column */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <p className="text-xs sm:text-sm font-medium text-[#005B96]">
                  경기도 바이오산업단지
                </p>

                <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[3.125rem] font-bold text-[#0B192C] leading-[1.16] tracking-tight">
                  인간과 수인의 건강한 일상을 설계하는 정밀 의료기기
                </h1>

                <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                  (주)메디핏은 저주파 마사지기·비염치료기 제조 역량을 바탕으로, 차세대
                  바이오폴리머(3등급 콘돔·개인용 윤활젤) 연구부터 자체 검증·인허가·생산까지
                  수행하는 바이오 헬스케어 전문 기업입니다.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  <a
                    href="#personnel"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-bold text-white bg-[#005B96] hover:bg-[#004675] rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0"
                  >
                    <Users className="w-5 h-5" aria-hidden="true" />
                    직원 보기 (10인)
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                  <a
                    href={APPLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 text-sm sm:text-base font-semibold text-[#0B192C] bg-white hover:bg-slate-50 border border-slate-300 hover:border-[#0B192C] rounded-lg transition-colors whitespace-nowrap shrink-0"
                  >
                    입사하러 가기
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Right Focal Visual Column */}
              <div className="lg:col-span-6">
                <div className="h-full min-h-[280px] sm:min-h-[360px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                  <SafeImage
                    src={CORPORATE_ASSETS.heroLab}
                    alt="(주)메디핏 경기도 바이오산업단지 기업부설연구소 전경"
                    fallbackLabel="(주)메디핏 기업부설연구소"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Full-Width 4-Column Key Figures Strip */}
            <div className="mt-14 pt-10 border-t border-slate-200">
              <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {CORPORATE_METRICS.map((metric) => (
                  <div key={metric.label} className="space-y-1.5">
                    <dt className="text-xs font-medium text-slate-500">{metric.label}</dt>
                    <dd className="flex items-baseline gap-1.5">
                      <span className="text-3xl font-bold font-mono tabular-nums text-[#0B192C]">
                        {metric.value}
                      </span>
                      <span className="text-xs font-mono font-medium text-[#005B96]">
                        {metric.unit}
                      </span>
                    </dd>
                    <p className="text-xs text-slate-500 leading-relaxed">{metric.detail}</p>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <WorldviewSection />
        <BusinessDivisionsSection />
        <PersonnelSection />
        <FacilitiesAndContactSection />
      </main>

      <Footer />
    </div>
  );
}
