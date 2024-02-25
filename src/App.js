import './App.css';
import AboutComponent from "./components/AboutComponent"
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import BackToTop from './components/BackToTop';
import Socials from './components/Socials';
import Footer from './components/Footer';

function App() {
 
  return (
    <div>
      <BackToTop/>  
     <AboutComponent/>
     <Skills/>
     <Projects/>
     <Socials/>
     <Contact/>
     <Footer/>
    </div>
    
  )
}

export default App;
