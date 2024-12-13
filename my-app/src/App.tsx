import { useState, useEffect } from 'react';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Cards from './components/projects';
import Intro from './components/intro';
import ExperienceSection from './components/exp';
import Skills from './components/skills';
import ContactUs from './components/contactUs';
import axios from 'axios';
import Education from './components/education';
import './index.css';

function App() {
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    try{
      const response = await axios.get("http://localhost:8080/api/fruits");
      setArray(response.data.fruits);
      console.log(response.data.fruits);
    }catch(error){ 
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() =>{
    fetchAPI();
  }, []);

  return (
    <>
      <NavBar />
      <Intro />
      {/* {
        array.map((fruit, index) => (
          <div key={index}>
            <p>{fruit}</p>
          </div>
        ))
      } */}
      <ExperienceSection />
      <Education />
      <Skills />
      <Cards />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
