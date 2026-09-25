export type PolicySection = {
  id: string;
  title: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
};

export type PrivacyPolicy = {
  appName: string;
  slug: string;
  navLabel?: string;
  developer: string;
  contactEmail: string;
  effectiveDate: string;
  summary: string;
  sections: readonly PolicySection[];
};
