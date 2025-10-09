import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Cases from "@/components/Cases";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Cases />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
