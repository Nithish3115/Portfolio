import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Award } from "lucide-react";
import emotionImage from "@assets/generated_images/Tonal_emotion_recognition_dashboard_ddaee07c.png";
import kmrlImage from "@assets/generated_images/KMRL_smart_transit_app_e3c0dbbc.png";
import alankarImage from "@assets/generated_images/Alankar_gamified_music_app_38621e89.png";
import thirukkuralImage from "@assets/generated_images/Thirukkural_AI_chatbot_interface_77f15a13.png";

const projects = [
  {
    title: "Tonal Emotion Recognition",
    description: "This Project tries to give a musically meaningful and intuitive explanation for its music emotion predictions. A VGG-style deep neural network has been adopted to classify emotional characteristics of a musical piece together with (and based on) human-interpretable, mid-level perceptual features.",
    image: emotionImage,
    tags: ["Python", "TensorFlow", "Deep Learning", "Audio Processing"],
    github: "https://github.com/Nithish3115/MusicToneEmotion_Analysis.git",
    demo: null,
    isWinner: false,
  },
  {
    title: "KMRL (Smart India Hackathon 2025)",
    description: "Smart transportation solution for Kerala Metro Rail, featuring real-time tracking, route optimization, and Organiser information systems for improved utilization of Kochi Metro.",
    image: kmrlImage,
    tags: ["React", "Node.js", "MongoDB", "Python","Scikit-learn"],
    github: "https://github.com/Nithish3115/KMRL-SIH25_Frontend.git",
    demo: null,
    isWinner: false,
  },
  {
    title: "Alankar (ADCX Hackathon 2025 )",
    description: "ADCX Hackathon 2025 Winner! An innovative gamified platform for learning Indian classical music, combining interactive lessons with engaging game mechanics to make music education fun and effective.",
    image: alankarImage,
    tags: ["Compiam", "Gamification", "Audio API","Python","Librosa"],
    github: "https://github.com/Nithish3115/Alankar.git",
    isWinner: true,
  },
  {
    title: "Thirukkural RAG Bot",
    description: "AI-powered chatbot using Retrieval-Augmented Generation to provide insights from ancient Tamil wisdom literature. Features semantic search and contextual understanding of Thirukkural verses.",
    image: thirukkuralImage,
    tags: ["Python", "FAISS", "RAG", "Pandas"],
    github: "https://github.com/Nithish3115/Thirukkural_Ai_Assistant.git",
    demo: null,
    isWinner: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32" data-testid="section-projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions combining cutting-edge technology with real-world impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate active-elevate-2 transition-all hover:scale-[1.02] group glass-card"
              data-testid={`card-project-${index}`}
            >
              <div className="relative h-64 overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  data-testid={`img-project-${index}`}
                />
                {project.isWinner && (
                  <div className="absolute top-4 right-4 bg-gradient-warm text-white px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg animate-float z-20">
                    <Award className="h-4 w-4" />
                    <span className="text-sm font-semibold">Winner</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3" data-testid={`text-project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed" data-testid={`text-project-desc-${index}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                      data-testid={`tag-${tag.toLowerCase()}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    onClick={() => window.open(project.github, "_blank")}
                    data-testid={`button-github-${index}`}
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  {project.demo && (
                    <Button
                      size="sm"
                      className="gap-2"
                      onClick={() => window.open(project.demo, "_blank")}
                      data-testid={`button-demo-${index}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
