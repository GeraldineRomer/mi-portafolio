import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import AISection from "./components/AISection"
import Projects from "./components/Projects"
import Timeline from "./components/Timeline"
import LearningLog from "./components/LearningLog"
import Contact from "./components/Contact"

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <AISection />
      <Projects />
      <Timeline />
      <LearningLog />
      <Contact />
    </main>
  )
}

