import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

export default function Contact() {
    const { t } = useTranslation();
    const { ref, inView } = useInView({
        threshold: 0,
    });
    const [ hasBeenViewed, setHasBeenViewed] = useState(false);

    useEffect(() => {
        if (inView) {
            setHasBeenViewed(true);
        }
    }, [inView]);

    return (
        <div id="Contact" className={`part ${inView ? 'visible' : ''} `} ref={ref}>
            { hasBeenViewed && (
                <>
                    <h2 className="titre">Contact</h2>
                    <div className="sous-ligne"></div>
                    <br />
                    <div className="Qligne">
                        <div className="cont section">
                            <i className="bx bxl-gmail" />
                            <h4> {t('Mail')}</h4>
                            <div>
                                <p className="text"> kelyan.tournebize@etu.uca.fr</p>
                            </div>
                        </div>
                        <div className="cont section">
                            <i className="bx bxl-github" />
                            <h4> Github</h4>
                            <div>
                                <div className="TButton">
                                    <a className="linke" href="https://github.com/KelyanDev" target="_blank" rel="noreferrer">
                                        <i className="bx bxl-github icon" />
                                        <span className="linke"> Github</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="cont section">
                        <i className="bx bxl-linkedin" />
                        <h4> Linkedin</h4>
                        <div>
                            <div className="TButton">
                                <a className="linke" href="https://www.linkedin.com/in/kélyan-tournebize-0295082a9" target="_blank" rel="noreferrer">
                                    <i className="bx bxl-linkedin-square icon" />
                                    <span className="linke"> Linkedin</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <br /> <br />
                <Footer />
                </>
            )}
        </div>
    );
}

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="copyrights">
            <p> © 2026 TOURNEBIZE Kélyan, {t('copyright')}</p>
        </footer>
    );
}