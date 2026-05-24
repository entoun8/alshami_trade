import Link from "next/link";
import { navLinks, contactInfo } from "@/lib/data";
import { SITE_NAME } from "@/lib/constants";
import Container from "@/components/layout/Container";
import SocialIcon from "@/components/ui/SocialIcon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-olive-dark text-brand-text-light">
      <Container className="py-12">
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
      </Container>
    </footer>
  );
}
