import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { APPLY_URL } from '../data/medifitData';

const NAV_ITEMS = [
  { label: '기업개요', href: '#overview' },
  { label: '사업영역', href: '#divisions' },
  { label: '직원소개', href: '#personnel' },
  { label: '사업장', href: '#facilities' },
] as const;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 h-16 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto h-full px-5 sm:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line corporate wordmark */}
        <a
          href="#top"
          className="text-lg font-bold tracking-tight text-[#0B192C] whitespace-nowrap shrink-0"
        >
          MEDIFIT
        </a>

        {/* Zone 2: 4 concise single-line navigation links */}
        <nav
          aria-label="주요 메뉴"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-1 hover:text-[#005B96] transition-colors whitespace-nowrap shrink-0"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary CTA action (desktop) + mobile menu button */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-[#0B192C] hover:bg-[#005B96] rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            입사하러 가기
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="모바일 메뉴"
          className="md:hidden bg-white border-b border-slate-200 px-5 py-4 space-y-1 shadow-sm"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 px-3 text-base font-medium text-slate-700 hover:text-[#005B96] hover:bg-slate-50 rounded-lg transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 w-full py-3 px-4 text-sm font-semibold text-white bg-[#0B192C] hover:bg-[#005B96] rounded-lg transition-colors"
            >
              입사하러 가기
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
