import { Card } from "@/components/ui/card";
import { Feather, Bike, Headphones, Film, Waves } from "lucide-react";

const writing = [
  "Poetry (Published in school magazine)",
  "Essay Writing",
  "MUN Resolution Papers",
];

const hobbies = [
  { name: "Cycling", icon: Bike },
  { name: "Swimming", icon: Waves },
  { name: "Badminton", icon: Trophy },
  { name: "Podcasts", icon: Headphones },
  { name: "Movies", icon: Film },
];

import { Trophy } from "lucide-react";

const CreativityHobbies = () => {
  return (
    <section id="creativity" className="py-20">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Writing & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Hobbies</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-primary/20">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Feather className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Creative Writing</h3>
                </div>
                <ul className="space-y-3">
                  {writing.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            <Card className="p-8 border-accent/20">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Hobbies & Interests</h3>
                <div className="grid grid-cols-2 gap-4">
                  {hobbies.map((hobby, index) => {
                    const Icon = hobby.icon;
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-accent/10 transition-colors group"
                      >
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                        <span className="text-sm font-medium">{hobby.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativityHobbies;