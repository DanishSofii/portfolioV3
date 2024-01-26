import './App.css';
import AboutComponent from "./components/AboutComponent"
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import BackToTop from './components/BackToTop';

function App() {
 
  return (
    <div>
      <BackToTop/>  
     <AboutComponent/>
     <Skills/>
     <Projects/>
     <Contact/>
    </div>
    
  )
}

export default App;
