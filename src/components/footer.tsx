import Link from "next/link";
import { Mountain } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold font-headline">ADmyBRAND</span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm">
          <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
          <Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link>
          <Link href="#testimonials" className="hover:text-primary transition-colors">Testimonials</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
        </nav>
        <div className="text-center md:text-right mt-4 md:mt-0">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} ADmyBRAND Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
