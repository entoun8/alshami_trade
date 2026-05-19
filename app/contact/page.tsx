import type { Metadata } from "next";
import { pageMetadata, pageContent, contactInfo } from "@/lib/data";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: pageMetadata.contact.title,
  description: pageMetadata.contact.description,
};

export default function ContactPage() {
  const { hero, socialHeading, socialSubheading } = pageContent.contact;

  return (
    <>
      <Section className="bg-brand-cream">
        <Container>
          <AnimatedSection>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="font-display text-4xl font-bold text-brand-olive md:text-5xl">
                {hero.heading}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-brand-text-soft">{hero.body}</p>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-lg">
            <AnimatedSection>
              <address className="not-italic rounded-2xl bg-brand-cream-dark p-8">
                <h2 className="font-display text-2xl font-bold text-brand-olive">Contact Details</h2>
                <dl className="mt-6 space-y-4">
                  <div>
                    <dt className="text-sm font-semibold uppercase tracking-wider text-brand-text-soft">
                      Email
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-brand-olive hover:text-brand-olive-light font-medium transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold uppercase tracking-wider text-brand-text-soft">
                      Phone
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                        className="text-brand-olive hover:text-brand-olive-light font-medium transition-colors"
                      >
                        {contactInfo.phone}
                      </a>
                    </dd>
                  </div>
                </dl>
              </address>
            </AnimatedSection>
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-cream-dark">
        <Container>
          <AnimatedSection>
            <SectionHeading
              heading={socialHeading}
              subheading={socialSubheading}
            />
            <ul className="mt-8 flex flex-wrap justify-center gap-4">
              {contactInfo.social.map((link) => (
                <li key={link.platform}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-brand-olive px-6 py-3 text-sm font-semibold text-brand-olive transition-colors hover:bg-brand-olive hover:text-brand-text-light capitalize"
                  >
                    {link.platform}
                  </a>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </Container>
      </Section>
    </>
  );
}
