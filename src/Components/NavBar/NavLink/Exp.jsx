import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

export default function Experience({ activeSection }) {
  const { t } = useTranslation();

    return (
        <li className={`nav-lien ${activeSection === 'Experience' ? 'current-sec' : ''}`}>
          <Link to="Experience" smooth={true} duration={800} offset={-90}>
            <i className="bx bx-briefcase-alt icons" />
            <span className="text nav-text"> {t('sidebar.SidExp')} </span>
          </Link>
        </li>
    );
}