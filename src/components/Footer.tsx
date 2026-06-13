import { Github, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm flex items-center gap-1.5">
          <span className="text-gradient font-semibold">RD</span>
          <span className="text-muted">Rudra Dave</span>
          <span className="text-muted/50 mx-1">—</span>
          <span>Built with React & Tailwind</span>
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/rudra1546"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-text transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/rudradave1546"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-text transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        <p className="text-muted/60 text-sm">
          {currentYear}
        </p>
      </div>
    </footer>
  );
}
