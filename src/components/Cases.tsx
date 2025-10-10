import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback } from "react";

const clientLogos = [
  { name: "Cliente 1", logo: "C1" },
  { name: "Cliente 2", logo: "C2" },
  { name: "Cliente 3", logo: "C3" },
  { name: "Cliente 4", logo: "C4" },
  { name: "Cliente 5", logo: "C5" },
  { name: "Cliente 6", logo: "C6" },
];

const Cases = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
            Conheça alguns de nossos principais cases
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto mb-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-8">
              {clientLogos.map((client, index) => (
                <div
                  key={index}
                  className="flex-[0_0_200px] min-w-0"
                >
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-card to-card/50 border-2 border-border flex items-center justify-center hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-card)]">
                    <span className="text-4xl font-display font-bold text-primary">
                      {client.logo}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button variant="hero" size="lg" className="group uppercase font-bold">
            Quero o meu departamento de marketing
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cases;
