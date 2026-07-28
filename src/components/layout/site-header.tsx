import Link from "next/link";

import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link
          className="text-base font-bold tracking-tight text-slate-950 transition-colors hover:text-teal-700"
          href={siteConfig.homePath}
        >
          {siteConfig.title}
        </Link>

        <nav aria-label="앱별 개인정보처리방침">
          <ul className="flex items-center gap-2">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  className="inline-flex min-h-10 items-center rounded-full bg-teal-50 px-4 text-sm font-semibold text-teal-800 transition-colors hover:bg-teal-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
