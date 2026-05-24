import type { Metadata } from "next";
import { pageMetadata, pageContent, alshamiCoffeeProducts } from "@/lib/data";
import HeroSection from "@/components/ui/HeroSection";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AnimatedCard from "@/components/ui/AnimatedCard";

export const metadata: Metadata = {
  title: pageMetadata.alshamiCoffee.title,
  description: pageMetadata.alshamiCoffee.description,
};

export default function AlshamiCoffeePage() {
  const { hero, catalogueHeading, catalogueSubheading } = pageContent.alshamiCoffee;

  return (
    <>
      <HeroSection heading={hero.heading} body={hero.body} image={hero.image} />

      <Section>
        <Container>
          <AnimatedSection>
            <SectionHeading
              heading={catalogueHeading}
              subheading={catalogueSubheading}
              className="mb-10"
            />
          </AnimatedSection>
          <div className="mt-10 grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {alshamiCoffeeProducts.map((product, index) => (
              <AnimatedCard key={product.id} index={index}>
                <ProductCard product={product} />
              </AnimatedCard>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
