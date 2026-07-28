import type { ReactNode } from "react";

import { PolicySection } from "@/components/privacy/policy-section";
import type { PrivacyPolicy } from "@/types/privacy-policy";

type PrivacyPolicyViewProps = {
  policy: PrivacyPolicy;
};

export function PrivacyPolicyView({ policy }: PrivacyPolicyViewProps) {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
      <article>
        <header className="max-w-3xl">
          <p className="text-sm font-bold tracking-[0.16em] text-teal-700">
            {policy.slug.toUpperCase()}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            개인정보처리방침
          </h1>
          <p className="mt-4 text-lg font-semibold text-slate-800">
            {policy.appName}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            {policy.summary}
          </p>
        </header>

        <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-3">
          <PolicyMeta label="개발자" value={policy.developer} />
          <PolicyMeta label="시행일" value={policy.effectiveDate} />
          <PolicyMeta
            label="문의"
            value={
              <a
                className="text-teal-700 underline decoration-teal-200 underline-offset-4 transition-colors hover:text-teal-900"
                href={`mailto:${policy.contactEmail}`}
              >
                {policy.contactEmail}
              </a>
            }
          />
        </dl>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_50px_-32px_rgba(15,23,42,0.28)] sm:p-10">
          {policy.sections.map((section) => (
            <PolicySection key={section.id} section={section} />
          ))}

          <div className="border-t border-slate-200 pt-8">
            <p className="text-sm font-semibold text-slate-500">문의 이메일</p>
            <a
              className="mt-2 inline-block text-base font-semibold text-teal-700 underline decoration-teal-200 underline-offset-4 transition-colors hover:text-teal-900"
              href={`mailto:${policy.contactEmail}`}
            >
              {policy.contactEmail}
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

type PolicyMetaProps = {
  label: string;
  value: ReactNode;
};

function PolicyMeta({ label, value }: PolicyMetaProps) {
  return (
    <div className="bg-white px-5 py-4">
      <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </dt>
      <dd className="mt-1.5 text-sm font-semibold text-slate-900">{value}</dd>
    </div>
  );
}
