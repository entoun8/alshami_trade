import Image from "next/image";
import type { Product } from "@/types";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  return (
    <div
      className={cn(
        "group rounded-2xl bg-brand-cream-dark overflow-hidden shadow-md",
        "transition-all duration-200 hover:shadow-xl hover:-translate-y-1",
        className
      )}
    >
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          className="object-cover transition-transform duration-200 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <div className="px-4 pb-4 pt-3">
        <h3 className="text-sm font-semibold font-display text-brand-olive">{product.name}</h3>
        {product.description && (
          <p className="mt-1 text-sm text-brand-text-soft sm:line-clamp-2">{product.description}</p>
        )}
      </div>
      <div className="h-0.5 bg-brand-gold opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
    </div>
  );
}
