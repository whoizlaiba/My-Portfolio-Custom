import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

export default function Home() {
  return (
    
    <div className='page'>
    <Navbar />
    <Hero/>
    <About/>
    <Skills/>
    <Contact/>
    <Projects/>
    </div>
    
      );
}
