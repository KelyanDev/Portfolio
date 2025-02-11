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
  const [isSidebarClosed, setIsSidebarClosed] = useState(false);
  const [isBodyDark, setIsBodyDark] = useState(false);

  function toggleDarkMode() {
    setIsBodyDark(!isBodyDark);

    document.body.classList.toggle('dark', !isBodyDark)
  };

  function toggleSidebar() {
    setIsSidebarClosed(!isSidebarClosed);
  };

  return (
    <>
    <div className='App'>
      <Topbar SidebarToggle={toggleSidebar} />
      <Sidebar isDarkMode={isBodyDark} DarkToggle={toggleDarkMode} isSidebarClosed={isSidebarClosed} SidebarToggle={toggleSidebar}/>
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

