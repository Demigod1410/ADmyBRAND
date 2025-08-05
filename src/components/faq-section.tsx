import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is ADmyBRAND AI Suite?",
    answer: "ADmyBRAND AI Suite is a comprehensive set of tools that leverage artificial intelligence to optimize your advertising campaigns, from audience targeting to creative generation and performance analysis."
  },
  {
    question: "Who is this platform for?",
    answer: "Our suite is designed for marketing professionals, advertising agencies, and businesses of all sizes who want to enhance their digital advertising efforts with the power of AI."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer 24/7 email support for all plans. Our Pro and Enterprise plans include dedicated account managers and priority support to ensure you get the most out of our platform."
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time. You will retain access to the features of your plan until the end of your billing cycle."
  },
   {
    question: "Do you offer a free trial?",
    answer: "We offer a 14-day free trial on our Basic and Pro plans. This allows you to explore the features and see the value for yourself before committing."
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="w-full py-16 md:py-24 lg:py-32 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Find answers to common questions about our AI suite.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-lg font-medium text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
