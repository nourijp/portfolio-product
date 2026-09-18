// Central site configuration -- single source of truth so things like the
// resume link or contact email are never hardcoded in more than one place.

export const site = {
  name: "Hamed Nouri",
  title: "Product Owner | AI, Automation & Digital Products",
  location: "Denton, TX",
  email: "product@hamednouri.com",
  url: "https://product.hamednouri.com",
  // No resume PDF has been supplied yet (see _source/README.md / TODO.md).
  // Swapping in a real file later only requires replacing this one value
  // (and dropping the PDF at that path in /public/files/) -- every "Resume"
  // button on the site reads from here, nothing is hardcoded per-component.
  resumeUrl: `mailto:product@hamednouri.com?subject=${encodeURIComponent(
    "Resume request"
  )}`,
  // resumeUrl: "/files/hamed-nouri-resume.pdf", // TODO: switch to this once the PDF exists
};

export const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Labs", href: "/labs" },
];
