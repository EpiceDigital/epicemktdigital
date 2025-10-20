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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;
    
    // Construir mensagem para WhatsApp
    const whatsappMessage = encodeURIComponent(
      `*Contato de ${name}*\n\nEmail: ${email}\nTelefone: ${phone}\n\nMensagem:\n${message}`
    );
    
    const whatsappLink = `https://wa.me/551148637876?text=${whatsappMessage}`;
    
    // Abrir WhatsApp
    window.open(whatsappLink, '_blank');
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Sua mensagem está pronta para envio.",
    });
    
    form.reset();
  };

  return (
    <section className="py-12 md:py-24 bg-black relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${contactBg})`,
          opacity: 0.1
        }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
            Entre em contato
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-3 md:mt-4 md:mb-4 text-white px-2 md:px-4">
            Entre em contato com nossa equipe,
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              para impulsionar seu marketing
            </span>
          </h2>
          <p className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto px-2 md:px-4">
            Estamos prontos para ajudar sua empresa a crescer
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <Card className="p-5 md:p-8 border-2 border-primary/40 bg-card/70 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-100">Nome completo</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    required
                    className="bg-background/70 border-border/80 text-white placeholder:text-gray-400 h-11 focus:border-primary/50 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-100">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                    className="bg-background/70 border-border/80 text-white placeholder:text-gray-400 h-11 focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-gray-100">Telefone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="11 4863-7876"
                  required
                  className="bg-background/70 border-border/80 text-white placeholder:text-gray-400 h-11 focus:border-primary/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-gray-100">Mensagem</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Conte-nos sobre seu projeto..."
                  rows={5}
                  required
                  className="bg-background/70 border-border/80 text-white placeholder:text-gray-400 min-h-[120px] focus:border-primary/50 transition-colors resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full uppercase font-bold text-sm md:text-base py-6 md:py-6 mt-2"
              >
                Enviar mensagem
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-primary/20">
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold mb-1 text-sm md:text-base text-gray-100">Email</div>
                <a href="mailto:contato@epicedigital.com" className="text-gray-300 hover:text-primary transition-colors text-xs md:text-sm break-all">
                  contato@epicedigital.com
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-primary/20">
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold mb-1 text-sm md:text-base text-gray-100">Telefone</div>
                <a href="tel:+551148637876" className="text-gray-300 hover:text-primary transition-colors text-xs md:text-sm">
                  11 4863-7876
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-primary/20">
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold mb-1 text-sm md:text-base text-gray-100">Localização</div>
                <p className="text-gray-300 text-xs md:text-sm">
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
