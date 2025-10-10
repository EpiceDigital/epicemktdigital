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
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          Um departamento de marketing
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            moldado para sua empresa.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          Montamos uma equipe 360° que respira o seu negócio, entende seus objetivos e constrói estratégias que funcionam para o crescimento da sua empresa.
        </p>

        <div className="flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <Button variant="hero" size="lg" className="group uppercase font-bold">
            Quero o meu departamento de marketing
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
