import { Card } from "@/components/ui/card";
import { Video, Palette, PenTool, Users, TrendingUp, Target } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Audiovisual",
    description: "Vídeos e fotos profissionais para destacar sua marca e aumentar o engajamento. Produção completa, do roteiro, à captação à edição final.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Identidade visual e peças gráficas criadas para chamar atenção e transmitir credibilidade.",
  },
  {
    icon: PenTool,
    title: "Copywriting",
    description: "Textos persuasivos para anúncios, sites e campanhas. Escrevemos para vender mais.",
  },
  {
    icon: Users,
    title: "Social Media",
    description: "Gestão de redes sociais com conteúdo estratégico e frequente para atrair e engajar seu público.",
  },
  {
    icon: TrendingUp,
    title: "Tráfego Pago (Meta e Google)",
    description: "Anúncios segmentados para gerar resultados rápidos e aumentar suas vendas.",
  },
  {
    icon: Target,
    title: "Estratégia",
    description: "Atuamos como um verdadeiro sócio na sua empresa, não só te entregando o serviço em si, mas também construindo estratégias lucrativas.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Conheça nossos principais serviços
          </h2>
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
