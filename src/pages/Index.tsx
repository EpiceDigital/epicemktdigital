import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Methodology from "@/components/Methodology";
import Cases from "@/components/Cases";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen dark">
      <Navbar />
      <Hero />
      <section id="about">
        <Methodology />
      </section>
      <section id="cases">
        <Cases />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
