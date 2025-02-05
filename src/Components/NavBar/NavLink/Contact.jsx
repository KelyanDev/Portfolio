import { Link } from "react-scroll";

export default function Contact({ activeSection }) {
    return (
        <li className={`nav-lien ${activeSection === 'Contact' ? 'current-sec' : ''}`}>
          <Link to="Contact" smooth={true} duration={800} offset={-90}>
            <i className="bx bx-envelope icons" />
            <span className="text nav-text"> Contact</span>
          </Link>
      </li>
    );
}