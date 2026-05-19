import Link from "next/link";
import { navLinks, contactInfo } from "@/lib/data";
import { SITE_NAME } from "@/lib/constants";

const SocialIcon = ({ platform }: { platform: string }) => {
  if (platform === "facebook") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    );
  }
  if (platform === "instagram") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (platform === "tiktok") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.88a8.27 8.27 0 0 0 4.84 1.55V7a4.85 4.85 0 0 1-1.07-.31z" />
      </svg>
    );
  }
  return null;
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-olive-dark text-brand-text-light">
      <div className="mx-auto w-full max-w-[1280px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-lg font-bold text-brand-gold">{SITE_NAME}</p>
            <p className="mt-2 text-sm text-brand-text-light-soft">
              Authentic Syrian heritage products, brought to Australia with care.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-gold">
              Navigate
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-text-light-soft transition-colors hover:text-brand-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-gold">
              Connect
            </p>
            <div className="flex gap-4">
              {contactInfo.social.map((link) => (
                <a
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-brand-text-light-soft transition-colors hover:text-brand-gold"
                >
                  <SocialIcon platform={link.platform} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-brand-olive pt-6 text-center text-xs text-brand-text-light-soft">
          © {year} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
