import HeaderNav from "./NavBar/HeaderNav";
import Switch from "./NavBar/ColorSwitch";
import { useState } from "react";

import Default from "./NavBar/NavLink/Default";
import Formation from "./NavBar/NavLink/Formation";
import Experience from "./NavBar/NavLink/Exp";
import Competence from "./NavBar/NavLink/Comp";
import Projet from "./NavBar/NavLink/Projet";
import Divers from "./NavBar/NavLink/Divers";
import CV from "./NavBar/NavLink/Cv";
import Contact from "./NavBar/NavLink/Contact";
import LangSwitch from "./NavBar/NavLink/Language";
import { useTranslation } from "react-i18next";

import useActiveSection from "../Hooks/useActiveSection";


export default function Sidebar({ isDarkMode, DarkToggle }) {
    const [isSidebarClosed, setIsSidebarClosed] = useState(false);
    const { i18n } = useTranslation();
    const activeSection = useActiveSection(['Apropos', 'Formation', 'Experience', 'Competence', 'Projet', 'Divers', 'CV', 'Contact']);

    function toggleSidebar() {
        setIsSidebarClosed(!isSidebarClosed);
    };

    const changeLanguage = (event) => {
        const selectedLang = event.target.value;
        i18n.changeLanguage(selectedLang);
    };

    return (
        <nav className={`sidebar ${isSidebarClosed ? '' : 'close'}`}>
            <HeaderNav toggleSidebar={toggleSidebar} />
            <div className="menu-line" />
            <div className="menu-bar">
                <ul className="menu-lien">
                    <Default activeSection={activeSection}/>
                    <Formation activeSection={activeSection}/>
                    <Experience activeSection={activeSection}/>
                    <Competence activeSection={activeSection}/>
                    <Projet activeSection={activeSection}/>
                    <Divers activeSection={activeSection}/>
                    <CV activeSection={activeSection}/>
                    <Contact activeSection={activeSection}/>
                </ul>
                <ul className="contenu-bas">
                    <LangSwitch changeLang={changeLanguage}/>
                    <div className="menu-line" />
                    <Switch isDarkMode={isDarkMode} DarkToggle={DarkToggle}/>
                </ul>
            </div>
        </nav>
    );
};
