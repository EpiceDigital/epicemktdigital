import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const highlights = [
    "Equipe especializada com +10 anos de experiência",
    "Metodologia própria baseada em dados",
    "Resultados mensuráveis e transparentes",
    "Atendimento personalizado e consultivo",
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Sobre nós
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 text-white">
              Transformamos ideias em{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                resultados
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Somos uma agência de marketing digital apaixonada por criar experiências 
              digitais que conectam marcas com pessoas. Nossa missão é impulsionar o 
              crescimento dos nossos clientes através de estratégias inovadoras e 
              orientadas por dados.
            </p>

            <div className="space-y-4 mb-8">
              {highlights.map((highlight, index) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3 animate-in fade-in slide-in-from-left duration-700"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-white">{highlight}</span>
                </div>
              ))}
            </div>

            <Button variant="default" size="lg">
              Conheça nossa equipe
            </Button>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right duration-700">
            <div className="aspect-square rounded-3xl bg-[var(--gradient-hero)] p-1">
              <div className="w-full h-full rounded-3xl bg-background flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-display font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
                    250+
                  </div>
                  <p className="text-xl font-semibold mb-2 text-white">Projetos entregues</p>
                  <p className="text-gray-300">
                    Com excelência e dedicação
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-primary/10 backdrop-blur-sm border border-primary/20 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-2xl bg-secondary/10 backdrop-blur-sm border border-secondary/20 animate-pulse delay-75" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
