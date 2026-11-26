import { APPLY_URL } from '../data/medifitData';

export function Footer() {
  return (
    <footer className="bg-[#0B192C] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 lg:py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 pb-8 border-b border-white/10">
          <div className="space-y-2.5 max-w-md">
            <a href="#top" className="text-lg font-bold tracking-tight text-white">
              (주)메디핏 MEDIFIT
            </a>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              대표이사: 김모리 · 본사: 경기도 바이오산업단지 바이오랜드 305호 · 제1공장: 테크타워
              아파트형 공장 202호·203호
            </p>
          </div>

          <nav aria-label="하단 메뉴" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="#overview" className="hover:text-white transition-colors whitespace-nowrap">
              기업개요
            </a>
            <a href="#divisions" className="hover:text-white transition-colors whitespace-nowrap">
              사업영역
            </a>
            <a href="#personnel" className="hover:text-white transition-colors whitespace-nowrap">
              직원소개
            </a>
            <a href="#facilities" className="hover:text-white transition-colors whitespace-nowrap">
              사업장
            </a>
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-300 hover:text-white font-medium transition-colors whitespace-nowrap"
            >
              입사하러 가기
            </a>
          </nav>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-slate-400">
          <p>© 2026 MEDIFIT Co., Ltd. All rights reserved.</p>
          <p>인간·수인 공존 사회 표준 의료기기 연구개발 및 제조</p>
        </div>
      </div>
    </footer>
  );
}
