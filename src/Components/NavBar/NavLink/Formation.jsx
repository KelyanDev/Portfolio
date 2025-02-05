import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

export default function Formation({ activeSection }) {
  const { t } = useTranslation();

    return (
        <li className={`nav-lien ${activeSection === 'Formation' ? 'current-sec' : ''}`}>
          <Link to="Formation" smooth={true} duration={800} offset={-90}>
            <i className="bx bx-building-house icons" />
            <span className="text nav-text"> {t('sidebar.SidTrai')} </span>
          </Link>
        </li>
    );
};