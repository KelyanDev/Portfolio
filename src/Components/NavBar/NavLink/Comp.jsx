import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

export default function Competence({ activeSection }) {
  const { t } = useTranslation();

    return (
        <li className={`nav-lien ${activeSection === 'Competence' ? 'current-sec' : ''}`}>
          <Link to="Competence" smooth={true} duration={800} offset={-90}>
            <i className="bx bx-slider icons" />
            <span className="text nav-text"> {t('sidebar.SidSkills')} </span>
          </Link>
        </li>
    );
}