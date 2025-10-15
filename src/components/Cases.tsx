import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback } from "react";
import casesBg from "@/assets/cases-bg.jpg";

const specialists: { name: string; image: string }[] = [];

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
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${casesBg})`,
          opacity: 0.08
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-white px-4">
            Conheça alguns de nossos principais cases
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-4">
            Resultados reais de clientes que confiaram em nosso trabalho
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto mb-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-8">
              {specialists.map((specialist, index) => (
                <div
                  key={index}
                  className="flex-[0_0_200px] min-w-0"
                >
                  <div className="aspect-square rounded-2xl overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-card)]">
                    <img 
                      src={specialist.image} 
                      alt={specialist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center px-4">
          <Button variant="hero" size="lg" className="uppercase font-bold text-sm md:text-base px-6 md:px-8 py-5 md:py-6 rounded-lg w-full md:w-auto max-w-md">
            <span className="text-center leading-snug">
              Quero o meu departamento
              <br />
              de marketing
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cases;
