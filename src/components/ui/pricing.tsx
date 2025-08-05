"use client";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
  className?: string;
}

export function Pricing({
  plans,
  title = "Simple, Transparent Pricing",
  description = "Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support.",
  className,
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: [
          "hsl(var(--primary))",
          "hsl(var(--accent))",
          "hsl(var(--secondary))",
          "hsl(var(--muted))",
        ],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  return (
    <div className="container py-20">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h2>
        <p className="text-muted-foreground text-lg whitespace-pre-line">
          {description}
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="bg-muted/30 rounded-full p-1.5 flex items-center gap-4 shadow-inner">
          <button 
            onClick={() => setIsMonthly(true)} 
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
              isMonthly ? "bg-white text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Monthly
          </button>
          <label className="relative inline-flex items-center cursor-pointer">
            <Label>
              <Switch
                ref={switchRef as any}
                checked={!isMonthly}
                onCheckedChange={handleToggle}
                className="relative"
              />
            </Label>
          </label>
          <button 
            onClick={() => setIsMonthly(false)} 
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
              !isMonthly ? "bg-white text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Annual <span className="text-primary font-semibold ml-1">-20%</span>
          </button>
        </div>
      </div>

      <div className={cn("grid grid-cols-1 md:grid-cols-3 sm:2 gap-4", className)}>
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 1 }}
            whileInView={
              isDesktop
                ? {
                    y: plan.isPopular ? -20 : 0,
                    opacity: 1,
                    x: index === 2 ? -30 : index === 0 ? 30 : 0,
                    scale: index === 0 || index === 2 ? 0.94 : 1.0,
                  }
                : {}
            }
            viewport={{ once: true }}
            transition={{
              duration: 1.6,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: 0.4,
              opacity: { duration: 0.5 },
            }}
            className={cn(
              `rounded-2xl border-[1px] p-8 text-center lg:flex lg:flex-col lg:justify-center relative`,
              plan.isPopular 
                ? "border-primary border-2 shadow-lg shadow-primary/20 bg-gradient-to-b from-background to-primary/5" 
                : "border-border shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-b from-background to-secondary/5",
              "flex flex-col",
              !plan.isPopular && "mt-5",
              index === 0 || index === 2
                ? "z-0 transform translate-x-0 translate-y-0 -translate-z-[50px] rotate-y-[10deg] hover:rotate-y-[5deg] transition-transform"
                : "z-10",
              index === 0 && "origin-right",
              index === 2 && "origin-left",
              "hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
            )}
          >
            {plan.isPopular && (
              <div className="absolute top-0 right-0 bg-primary py-1 px-3 rounded-bl-xl rounded-tr-2xl flex items-center shadow-md">
                <Star className="text-primary-foreground h-4 w-4 fill-current animate-pulse" />
                <span className="text-primary-foreground ml-1.5 font-sans font-semibold text-xs tracking-wider">
                  MOST POPULAR
                </span>
              </div>
            )}
            <div className="flex-1 flex flex-col">
              <div className="inline-block mx-auto px-4 py-1.5 rounded-full bg-primary/10 mb-2">
                <p className="text-sm font-bold tracking-wider text-primary">
                  {plan.name}
                </p>
              </div>
              <div className="mt-6 flex flex-col items-center justify-center">
                <div className="bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 rounded-2xl px-8 py-4 mb-2">
                  <div className="flex items-center justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-foreground">
                      <NumberFlow
                        value={
                          isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)
                        }
                        format={{
                          style: "currency",
                          currency: "USD",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        }}
                        transformTiming={{
                          duration: 500,
                          easing: "ease-out",
                        }}
                        willChange
                        className="font-variant-numeric: tabular-nums"
                      />
                    </span>
                    {plan.period !== "Next 3 months" && (
                      <span className="text-sm font-semibold leading-6 tracking-wide text-primary">
                        / {plan.period}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-xs leading-5 text-muted-foreground font-medium">
                  {isMonthly ? "billed monthly" : "billed annually"}
                  {!isMonthly && <span className="ml-1 text-primary font-semibold">(Save 20%)</span>}
                </p>
              </div>

              <ul className="mt-8 gap-3 flex flex-col">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Check className="h-3 w-3 text-primary flex-shrink-0" />
                    </div>
                    <span className="text-left text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <hr className="w-full my-6 opacity-30" />

              <Link
                href={plan.href}
                className={cn(
                  buttonVariants({
                    variant: plan.isPopular ? "default" : "outline",
                    size: "lg",
                  }),
                  "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tight py-6",
                  "transform-gpu transition-all duration-300 ease-out",
                  plan.isPopular
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                    : "bg-background text-foreground hover:bg-primary/10 border-2",
                  "rounded-xl"
                )}
              >
                {plan.buttonText}
                <span className="absolute right-0 h-full w-8 bg-gradient-to-l from-transparent to-transparent group-hover:from-white/10 transition-all duration-500" />
              </Link>
              <p className="mt-6 text-sm leading-5 text-muted-foreground">
                {plan.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
