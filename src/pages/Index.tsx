import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Extracurriculars from "@/components/Extracurriculars";
import CreativityHobbies from "@/components/CreativityHobbies";
import Goals from "@/components/Goals";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Extracurriculars />
        <CreativityHobbies />
        <Goals />
        <Contact />
      </main>
      <footer className="bg-muted/30 py-8 text-center text-muted-foreground">
        <div className="container px-4">
          <p>© 2024 Nidhi K N. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;