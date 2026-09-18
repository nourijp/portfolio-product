import Link from "next/link";
import { Button } from "@/components/ui/button";
import TagList from "@/app/components/ui/tag-list";
import { caseStudies } from "@/content/work";

const FeaturedWork = () => {
  return (
    <section id="work">
      <div className="container">
        <div className="border-x border-primary/10">
          <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
            <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
              <h2 className="text-sm tracking-[2px] text-primary uppercase font-medium">
                Selected Product Work
              </h2>
              <Button asChild variant="outline" className="h-auto">
                <Link href="/work" className="py-3 px-5">
                  View All Work
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-primary/10">
            {caseStudies.map((project, index) => {
              const isRightCol = index % 2 === 1;
              return (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className={`group flex flex-col gap-3.5 sm:gap-5 p-5 sm:p-7 hover:bg-accent transition-colors ${
                    isRightCol ? "md:border-l md:border-primary/10" : ""
                  } border-b border-primary/10`}
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
      </div>
    </section>
  );
};

export default FeaturedWork;
