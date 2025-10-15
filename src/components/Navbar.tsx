import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logoEpice from "@/assets/logo-epice.jpg";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logoEpice} alt="epice" className="h-16 md:h-20" />
          </Link>

          {/* Navigation - Always visible */}
          <div className="flex items-center gap-2 md:gap-4">
            <Link to="/">
              <Button 
                variant={location.pathname === "/" ? "default" : "hero"}
                size="default"
                className="font-bold text-sm md:text-base"
              >
                Prestação de Serviços
              </Button>
            </Link>
            <Link to="/lancamentos">
              <Button 
                variant="hero"
                size="default"
                className="font-bold text-sm md:text-base"
              >
                Lançamentos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
