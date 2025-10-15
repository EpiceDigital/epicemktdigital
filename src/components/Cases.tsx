import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback } from "react";
import casesBg from "@/assets/cases-bg.jpg";
import caseAnaKarolina from "@/assets/case-ana-karolina-new.png";
import caseMba from "@/assets/case-mba.png";
import caseModelise from "@/assets/case-modelise.png";
import casePauloCapel from "@/assets/case-paulo-capel.png";
import caseRewiid from "@/assets/case-rewiid-new.png";

const cases = [
  { name: "Ana Karolina", image: caseAnaKarolina, bgColor: "#FFD9B4" },
  { name: "MBA", image: caseMba, bgColor: "#000000" },
  { name: "Modelisé", image: caseModelise, bgColor: "#1a3d32" },
  { name: "Paulo Capel", image: casePauloCapel, bgColor: "#000000" },
  { name: "Rewiid", image: caseRewiid, bgColor: "#f4c430" },
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
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${casesBg})`,
          opacity: 0.05
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent px-4">
            Conheça alguns de nossos principais cases
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Resultados reais de clientes que confiaram em nosso trabalho
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto mb-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {cases.map((caseItem, index) => (
                <div
                  key={index}
                  className="flex-[0_0_320px] min-w-0"
                >
                  <div 
                    className="group aspect-video rounded-2xl overflow-hidden border-2 border-border hover:border-primary transition-all duration-500 flex items-center justify-center p-10 hover:scale-105 hover:[box-shadow:var(--shadow-glow)]"
                    style={{
                      background: caseItem.bgColor
                    }}
                  >
                    <img 
                      src={caseItem.image} 
                      alt={caseItem.name}
                      className="w-full h-full object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center px-4">
          <Button variant="hero" size="lg" className="group uppercase font-bold">
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
