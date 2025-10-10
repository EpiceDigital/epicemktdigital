import { Instagram, Linkedin, Twitter, Mail } from "lucide-react";
import logoEpice from "@/assets/logo-epice.jpg";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img 
              src={logoEpice} 
              alt="epice" 
              className="h-16 mb-4"
            />
            <p className="text-gray-300 mb-4">
              Departamento de marketing 360° para sua empresa crescer.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors group">
                <Instagram className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors group">
                <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors group">
                <Twitter className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors group">
                <Mail className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Audiovisual
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Copywriting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Social Media
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Tráfego Pago
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Estratégia
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Cases
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contato</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">
                São Paulo, SP
              </li>
              <li>
                <a href="mailto:contato@epice.com.br" className="text-gray-300 hover:text-primary transition-colors">
                  contato@epice.com.br
                </a>
              </li>
              <li>
                <a href="tel:+5511999999999" className="text-gray-300 hover:text-primary transition-colors">
                  (11) 99999-9999
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-gray-400">
          <p>&copy; 2025 epice. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
