import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "C"],
    color: "bg-primary/10 text-primary border-primary/30",
  },
  {
    title: "AI & Machine Learning",
    skills: ["Machine Learning", "Image Preprocessing", "Deep Learning"],
    color: "bg-accent/10 text-accent border-accent/30",
  },
  {
    title: "Web Development",
    skills: ["Web Technology", "Full Stack", "Responsive Design"],
    color: "bg-primary/10 text-primary border-primary/30",
  },
  {
    title: "Soft Skills",
    skills: ["Communication", "Leadership", "Team Collaboration", "Public Speaking"],
    color: "bg-accent/10 text-accent border-accent/30",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Skills & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A diverse skill set spanning technical and interpersonal domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary/10"
              >
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className={`${category.color} px-3 py-1 transition-transform hover:scale-105`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;