import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {

  return (
    <section id="contact" className="py-20">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Get In <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's connect and explore opportunities together
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <a href="mailto:nidhi.kn05@gmail.com" className="block">
                <Card className="p-6 border-accent/20 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-sm text-muted-foreground">nidhi.kn05@gmail.com</p>
                    </div>
                  </div>
                </Card>
              </a>

              <a href="https://www.linkedin.com/in/nidhi-k-n-87b924291/" target="_blank" rel="noopener noreferrer" className="block">
                <Card className="p-6 border-primary/20 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Linkedin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">LinkedIn</h3>
                      <p className="text-sm text-muted-foreground">Connect with me</p>
                    </div>
                  </div>
                </Card>
              </a>

              <a href="https://github.com/nidhi-kn" target="_blank" rel="noopener noreferrer" className="block">
                <Card className="p-6 border-accent/20 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Github className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold">GitHub</h3>
                      <p className="text-sm text-muted-foreground">View my projects</p>
                    </div>
                  </div>
                </Card>
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;