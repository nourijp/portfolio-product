import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import TagList from "@/app/components/ui/tag-list";
import MetricsStrip from "@/app/components/ui/metrics-strip";
import type { CaseStudy } from "@/content/work";

const CaseStudyLayout = ({ caseStudy }: { caseStudy: CaseStudy }) => {
  return (
    <main>
      <div className="container">
        <div className="border-x border-primary/10">
          <div className="max-w-3xl mx-auto px-4 sm:px-7 pt-10 pb-8 sm:pb-12 flex flex-col gap-5">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-primary transition-colors w-fit"
            >
              <ArrowLeft className="w-4 h-4" />
              All Work
            </Link>

            <div className="flex flex-col gap-3">
              <h1 className="text-2xl sm:text-3xl md:text-[32px]">{caseStudy.title}</h1>
              <p className="text-lg text-secondary">{caseStudy.subtitle}</p>
            </div>

            <TagList tags={caseStudy.tags} />

            {caseStudy.metricKeys && caseStudy.metricKeys.length > 0 && (
              <MetricsStrip keys={caseStudy.metricKeys} />
            )}
          </div>
        </div>

        <div className="border-x border-t border-primary/10">
          <div className="max-w-3xl mx-auto px-4 sm:px-7 py-10 md:py-14 flex flex-col gap-10 md:gap-12">
            {caseStudy.sections.map((section) => (
              <div key={section.heading} className="flex flex-col gap-3">
                <h2 className="text-lg sm:text-xl">{section.heading}</h2>
                {section.todo ? (
                  <div className="flex flex-col gap-2 rounded-lg border border-dashed border-primary/20 bg-muted/40 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Draft — not yet finalized
                    </p>
                    {section.paragraphs.map((p) => (
                      <p key={p} className="text-secondary italic">
                        {p}
                      </p>
                    ))}
                  </div>
                ) : (
                  section.paragraphs.map((p) => (
                    <p key={p} className="text-secondary max-w-2xl">
                      {p}
                    </p>
                  ))
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CaseStudyLayout;
