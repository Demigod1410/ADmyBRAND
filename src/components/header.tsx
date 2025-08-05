'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Mountain } from "lucide-react"

export default function Header() {
  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-4 mx-auto z-50 w-[95%] bg-black/10 backdrop-blur-md border border-white/10 rounded-[28px]">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold font-headline">ADmyBRAND</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button>Get Started</Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 py-6">
              <Link href="/" className="flex items-center gap-2">
                <Mountain className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold font-headline">ADmyBRAND</span>
              </Link>
              <nav className="grid gap-2 text-lg font-medium">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="hover:text-primary transition-colors py-2">
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Button className="w-full mt-4">Get Started</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
