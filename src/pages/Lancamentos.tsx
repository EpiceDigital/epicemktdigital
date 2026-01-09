import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import logoEpice from "@/assets/logo-epice.jpg";
import cairoImg from "@/assets/specialist-cairo.jpg";
import guilhermeImg from "@/assets/specialist-guilherme.jpg";
import isaImg from "@/assets/specialist-isa.jpg";
import joaoImg from "@/assets/specialist-joao.jpg";
import marceloImg from "@/assets/specialist-marcelo.jpeg";
import rodrigoImg from "@/assets/specialist-rodrigo.jpg";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const specialists = [
  { name: "Cairo Trader", handle: "@cairotrader", image: cairoImg },
  { name: "Guilherme Machado", handle: "@guilhermemachadooficial", image: guilhermeImg },
  { name: "Isa", handle: "@isabelepiresingles", image: isaImg },
  { name: "João Dib", handle: "@joãodibtrader", image: joaoImg },
  { name: "Marcelo Gomide", handle: "@marcelogomide", image: marceloImg },
  { name: "Rodrigo Miranda", handle: "@universidadedobitcoinoficial", image: rodrigoImg },
];

const Lancamentos = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 1
  });

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollToContact = () => {
    const footer = document.querySelector('footer');
    footer?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 bg-black">
          <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-40" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <div className="mb-8 animate-in fade-in slide-in-from-top duration-700">
            <img 
              src={logoEpice} 
              alt="epice" 
              className="h-24 md:h-32 mx-auto"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 text-white">
            Te ajudamos a impulsionar
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              a sua mensagem
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            por meio de estratégias que geram escala, lucratividade e transformação.
          </p>

          <div className="flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button 
              variant="hero" 
              size="lg" 
              className="group uppercase font-bold"
              onClick={scrollToContact}
            >
              Quero entrar em contato
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Qual nosso objetivo */}
      <section className="relative py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Qual nosso objetivo?
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <p className="text-lg md:text-xl text-gray-300">
              Sabemos que cada especialista tem uma mensagem muito forte para espalhar para sua audiência.
            </p>
            <p className="text-lg md:text-xl text-gray-300">
              Te ajudamos a potencializar o seu propósito, e com isso, construir uma marca pessoal escalável e lucrativa com infoprodutos.
            </p>
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="relative py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-16 text-center text-white">
            E claro, temos uma metodologia clara para perpetuar sua mensagem:
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Circular Flow Layout */}
            <div className="relative">
              {/* Desktop: Circular layout */}
              <div className="hidden md:block">
                <div className="relative w-full aspect-square max-w-lg mx-auto">
                  {/* Top - Captação */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2">
                    <div className="px-6 py-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 backdrop-blur-sm">
                      <span className="text-xl font-bold text-primary">Captação</span>
                    </div>
                  </div>
                  
                  {/* Arrow: Captação → Qualificação */}
                  <div className="absolute top-[18%] right-[22%]">
                    <ArrowRight className="h-6 w-6 text-primary rotate-45" />
                  </div>
                  
                  {/* Right - Qualificação */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4">
                    <div className="px-6 py-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 backdrop-blur-sm">
                      <span className="text-xl font-bold text-primary">Qualificação</span>
                    </div>
                  </div>
                  
                  {/* Arrow: Qualificação → Monetização */}
                  <div className="absolute bottom-[18%] right-[22%]">
                    <ArrowRight className="h-6 w-6 text-primary rotate-[135deg]" />
                  </div>
                  
                  {/* Bottom - Monetização */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                    <div className="px-6 py-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 backdrop-blur-sm">
                      <span className="text-xl font-bold text-primary">Monetização</span>
                    </div>
                  </div>
                  
                  {/* Arrow: Monetização → Retenção */}
                  <div className="absolute bottom-[18%] left-[22%]">
                    <ArrowRight className="h-6 w-6 text-primary rotate-[225deg]" />
                  </div>
                  
                  {/* Left - Retenção */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4">
                    <div className="px-6 py-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 backdrop-blur-sm">
                      <span className="text-xl font-bold text-primary">Retenção</span>
                    </div>
                  </div>
                  
                  {/* Arrow: Retenção → Captação */}
                  <div className="absolute top-[18%] left-[22%]">
                    <ArrowRight className="h-6 w-6 text-primary -rotate-45" />
                  </div>
                </div>
              </div>
              
              {/* Mobile: Vertical flow with loop arrow */}
              <div className="md:hidden flex flex-col items-center gap-4">
                <div className="px-6 py-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30">
                  <span className="text-lg font-bold text-primary">Captação</span>
                </div>
                <ArrowRight className="h-5 w-5 text-primary rotate-90" />
                <div className="px-6 py-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30">
                  <span className="text-lg font-bold text-primary">Qualificação</span>
                </div>
                <ArrowRight className="h-5 w-5 text-primary rotate-90" />
                <div className="px-6 py-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30">
                  <span className="text-lg font-bold text-primary">Monetização</span>
                </div>
                <ArrowRight className="h-5 w-5 text-primary rotate-90" />
                <div className="px-6 py-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30">
                  <span className="text-lg font-bold text-primary">Retenção</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <ArrowRight className="h-5 w-5 text-primary rotate-180" />
                  <span className="text-sm text-primary/70">volta para Captação</span>
                </div>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 text-center mt-16 max-w-3xl mx-auto">
              Criamos uma estrutura que se retroalimenta, sempre gerando demanda qualificada, focando em vender e reter mais clientes dentro da sua base.
            </p>
          </div>
        </div>
      </section>

      {/* Especialistas Carousel */}
      <section className="relative py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Especialistas que já impulsionamos
            </span>
          </h2>

          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {specialists.map((specialist, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                  >
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border-2 border-border hover:border-primary transition-all duration-300 h-full">
                      <img 
                        src={specialist.image} 
                        alt={specialist.name}
                        className="w-32 h-32 rounded-full object-cover mb-4 mx-auto border-4 border-primary object-[center_30%]"
                      />
                      <h3 className="text-xl font-bold mb-2 text-white text-center">{specialist.name}</h3>
                      {specialist.handle && (
                        <p className="text-primary text-center font-medium">{specialist.handle}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-primary/20 hover:bg-primary/40 text-white p-3 rounded-full transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-primary/20 hover:bg-primary/40 text-white p-3 rounded-full transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center mt-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="group uppercase font-bold"
              onClick={scrollToContact}
            >
              Quero entrar em contato
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Por que ser lançado */}
      <section className="relative py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center text-white">
            Por que ser lançado pela <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Epice?</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8 text-lg md:text-xl text-gray-300">
            <p>
              O crescimento da sua empresa de infoprodutos depende de quanto tempo você passa criando conteúdo e construindo sua audiência. Não há como fugir dessa realidade.
            </p>
            <p>
              Toda hora que você gasta configurando sistemas, ajustando campanhas ou resolvendo problemas operacionais e estratégicos é uma hora que não está construindo relacionamento com quem realmente importa.
            </p>
            <p>
              Nossa proposta é direta: assumimos tudo que não precisa ser feito por você. Estratégia, execução, otimização, suporte — cuidamos de cada detalhe para que você foque exclusivamente no que gera resultado. <strong className="text-white">Sua mensagem e o seu propósito.</strong>
            </p>
          </div>

          <div className="flex justify-center mt-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="group uppercase font-bold"
              onClick={scrollToContact}
            >
              Quero entrar em contato
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Lancamentos;
