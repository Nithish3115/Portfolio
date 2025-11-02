import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Research Developer",
    company: "Tamil Technology and Research Center (TTRC)",
    period: "2023 - Present",
    description: "Leading research and development initiatives focused on Tamil language technology, natural language processing, and cultural preservation through AI. Developing innovative solutions for Tamil text processing and linguistic analysis.",
    achievements: [
      "Developed Tamil NLP models for text analysis and generation",
      "Built RAG-based systems for Tamil literary works",
      "Contributed to Tamil language AI research publications",
      "Architected scalable AI infrastructure for language processing",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30" data-testid="section-experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional journey building innovative solutions across diverse domains
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-8 hover-elevate active-elevate-2 transition-all hover:scale-[1.02] glass-card"
              data-testid={`timeline-item-${index}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-primary rounded-xl glow-effect">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-1" data-testid={`text-role-${index}`}>
                    {exp.role}
                  </h3>
                  <p className="text-primary font-medium text-lg" data-testid={`text-company-${index}`}>
                    {exp.company}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground mb-6">
                <Calendar className="h-4 w-4" />
                <span data-testid={`text-period-${index}`}>{exp.period}</span>
              </div>

              <p className="text-foreground/90 mb-6 leading-relaxed text-base" data-testid={`text-desc-${index}`}>
                {exp.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Key Achievements</h4>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li
                      key={achIndex}
                      className="flex items-start gap-3 text-foreground/90 hover-elevate active-elevate-2 p-3 rounded-lg transition-all"
                      data-testid={`achievement-${index}-${achIndex}`}
                    >
                      <span className="text-primary mt-0.5">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
