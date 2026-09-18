import Link from "next/link";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

const CTASection = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="border-x border-primary/10">
          <div className="flex flex-col items-center text-center gap-5 max-w-2xl mx-auto px-4 sm:px-7 py-14 md:py-20">
            <h2>Let&apos;s talk about your product team</h2>
            <p className="max-w-md">
              Open to Product Owner, AI Product, and Product Technology roles. Reach out directly
              or grab the resume.
            </p>
            <div className="flex flex-col xs:flex-row items-center gap-3">
              <Button asChild size="lg">
                <Link href={`mailto:${site.email}`}>Contact Me</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={site.resumeUrl}>View Resume</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
