import Link from "next/link";
import { navLinks } from "@/lib/data";
import { SITE_NAME } from "@/lib/constants";
import Container from "@/components/layout/Container";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-olive shadow-md">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="font-display text-xl font-bold text-brand-gold">
          {SITE_NAME}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-text-light transition-colors hover:text-brand-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <MobileNav />
      </Container>
    </header>
  );
}
