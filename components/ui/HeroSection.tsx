import Image from "next/image";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import type { HeroCta } from "@/types";

interface HeroSectionProps {
  heading: string;
  body: string;
  ctas?: HeroCta[];
  image: { src: string; alt: string };
}

export default function HeroSection({ heading, body, ctas, image }: HeroSectionProps) {
  return (
    <Section className="bg-brand-cream">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
          <div className="md:flex-1">
            <h1 className="font-display text-4xl font-bold leading-tight text-brand-olive md:text-5xl lg:text-6xl">
              {heading}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-brand-text-soft md:text-lg">
              {body}
            </p>
            {ctas && ctas.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-4">
                {ctas.map((cta) => (
                  <Button key={cta.href} href={cta.href} variant={cta.variant ?? "primary"}>
                    {cta.label}
                  </Button>
                ))}
              </div>
            )}
          </div>

          <div className="relative h-72 w-full overflow-hidden rounded-2xl md:h-96 md:flex-1">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
