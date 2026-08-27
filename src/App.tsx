import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import ContourDivider from './components/ContourDivider'
import Projects from './components/Projects'
import Repos from './components/Repos'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0B1B33] text-[#EAF0FA]">
      <NavBar />
      <main>
        <Hero />
        <About />
        <ContourDivider label="Projects" />
        <Projects />
        <ContourDivider label="Archive" />
        <Repos />
        <ContourDivider label="Contact" />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
