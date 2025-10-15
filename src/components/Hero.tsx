import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import logoEpice from "@/assets/logo-epice.jpg";
import infinito from "@/assets/infinito.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
      {/* Dark background with gradient */}
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-40" />
      </div>

      {/* Content */}
      <div className="container mx-auto z-10 text-center">
        {/* Infinity Symbol */}
        <motion.div
          className="mb-8 md:mb-10"
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
            delay: 0.2
          }}
        >
          <motion.img
            src={infinito}
            alt="Infinito"
            className="h-16 md:h-20 lg:h-24 mx-auto"
            animate={{ 
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>

        {/* Logo */}
        <div className="mb-6 md:mb-8 animate-in fade-in slide-in-from-top duration-700">
          <img 
            src={logoEpice} 
            alt="epice" 
            className="h-24 md:h-32 lg:h-40 mx-auto"
          />
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6 px-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 text-white leading-tight">
          Um departamento de marketing
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            moldado para sua empresa.
          </span>
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-10 px-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 leading-relaxed">
          Montamos uma equipe 360° que respira o seu negócio, entende seus objetivos e constrói estratégias que funcionam para o crescimento da sua empresa.
        </p>

        <div className="flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 px-4">
          <Button variant="hero" size="lg" className="uppercase font-bold text-sm md:text-base lg:text-lg px-6 md:px-8 py-5 md:py-6 rounded-lg w-full md:w-auto max-w-md">
            <span className="text-center leading-snug">
              Quero o meu departamento
              <br />
              de marketing
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
