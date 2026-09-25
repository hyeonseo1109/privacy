import { privacyPolicies } from "@/data/privacy-policies";

export const siteConfig = {
  title: "HenDo Privacy",
  homePath: "/",
  navigation: privacyPolicies.map((policy) => ({
    href: `/${policy.slug}`,
    label: policy.navLabel ?? policy.slug.toUpperCase(),
  })),
} as const;
