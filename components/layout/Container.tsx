import { cn } from "@/lib/utils";
import { CONTAINER_MAX_WIDTH } from "@/lib/constants";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div style={{ maxWidth: CONTAINER_MAX_WIDTH }} className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
