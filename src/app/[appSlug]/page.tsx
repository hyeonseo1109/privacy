import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PrivacyPolicyView } from "@/components/privacy/privacy-policy-view";
import {
  findPrivacyPolicy,
  privacyPolicies,
} from "@/data/privacy-policies";

type AppPolicyPageProps = {
  params: Promise<{
    appSlug: string;
  }>;
};

export function generateStaticParams() {
  return privacyPolicies.map((policy) => ({
    appSlug: policy.slug,
  }));
}

export async function generateMetadata({
  params,
}: AppPolicyPageProps): Promise<Metadata> {
  const { appSlug } = await params;
  const policy = findPrivacyPolicy(appSlug);

  if (!policy) {
    return {};
  }

  return {
    title: `${policy.appName} 개인정보처리방침`,
    description: policy.summary,
    alternates: {
      canonical: `/${policy.slug}`,
    },
  };
}

export default async function AppPolicyPage({ params }: AppPolicyPageProps) {
  const { appSlug } = await params;
  const policy = findPrivacyPolicy(appSlug);

  if (!policy) {
    notFound();
  }

  return <PrivacyPolicyView policy={policy} />;
}
