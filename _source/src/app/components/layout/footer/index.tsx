import Link from "next/link";
import { navLinks, site } from "@/content/site";

const Footer = () => {
  return (
    <footer className="-translate-y-[1px] bg-white border-t border-primary/10">
      <div className="container">
        <div className="border-x border-primary/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto px-4 sm:px-7 py-6 md:py-8 text-sm">
            <p>
              {site.name} — {site.location} —{" "}
              <a href={`mailto:${site.email}`} className="hover:underline">
                {site.email}
              </a>
            </p>
            <nav aria-label="Footer" className="flex items-center gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-secondary hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
