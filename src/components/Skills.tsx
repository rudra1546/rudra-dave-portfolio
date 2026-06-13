import { Code, Database, Globe, Server, GitBranch, Layout } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['Java', 'JavaScript', 'SQL'],
    color: 'from-primary to-secondary',
  },
  {
    title: 'Frontend Development',
    icon: Globe,
    skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS'],
    color: 'from-secondary to-accent',
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: ['Spring Boot', 'REST APIs', 'Servlet'],
    color: 'from-accent to-primary',
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MySQL', 'JDBC'],
    color: 'from-primary to-accent',
  },
  {
    title: 'Tools & Technologies',
    icon: Layout,
    skills: ['VS Code', 'IntelliJ IDEA', 'Eclipse'],
    color: 'from-secondary to-primary',
  },
  {
    title: 'Version Control',
    icon: GitBranch,
    skills: ['Git', 'GitHub'],
    color: 'from-accent to-secondary',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="glass rounded-2xl p-6 hover-lift group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-0.5`}>
                    <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                      <Icon className="w-6 h-6 text-text" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm glass rounded-lg text-muted group-hover:text-text transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
