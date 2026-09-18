import type { Metadata } from "next";
import Link from "next/link";
import TagList from "@/app/components/ui/tag-list";
import { caseStudies } from "@/content/work";

export const metadata: Metadata = {
  title: "Product Work — Hamed Nouri",
  description:
    "Case studies in enterprise product modernization, workflow automation, AI-assisted product design, and release delivery.",
};

export default function WorkIndexPage() {
  return (
    <main>
      <div className="container">
        <div className="border-x border-primary/10">
          <div className="max-w-3xl mx-auto px-4 sm:px-7 pt-10 pb-8 sm:pb-12 flex flex-col gap-4">
            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Work</p>
            <h1 className="text-2xl sm:text-3xl md:text-[32px]">Selected Product Work</h1>
            <p className="text-secondary max-w-2xl">
              Case studies covering enterprise platform modernization, workflow automation, and
              AI-assisted product design — what the problem was, who it was for, how it was
              prioritized and delivered, and what happened.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-x border-t border-primary/10">
          {caseStudies.map((project, index) => {
            const isRightCol = index % 2 === 1;
            return (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className={`group flex flex-col gap-3.5 sm:gap-5 p-5 sm:p-7 hover:bg-accent transition-colors border-b border-primary/10 ${
                  isRightCol ? "md:border-l md:border-primary/10" : ""
                }`}
              >
                <div className="flex flex-col gap-2">
                  <h4 className="group-hover:underline underline-offset-4">{project.title}</h4>
                  <p className="text-secondary">{project.subtitle}</p>
                  <p className="text-sm sm:text-base">{project.cardCopy}</p>
                </div>
                <TagList tags={project.tags} />
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
