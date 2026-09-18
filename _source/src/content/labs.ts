// Technical breadth / experimentation -- separate from the case studies in
// /work on purpose (see brief Step 11: Work proves product ownership, Labs
// proves technical breadth and building ability). Each links out to its full
// writeup on projects.hamednouri.com rather than duplicating that content.

export type LabItem = {
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export const labs: LabItem[] = [
  {
    title: "Your Second Brain, Always Visible",
    description:
      "A calm, always-on e-ink interface that turns an Obsidian knowledge system into glanceable screens for tasks, projects, events, and daily context.",
    tags: ["Hardware", "Obsidian", "Automation"],
    href: "https://projects.hamednouri.com/project/trmnl-eink-pipeline/",
  },
  {
    title: "Voice Interface for My Second Brain",
    description:
      "A voice-driven interface that turns natural speech into structured tasks, projects, events, and notes using local speech-to-text and LLMs.",
    tags: ["AI", "Obsidian", "Automation"],
    href: "https://projects.hamednouri.com/project/voice-interface-obsidian/",
  },
  {
    title: "Local-AI Document Pipeline",
    description:
      "A document-processing workflow that turns captured paperwork into organized knowledge, extracting tasks, deadlines, and metadata automatically.",
    tags: ["AI", "Automation", "Obsidian"],
    href: "https://projects.hamednouri.com/project/local-ai-document-pipeline/",
  },
  {
    title: "Smart Subtitle Machine",
    description:
      "A subtitle translation pipeline that goes beyond literal text, using a locked terminology glossary and cultural context to keep translations faithful.",
    tags: ["Language", "AI", "Automation"],
    href: "https://projects.hamednouri.com/project/subtitle-machine/",
  },
  {
    title: "Song Translation & Publishing Pipeline",
    description:
      "Translates songs across languages and turns the result into a published video, from raw audio to a scheduled YouTube upload.",
    tags: ["Language", "Automation", "Publishing"],
    href: "https://projects.hamednouri.com/project/song-translation-pipeline/",
  },
  {
    title: "Proxy Iconize",
    description: "An Obsidian plugin fork adding custom icon-pack support across files, folders, and menu items.",
    tags: ["Obsidian", "Plugin"],
    href: "https://projects.hamednouri.com/project/proxy-iconize/",
  },
  {
    title: "Proxy Hide",
    description: "An Obsidian plugin that removes duplicate and unwanted entries from context menus.",
    tags: ["Obsidian", "Plugin"],
    href: "https://projects.hamednouri.com/project/proxy-hide/",
  },
  {
    title: "WaniKani for Obsidian",
    description: "Japanese-learning progress and reviews integrated directly into Obsidian via API.",
    tags: ["Obsidian", "Language", "API"],
    href: "https://projects.hamednouri.com/project/wanikani-for-obsidian/",
  },
  {
    title: "Bunpro Reviews for Obsidian",
    description: "Reverse-engineered an undocumented integration to bring grammar reviews into Obsidian.",
    tags: ["Obsidian", "Language", "Reverse Engineering"],
    href: "https://projects.hamednouri.com/project/bunpro-for-obsidian/",
  },
  {
    title: "Custom Firewall & Router (OPNsense)",
    description: "Installed and configured OPNsense as a custom firewall and router for the home network.",
    tags: ["Networking", "Hardware"],
    href: "https://projects.hamednouri.com/project/opnsense-firewall-router/",
  },
];

export const labsIndexHref = "https://projects.hamednouri.com/?type=Project";
