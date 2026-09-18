// Verified metrics only -- each carries its own source/context so it's never
// presented as if it came from a different product than it actually did.
// Use selectively (MetricsStrip takes a `keys` prop), never all together.

export type Metric = {
  key: string;
  value: string;
  label: string;
  context: string;
};

export const metrics: Record<string, Metric> = {
  adoption: {
    key: "adoption",
    value: "28%",
    label: "Adoption increase",
    context: "CiraNet v2 rollout, RealManage / CiraConnect",
  },
  supportReduction: {
    key: "supportReduction",
    value: "22%",
    label: "Reduction in support requests",
    context: "CiraNet v2 rollout, RealManage / CiraConnect",
  },
  deployedSites: {
    key: "deployedSites",
    value: "34",
    label: "Sites in one automated deployment workflow",
    context: "Web Deployment Platform",
  },
  audience: {
    key: "audience",
    value: "44K+",
    label: "Audience / community reach",
    context: "Aya & Sura",
  },
  views: {
    key: "views",
    value: "3M+",
    label: "Views",
    context: "Aya & Sura",
  },
};
