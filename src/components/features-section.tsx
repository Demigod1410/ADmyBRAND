'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrainCircuit, Target, LineChart, BotMessageSquare } from 'lucide-react';
import SpotlightCard from '@/blocks/Components/SpotlightCard/SpotlightCard';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <BrainCircuit className="h-10 w-10 text-accent" />,
    title: 'AI-Powered Insights',
    description: 'Unlock deep audience and market insights to drive your strategy forward with precision.',
  },
  {
    icon: <Target className="h-10 w-10 text-accent" />,
    title: 'Hyper-Targeting',
    description: 'Reach your ideal customer with unparalleled accuracy using our advanced AI targeting algorithms.',
  },
  {
    icon: <LineChart className="h-10 w-10 text-accent" />,
    title: 'Predictive Analytics',
    description: 'Forecast campaign performance and budget needs with our predictive models to maximize ROI.',
  },
  {
    icon: <BotMessageSquare className="h-10 w-10 text-accent" />,
    title: 'Creative Automation',
    description: 'Automatically generate and test ad creatives at scale, ensuring your message always resonates.',
  },
];

export default function FeaturesSection() {
    const component = useRef(null);
    const featureCardsRef = useRef<Array<HTMLDivElement | null>>([]);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            featureCardsRef.current.forEach((card, index) => {
                gsap.fromTo(card,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 80%',
                            toggleActions: 'play none none none',
                        },
                        delay: index * 0.1,
                    }
                );
            });
        }, component);
        return () => ctx.revert();
    }, []);

    return (
        <section id="features" className="w-full min-h-screen py-16 md:py-24 lg:py-32 bg-black" ref={component}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Powerful Features, Unlocked by AI</h2>
                    <p className="mt-4 text-gray-300 md:text-xl">
                        Our platform is packed with features designed to give you a competitive edge.
                    </p>
                </div>
                <div className="mx-auto mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <div key={index} ref={(el) => { featureCardsRef.current[index] = el; }}>
                            <SpotlightCard className=" custom-spotlight-card spotlightColor=rgba(255, 154, 255, 0.66) h-full p-6 transition-all duration-300 hover:scale-105 rounded-[25px] overflow-hidden">
                                <div className="flex flex-col items-center text-center gap-4 mb-6">
                                    <div className="p-3 rounded-full bg-accent/10">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold font-headline text-white">{feature.title}</h3>
                                </div>
                                <div className="text-center text-gray-300">
                                    <p>{feature.description}</p>
                                </div>
                            </SpotlightCard>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
