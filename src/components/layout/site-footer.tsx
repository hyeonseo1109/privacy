import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-1 px-5 py-8 text-sm text-slate-500 sm:px-8">
        <p className="font-medium text-slate-700">{siteConfig.title}</p>
        <p>앱별 개인정보처리방침을 제공합니다.</p>
      </div>
    </footer>
  );
}
