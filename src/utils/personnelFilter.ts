import type { DepartmentGroup, PersonnelMember, SpeciesType } from '../data/medifitData';

export interface PersonnelFilterState {
  department: 'all' | DepartmentGroup;
  species: 'all' | SpeciesType;
  query: string;
}

export interface InquiryFormValues {
  name: string;
  organization: string;
  email: string;
  category: string;
  message: string;
}

export interface InquiryValidationErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function filterPersonnel(
  members: readonly PersonnelMember[],
  filters: PersonnelFilterState
): PersonnelMember[] {
  const normalizedQuery = filters.query.trim().toLowerCase();

  return members.filter((member) => {
    if (filters.department !== 'all' && member.departmentGroup !== filters.department) {
      return false;
    }

    if (filters.species !== 'all' && member.speciesType !== filters.species) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    const haystack = [
      member.name,
      member.englishName,
      member.role,
      member.departmentName,
      member.speciesLabel,
      member.mbti,
      member.enneagram,
      member.summary,
      member.coreDirective,
      ...member.personalityTraits,
      ...member.keywords,
    ]
      .join(' ')
      .toLowerCase();

    return haystack.includes(normalizedQuery);
  });
}

export function getDepartmentCounts(
  members: readonly PersonnelMember[]
): Record<'all' | DepartmentGroup, number> {
  const counts: Record<'all' | DepartmentGroup, number> = {
    all: members.length,
    executive: 0,
    biopolymer: 0,
    hq: 0,
    factory: 0,
  };

  for (const member of members) {
    counts[member.departmentGroup] += 1;
  }

  return counts;
}

export function getSpeciesCounts(
  members: readonly PersonnelMember[]
): Record<'all' | SpeciesType, number> {
  const counts: Record<'all' | SpeciesType, number> = {
    all: members.length,
    human: 0,
    beastkin: 0,
  };

  for (const member of members) {
    counts[member.speciesType] += 1;
  }

  return counts;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateInquiryForm(values: InquiryFormValues): InquiryValidationErrors {
  const errors: InquiryValidationErrors = {};

  if (!values.name.trim()) {
    errors.name = '담당자 성함을 입력해 주세요.';
  }

  const trimmedEmail = values.email.trim();
  if (!trimmedEmail) {
    errors.email = '회신받으실 이메일 주소를 입력해 주세요.';
  } else if (!EMAIL_PATTERN.test(trimmedEmail)) {
    errors.email = '올바른 이메일 형식을 입력해 주세요. (예: name@company.co.kr)';
  }

  if (values.message.trim().length < 10) {
    errors.message = '문의 내용을 최소 10자 이상 구체적으로 작성해 주세요.';
  }

  return errors;
}
