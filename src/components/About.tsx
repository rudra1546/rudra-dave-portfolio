import { GraduationCap, Target, BookOpen } from 'lucide-react';

const learningTimeline = [
  { year: 'Started', label: 'Java Fundamentals', status: 'completed' },
  { year: '2025', label: 'React Development', status: 'completed' },
  { year: '2026', label: 'Spring Boot', status: 'in-progress' },
  { year: '2027', label: 'Full Stack', status: 'upcoming' },
];

const currentlyLearning = [
  { name: 'Spring Boot', icon: '🌱' },
  { name: 'Hibernate / JPA', icon: '📦'},
  { name: 'REST APIs', icon: '🔗' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-2 glass-strong rounded-2xl p-8 hover-lift">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Logo/Visual */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent p-0.5">
                  <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                    <span className="text-4xl font-bold text-gradient">RD</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Rudra Dave</h3>
                <p className="text-muted leading-relaxed mb-6">
                  Information Technology student focused on Java and React development. Currently learning Spring Boot, Hibernate/JPA, REST APIs, and MySQL while building practical projects that strengthen my understanding of full-stack application development, Object-Oriented Programming, MVC architecture, and database management.
                </p>

                {/* Education */}
                <div className="glass rounded-xl p-4 flex items-start gap-4">
                  <GraduationCap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Education</h4>
                    <p className="text-muted text-sm">B.E. Information Technology</p>
                    <p className="text-muted text-sm">LDRP Institute of Technology & Research</p>
                    <p className="text-muted text-sm">2023 – 2027</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Currently Learning Strip */}
          <div className="glass-strong rounded-2xl p-6 hover-lift">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-secondary" />
              <h4 className="font-semibold">Currently Learning</h4>
            </div>
            <div className="space-y-3">
              {currentlyLearning.map((item) => (
                <div key={item.name} className="flex items-center gap-3 p-3 glass rounded-lg">
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline & Goal */}
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          {/* Learning Timeline */}
          <div className="glass rounded-2xl p-6 hover-lift">
            <h4 className="font-semibold mb-6 text-lg">Learning Journey</h4>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-3.5 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />
              <div className="space-y-6">
                {learningTimeline.map((item, index) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${item.status === 'completed' ? 'bg-green-500/20 border border-green-500/50' :
                      item.status === 'in-progress' ? 'bg-primary/20 border border-primary/50 shimmer' :
                        'bg-white/5 border border-white/10'
                      }`}>
                      {item.status === 'completed' && <span className="w-2 h-2 rounded-full bg-green-400" />}
                      {item.status === 'in-progress' && <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />}
                      {item.status === 'upcoming' && <span className="w-2 h-2 rounded-full bg-muted/50" />}
                    </div>
                    <div className="flex-1 pt-0.5">
                      <p className="text-sm text-muted">{item.year}</p>
                      <p className={`font-medium ${item.status === 'completed' ? 'text-muted' : 'text-text'}`}>
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2026 Goal */}
          <div className="glass rounded-2xl p-6 hover-lift gradient-border">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-5 h-5 text-accent" />
              <h4 className="font-semibold text-lg">2026 Goal</h4>
            </div>
            <p className="text-muted leading-relaxed">
              Build production-ready full-stack applications using React, Spring Boot, and MySQL while gaining hands-on experience with REST APIs, JPA/Hibernate, and modern deployment workflows.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-gradient-to-r from-primary to-accent rounded-full" />
              </div>
              <span className="text-sm text-muted">In Progress</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
