import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import contactBg from "@/assets/contact-bg.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${contactBg})`,
          opacity: 0.1
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
            Entre em contato
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-4 mb-4 text-white px-4">
            Preencha o formulário
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              e fale com nosso time
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Estamos prontos para ajudar sua empresa a crescer
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <Card className="p-6 md:p-8 border-2 border-primary/30 bg-card/50 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-200">Nome completo</Label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background/50 border-border text-white placeholder:text-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-200">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background/50 border-border text-white placeholder:text-gray-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-200">Telefone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background/50 border-border text-white placeholder:text-gray-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-200">Mensagem</Label>
                <Textarea
                  id="message"
                  placeholder="Conte-nos sobre seu projeto..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-background/50 border-border text-white placeholder:text-gray-500"
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full uppercase font-bold text-sm md:text-base py-5 md:py-6">
                Enviar mensagem
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[var(--gradient-card)] flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold mb-1 text-white">Email</div>
                <a href="mailto:contato@epice.com.br" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  contato@epice.com.br
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[var(--gradient-card)] flex items-center justify-center">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold mb-1 text-white">Telefone</div>
                <a href="tel:+5511999999999" className="text-gray-300 hover:text-primary transition-colors text-sm">
                  (11) 99999-9999
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[var(--gradient-card)] flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold mb-1 text-white">Localização</div>
                <p className="text-gray-300 text-sm">
                  São Paulo, SP • Brasil
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
