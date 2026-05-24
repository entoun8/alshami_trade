import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface PageHeroProps {
  heading: string;
  body: string;
}

export default function PageHero({ heading, body }: PageHeroProps) {
  return (
    <Section className="bg-brand-cream">
      <Container>
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-display text-4xl font-bold text-brand-olive md:text-5xl">
              {heading}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-brand-text-soft">{body}</p>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
