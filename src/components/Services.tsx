import { Card } from "@/components/ui/card";
import { Video, Palette, PenTool, Users, TrendingUp, Target } from "lucide-react";
import servicesBg from "@/assets/services-bg.jpg";

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
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${servicesBg})`,
          opacity: 0.1
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-white px-4">
            Conheça nossos principais serviços
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="p-6 md:p-8 border-2 hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-card)] hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm group animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[var(--gradient-card)] flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-6 w-6 md:h-7 md:w-7 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">{service.title}</h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
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
