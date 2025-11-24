import { Card } from "@/components/ui/card";
import { Target, TrendingUp, AlertTriangle, Rocket } from "lucide-react";

const Goals = () => {
  return (
    <section id="goals" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Strengths & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Aspirations</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-primary/20">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Core Strengths</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span className="text-muted-foreground">Sincere and dedicated to excellence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span className="text-muted-foreground">Hardworking with strong work ethic</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span className="text-muted-foreground">Curious mind always seeking knowledge</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="p-8 border-accent/20">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold">Area of Growth</h3>
                </div>
                <p className="text-muted-foreground">
                  Decision-making sometimes takes time as I carefully analyze all possible scenarios and outcomes to ensure the best choice.
                </p>
              </div>
            </Card>
          </div>

          <Card className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Future Goals</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                    <Rocket className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Tech Entrepreneur</h4>
                      <p className="text-sm text-muted-foreground">Build a tech-business addressing real-world challenges</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                    <Target className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Software Developer</h4>
                      <p className="text-sm text-muted-foreground">Build innovative software solutions and applications</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                    <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Political Leadership</h4>
                      <p className="text-sm text-muted-foreground">Make impactful policy decisions for society</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                    <Rocket className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Civil Services</h4>
                      <p className="text-sm text-muted-foreground">Contribute to nation-building through civil service</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Goals;