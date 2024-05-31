import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

export default function About() {
    const { t } = useTranslation();
    const { ref, inView } = useInView({
        threshold: 0, 
    });
    

    return (
        <div id="Apropos" className={`part ${inView ? 'visible' : ''} `} ref={ref}>
            <h2 className="titre"> {t('sidebar.SidAbout')} </h2>
            <br />
            <div className="photo">
                <img src={`${process.env.PUBLIC_URL}/photo.jpg`} alt="" id="pdp" />
            </div>
            <h3 className="souligne"> {t('about.Title')} </h3>
        <p className="texte" dangerouslySetInnerHTML={{ __html: t('about.Part1')}}></p>
        <br />
        <p className="texte" dangerouslySetInnerHTML={{ __html: t('about.Part2')}}></p>
        <br />
        <p className="texte" dangerouslySetInnerHTML={{ __html: t('about.Part3')}}></p>
        <br /> <br /> <hr />
      </div>
    );
}