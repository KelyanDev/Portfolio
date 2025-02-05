import { Link } from "react-scroll";

export default function CV({ activeSection }) {
    return (
        <li className={`nav-lien ${activeSection === 'CV' ? 'current-sec' : ''}`}>
        <Link to="CV" smooth={true} duration={800} offset={-90}>
          <i className="bx bx-file icons" />
          <span className="text nav-text"> CV</span>
        </Link>
      </li>
    );
}