import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

const capabilityRow = [
  "Product Strategy",
  "Roadmaps",
  "AI & Automation",
  "Product Delivery",
  "User Research",
  "Analytics",
];

const HeroSection = () => {
  return (
    <section>
      <div className="container">
        <div className="w-full h-40 sm:h-52 relative overflow-hidden">
          <Image
            src="/images/hero-sec/banner-bg-img.png"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/35" />
        </div>
        <div className="border-x border-primary/10">
          <div className="flex flex-col gap-6 max-w-3xl mx-auto px-4 sm:px-7 pt-10 pb-10 sm:pb-14">
            <div className="flex items-center gap-2">
              <Image src="/images/icon/map-icon.svg" alt="" width={18} height={18} />
              <p className="text-sm text-secondary">{site.location}</p>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-3xl sm:text-4xl md:text-[40px] leading-tight font-semibold">
                Product Owner | AI, Automation &amp; Digital Products
              </h1>
              <p className="text-lg sm:text-xl text-secondary max-w-2xl">
                I turn user needs and operational problems into digital products, AI-enabled
                workflows, and measurable improvements.
              </p>
              <p className="max-w-2xl">
                Experience spanning enterprise platforms, product roadmaps, workflow automation,
                user research, releases, adoption, analytics, and cross-functional delivery.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button asChild size="lg">
                <Link href="/work">View Product Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={site.resumeUrl}>View Resume</Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href="/#contact">Contact Me</Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground pt-2 border-t border-primary/10 mt-2">
              {capabilityRow.join(" • ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
