import { Server, Database, Layers, Code } from 'lucide-react';

const learningAreas = [
  {
    title: 'Spring Boot',
    description: 'Building robust backend applications using Spring Boot framework',
    icon: Server,
    progress: 'in-progress',
    status: '◐',
  },
  {
    title: 'Database Integration',
    description: 'Connecting applications with MySQL and other databases',
    icon: Database,
    progress: 'in-progress',
    status: '◐',
  },
  {
    title: 'JPA & Hibernate',
    description: 'ORM concepts and database mapping techniques',
    icon: Layers,
    progress: 'learning',
    status: '○',
  },
  {
    title: 'Full Stack Development',
    description: 'Connecting React frontend with Spring Boot backend',
    icon: Code,
    progress: 'learning',
    status: '○',
  },
];

export default function Learning() {
  return (
    <section id="learning" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Currently Learning & <span className="text-gradient">Building</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {learningAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="glass rounded-2xl p-6 hover-lift group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    area.progress === 'in-progress'
                      ? 'bg-primary/20 border border-primary/30'
                      : 'bg-white/5 border border-white/10'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      area.progress === 'in-progress' ? 'text-primary' : 'text-muted'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg">{area.title}</h3>
                      <span className={`text-xl ${
                        area.progress === 'completed' ? 'text-green-400' :
                        area.progress === 'in-progress' ? 'text-primary' : 'text-muted'
                      }`}>
                        {area.status}
                      </span>
                    </div>
                    <p className="text-muted text-sm leading-relaxed">
                      {area.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            area.progress === 'completed'
                              ? 'w-full bg-green-500'
                              : area.progress === 'in-progress'
                              ? 'w-3/5 bg-gradient-to-r from-primary to-secondary'
                              : 'w-1/4 bg-white/10'
                          }`}
                        />
                      </div>
                      <span className="text-xs text-muted">
                        {area.progress === 'completed' ? 'Done' :
                         area.progress === 'in-progress' ? 'Active' : 'Planned'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-muted text-sm mt-8 italic">
          Continuously updated as I learn and build new projects.
        </p>
      </div>
    </section>
  );
}
