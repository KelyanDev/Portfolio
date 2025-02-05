import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

export default function Projet({ activeSection }) {
  const { t } = useTranslation();

    return (
        <li className={`nav-lien ${activeSection === 'Projet' ? 'current-sec' : ''}`}>
          <Link to="Projet" smooth={true} duration={800} offset={-90}>
            <i className="bx bx-spreadsheet icons" />
            <span className="text nav-text"> {t('sidebar.SidProj')} </span>
          </Link>
        </li>
    );
}