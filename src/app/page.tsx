
import HeroSection from '@/components/hero-section';
import FeaturesSection from '@/components/features-section';
import PricingSection from '@/components/pricing-section';
import TestimonialsSection from '@/components/testimonials-section';
import FaqSection from '@/components/faq-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import { GlassCard } from '@/components/glass-card';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
