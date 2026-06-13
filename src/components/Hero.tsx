import { ArrowRight, Download, Sparkles, Code2, Briefcase, MessageCircle } from 'lucide-react';
export default function Hero() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-12 px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/20 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-muted">Open to internships</span>
              <span className="text-primary">.</span>
              <span className="text-secondary">Java & React</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              Hi, I'm <span className="text-gradient">Rudra Dave</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-muted font-medium mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              IT Student | Java & React Developer
            </p>

            {/* Description */}
            <p className="text-muted text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              I enjoy building modern web applications using Java and React while continuously expanding my backend development skills through Spring Boot, REST APIs, and database technologies.
            </p>

            {/* Highlight Chips */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="flex items-center gap-2 px-3 py-1.5 glass rounded-full text-sm">
                <Code2 className="w-4 h-4 text-primary" />
                <span>4+ Public Projects</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 glass rounded-full text-sm">
                <span className="w-2 h-2 bg-secondary rounded-full" />
                <span>Java & React Developer</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 glass rounded-full text-sm">
                <Briefcase className="w-4 h-4 text-accent" />
                <span>Open to Internships</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, '#projects')}
                className="group flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 rounded-lg text-white font-medium transition-all duration-200 hover:-translate-y-0.5 glow-primary"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              {/* <a
                href="/public/resume.pdf"
                target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 glass glass-hover rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a> */}
              <a
                href="https://wa.me/919409234651"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 rounded-lg font-medium border border-green-500/30 bg-green-500/10 text-green-400 hover:bg-green-500/20 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                Connect
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="hidden lg:flex justify-center items-center animate-fade-in" style={{ animationDelay: '500ms' }}>
            <div className="relative">
              {/* Code Editor Mockup */}
              <div className="w-[420px] glass-strong rounded-2xl overflow-hidden shadow-glass">
                {/* Title Bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/20">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-muted ml-2 font-mono">Developer.java</span>
                </div>
                {/* Code Content */}
                <div className="p-4 font-mono text-sm space-y-2 bg-black/30">
                  <div className="flex">
                    <span className="text-accent mr-4">1</span>
                    <span className="text-secondary">public class</span>
                    <span className="text-primary ml-2">Developer</span>
                    <span className="text-text">{' {'}</span>
                  </div>
                  <div className="flex">
                    <span className="text-accent mr-4">2</span>
                    <span className="text-text ml-4">String name =</span>
                    <span className="text-green-400 ml-2">"Rudra Dave"</span>
                    <span className="text-text">;</span>
                  </div>
                  <div className="flex">
                    <span className="text-accent mr-4">3</span>
                    <span className="text-text ml-4">{`String[] skills = {`}</span>
                  </div>
                  <div className="flex">
                    <span className="text-accent mr-4">4</span>
                    <span className="text-green-400 ml-8">"Java"</span>
                    <span className="text-text">,</span>
                    <span className="text-green-400 ml-2">"React"</span>
                    <span className="text-text">,</span>
                  </div>
                  <div className="flex">
                    <span className="text-accent mr-4">5</span>
                    <span className="text-green-400 ml-8">"Spring Boot"</span>
                    <span className="text-text">,</span>
                    <span className="text-green-400 ml-2">"MySQL"</span>
                  </div>
                  <div className="flex">
                    <span className="text-accent mr-4">6</span>
                    <span className="text-text ml-4">{'};'}</span>
                  </div>
                  <div className="flex">
                    <span className="text-accent mr-4">7</span>
                    <span className="text-text">{'}'}</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-secondary to-primary rounded-2xl opacity-20 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
