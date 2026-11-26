import type { DepartmentGroup, SpeciesEmblemType } from '../data/medifitData';

interface SpeciesEmblemProps {
  emblem: SpeciesEmblemType;
  department: DepartmentGroup;
  size?: 'md' | 'lg';
}

const DEPT_SURFACE: Record<DepartmentGroup, string> = {
  executive: 'bg-[#0B192C] text-white border-[#0B192C]',
  biopolymer: 'bg-[#EEF5FA] text-[#005B96] border-[#CFE2F0]',
  hq: 'bg-slate-100 text-slate-700 border-slate-200',
  factory: 'bg-[#EDF6F5] text-[#0D7A72] border-[#CBE4E1]',
};

export function SpeciesEmblem({ emblem, department, size = 'md' }: SpeciesEmblemProps) {
  const boxSize = size === 'lg' ? 'w-14 h-14' : 'w-12 h-12';
  const iconSize = size === 'lg' ? 'w-7 h-7' : 'w-6 h-6';

  return (
    <div
      aria-hidden="true"
      className={`${boxSize} rounded-lg border flex items-center justify-center shrink-0 ${DEPT_SURFACE[department]}`}
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={iconSize}
      >
        {emblem === 'human' && (
          <>
            <circle cx="16" cy="11.5" r="4.5" />
            <path d="M7.5 25.5c1.2-4.2 4.4-6.5 8.5-6.5s7.3 2.3 8.5 6.5" />
          </>
        )}
        {emblem === 'cat' && (
          <>
            <path d="M8 14L7 6.5l5.5 3.5" />
            <path d="M24 14l1-7.5-5.5 3.5" />
            <path d="M8 14a8 8 0 0 0 16 0c0-2.1-.8-3.8-2.2-5" />
            <path d="M12.5 10c1.1-.4 2.3-.6 3.5-.6s2.4.2 3.5.6" />
            <circle cx="13" cy="15.5" r="0.9" fill="currentColor" stroke="none" />
            <circle cx="19" cy="15.5" r="0.9" fill="currentColor" stroke="none" />
            <path d="M14.5 19.5c.8.6 2.2.6 3 0" />
          </>
        )}
        {emblem === 'dog' && (
          <>
            <path d="M9.5 11.5C6.5 12 5 16.5 6.5 20c1.2.4 2.5-.5 3-2" />
            <path d="M22.5 11.5c3 .5 4.5 5 3 8.5-1.2.4-2.5-.5-3-2" />
            <circle cx="16" cy="16" r="6.5" />
            <circle cx="13.5" cy="15" r="0.9" fill="currentColor" stroke="none" />
            <circle cx="18.5" cy="15" r="0.9" fill="currentColor" stroke="none" />
            <path d="M14.8 18.5h2.4" />
          </>
        )}
        {emblem === 'fox' && (
          <>
            <path d="M7 13L6.5 5.5l6.5 4.5" />
            <path d="M25 13l.5-7.5-6.5 4.5" />
            <path d="M7 13l9 12 9-12" />
            <path d="M13 10h6" />
            <circle cx="13" cy="15" r="0.9" fill="currentColor" stroke="none" />
            <circle cx="19" cy="15" r="0.9" fill="currentColor" stroke="none" />
          </>
        )}
        {emblem === 'rabbit' && (
          <>
            <path d="M12.5 13.5C11 9.5 11 5.5 12.8 5c1.5-.4 2.4 3.2 2.2 7.5" />
            <path d="M19.5 13.5c1.5-4 1.5-8-.3-8.5-1.5-.4-2.4 3.2-2.2 7.5" />
            <ellipse cx="16" cy="19" rx="6.5" ry="5.5" />
            <circle cx="13.5" cy="18.5" r="0.9" fill="currentColor" stroke="none" />
            <circle cx="18.5" cy="18.5" r="0.9" fill="currentColor" stroke="none" />
          </>
        )}
        {emblem === 'tiger' && (
          <>
            <path d="M9.5 10.5A3 3 0 1 1 12.5 8" />
            <path d="M22.5 10.5A3 3 0 1 0 19.5 8" />
            <circle cx="16" cy="16.5" r="7" />
            <path d="M16 9.5v3" />
            <path d="M9.5 16h2.5" />
            <path d="M20 16h2.5" />
            <path d="M14.2 19.5h3.6" />
          </>
        )}
        {emblem === 'bear' && (
          <>
            <circle cx="9.5" cy="10" r="2.8" />
            <circle cx="22.5" cy="10" r="2.8" />
            <circle cx="16" cy="17" r="7" />
            <ellipse cx="16" cy="19" rx="2.6" ry="2" />
            <circle cx="13.2" cy="15.2" r="0.9" fill="currentColor" stroke="none" />
            <circle cx="18.8" cy="15.2" r="0.9" fill="currentColor" stroke="none" />
          </>
        )}
      </svg>
    </div>
  );
}
