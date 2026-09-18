// Dates intentionally left as TODO -- exact employment ranges weren't
// confirmed, and Step 19 of the brief this was built from prohibits
// inventing facts. Fill in real dates before this ships.

export type ExperienceItem = {
  role: string;
  org: string;
  dates: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Communications Manager",
    org: "RealManage / CiraConnect",
    dates: "TODO — add dates",
    bullets: [
      "Partnered with Product and Engineering on enterprise platform modernization, including the CiraNet v1 → v2 rebuild and the Google Workspace → Microsoft 365 migration.",
      "Contributed input to development roadmaps and worked with feature queues, evaluating requests against user impact, severity, frequency, and business priority.",
      "Participated in release planning and rollout coordination across time zones, including hotfix communication and stakeholder updates.",
      "Gathered and analyzed user feedback through surveys, support requests, and usage analytics (Power BI) to support adoption and inform prioritization.",
    ],
  },
  {
    role: "Founder & Product Manager",
    org: "Aya & Sura",
    dates: "TODO — add dates",
    bullets: [
      "Own a family of digital, educational, and publishing products from concept through release, defining requirements and priorities directly.",
      "Balance user needs, business constraints, and production/technical limitations across a small team of developers, designers, and contractors.",
      "Built AI-assisted automation for the publishing and production workflow, from content preparation through print-ready output.",
    ],
  },
  {
    role: "Social Media Analyst",
    org: "Pinnacle Prep School",
    dates: "TODO — add dates",
    bullets: [
      "Built 10+ private apps and automations to streamline operations, reduce manual work, and lower software costs.",
      "Connected Google Drive, Sheets, and Notion with custom tooling to bulk-process media and keep asset tracking and the content calendar in sync automatically.",
    ],
  },
  {
    role: "Japanese Language LLM Subject Matter Expert",
    org: "Digitive",
    dates: "TODO — add dates",
    bullets: [
      "Evaluated bilingual (English/Japanese) LLM output for quality, accuracy, and naturalness as part of model training and evaluation pipelines.",
      "Reviewed and annotated training data to support model improvement.",
    ],
  },
  {
    role: "Founder & Product/Operations Coordinator",
    org: "MManga",
    dates: "TODO — add dates",
    bullets: [
      "Coordinated platform growth and operations across a distributed team.",
      "Made product and operational decisions covering workflow design and team coordination.",
    ],
  },
];
