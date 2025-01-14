import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

export default function Formation() {
    const { t } = useTranslation();
    const { ref, inView } = useInView({
        threshold: 0,
    });

    return (
        <div id="Formation" className={`part ${inView ? 'visible' : ''} `} ref={ref}>
            <h2 className="titre">{t('training.Title')}</h2>
            <div className="sous-ligne"></div>
            <div className="listing">
                <h4> {t('training.Train-4-Tit')} </h4>
                <h4 className="souligne"> IUT Clermont-Auvergne, Aubière (63)</h4>
                <p className="text"> {t('training.Train-4-Desc')} </p>
            </div>
            <div className="listing">
                <h4> 2024 / 2025 </h4>
                <h4 className="souligne"> IUT Clermont-Auvergne, Aubière (63)</h4>
                <p className="text"> {t('training.Train-3-Desc')} </p>
            </div>
            <div className="listing">
                <h4> 2023 / 2024 </h4>
                <h4 className="souligne"> IUT Clermont-Auvergne, Aubière (63)</h4>
                <p className="text"> {t('training.Train-2-Desc')} </p>
            </div>
            <div className="listing">
                <h4> {t('training.Train-1-Tit')}</h4>
                <h4 className="souligne"> Lycée Jean-Zay, Thiers (63)</h4>
                <p className="text"> {t('training.Train-1-Desc')} </p>
            </div>
            <br /> <br />
        </div>
    );
}