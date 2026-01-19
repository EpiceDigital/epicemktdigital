import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import logoEpice from "@/assets/logo-epice.jpg";
import foundersImg from "@/assets/founders.jpeg";
import cairoImg from "@/assets/specialist-cairo.jpg";
import guilhermeImg from "@/assets/specialist-guilherme.jpg";
import isaImg from "@/assets/specialist-isa.jpg";
import joaoImg from "@/assets/specialist-joao.jpg";
import marceloImg from "@/assets/specialist-marcelo.jpeg";
import rodrigoImg from "@/assets/specialist-rodrigo.jpg";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

const specialists = [
  { name: "Cairo Trader", handle: "@cairotrader", image: cairoImg },
  { name: "Guilherme Machado", handle: "@guilhermemachadooficial", image: guilhermeImg },
  { name: "Isa", handle: "@isabelepiresingles", image: isaImg },
  { name: "João Dib", handle: "@joãodibtrader", image: joaoImg },
  { name: "Marcelo Gomide", handle: "@marcelogomide", image: marceloImg },
  { name: "Rodrigo Miranda", handle: "@universidadedobitcoinoficial", image: rodrigoImg },
];

const Lancamentos = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    setMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen dark">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-center relative">
          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="absolute left-4 md:hidden text-gray-300 hover:text-primary transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <img 
            src={logoEpice} 
            alt="epice" 
            className="h-8 md:h-10"
          />
          
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 absolute right-4">
            <button 
              onClick={() => scrollToSection('objetivo')}
              className="text-gray-300 hover:text-primary transition-colors font-medium"
            >
              Objetivo
            </button>
            <button 
              onClick={() => scrollToSection('metodologia')}
              className="text-gray-300 hover:text-primary transition-colors font-medium"
            >
              Metodologia
            </button>
            <button 
              onClick={() => scrollToSection('especialistas')}
              className="text-gray-300 hover:text-primary transition-colors font-medium"
            >
              Especialistas
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-300 hover:text-primary transition-colors font-medium"
            >
              Sobre nós
            </button>
            <button 
              onClick={scrollToContact}
              className="text-gray-300 hover:text-primary transition-colors font-medium"
            >
              Contato
            </button>
          </nav>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-border/50">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('objetivo')}
                className="text-gray-300 hover:text-primary transition-colors font-medium text-left py-2"
              >
                Objetivo
              </button>
              <button 
                onClick={() => scrollToSection('metodologia')}
                className="text-gray-300 hover:text-primary transition-colors font-medium text-left py-2"
              >
                Metodologia
              </button>
              <button 
                onClick={() => scrollToSection('especialistas')}
                className="text-gray-300 hover:text-primary transition-colors font-medium text-left py-2"
              >
                Especialistas
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-gray-300 hover:text-primary transition-colors font-medium text-left py-2"
              >
                Sobre nós
              </button>
              <button 
                onClick={scrollToContact}
                className="text-gray-300 hover:text-primary transition-colors font-medium text-left py-2"
              >
                Contato
              </button>
            </nav>
          </div>
        )}
      </header>
      
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
      <section id="objetivo" className="relative pt-12 pb-20 bg-background">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-20 text-center"
          >
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Qual nosso objetivo?
            </span>
          </motion.h2>
          
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
      <section id="metodologia" className="relative py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-16 text-center text-white">
            E claro, temos uma metodologia clara para perpetuar sua mensagem:
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Circular Flow Layout */}
            <div className="relative">
              {/* Desktop: Circular layout with SVG arrows */}
              <div className="hidden md:block">
                <div className="relative w-full aspect-square max-w-lg mx-auto">
                  {/* SVG Curved Arrows */}
                  <svg 
                    className="absolute inset-0 w-full h-full" 
                    viewBox="0 0 400 400"
                    style={{ transform: 'rotate(-45deg)' }}
                  >
                    <defs>
                      <marker 
                        id="arrowhead" 
                        markerWidth="10" 
                        markerHeight="7" 
                        refX="9" 
                        refY="3.5" 
                        orient="auto"
                      >
                        <polygon 
                          points="0 0, 10 3.5, 0 7" 
                          fill="hsl(var(--primary))" 
                        />
                      </marker>
                      <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                    
                    {/* Curved arrow 1: Top-right arc */}
                    <path
                      d="M 200 60 A 140 140 0 0 1 340 200"
                      fill="none"
                      stroke="url(#arrowGradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      markerEnd="url(#arrowhead)"
                      className="animate-[pulse_2s_ease-in-out_infinite]"
                      style={{ animationDelay: '0s' }}
                    />
                    
                    {/* Curved arrow 2: Bottom-right arc */}
                    <path
                      d="M 340 200 A 140 140 0 0 1 200 340"
                      fill="none"
                      stroke="url(#arrowGradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      markerEnd="url(#arrowhead)"
                      className="animate-[pulse_2s_ease-in-out_infinite]"
                      style={{ animationDelay: '0.5s' }}
                    />
                    
                    {/* Curved arrow 3: Bottom-left arc */}
                    <path
                      d="M 200 340 A 140 140 0 0 1 60 200"
                      fill="none"
                      stroke="url(#arrowGradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      markerEnd="url(#arrowhead)"
                      className="animate-[pulse_2s_ease-in-out_infinite]"
                      style={{ animationDelay: '1s' }}
                    />
                    
                    {/* Curved arrow 4: Top-left arc */}
                    <path
                      d="M 60 200 A 140 140 0 0 1 200 60"
                      fill="none"
                      stroke="url(#arrowGradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      markerEnd="url(#arrowhead)"
                      className="animate-[pulse_2s_ease-in-out_infinite]"
                      style={{ animationDelay: '1.5s' }}
                    />
                  </svg>
                  
                  {/* Top - Captação */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2">
                    <div className="px-6 py-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 backdrop-blur-sm bg-black/50">
                      <span className="text-xl font-bold text-primary">Captação</span>
                    </div>
                  </div>
                  
                  {/* Right - Qualificação */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4">
                    <div className="px-6 py-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 backdrop-blur-sm bg-black/50">
                      <span className="text-xl font-bold text-primary">Qualificação</span>
                    </div>
                  </div>
                  
                  {/* Bottom - Monetização */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                    <div className="px-6 py-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 backdrop-blur-sm bg-black/50">
                      <span className="text-xl font-bold text-primary">Monetização</span>
                    </div>
                  </div>
                  
                  {/* Left - Retenção */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4">
                    <div className="px-6 py-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 backdrop-blur-sm bg-black/50">
                      <span className="text-xl font-bold text-primary">Retenção</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile: Vertical flow with loop indicator */}
              <div className="md:hidden flex flex-col items-center gap-4">
                <div className="px-6 py-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30">
                  <span className="text-lg font-bold text-primary">Captação</span>
                </div>
                <svg className="h-8 w-8 text-primary animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
                <div className="px-6 py-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30">
                  <span className="text-lg font-bold text-primary">Qualificação</span>
                </div>
                <svg className="h-8 w-8 text-primary animate-bounce" style={{ animationDelay: '0.2s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
                <div className="px-6 py-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30">
                  <span className="text-lg font-bold text-primary">Monetização</span>
                </div>
                <svg className="h-8 w-8 text-primary animate-bounce" style={{ animationDelay: '0.4s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
                <div className="px-6 py-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30">
                  <span className="text-lg font-bold text-primary">Retenção</span>
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
      <section id="especialistas" className="relative py-24 bg-background">
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

      {/* Sobre Nós */}
      <section id="sobre" className="relative min-h-[800px] md:min-h-[900px] bg-background overflow-hidden">
        {/* Background image - full section */}
        <div className="absolute inset-0">
          <img 
            src={foundersImg} 
            alt="Fundadores Epice" 
            className="w-full h-full object-cover object-top"
          />
          {/* Gradient fade from top covering until chest level */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-transparent" style={{ height: '45%' }} />
        </div>

        {/* Content positioned at top */}
        <div className="container mx-auto px-4 relative z-10 pt-24 pb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Sobre nós
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8 text-lg md:text-xl text-gray-300 text-center">
            <p>
              Com mais de 3 anos no mercado, a Epice digital foi criada com o objetivo de impulsionar a mensagens de especialistas e produtores de conteúdo, auxiliando na criação de um ecossistema lucrativo de infoprodutos.
            </p>
            <p>
              Usando marketing e gestão empresarial, utilizamos uma metodologia específica para perpetuar a mensagem de cada infoprodutor.
            </p>
            <p>
              Acreditamos que com uma estratégia alinhada e a equipe certa, você consegue focar no que faz de melhor: mudar a vida das pessoas com sua mensagem e produto, e nós estamos aqui para te ajudar nisso.
            </p>
          </div>
        </div>

        {/* Black fade from waist/chest level down */}
        <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-black via-black/90 to-transparent" />
      </section>

      <Footer />
    </div>
  );
};

export default Lancamentos;
