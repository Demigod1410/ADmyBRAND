import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GlassCard, CardContent } from "@/components/glass-card";

const testimonials = [
  {
    quote: "ADmyBRAND has revolutionized our ad strategy. The AI insights are a game-changer, and our ROI has never been better.",
    name: "Sarah Johnson",
    title: "Marketing Director, TechCorp",
    avatar: "SJ",
  },
  {
    quote: "The platform's ease of use and powerful features allowed our small team to compete with much larger players. Highly recommended!",
    name: "Mike Chen",
    title: "Founder, Bloom & Dash",
    avatar: "MC",
  },
  {
    quote: "The predictive analytics feature is incredibly accurate. We can now allocate our budget with confidence and precision.",
    name: "Laura Rivera",
    title: "Head of Growth, Innovate Solutions",
    avatar: "LR",
  },
  {
    quote: "The best part is the creative automation. We're testing more ad variations than ever before, and it's driving amazing results.",
    name: "David Lee",
    title: "E-commerce Manager, StyleHub",
    avatar: "DL",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">Loved by Marketers Worldwide</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Don't just take our word for it. Here's what our customers are saying.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <GlassCard className="h-full flex flex-col">
                    <CardContent className="flex flex-col items-start justify-between flex-grow p-6">
                      <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                      <div className="flex items-center gap-4 mt-auto">
                        <Avatar>
                          <AvatarImage src={`https://placehold.co/40x40.png?text=${testimonial.avatar}`} />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </GlassCard>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
