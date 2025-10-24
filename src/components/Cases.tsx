import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import casesBg from "@/assets/cases-bg.jpg";
import caseModelise from "@/assets/case-modelise.png";
import caseRewiid from "@/assets/case-rewiid-new.png";
import caseMontes from "@/assets/case-montes-new.png";

const cases = [
  { name: "Rewiid", image: caseRewiid },
  { name: "Modelisé", image: caseModelise },
  { name: "Montes Educação Corporativa", image: caseMontes },
];

const Cases = () => {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

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

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 transition-transform duration-700 ease-in-out">
            {cases.map((caseItem, index) => (
              <div
                key={index}
                className="flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0"
              >
                <div className="group aspect-video rounded-3xl overflow-hidden border-2 border-border hover:border-primary transition-all duration-500 hover:scale-105 hover:[box-shadow:var(--shadow-glow)] flex items-center justify-center bg-[#171717]">
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
