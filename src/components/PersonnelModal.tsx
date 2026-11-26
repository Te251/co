import { useEffect, useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { PersonnelMember } from '../data/medifitData';
import { SpeciesEmblem } from './SpeciesEmblem';
import { SafeImage } from './SafeImage';

interface PersonnelModalProps {
  member: PersonnelMember;
  currentIndex: number;
  totalCount: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function PersonnelModal({
  member,
  currentIndex,
  totalCount,
  onClose,
  onPrev,
  onNext,
}: PersonnelModalProps) {
  const [isPrivateOpen, setIsPrivateOpen] = useState(false);

  useEffect(() => {
    setIsPrivateOpen(false);
  }, [member.id]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        onPrev();
      } else if (event.key === 'ArrowRight') {
        onNext();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="personnel-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B192C]/55 backdrop-blur-xs"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-white border border-slate-200 rounded-xl w-full max-w-2xl max-h-[88vh] flex flex-col overflow-hidden shadow-xl">
        {/* Top Bar (Pinned) */}
        <div className="shrink-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-mono tabular-nums">
            <span>PERSONNEL DOSSIER</span>
            <span aria-hidden="true">·</span>
            <span>{member.employeeCode}</span>
            <span aria-hidden="true">·</span>
            <span>
              {currentIndex + 1} / {totalCount}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="프로필 창 닫기"
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-7 space-y-5">
          {/* Identity Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-5 border-b border-slate-200">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shrink-0">
              <SafeImage
                src={member.imageUrl}
                alt={`${member.name} (${member.role}) 프로필 이미지`}
                className="w-full h-full object-cover object-top"
                fallbackNode={
                  <SpeciesEmblem
                    emblem={member.speciesEmblem}
                    department={member.departmentGroup}
                    size="lg"
                  />
                }
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-[#005B96]">{member.departmentName}</p>
              <div className="mt-1 flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                <h3 id="personnel-modal-title" className="text-2xl font-bold text-[#0B192C]">
                  {member.name}
                </h3>
                <span className="text-sm font-medium text-slate-500">{member.englishName}</span>
                <span className="text-sm font-semibold text-slate-800">{member.role}</span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>{member.speciesLabel}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">{member.age}세</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">{member.height}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">{member.cupSize}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums font-semibold text-[#0B192C]">
                  {member.mbti} / {member.enneagram}
                </span>
              </p>
            </div>
          </div>

          {/* Core Directive & Behavior */}
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-semibold text-slate-500 mb-1.5">핵심 지침 및 업무 스타일</h4>
              <p className="text-sm font-semibold text-[#0B192C]">{member.coreDirective}</p>
              <p className="mt-1.5 text-sm text-slate-700 leading-relaxed">{member.behavior}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="bg-[#F6F8FA] rounded-lg p-4">
                <h4 className="text-xs font-semibold text-slate-500 mb-1.5">주요 업무 목표</h4>
                <p className="text-sm text-slate-800 leading-relaxed">{member.goal}</p>
              </div>
              <div className="bg-[#F6F8FA] rounded-lg p-4">
                <h4 className="text-xs font-semibold text-slate-500 mb-1.5">성격 키워드</h4>
                <p className="text-sm text-slate-800 leading-relaxed">
                  {member.personalityTraits.join(' · ')}
                </p>
              </div>
            </div>
          </div>

          {/* Dress Code */}
          <div className="pt-5 border-t border-slate-200 text-sm">
            <h4 className="text-xs font-semibold text-slate-500 mb-1.5">사내 근무복</h4>
            <p className="text-slate-700 leading-relaxed">{member.dressCode}</p>
          </div>

          {/* Representative Quote (Single) */}
          <div className="pt-5 border-t border-slate-200 space-y-2.5">
            <h4 className="text-xs font-semibold text-slate-500">대표 어록</h4>
            <blockquote className="bg-[#F6F8FA] border border-slate-200/80 rounded-lg px-4 py-3 text-sm text-slate-800 leading-relaxed">
              “{member.quotes[0]}”
            </blockquote>
          </div>

          {/* Collapsible Private Info Disclosure */}
          <div className="pt-5 border-t border-slate-200">
            <div className="border border-slate-200 rounded-lg overflow-hidden bg-slate-50/60">
              <button
                type="button"
                onClick={() => setIsPrivateOpen((prev) => !prev)}
                aria-expanded={isPrivateOpen}
                aria-controls="personnel-private-info"
                className="w-full px-4 py-3.5 flex items-center justify-between gap-3 text-left hover:bg-slate-100/80 transition-colors"
              >
                <span className="text-sm font-semibold text-[#0B192C]">🔒 개인정보</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 shrink-0">
                  {isPrivateOpen ? '숨기기' : '클릭하여 열람'}
                  <ChevronDown
                    aria-hidden="true"
                    className={`w-4 h-4 transition-transform duration-150 ${
                      isPrivateOpen ? 'rotate-180 text-[#005B96]' : ''
                    }`}
                  />
                </span>
              </button>

              {isPrivateOpen && (
                <div
                  id="personnel-private-info"
                  data-testid="private-info-panel"
                  className="px-4 pb-4 pt-3 border-t border-slate-200 bg-white"
                >
                  <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
                    {member.privateInfo.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span aria-hidden="true" className="font-mono text-xs text-slate-400 mt-0.5">
                          —
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer Navigation (Pinned) */}
        <div className="shrink-0 border-t border-slate-200 px-6 py-4 flex items-center justify-between gap-4 bg-slate-50">
          <button
            type="button"
            onClick={onPrev}
            disabled={totalCount <= 1}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium text-slate-700 hover:text-[#0B192C] hover:bg-slate-200/60 rounded-lg transition-colors disabled:opacity-40 whitespace-nowrap shrink-0"
          >
            <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            이전 인력
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs sm:text-sm font-medium text-white bg-[#0B192C] hover:bg-[#005B96] rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            목록으로 돌아가기
          </button>

          <button
            type="button"
            onClick={onNext}
            disabled={totalCount <= 1}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium text-slate-700 hover:text-[#0B192C] hover:bg-slate-200/60 rounded-lg transition-colors disabled:opacity-40 whitespace-nowrap shrink-0"
          >
            다음 인력
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
