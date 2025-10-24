import { Card } from "@/components/ui/card";
import { Database, Cloud, Brain, Code } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Backend Development",
    skills: ["Python", "Java", "SpringBoot", "REST APIs", , "Microservices"],
    color: "text-chart-1",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS (ECS, Lambda, S3)", "Docker", "CI/CD", "Infrastructure as Code"],
    color: "text-chart-2",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    skills: ["TensorFlow", "PyTorch", "NLP", "RAG Systems", "Sciket-learn"],
    color: "text-chart-3",
  },
  {
    icon: Database,
    title: "Databases & Tools",
    skills: ["PostgreSQL", "MongoDB",  "Git", "Linux", "Agile Methodologies"],
    color: "text-chart-4",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30" data-testid="section-skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate active-elevate-2 transition-all hover:scale-105 glass-card group"
              data-testid={`card-skill-${index}`}
            >
              <div className="flex flex-col h-full">
                <div className="p-3 bg-gradient-primary rounded-xl w-fit mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                  <category.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-primary/10 text-primary text-xs md:text-sm rounded-full border border-primary/20 hover-elevate active-elevate-2 transition-all hover:scale-105 cursor-default"
                      data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
