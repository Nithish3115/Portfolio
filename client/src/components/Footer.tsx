import { Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            <span>© 2025</span>
            <span>—</span>
            <span>Designed & Built with</span>
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span>by</span>
            <button
              onClick={scrollToTop}
              className="font-semibold text-primary hover:underline"
              data-testid="button-back-to-top"
            >
              Nithish
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
}
