import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      </div>

      {/* Floating geometric elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/20 rounded-lg rotate-12 animate-float" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-primary/10 rotate-45 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                NIDHI K N
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
              AI & Data Science Engineering Student | Aspiring Tech Entrepreneur | NCC Cadet
            </h2>
          </div>

          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto italic">
            "Curious mind shaping intelligent solutions."
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="lg" 
              className="group"
              onClick={() => window.open('/resume.docx', '_blank')}
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              View Resume
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;