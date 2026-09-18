import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import TagList from "@/app/components/ui/tag-list";
import { labs, labsIndexHref } from "@/content/labs";

export const metadata: Metadata = {
  title: "Labs — Hamed Nouri",
  description:
    "Technical breadth and experimentation: local-AI pipelines, Obsidian plugins, e-ink interfaces, automation tools, and multilingual systems.",
};

export default function LabsPage() {
  return (
    <main>
      <div className="container">
        <div className="border-x border-primary/10">
          <div className="max-w-3xl mx-auto px-4 sm:px-7 pt-10 pb-8 sm:pb-12 flex flex-col gap-4">
            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Labs</p>
            <h1 className="text-2xl sm:text-3xl md:text-[32px]">Technical breadth &amp; experiments</h1>
            <p className="text-secondary max-w-2xl">
              Work on this page isn&apos;t framed as product case studies — it&apos;s the
              technical building, prototyping, and experimentation behind the product thinking.
              Each links out to its full writeup.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 border-x border-t border-primary/10">
          {labs.map((item, index) => {
            const isRightCol = index % 2 === 1;
            return (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col gap-3 p-5 sm:p-7 hover:bg-accent transition-colors border-b border-primary/10 ${
                  isRightCol ? "sm:border-l sm:border-primary/10" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="group-hover:underline underline-offset-4">{item.title}</h4>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <p className="text-sm sm:text-base">{item.description}</p>
                <TagList tags={item.tags} />
              </a>
            );
          })}
        </div>

        <div className="border-x border-t border-primary/10">
          <div className="max-w-3xl mx-auto px-4 sm:px-7 py-8 text-center">
            <a
              href={labsIndexHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:underline"
            >
              See the full project archive on projects.hamednouri.com →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
