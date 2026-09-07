import type { Metadata } from "next";

import { PrivacyPolicyView } from "@/components/privacy/privacy-policy-view";
import { henMusicPrivacyPolicy } from "@/data/henmusic-policy";

export const metadata: Metadata = {
  title: "HenMusic 개인정보처리방침",
  description: henMusicPrivacyPolicy.summary,
  alternates: { canonical: "/henmusic" },
};

export default function HenMusicPrivacyPage() {
  return <PrivacyPolicyView policy={henMusicPrivacyPolicy} />;
}
