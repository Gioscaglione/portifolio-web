import styles from './App.module.css'
import { About } from './componentes/About/About';
import { Contact } from './componentes/Contact/Contact';
import { Experience } from './componentes/Experience/Experience';
import { Hero } from './componentes/Hero/Hero';
import { NavBar } from './componentes/NavBar/NavBar'
import { ProjectCard } from './componentes/Projects/ProjectCard';
import { Projects } from './componentes/Projects/Projects';

function App() {


  return (
    <div className={styles.app}>
      <NavBar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App
