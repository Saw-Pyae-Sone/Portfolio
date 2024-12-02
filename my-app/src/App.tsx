import NavBar from './components/navbar'
import Footer from './components/footer'
import Cards from './components/projects'
import Intro from './components/intro'
import ExperienceSection from './components/exp'
import Skills from './components/skills'
import ContactUs from './components/contactUs'

function App() {
  return (
    <> 
      <NavBar />
      <Intro />
      <ExperienceSection />
      <Skills />
      <Cards />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
