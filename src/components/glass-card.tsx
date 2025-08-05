import * as React from "react"
import { cn } from "@/lib/utils";
import { Card as ShadCnCard, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, ...props }, ref) => (
    <ShadCnCard 
      ref={ref}
      className={cn(
        "bg-white/5 backdrop-blur-md border border-white/10 shadow-lg",
        "transition-all duration-300 hover:bg-white/10 hover:border-white/20",
        className
      )} 
      {...props}
    >
      {children}
    </ShadCnCard>
));
GlassCard.displayName = "GlassCard";

export { GlassCard, CardHeader, CardContent, CardFooter, CardTitle, CardDescription };
