import { Link } from "react-router-dom";
import logoEpice from "@/assets/logo-epice.jpg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logoEpice} alt="epice" className="h-16 md:h-20" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
