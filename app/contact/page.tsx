import type { Metadata } from "next";
import { pageMetadata, pageContent, contactInfo } from "@/lib/data";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: pageMetadata.contact.title,
  description: pageMetadata.contact.description,
};

export default function ContactPage() {
  const { hero, socialHeading, socialSubheading } = pageContent.contact;

  return (
    <>
      <PageHero heading={hero.heading} body={hero.body} />

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
                  {contactInfo.phones.map((phone) => (
                    <div key={phone.city}>
                      <dt className="text-sm font-semibold uppercase tracking-wider text-brand-text-soft">
                        {phone.city} — {phone.role}
                      </dt>
                      <dd className="mt-1">
                        <a
                          href={`tel:${phone.number.replace(/\s/g, "")}`}
                          className="text-brand-olive hover:text-brand-olive-light font-medium transition-colors"
                        >
                          {phone.number}
                        </a>
                      </dd>
                    </div>
                  ))}
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
              className="mb-10"
            />
            <ul className="mt-8 flex flex-wrap justify-center gap-4">
              {contactInfo.social.map((link) => (
                <li key={link.platform}>
                  <Button
                    variant="olive"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="capitalize"
                  >
                    {link.platform}
                  </Button>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </Container>
      </Section>
    </>
  );
}
