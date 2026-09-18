"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, site } from "@/content/site";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-primary/10">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)] text-white text-xs font-semibold">
              HN
            </span>
            <span className="text-sm font-semibold text-primary">Hamed Nouri</span>
          </Link>

          <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-secondary hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button asChild variant="outline" size="sm">
              <Link href={site.resumeUrl}>Resume</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/#contact">Contact Me</Link>
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-primary/10 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <nav
            aria-label="Primary mobile"
            className="md:hidden flex flex-col gap-1 pb-5 border-t border-primary/10 pt-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium text-secondary hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-3">
              <Button asChild variant="outline" size="sm" className="flex-1">
                <Link href={site.resumeUrl} onClick={() => setOpen(false)}>
                  Resume
                </Link>
              </Button>
              <Button asChild size="sm" className="flex-1">
                <Link href="/#contact" onClick={() => setOpen(false)}>
                  Contact Me
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
