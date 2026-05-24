import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  heading: string;
  subheading?: string;
  className?: string;
}

export default function SectionHeading({ heading, subheading, className }: SectionHeadingProps) {
  return (
    <div className={cn("text-center", className)}>
      <h2 className="font-display text-3xl font-bold text-brand-olive md:text-4xl">{heading}</h2>
      {subheading && (
        <p className="mt-3 text-base text-brand-text-soft md:text-lg">{subheading}</p>
      )}
    </div>
  );
}
