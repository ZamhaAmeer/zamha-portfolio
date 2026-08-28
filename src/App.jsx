import React from 'react';
import Background from './components/Background';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import DesignExperience from './components/DesignExperience';
import Experience from './components/Experience';
import LanguageProfile from './components/LanguageProfile';
import CareerObjective from './components/CareerObjective';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Premium Background Ambient Glow Elements */}
      <Background />

      {/* Modern Mouse Cursor Glow Follower */}
      <CustomCursor />

      {/* Sticky Top Navigation */}
      <Navbar />

      <main style={{ minHeight: '100vh' }}>
        {/* Hero Section */}
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Skills Board */}
        <Skills />

        {/* Modern Projects Showcase Section */}
        <Projects />

        {/* Design Experience Section */}
        <DesignExperience />

        {/* Education & Credentials */}
        <Experience />

        {/* Language Profile */}
        <LanguageProfile />

        {/* Career Objective Section */}
        <CareerObjective />

        {/* Secure Form & Social Connection Options */}
        <Contact />
      </main>

      {/* Footer copyright */}
      <Footer />
    </>
  );
}

export default App;
