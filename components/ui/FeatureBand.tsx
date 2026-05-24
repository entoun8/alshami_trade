import Image from "next/image";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface CtaConfig {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

interface FeatureBandProps {
  heading: string;
  body?: string;
  cta?: CtaConfig;
  image?: { src: string; alt: string };
}

export default function FeatureBand({ heading, body, cta, image }: FeatureBandProps) {
  return (
    <Section className="bg-brand-olive-dark">
      <Container>
        <div className={cn("flex flex-col gap-10", image ? "md:flex-row md:items-center md:gap-16" : "max-w-2xl mx-auto text-center")}>
          <div className={image ? "md:flex-1" : undefined}>
            <h2 className="font-display text-3xl font-bold text-brand-gold md:text-4xl">
              {heading}
            </h2>
            {body && (
              <p className="mt-4 text-base leading-relaxed text-brand-text-light-soft md:text-lg">
                {body}
              </p>
            )}
            {cta && (
              <div className="mt-8">
                <Button href={cta.href} variant={cta.variant ?? "primary"}>
                  {cta.label}
                </Button>
              </div>
            )}
          </div>

          {image && (
            <div className="relative h-64 w-full overflow-hidden rounded-xl md:h-80 md:flex-1">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
