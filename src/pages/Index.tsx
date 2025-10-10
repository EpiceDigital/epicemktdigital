import Hero from "@/components/Hero";
import Methodology from "@/components/Methodology";
import Cases from "@/components/Cases";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen dark">
      <Hero />
      <Methodology />
      <Cases />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
