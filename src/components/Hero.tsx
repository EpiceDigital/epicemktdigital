import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95" />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-20 z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Transforme sua presença digital</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          Impulse sua marca
          <br />
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            ao próximo nível
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          Estratégias de marketing digital inovadoras que geram resultados reais. 
          Da criação à conversão, estamos com você.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <Button variant="hero" size="lg" className="group">
            Começar agora
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg">
            Ver cases de sucesso
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          {[
            { value: "250+", label: "Clientes ativos" },
            { value: "98%", label: "Satisfação" },
            { value: "300%", label: "ROI médio" },
            { value: "5 anos", label: "De mercado" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
