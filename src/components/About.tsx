import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { GraduationCap, Users, Award } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-6 animate-fade-up">
            <Avatar className="w-32 h-32 mx-auto border-4 border-primary/20 shadow-lg">
              <AvatarImage src={profilePhoto} alt="Nidhi K N" className="object-cover" />
              <AvatarFallback>NK</AvatarFallback>
            </Avatar>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I'm passionate about AI, leadership, and innovation. I love solving real-world problems through technology and teamwork.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary/20">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">College:</strong> Global Academy of Technology</p>
                  <p><strong className="text-foreground">Degree:</strong> B.E. in AI & Data Science</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-accent/20">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Family</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">Father:</strong> Dr. Naveen K S</p>
                  <p><strong className="text-foreground">Mother:</strong> Dr. Deepa P</p>
                  <p className="pt-2">From a family of accomplished professionals</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary/20">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Academic Excellence</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">10th CBSE:</strong> 94%</p>
                  <p><strong className="text-foreground">12th CBSE:</strong> 80%</p>
                  <p><strong className="text-foreground">Current CGPA:</strong> 9.0</p>
                  <p><strong className="text-foreground">TIE Member:</strong> Yes</p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8 border-primary/20">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Educational Background</h3>
              <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground mb-2">Schools Attended:</p>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>K L E Society's School</li>
                    <li>Vidyaniketan Public School</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Current Focus:</p>
                  <p>Specializing in Artificial Intelligence and Data Science with a strong foundation in programming, machine learning, and innovative problem-solving.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;