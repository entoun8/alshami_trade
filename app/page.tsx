import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata, pageContent, featuredBrands } from "@/lib/data";
import HeroSection from "@/components/ui/HeroSection";
import FeatureBand from "@/components/ui/FeatureBand";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AnimatedCard from "@/components/ui/AnimatedCard";

export const metadata: Metadata = {
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
};

export default function HomePage() {
  const { hero, brandIntro, featuredHeading, featuredSubheading } = pageContent.home;

  return (
    <>
      <HeroSection
        heading={hero.heading}
        body={hero.body}
        ctas={hero.ctas}
        image={hero.image}
      />

      <AnimatedSection>
        <FeatureBand heading={brandIntro.heading} body={brandIntro.body} />
      </AnimatedSection>

      <Section>
        <Container>
          <AnimatedSection>
            <SectionHeading
              heading={featuredHeading}
              subheading={featuredSubheading}
              className="mb-10"
            />
          </AnimatedSection>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {featuredBrands.map((brand, index) => (
              <AnimatedCard key={brand.id} index={index}>
                <div className="overflow-hidden rounded-2xl bg-brand-cream-dark shadow-sm">
                  <div className="relative h-64 w-full">
                    <Image
                      src={brand.image.src}
                      alt={brand.image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      loading="eager"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-brand-olive">
                      {brand.name}
                    </h3>
                    <p className="mt-2 text-sm text-brand-text-soft">{brand.description}</p>
                    <div className="mt-4">
                      <Button href={brand.href} variant="primary">
                        {brand.ctaLabel}
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
