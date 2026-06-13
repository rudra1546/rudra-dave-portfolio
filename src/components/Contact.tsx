import { Mail, Linkedin, Github, Send } from 'lucide-react';

const socialLinks = [
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:rudra15406@email.com',
    color: 'hover:text-primary',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/rudradave1546',
    color: 'hover:text-secondary',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/rudra1546',
    color: 'hover:text-accent',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-6" />
          <p className="text-muted max-w-xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. Feel free to reach out!
          </p>
        </div>

        <div className="glass-strong rounded-2xl p-8 text-center">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 glass rounded-xl flex items-center justify-center transition-all duration-300 hover-lift ${link.color}`}
                  aria-label={link.name}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>

          {/* Email CTA */}
          <a
            href="mailto:rudra15406@email.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl text-white font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-glow group"
          >
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            Send a Message
          </a>

          {/* Status */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for internships and opportunities
          </div>
        </div>
      </div>
    </section>
  );
}
