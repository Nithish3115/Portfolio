import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin, ChevronDown, Code2 } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import avatarImage from "@assets/generated_images/img.jpeg";
const roles = [
  "Backend Developer",
  "AWS Cloud Practitioner",
  "ML Research Enthusiast",
];

const taglines = [
  "Engineering intelligent systems with clean code & scalable design.",
  "Transforming ideas into robust software and smarter user experiences.",
  "Where backend performance meets AI-driven innovation.",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [currentTagline, setCurrentTagline] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText === role) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayedText(
          isDeleting
            ? role.substring(0, displayedText.length - 1)
            : role.substring(0, displayedText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRole]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Nithish_Resume.pdf'; // Ensure the file is in the public directory
    link.download = 'Nithish_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-chart-2/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-chart-3/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <p className="text-lg md:text-xl text-muted-foreground" data-testid="text-greeting">
                Hi, I'm Nithish
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="gradient-text">Software Engineer</span>
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="text-xl md:text-2xl text-foreground/80">Backend & AI Enthusiast</span>
              </div>
            </div>

            <div className="h-12 flex items-center justify-center lg:justify-start">
              <p className="text-xl md:text-2xl font-medium text-primary" data-testid="text-role">
                {displayedText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            <p
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 transition-opacity duration-500"
              data-testid="text-tagline"
            >
              {taglines[currentTagline]}
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={handleDownloadResume}
                className="gap-2"
                data-testid="button-resume"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="gap-2"
                data-testid="button-connect"
              >
                <Mail className="h-4 w-4" />
                Let's Connect
              </Button>
            </div>

            <div className="flex gap-3 justify-center lg:justify-start pt-4">
              <a
                href="https://github.com/Nithish3115"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-card hover-elevate active-elevate-2 transition-all hover:scale-110 hover-glow group"
                data-testid="link-github"
              >
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/nithish-s-53a9a5292/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-card hover-elevate active-elevate-2 transition-all hover:scale-110 hover-glow group"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://leetcode.com/u/Nithish311/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-card hover-elevate active-elevate-2 transition-all hover:scale-110 hover-glow group"
                data-testid="link-leetcode"
              >
                <SiLeetcode className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-glow-pulse" />
              <div className="absolute -inset-4 bg-gradient-accent rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <img
                src={avatarImage}
                alt="Nithish - Software Engineer"
                className="relative w-64 h-64 md:w-96 md:h-96 rounded-full object-cover border-4 border-primary/20 shadow-2xl transition-transform duration-500 group-hover:scale-105"
                data-testid="img-avatar"
              />
              <div className="absolute -bottom-2 -right-2 p-3 bg-gradient-primary rounded-full shadow-lg animate-float">
                <Code2 className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
