import { Instagram, Linkedin, Mail } from "lucide-react";
import logoEpice from "@/assets/logo-epice.jpg";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Top section - Logo and Social */}
        <div className="text-center mb-12">
          <img 
            src={logoEpice} 
            alt="epice" 
            className="h-20 mx-auto mb-6"
          />
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Departamento de marketing 360° para sua empresa crescer.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="https://www.instagram.com/epicedigital/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-all group">
              <Instagram className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
            </a>
            <a href="https://www.linkedin.com/company/epice-digital/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-all group">
              <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
            </a>
            <a href="mailto:contato@epicedigital.com" className="w-12 h-12 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-all group">
              <Mail className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Middle section - Links */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
          {/* Company */}
          <div className="text-center">
            <h4 className="font-semibold mb-4 text-white text-lg">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-primary transition-colors">
                  Sobre
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-primary transition-colors">
                  Cases
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-primary transition-colors">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h4 className="font-semibold mb-4 text-white text-lg">Contato</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">
                São Paulo, SP
              </li>
              <li>
                <a href="mailto:contato@epicedigital.com" className="text-gray-300 hover:text-primary transition-colors">
                  contato@epicedigital.com
                </a>
              </li>
              <li>
                <a href="tel:+551148637876" className="text-gray-300 hover:text-primary transition-colors">
                  11 4863-7876
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section - Copyright */}
        <div className="pt-8 border-t border-border text-center text-sm text-gray-400">
          <p>&copy; 2025 epice. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
