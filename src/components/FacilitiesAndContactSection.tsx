import { useState, type FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { FACILITIES } from '../data/medifitData';
import {
  validateInquiryForm,
  type InquiryFormValues,
  type InquiryValidationErrors,
} from '../utils/personnelFilter';

const INQUIRY_CATEGORIES = [
  '투자·IR 문의',
  '3등급 의료기기 샘플 테스트',
  'B2B 대량 납품·박람회 제휴',
  '연구개발(R&D) 채용 문의',
] as const;

const INITIAL_FORM: InquiryFormValues = {
  name: '',
  organization: '',
  email: '',
  category: INQUIRY_CATEGORIES[0],
  message: '',
};

export function FacilitiesAndContactSection() {
  const [formValues, setFormValues] = useState<InquiryFormValues>(INITIAL_FORM);
  const [errors, setErrors] = useState<InquiryValidationErrors>({});
  const [submittedSummary, setSubmittedSummary] = useState<InquiryFormValues | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateInquiryForm(formValues);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmittedSummary(null);
      return;
    }

    setErrors({});
    setSubmittedSummary({ ...formValues });
    setFormValues(INITIAL_FORM);
  };

  return (
    <section id="facilities" className="scroll-mt-16 py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-20">
        {/* Part 1: Facilities Infrastructure */}
        <div>
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold tracking-wide text-[#005B96] mb-3">
              사업장 및 생산 인프라
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B192C] leading-tight">
              연구 거점과 직영 생산 라인의 이원화 운영
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              경기도 바이오산업단지 내 본사 연구실과 차량 30분 거리의 테크타워 아파트형 공장을
              직결하여 시료 테스트부터 생산 출하까지 신속하게 대응합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FACILITIES.map((facility) => (
              <article
                key={facility.id}
                className="bg-[#F6F8FA] border border-slate-200 rounded-xl p-6 sm:p-7 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-mono font-medium text-[#005B96]">{facility.code}</p>
                    <h3 className="mt-1 text-lg font-bold text-[#0B192C]">{facility.name}</h3>
                    <p className="mt-1 text-sm text-slate-600">{facility.role}</p>
                  </div>

                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-200 text-xs">
                    <div>
                      <dt className="text-slate-400 font-medium">소재지</dt>
                      <dd className="mt-1 font-medium text-slate-900">{facility.address}</dd>
                    </div>
                    <div>
                      <dt className="text-slate-400 font-medium">시설 및 연계</dt>
                      <dd className="mt-1 font-medium text-slate-900">
                        {facility.spaceSpec} · {facility.transitNote}
                      </dd>
                    </div>
                  </dl>
                </div>

                <p className="text-xs text-slate-500 pt-2 border-t border-slate-200/70">
                  상주 조직: {facility.departments.join(' · ')}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Part 2: Corporate IR & Partnership Contact Form */}
        <div id="contact" className="scroll-mt-16 pt-16 border-t border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-5">
              <p className="text-xs font-semibold tracking-wide text-[#005B96]">
                IR · 제휴 · 샘플 문의
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B192C] leading-tight">
                투자 검토 및 3등급 신제품 샘플 제휴를 환영합니다
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                신규 투자 IR 브리핑, 박람회 샘플 요청, B2B 납품 및 연구개발 협업 문의를 남겨주시면
                담당 부서(영업부 강세리 과장 / RA부 한정서 차장 / 차세대바이오폴리머 연구팀)가
                신속히 회신드립니다.
              </p>

              <dl className="pt-4 space-y-3 text-sm border-t border-slate-200">
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">대표 본사</dt>
                  <dd className="font-medium text-slate-900 text-right">
                    경기도 바이오산업단지 바이오랜드 305호
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">생산 공장</dt>
                  <dd className="font-medium text-slate-900 text-right">
                    테크타워 아파트형 공장 202호 · 203호
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">회신 안내</dt>
                  <dd className="font-medium text-slate-900 text-right">
                    영업일 기준 24시간 이내 담당자 직접 연락
                  </dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-7 bg-[#F6F8FA] border border-slate-200 rounded-xl p-6 sm:p-8">
              {submittedSummary ? (
                <div
                  role="status"
                  data-testid="inquiry-confirmation"
                  className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 space-y-4"
                >
                  <div className="flex items-center gap-2.5 text-[#0D7A72]">
                    <CheckCircle2 className="w-5 h-5 shrink-0" aria-hidden="true" />
                    <h3 className="text-base font-bold text-[#0B192C]">
                      문의가 정상적으로 접수되었습니다
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900">{submittedSummary.name}</strong>님(
                    {submittedSummary.email})께서 접수하신{' '}
                    <strong className="text-slate-900">{submittedSummary.category}</strong> 건이
                    본사 담당 부서로 전달되었습니다.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmittedSummary(null)}
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-[#0B192C] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                  >
                    새 문의 작성하기
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="inquiry-name"
                        className="block text-xs font-semibold text-slate-700 mb-1.5"
                      >
                        담당자 성함 <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="inquiry-name"
                        type="text"
                        value={formValues.name}
                        onChange={(e) => {
                          setFormValues((prev) => ({ ...prev, name: e.target.value }));
                          if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                        }}
                        placeholder="홍길동"
                        aria-invalid={Boolean(errors.name)}
                        className="w-full h-11 px-3.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:border-[#005B96]"
                      />
                      {errors.name && (
                        <p role="alert" className="mt-1.5 text-xs text-rose-600 font-medium">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-org"
                        className="block text-xs font-semibold text-slate-700 mb-1.5"
                      >
                        소속 기관 / 기업명
                      </label>
                      <input
                        id="inquiry-org"
                        type="text"
                        value={formValues.organization}
                        onChange={(e) =>
                          setFormValues((prev) => ({ ...prev, organization: e.target.value }))
                        }
                        placeholder="(주)바이오파트너스"
                        className="w-full h-11 px-3.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:border-[#005B96]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="inquiry-email"
                        className="block text-xs font-semibold text-slate-700 mb-1.5"
                      >
                        회신 이메일 <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="inquiry-email"
                        type="email"
                        value={formValues.email}
                        onChange={(e) => {
                          setFormValues((prev) => ({ ...prev, email: e.target.value }));
                          if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        placeholder="contact@company.co.kr"
                        aria-invalid={Boolean(errors.email)}
                        className="w-full h-11 px-3.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:border-[#005B96]"
                      />
                      {errors.email && (
                        <p role="alert" className="mt-1.5 text-xs text-rose-600 font-medium">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-category"
                        className="block text-xs font-semibold text-slate-700 mb-1.5"
                      >
                        문의 유형
                      </label>
                      <select
                        id="inquiry-category"
                        value={formValues.category}
                        onChange={(e) =>
                          setFormValues((prev) => ({ ...prev, category: e.target.value }))
                        }
                        className="w-full h-11 px-3.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:border-[#005B96]"
                      >
                        {INQUIRY_CATEGORIES.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-message"
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      문의 내용 <span className="text-rose-600">*</span>
                    </label>
                    <textarea
                      id="inquiry-message"
                      rows={4}
                      value={formValues.message}
                      onChange={(e) => {
                        setFormValues((prev) => ({ ...prev, message: e.target.value }));
                        if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                      }}
                      placeholder="검토 희망 품목(차세대 바이오폴리머 3등급 의료기기 / 휴먼헬스 기기) 및 요청 사항을 작성해 주세요."
                      aria-invalid={Boolean(errors.message)}
                      className="w-full p-3.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:border-[#005B96] resize-y"
                    />
                    {errors.message && (
                      <p role="alert" className="mt-1.5 text-xs text-rose-600 font-medium">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-1">
                    <p className="text-xs text-slate-500">
                      접수된 문의는 내부 담당 부서 확인 외 용도로 사용되지 않습니다.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#005B96] hover:bg-[#004675] rounded-lg transition-colors whitespace-nowrap shrink-0"
                    >
                      문의 접수하기
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
