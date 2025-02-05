import './style.css';
import { useState } from 'react';

import Topbar from './Components/Topbar';
import Sidebar from './Components/Sidebar';
import About from './Components/About';
import Formation from './Components/Formation';
import Exp from './Components/Experience';
import Skills from './Components/Skills';
import Projects from './Components/Project';
import Other from './Components/Miscellaneous';
import CV from './Components/CV';
import Contact from './Components/Contact';


export default function App() {
  const [isBodyDark, setIsBodyDark] = useState(false);

  function toggleDarkMode() {
    setIsBodyDark(!isBodyDark);

    document.body.classList.toggle('dark', !isBodyDark)
  };

  return (
    <>
    <div className='App'>
      <Topbar />
      <Sidebar isDarkMode={isBodyDark} DarkToggle={toggleDarkMode}/>
      <div className="liste">
        <About />
        <Formation />
        <Exp />
        <Skills />
        <Projects />
        <Other />
        <CV />
        <Contact />
      </div>
    </div>
    </>
  );
}

