import { Card } from "@/components/ui/card";
import { Search, Users, Palette, TrendingUp, Megaphone, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO & SEM",
    description: "Posicione sua marca no topo dos resultados de busca e maximize sua visibilidade online.",
  },
  {
    icon: Users,
    title: "Social Media",
    description: "Construa uma presença marcante nas redes sociais e engaje seu público de forma autêntica.",
  },
  {
    icon: Palette,
    title: "Branding & Design",
    description: "Crie uma identidade visual única que reflita a essência da sua marca.",
  },
  {
    icon: TrendingUp,
    title: "Growth Marketing",
    description: "Estratégias baseadas em dados para acelerar o crescimento do seu negócio.",
  },
  {
    icon: Megaphone,
    title: "Publicidade Digital",
    description: "Campanhas pagas otimizadas para máximo retorno sobre investimento.",
  },
  {
    icon: BarChart3,
    title: "Analytics & BI",
    description: "Insights profundos através de análise de dados e inteligência de negócios.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Nossos serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas de marketing digital para transformar sua presença online
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="p-8 border-2 hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-card)] hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm group animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-[var(--gradient-card)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
