import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Learning from './components/Learning';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Analytics } from '@vercel/analytics/react';
function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Learning />
        <Contact />
      </main>
      <Footer />
      <Analytics />

    </div>
  );
}

export default App;
