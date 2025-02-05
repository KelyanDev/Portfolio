import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

export default function Default({ activeSection }) {
  const { t } = useTranslation();

  return (
    <li className={`nav-lien ${activeSection === 'Apropos' ? 'current-sec' : ''}`}>
      <Link to="Apropos" smooth={true} duration={800} offset={-90}>
        <i className="bx bx-user-circle icons" />
        <span className="text nav-text"> {t('sidebar.SidAbout')} </span>
      </Link>
    </li>
  );
};