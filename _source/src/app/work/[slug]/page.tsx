import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CaseStudyLayout from "@/app/components/case-study";
import { caseStudies, getCaseStudy } from "@/content/work";

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) return {};
  return {
    title: `${caseStudy.title} — Hamed Nouri`,
    description: caseStudy.cardCopy,
    openGraph: {
      title: `${caseStudy.title} — Hamed Nouri`,
      description: caseStudy.cardCopy,
    },
  };
}

export default async function WorkCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) notFound();

  return <CaseStudyLayout caseStudy={caseStudy} />;
}
