import { PrivacyPolicyView } from "@/components/privacy/privacy-policy-view";
import { defaultPrivacyPolicy } from "@/data/privacy-policies";

export default function HomePage() {
  return <PrivacyPolicyView policy={defaultPrivacyPolicy} />;
}
