import type { PolicySection as PolicySectionData } from "@/types/privacy-policy";

type PolicySectionProps = {
  section: PolicySectionData;
};

export function PolicySection({ section }: PolicySectionProps) {
  return (
    <section
      aria-labelledby={`${section.id}-title`}
      className="scroll-mt-24 border-t border-slate-200 py-8 first:border-t-0 first:pt-0 sm:py-10"
      id={section.id}
    >
      <h2
        className="text-xl font-bold tracking-tight text-slate-950"
        id={`${section.id}-title`}
      >
        {section.title}
      </h2>

      {section.paragraphs?.map((paragraph) => (
        <p
          className="mt-4 text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8"
          key={paragraph}
        >
          {paragraph}
        </p>
      ))}

      {section.items ? (
        <ul className="mt-4 space-y-3">
          {section.items.map((item) => (
            <li
              className="flex gap-3 text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8"
              key={item}
            >
              <span
                aria-hidden="true"
                className="mt-[0.7rem] size-1.5 shrink-0 rounded-full bg-teal-600"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
