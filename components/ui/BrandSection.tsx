import Image from "next/image";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

interface BrandSectionProps {
  heading: string;
  body: string;
  cta: { href: string; label: string };
  image: { src: string; alt: string };
  imagePosition?: "left" | "right";
  className?: string;
}

export default function BrandSection({
  heading,
  body,
  cta,
  image,
  imagePosition = "left",
  className,
}: BrandSectionProps) {
  return (
    <Section className={className}>
      <Container>
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <AnimatedSection className={imagePosition === "right" ? "md:order-2" : undefined}>
            <div className="relative h-72 w-full overflow-hidden rounded-2xl md:h-96">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="eager"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection className={imagePosition === "right" ? "md:order-1" : undefined}>
            <SectionHeading heading={heading} className="text-left mb-4" />
            <p className="text-base leading-relaxed text-brand-text-soft">{body}</p>
            <div className="mt-6">
              <Button href={cta.href} variant="primary">
                {cta.label}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </Section>
  );
}
