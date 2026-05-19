import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const styles = {
  base: "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 min-h-[44px]",
  primary: "bg-brand-gold text-brand-olive-dark hover:bg-brand-gold-light",
  secondary: "border-2 border-brand-gold text-brand-gold bg-transparent hover:bg-brand-gold hover:text-brand-olive-dark",
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className,
  type = "button",
}: ButtonProps) {
  const classes = cn(styles.base, styles[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
