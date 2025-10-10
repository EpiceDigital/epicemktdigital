import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Captação",
    description: "Atraímos o público certo através de estratégias de marketing digital focadas em resultados.",
  },
  {
    title: "Qualificação",
    description: "Identificamos e qualificamos leads com alto potencial de conversão para o seu negócio.",
  },
  {
    title: "Monetização",
    description: "Transformamos leads qualificados em clientes através de estratégias de vendas eficientes.",
  },
  {
    title: "Retenção",
    description: "Mantemos clientes engajados e satisfeitos, aumentando o lifetime value da sua base.",
  },
];

const Methodology = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Conheça a nossa metodologia
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Criamos uma estrutura que se retroalimenta, sempre gerando demanda, focando em vender e reter mais clientes dentro da sua base.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative group animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-card)] h-full">
                  <div className="text-5xl font-display font-bold text-primary/20 mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
