import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

export default function Divers({ activeSection }) {
  const { t } = useTranslation();

    return (
        <li className={`nav-lien ${activeSection === 'Divers' ? 'current-sec' : ''}`}>
          <Link to="Divers" smooth={true} duration={800} offset={-90}>
            <i className="bx bx-book-bookmark icons" />
            <span className="text nav-text"> {t('sidebar.SidMisc')} </span>
          </Link>
        </li>
    );
}