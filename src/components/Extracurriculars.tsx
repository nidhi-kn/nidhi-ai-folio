import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Music, Trophy, Mic, Users, Heart } from "lucide-react";

const extracurriculars = {
  cultural: [
    "Bharatanatyam Junior (Distinction)",
    "Dance Choreography",
    "Semi-classical Performances",
    "Solo Dance & Singing (Republic Day)",
  ],
  sports: [
    "Tennis - Intermediate (Tennis Temple)",
    "Kho Kho - State Level Runner-up (College Team)",
    "Karate - Brown Belt (Ashok Karate Academy)",
  ],
  leadership: [
    "3 MUN Conferences (1 as Press Reporter)",
    "Poster Presentation (Carbon Footprint)",
    "Anchoring",
    "Prefect Council Election Winner",
  ],
  volunteering: [
    "Blood Donation Camp",
    "VTU State Level Taekwondo Championship",
    "Throwball Tournament",
    "5K Run",
    "Environment Day",
    "Sadhguru ISHA Foundation",
    "Flash Mob (Interact)",
    "Swachh Bharat Abhiyan",
  ],
};

const Extracurriculars = () => {
  return (
    <section id="extracurriculars" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Beyond <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Academics</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A well-rounded personality with diverse interests and achievements
            </p>
          </div>

          <Tabs defaultValue="cultural" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="cultural" className="flex items-center gap-2">
                <Music className="h-4 w-4" />
                Cultural
              </TabsTrigger>
              <TabsTrigger value="sports" className="flex items-center gap-2">
                <Trophy className="h-4 w-4" />
                Sports
              </TabsTrigger>
              <TabsTrigger value="leadership" className="flex items-center gap-2">
                <Mic className="h-4 w-4" />
                Leadership
              </TabsTrigger>
              <TabsTrigger value="volunteering" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Volunteering
              </TabsTrigger>
            </TabsList>

            <TabsContent value="cultural">
              <Card className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {extracurriculars.cultural.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                      <Music className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="sports">
              <Card className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {extracurriculars.sports.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/5 transition-colors">
                      <Trophy className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="leadership">
              <Card className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {extracurriculars.leadership.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                      <Mic className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="volunteering">
              <Card className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {extracurriculars.volunteering.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/5 transition-colors">
                      <Heart className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Extracurriculars;