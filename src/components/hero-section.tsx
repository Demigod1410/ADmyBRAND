'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import  Threads  from "@/blocks/Backgrounds/Threads/Threads";

export default function HeroSection() {
  const component = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from("#hero-image", {
        opacity: 0,
        scale: 1.05,
        duration: 0.8,
        ease: "power3.inOut"
      })
      .from("#hero-title", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.4")
      .from("#hero-description", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power3.out"
      }, "-=0.4")
      .from("#hero-buttons", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power3.out"
      }, "-=0.3")
      .from("#hero-perks", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power3.out"
      }, "-=0.3");

    }, component);
    return () => ctx.revert(); 
  }, []);


  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black" ref={component}>
      <Threads
        amplitude={2}
        distance={0.3}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 z-10">
          <div className="flex flex-col items-center justify-center text-center w-full">
            <div className="flex flex-col justify-center items-center space-y-8 max-w-3xl w-full">
              <h1 id="hero-title" className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white mx-auto">
                Unleash Advertising Superpowers with AI
              </h1>
              <p id="hero-description" className="max-w-[600px] text-gray-200 md:text-xl mx-auto">
                ADmyBRAND AI Suite is your all-in-one platform for creating, managing, and optimizing ad campaigns that deliver exceptional results.
              </p>
              <div id="hero-buttons" className="flex flex-col sm:flex-row gap-4 justify-center mx-auto">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="#pricing">Start Your Free Trial</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <Link href="#features">Explore Features</Link>
                </Button>
              </div>
              <div id="hero-perks" className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:space-x-4 text-sm text-gray-200 mt-4 mx-auto">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>14-day free trial</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
