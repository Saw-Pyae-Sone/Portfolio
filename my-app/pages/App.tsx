import { useState, useEffect } from 'react';
import NavBar from '../src/components/navbar';
import Footer from '../src/components/footer';
import Cards from '../src/components/projects';
import Intro from '../src/components/intro';
import ExperienceSection from '../src/components/exp';
import Skills from '../src/components/skills';
import ContactUs from '../src/components/contactUs';
import axios from 'axios';
import Education from '../src/components/education';
import '../src/index.css';
import AnimatedTooltipPreview from '../src/components/tooltip'

function App() {
  return (
    <>
      <NavBar />
      <Intro />
      <AnimatedTooltipPreview />
      <ExperienceSection />
      <Skills />
      <Education />
      <Cards />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
