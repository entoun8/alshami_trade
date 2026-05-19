import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata, pageContent } from "@/lib/data";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureBand from "@/components/ui/FeatureBand";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: pageMetadata.about.title,
  description: pageMetadata.about.description,
};

export default function AboutPage() {
  const { hero, companyStory, alshamiCoffeeSection, alAttarSection, lifestyleImages } =
    pageContent.about;

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

      <AnimatedSection>
        <FeatureBand heading={companyStory.heading} body={companyStory.body} />
      </AnimatedSection>

      <Section>
        <Container>
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <AnimatedSection>
              <div className="relative h-72 w-full overflow-hidden rounded-2xl md:h-96">
                <Image
                  src={alshamiCoffeeSection.image.src}
                  alt={alshamiCoffeeSection.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="eager"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <SectionHeading heading={alshamiCoffeeSection.heading} className="text-left mb-4" />
              <p className="text-base leading-relaxed text-brand-text-soft">
                {alshamiCoffeeSection.body}
              </p>
              <div className="mt-6">
                <Button href={alshamiCoffeeSection.cta.href} variant="primary">
                  {alshamiCoffeeSection.cta.label}
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </Section>

      <Section className="bg-brand-cream-dark">
        <Container>
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <AnimatedSection className="md:order-2">
              <div className="relative h-72 w-full overflow-hidden rounded-2xl md:h-96">
                <Image
                  src={alAttarSection.image.src}
                  alt={alAttarSection.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="eager"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection className="md:order-1">
              <SectionHeading heading={alAttarSection.heading} className="text-left mb-4" />
              <p className="text-base leading-relaxed text-brand-text-soft">
                {alAttarSection.body}
              </p>
              <div className="mt-6">
                <Button href={alAttarSection.cta.href} variant="primary">
                  {alAttarSection.cta.label}
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <AnimatedSection>
            <div className="grid gap-6 sm:grid-cols-2">
              {lifestyleImages.map((img) => (
                <div
                  key={img.src}
                  className="relative h-64 w-full overflow-hidden rounded-2xl md:h-80"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </Section>
    </>
  );
}
