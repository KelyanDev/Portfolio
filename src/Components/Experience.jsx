import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

export default function Exp() {
    const { t } = useTranslation();
    const { ref, inView } = useInView({
        threshold: 0,
    });

    return (
        <div id="Experience" className={`part ${inView ? 'visible' : ''} `} ref={ref}>
            <h2 className="titre">{t('experience.Title')}</h2>
            <div className="sous-ligne"></div>
            <br />

            <div className="section exp">
                <div className="exp-im">
                    <img src={`${process.env.PUBLIC_URL}/Divers/abicom.png`} className="screens" id="calou" alt="" />
                </div>
                <div>
                    <h4>{t('experience.Exp-3-Tit')}</h4>
                    <p className="text"> {t('experience.Exp-3-P1')}</p>
                    <p className="text"> {t('experience.Exp-3-P2')}</p>
                    <p className="text"> {t('experience.Exp-3-P3')}</p>
                    <p className="text"> {t('experience.Exp-3-P4')}</p>
                </div>
            </div>

            <div className="section exp">
                <div>
                    <h4>{t('experience.Exp-2-Tit')}</h4>
                    <p className="text"> {t('experience.Exp-2-P1')}</p>
                    <p className="text"> {t('experience.Exp-2-P2')} {t('experience.Exp-2-P3')}</p>
                    <p className="text"> {t('experience.Exp-2-P4')}</p>
                </div>
                <div className="exp-im">
                    <img src={`${process.env.PUBLIC_URL}/Divers/soutien.jpeg`} className="screens" id="calou" alt="" />
                </div>
            </div>

            <div className="section exp">
                <div className="exp-im">
                    <img src={`${process.env.PUBLIC_URL}/Divers/13158614.jpg`} className="screens" id="calou" alt="" />
                </div>
                <div>
                    <h4>{t('experience.Exp-1-Tit')}</h4>
                    <p className="text"> {t('experience.Exp-1-P1')}</p>
                    <p className="text"> {t('experience.Exp-1-P2')}</p>
                    <p className="text"> {t('experience.Exp-1-P3')}</p>
                    <p className="text"> {t('experience.Exp-1-P4')}</p>
                </div>
            </div>
            <br /> <br />
        </div>
    );
}