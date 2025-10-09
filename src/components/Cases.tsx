import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    title: "E-commerce Fashion",
    category: "E-commerce",
    result: "+350% em vendas",
    description: "Estratégia completa de marketing digital para marca de moda, incluindo SEO, social media e campanhas pagas.",
    tags: ["SEO", "Social Media", "Ads"],
  },
  {
    title: "SaaS B2B",
    category: "Tecnologia",
    result: "+200% leads qualificados",
    description: "Inbound marketing e growth hacking para startup de software empresarial.",
    tags: ["Inbound", "Growth", "Content"],
  },
  {
    title: "Clínica de Estética",
    category: "Saúde",
    result: "+180% agendamentos",
    description: "Branding completo e estratégia de marketing local para clínica premium.",
    tags: ["Branding", "Local SEO", "Social"],
  },
];

const Cases = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Cases de sucesso
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos projetos que transformaram negócios
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <Card
              key={caseItem.title}
              className="group p-8 border-2 hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-card)] hover:-translate-y-2 cursor-pointer bg-gradient-to-br from-card to-card/50 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-sm font-semibold text-primary">
                  {caseItem.category}
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>

              <h3 className="text-2xl font-bold mb-3">{caseItem.title}</h3>
              
              <div className="text-2xl font-display font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
                {caseItem.result}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {caseItem.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {caseItem.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
