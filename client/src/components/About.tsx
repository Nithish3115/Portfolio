import { Code2, Cloud, Brain, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SiPython, SiOpenjdk, SiSpringboot, SiReact, SiAmazon, SiDocker, SiPostgresql, SiMongodb, SiTensorflow } from "react-icons/si";
import { FaJava } from "react-icons/fa";
const highlights = [
  {
    icon: Code2,
    title: "Java  Development",
    description: "Building scalable SpringBoot web applications with modern frameworks",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Deploying robust solutions on AWS infrastructure",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Developing intelligent systems with cutting-edge ML",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Creating efficient, high-performance applications",
  },
];

const techStack = [
  { Icon: SiPython, name: "Python" },
  { Icon: FaJava, name: "Java" },
  { Icon: SiSpringboot, name: "SpringBoot" },
  { Icon: SiReact, name: "React" },
  { Icon: SiAmazon, name: "AWS" },
  { Icon: SiDocker, name: "Docker" },
  { Icon: SiPostgresql, name: "PostgreSQL" },
  { Icon: SiMongodb, name: "MongoDB" },
  { Icon: SiTensorflow, name: "TensorFlow" },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate Software Engineer who loves turning complex problems into elegant solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <p className="text-base md:text-lg leading-relaxed text-foreground/90" data-testid="text-bio">
              I'm a <span className="font-semibold text-primary">Software Engineer</span> specializing in backend development, 
              cloud computing, and artificial intelligence. With a strong foundation in computer science and a passion for innovation, 
              I build systems that are not just functional, but elegant and scalable.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-foreground/90">
              My journey in tech has taken me from developing intelligent chatbots to architecting cloud-native applications. 
              I thrive on challenges that push the boundaries of what's possible with code, always seeking to learn and apply 
              the latest technologies to real-world problems.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-foreground/90">
              Currently exploring the intersection of <span className="font-semibold text-primary">Backend Engineering</span> and 
              <span className="font-semibold text-primary"> Machine Learning</span>, I'm committed to creating solutions that 
              make a meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover-elevate active-elevate-2 transition-all hover:scale-105 glass-card group"
                data-testid={`card-highlight-${index}`}
              >
                <div className="p-2 bg-gradient-primary rounded-lg w-fit mb-3 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-sm md:text-base">{item.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Tech Stack</h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6 md:gap-8">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 hover-elevate active-elevate-2 p-3 rounded-lg transition-all hover:scale-110 hover:-rotate-3 group"
                data-testid={`tech-${tech.name.toLowerCase()}`}
              >
                <tech.Icon className="h-8 w-8 md:h-10 md:w-10 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
