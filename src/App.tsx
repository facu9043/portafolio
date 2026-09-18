import { BackgroundFX } from './components/layout/BackgroundFX'
import { FloatingContact } from './components/layout/FloatingContact'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { Timeline } from './components/sections/Timeline'

function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundFX />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Timeline />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </div>
  )
}

export default App
