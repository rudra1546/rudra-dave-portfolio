import { Github, ExternalLink, Leaf, Database, Code2, Layers } from 'lucide-react';

const projects = [
  {
    title: 'Smart Agriculture System',
    description: 'An IoT-based agricultural monitoring system that helps farmers track soil conditions, weather patterns, and crop health for optimized farming decisions.',
    image: 'https://images.pexels.com/photos/2165759/pexels-photo-2165759.jpeg?auto=compress&cs=tinysrgb&w=600',
    tech: ['Python', 'React', 'Flask', 'MySQL'],
    github: 'https://github.com/rudra1546/Smart-Agriculture-System',
    // demo: 'null',
    icon: Leaf,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Spring MVC JSP Demo',
    description: 'A hands-on project demonstrating Spring MVC architecture with JSP views, showcasing the Model-View-Controller pattern in Java web development and request handling.',
    image: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=600',
    tech: ['Spring MVC', 'JSP', 'Java', 'Tomcat'],
    github: 'https://github.com/rudra1546/spring-mvc-jsp-demo',
    // demo: '#',
    icon: Layers,
    color: 'from-primary to-secondary',
  },
  {
    title: 'Student Database Management System',
    description: 'A Java console-based application for managing student records, demonstrating object-oriented programming, file handling, and CRUD operations. ',
    image: 'https://images.pexels.com/photos/5905489/pexels-photo-5905489.jpeg?auto=compress&cs=tinysrgb&w=600',
    tech: ['Java', 'OOP', 'File Handling', 'CRUD'], 
    github: 'https://github.com/rudra1546/student-database-management-system-java',
    // demo: '#',
    icon: Database,
    color: 'from-secondary to-accent',
  },
  {
    title: 'React Mini Projects Collection',
    description: 'A curated collection of React projects including todo apps, weather dashboards, and more, showcasing component-based architecture and modern React patterns.',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Hooks'],
    github: 'https://github.com/rudra1546/javascript-react-mini-projects ',
    // demo: '#',
    icon: Code2,
    color: 'from-accent to-primary',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-6" />
          <p className="text-muted max-w-2xl mx-auto">
            A collection of projects that helped me strengthen my understanding of Java, web development, React, and software engineering fundamentals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className="glass rounded-2xl overflow-hidden hover-lift group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl bg-gradient-to-br ${project.color} p-0.5`}>
                    <div className="w-full h-full rounded-xl bg-background/80 backdrop-blur flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs glass rounded-lg text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="w-full">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 glass glass-hover rounded-lg text-sm font-medium transition-all"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    {/* <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 glass glass-hover rounded-lg text-sm font-medium transition-all text-primary"
                    >
                      <ExternalLink className="w-4 h-4"
                        target="_blank"
                        rel="noopener noreferrer" />
                      Live Demo
                    </a> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
