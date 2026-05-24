import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata, pageContent } from "@/lib/data";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import FeatureBand from "@/components/ui/FeatureBand";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PageHero from "@/components/ui/PageHero";
import BrandSection from "@/components/ui/BrandSection";

export const metadata: Metadata = {
  title: pageMetadata.about.title,
  description: pageMetadata.about.description,
};

export default function AboutPage() {
  const { hero, companyStory, alshamiCoffeeSection, alAttarSection, lifestyleImages } =
    pageContent.about;

  return (
    <>
      <PageHero heading={hero.heading} body={hero.body} />

      <AnimatedSection>
        <FeatureBand heading={companyStory.heading} body={companyStory.body} />
      </AnimatedSection>

      <BrandSection
        heading={alshamiCoffeeSection.heading}
        body={alshamiCoffeeSection.body}
        cta={alshamiCoffeeSection.cta}
        image={alshamiCoffeeSection.image}
      />

      <BrandSection
        heading={alAttarSection.heading}
        body={alAttarSection.body}
        cta={alAttarSection.cta}
        image={alAttarSection.image}
        imagePosition="right"
        className="bg-brand-cream-dark"
      />

      <Section>
        <Container>
          <AnimatedSection>
            <div className="grid gap-6 sm:grid-cols-2">
              {lifestyleImages.map((img) => (
                <div
                  key={img.id}
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
