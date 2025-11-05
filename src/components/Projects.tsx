import { Card } from "@/components/ui/card";
import { Brain, Droplets, Plane, Leaf, Shield } from "lucide-react";

const projects = [
  {
    title: "Software Testing Using Fuzzy Logic",
    description: "Intelligent testing framework leveraging fuzzy logic principles for automated software validation",
    icon: Brain,
    color: "text-primary",
  },
  {
    title: "Water Health Analysis Using Underwater Images",
    description: "Computer vision system analyzing underwater imagery to assess water quality and ecosystem health",
    icon: Droplets,
    color: "text-accent",
  },
  {
    title: "Emergency Flight Landing Assistant",
    description: "AI-powered decision support system for emergency landing scenarios",
    icon: Plane,
    color: "text-primary",
  },
  {
    title: "Plant Leaf Health Analysis",
    description: "Deep learning model for detecting plant diseases through leaf image analysis",
    icon: Leaf,
    color: "text-accent",
  },
  {
    title: "ArgusX LLM Firewall Copyrights",
    description: "Advanced security framework protecting large language models from unauthorized access",
    icon: Shield,
    color: "text-primary",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions addressing real-world challenges through AI and technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/10 group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="space-y-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform ${project.color}`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;