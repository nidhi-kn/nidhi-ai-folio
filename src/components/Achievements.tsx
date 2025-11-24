import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, BookOpen, Rocket } from "lucide-react";

const achievements = [
  {
    title: "C Programming",
    organization: "NICT",
    score: "75%",
    icon: BookOpen,
  },
  {
    title: "Infosys Springboard Certificate",
    organization: "Infosys",
    icon: Award,
  },
  {
    title: "IBM Certification",
    organization: "IBM",
    icon: Trophy,
  },
  {
    title: "MERN Stack Certificate",
    organization: "Full Stack Development",
    icon: BookOpen,
  },
  {
    title: "Apache Spark for Java Developers",
    organization: "Big Data Technology",
    icon: Award,
  },
  {
    title: "NCC B Certificate",
    organization: "National Cadet Corps",
    icon: Trophy,
  },
  {
    title: "Startup Bootcamp Participation",
    organization: "Entrepreneurship Program",
    icon: Rocket,
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Achievements & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Certificates</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recognition for academic excellence and professional development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/10 group text-center"
                >
                  <div className="space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.organization}</p>
                      {achievement.score && (
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                          {achievement.score}
                        </Badge>
                      )}
                    </div>
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

export default Achievements;