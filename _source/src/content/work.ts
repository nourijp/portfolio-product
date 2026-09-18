// Real case-study content only. Where a section isn't backed by a confirmed
// fact, it's marked TODO rather than filled with invented specifics --
// see the brief this was built from (content rules: no invented revenue,
// user counts, team sizes, ROI, ownership claims, or unconfirmed tech).

export type CaseStudySection = {
  heading: string;
  paragraphs: string[];
  todo?: boolean;
};

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  cardCopy: string;
  tags: string[];
  metricKeys?: string[];
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "enterprise-platform-modernization",
    title: "Enterprise Platform Modernization",
    subtitle: "CiraNet v1 → v2 and Google Workspace → Microsoft 365",
    cardCopy:
      "Supported enterprise platform modernization through roadmap input, release coordination, user feedback, adoption analytics, and cross-functional rollout planning.",
    tags: ["Enterprise Product", "Roadmaps", "Release Planning", "Analytics"],
    metricKeys: ["adoption", "supportReduction"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "RealManage / CiraConnect is an enterprise property-management platform. Over a multi-year modernization effort, the company rebuilt its core member-facing platform (CiraNet v1 → v2) and migrated its internal productivity stack from Google Workspace to Microsoft 365. I worked alongside Product and Engineering throughout both efforts, focused on the communications, feedback, and rollout side of the work.",
        ],
      },
      {
        heading: "Problem",
        paragraphs: [
          "Two major, simultaneous platform transitions — a full rebuild of the CiraNet member portal and an org-wide email and productivity migration — carried real risk: confused or lost users, a spike in support volume, and adoption stalling if people didn't understand what was changing or why.",
        ],
      },
      {
        heading: "Users / Stakeholders",
        paragraphs: [
          "End users included community association members, board members, and community managers using CiraNet, plus internal staff affected by the Microsoft 365 migration. Internal stakeholders included the CTO, Product, Engineering, IT, and executive leadership.",
        ],
      },
      {
        heading: "My Role",
        paragraphs: [
          "I partnered closely with the CTO and Product team throughout both transitions. My role centered on the communications, feedback, and adoption side of the modernization: I contributed input to development roadmaps, worked with feature queues, participated in release planning and rollout coordination, and gathered and analyzed user feedback to support prioritization decisions made by Product and Engineering.",
        ],
      },
      {
        heading: "Discovery",
        paragraphs: [
          "Feedback came in continuously through multiple channels — support tickets, direct user comments, surveys, and usage data — rather than through a single formal research process. I helped make sense of that feedback: identifying recurring pain points and surfacing them to Product and Engineering to inform prioritization.",
        ],
      },
      {
        heading: "Prioritization",
        paragraphs: [
          "Feature requests, bugs, and improvements were evaluated against a consistent set of factors: number of users affected, severity, frequency, business impact, urgency, whether smaller lower-priority issues had accumulated into a bigger problem, and whether something required an immediate hotfix versus a planned release. I evaluated incoming feedback against these factors and recommended priority to the teams who owned the roadmap and backlog.",
        ],
      },
      {
        heading: "Approach / Roadmap",
        paragraphs: [
          "I did not own the engineering roadmap or the product backlog. My contribution was participating in roadmap discussions, representing user and support feedback in those conversations, and helping the team distinguish issues that were accumulating impact from ones that were isolated.",
        ],
      },
      {
        heading: "Delivery",
        paragraphs: [
          "Worked within a Jira-based Kanban workflow, planned release windows, and hotfix processes. Rollouts required coordination across time zones, with stakeholder communication before, during, and after each release.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "The CiraNet v2 rollout reached a 28% increase in adoption and a 22% reduction in support requests, measured through Power BI usage/engagement analytics alongside support-ticket volume.",
        ],
      },
      {
        heading: "Iteration",
        paragraphs: [
          "Post-launch, feedback continued through the same channels — support, surveys, usage analytics — and continued to inform follow-on prioritization and smaller iterative releases.",
        ],
      },
      {
        heading: "Tools / Technology",
        paragraphs: ["Jira, Kanban boards, Power BI, survey tooling, support-ticketing platforms, Google Workspace, Microsoft 365."],
      },
    ],
  },
  {
    slug: "publishing-workflow-automation",
    title: "Publishing Workflow Automation",
    subtitle: "AI-assisted tools for document preparation, print validation, and production",
    cardCopy:
      "Defined and led AI-assisted tools for document preparation, print validation, cost estimation, API integration, and production workflows.",
    tags: ["Product Ownership", "AI Automation", "Workflow Design", "APIs"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Print and digital publishing involve many small, repetitive production steps — formatting, image preparation, print-requirement validation, and cost estimation — that multiply across revisions and titles. I designed and built a set of tools to automate this workflow end to end, for my own publishing work and projects.",
        ],
      },
      {
        heading: "Problem",
        paragraphs: [
          "Print production has exact, unforgiving formatting requirements (bleed, trim, resolution, safe margins), and getting any of it wrong means a rejected print run or a costly reprint. Doing this by hand for every page, every revision, and every title doesn't scale.",
        ],
      },
      {
        heading: "Users / Stakeholders",
        paragraphs: ["Myself as the publisher/operator, and end readers of the finished print and digital products."],
      },
      {
        heading: "My Role",
        paragraphs: [
          "I owned this end to end — defining what the tooling needed to do, building it, and using it in production. Unlike the enterprise platform work, this is a project I have direct ownership and decision authority over.",
        ],
      },
      {
        heading: "Discovery",
        paragraphs: [
          "TODO — add specifics on how requirements for the tooling were identified (e.g. recurring production errors, printer/vendor requirements, revision-cycle pain points).",
        ],
        todo: true,
      },
      {
        heading: "Prioritization",
        paragraphs: [
          "TODO — add how tooling priorities were sequenced (e.g. which manual step was most error-prone or time-consuming first).",
        ],
        todo: true,
      },
      {
        heading: "Approach / Roadmap",
        paragraphs: [
          "Built a formatting tool to automate repetitive print-preparation work and reduce manual, error-prone steps, plus a separate repeatable production pipeline for preparing books for print publishing (Lulu) — covering image upscaling, safe cropping, live print-requirement checks, and a pricing estimator.",
        ],
      },
      {
        heading: "Delivery",
        paragraphs: [
          "Shipped as working tools actively used in production for real titles, not a one-off script — includes automated formatting, print-requirement validation, and cost estimation built into the workflow.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "TODO — add measured time savings or error-rate reduction once tracked (qualitatively, this replaced manual, error-prone formatting and validation work with a repeatable pipeline).",
        ],
        todo: true,
      },
      {
        heading: "Iteration",
        paragraphs: ["TODO — add how the tooling has evolved across revisions/titles."],
        todo: true,
      },
      {
        heading: "Tools / Technology",
        paragraphs: ["Python, image-processing tooling (upscaling/cropping), PDF generation, print-vendor (Lulu) requirements/API."],
      },
    ],
  },
  {
    slug: "multilingual-collaboration",
    title: "Multilingual Collaboration Platform",
    subtitle: "AI-assisted collaboration across English and Japanese",
    cardCopy:
      "Designed an AI-assisted collaboration system using translation APIs and synchronized English/Japanese project data.",
    tags: ["AI", "Product Design", "APIs", "Multilingual Systems"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "A shared workspace where English- and Japanese-speaking users work on the same content in their own language, while changes stay synchronized — designed around the reality that collaborators may not share a language, rather than treating translation as a separate, secondary step.",
        ],
      },
      {
        heading: "Problem",
        paragraphs: [
          "Traditional translation workflows create separate copies of the same information. When one side edits the English version, the Japanese version can quickly become outdated and vice versa — creating duplicated work and making real-time multilingual collaboration difficult.",
        ],
      },
      {
        heading: "Users / Stakeholders",
        paragraphs: ["English- and Japanese-speaking collaborators working on the same underlying project content."],
      },
      {
        heading: "My Role",
        paragraphs: [
          "I designed and built this system directly — defining the product's approach to synchronization, evaluating translation APIs, and structuring how content is stored so both language views stay consistent.",
        ],
      },
      {
        heading: "Discovery",
        paragraphs: [
          "TODO — add specifics on how the requirement was identified (e.g. a specific bilingual project where translated copies were drifting out of sync).",
        ],
        todo: true,
      },
      {
        heading: "Prioritization",
        paragraphs: [
          "TODO — add how the initial feature set was scoped (e.g. which content types needed sync first).",
        ],
        todo: true,
      },
      {
        heading: "Approach / Roadmap",
        paragraphs: [
          "English and Japanese users interact with the same underlying content while viewing and editing it in their preferred language; edits are synchronized so the system behaves like one shared workspace rather than two translated documents, with AI-assisted translation and structured content management underneath.",
        ],
      },
      {
        heading: "Delivery",
        paragraphs: ["Shipped and in active use for cross-language project collaboration."],
      },
      {
        heading: "Outcome",
        paragraphs: ["TODO — add measured outcome once tracked (e.g. reduction in translation drift/rework)."],
        todo: true,
      },
      {
        heading: "Iteration",
        paragraphs: ["TODO — add how the system has evolved since initial build."],
        todo: true,
      },
      {
        heading: "Tools / Technology",
        paragraphs: ["Translation APIs, LLMs, structured content storage, synchronization logic."],
      },
    ],
  },
  {
    slug: "web-deployment-platform",
    title: "Web Deployment Platform",
    subtitle: "34-site automated GitHub / Cloudflare release system",
    cardCopy:
      "Built a 34-site GitHub/Cloudflare release system that reduced a multi-day build-and-release workflow to one day.",
    tags: ["Automation", "Release Workflow", "Developer Experience", "Process Improvement"],
    metricKeys: ["deployedSites"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "A deployment system that manages dozens of independent project websites without manually configuring hosting, DNS, repositories, and deployments for each one — currently running 34 independently version-controlled sites.",
        ],
      },
      {
        heading: "Problem",
        paragraphs: [
          "Maintaining dozens of small project and portfolio sites creates repetitive infrastructure work: every new site normally requires its own repository setup, deployment configuration, DNS records, subdomain mapping, and ongoing maintenance — a workflow that had grown to take multiple days per release cycle.",
        ],
      },
      {
        heading: "Users / Stakeholders",
        paragraphs: ["Myself, as the operator responsible for building, releasing, and maintaining every site."],
      },
      {
        heading: "My Role",
        paragraphs: [
          "I designed and built the automation end to end, from repository/deployment structure through DNS management.",
        ],
      },
      {
        heading: "Discovery",
        paragraphs: [
          "The repetitive per-site setup and release work became a bottleneck as the number of sites grew, making the case for automating the common steps rather than repeating them manually each time.",
        ],
      },
      {
        heading: "Approach / Roadmap",
        paragraphs: [
          "Automated the shared parts of the workflow — build, static export, deploy, and DNS/subdomain mapping — across GitHub and Cloudflare, while keeping each project independently version-controlled and mapped to its own subdomain.",
        ],
      },
      {
        heading: "Delivery",
        paragraphs: [
          "The system builds, exports, deploys, and manages all 34 sites, with shared automation handling the repetitive deployment work that used to be done per-site.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "Reduced a multi-day build-and-release workflow across the site portfolio to about one day.",
        ],
      },
      {
        heading: "Iteration",
        paragraphs: ["TODO — add how the automation has been extended as new sites were added."],
        todo: true,
      },
      {
        heading: "Tools / Technology",
        paragraphs: ["Next.js static export, GitHub (repos + Actions), Cloudflare (Pages/DNS API), shell automation."],
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
