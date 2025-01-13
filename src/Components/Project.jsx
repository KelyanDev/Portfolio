import { useEffect, useState } from "react";
import data from "./data.json";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const { t } = useTranslation();
    const { ref, inView } = useInView({
        threshold: 0,
    });
    const [ hasBeenViewed, setHasBeenViewed ] = useState(false);

    useEffect(() => {
        if (inView) {
            setHasBeenViewed(true);
        }
    }, [inView]);

    function handleRadioChange(event) {
        setSelectedProject(event.target.id);
    };

    const renderSection = () => {
        const sectionData = data[selectedProject];

        if (!sectionData) {
            return (
                <h3 className="souligne"> Merci de sélectionner un projet parmis la liste </h3>
            );
        };

        const description = (
            <div dangerouslySetInnerHTML={{ __html: sectionData.description.join('') }} />
        );

        return (
            <>
                {description}
            </>
        );

    };

    return (
        <div id="Projet" className={`part ${inView ? 'visible' : ''} `} ref={ref}>
            { hasBeenViewed && (
                <>
                    <h2 className="titre">{t('projects.Title')}</h2>
                    <div className="sous-ligne"></div>
                    <br />
                    <div className="section projects">
                        <div className="aligne">
                            <div className="Affprojets select">
                                <h4>Liste projets</h4>
                                <hr />
                                <label className="containerproj">
                                    <input type="radio" id="CompanyNetwork" name="Projets" className="RadProj" onChange={handleRadioChange}/>
                                    <span className="checkmark"> {t('projects.Integration')}</span>
                                    {t('projects.Integration')}
                                </label>
                                <label className="containerproj">
                                    <input type="radio" id="FluxBiz" name="Projets" className="RadProj" onChange={handleRadioChange}/>
                                    <span className="checkmark"> {t('projects.FluxBiz')}</span>
                                    {t('projects.FluxBiz')}
                                </label>
                                <label className="containerproj">
                                    <input type="radio" id="SAE22" name="Projets" className="RadProj" onChange={handleRadioChange}/>
                                    <span className="checkmark"> {t('projects.Numeric')}</span>
                                    {t('projects.Numeric')}
                                </label>
                                <label className="containerproj">
                                    <input type="radio" id="RToDo" name="Projets" className="RadProj" onChange={handleRadioChange}/>
                                    <span className="checkmark"> {t('projects.Re-App')}</span>
                                    {t('projects.Re-App')}
                                </label>
                                <label className="containerproj">
                                    <input type="radio" id="Ticket" name="Projets" className="RadProj" onChange={handleRadioChange}/>
                                    <span className="checkmark"> {t('projects.Ticket')}</span>
                                    {t('projects.Ticket')}
                                </label>
                                <label className="containerproj">
                                    <input type="radio" id="Vacation" name="Projets" className="RadProj" onChange={handleRadioChange}/>
                                    <span className="checkmark"> {t('projects.Data')}</span>
                                    {t('projects.Data')}
                                </label>
                                <label className="containerproj">
                                    <input type="radio" id="Portfolio" name="Projets" className="RadProj" onChange={handleRadioChange}/>
                                    <span className="checkmark"> Portfolio (SAE14,SAE25)</span>
                                    Portfolio (SAE14,SAE25)
                                </label>
                                <label className="containerproj">
                                    <input type="radio" id="Hatsu" name="Projets" className="RadProj" onChange={handleRadioChange}/>
                                    <span className="checkmark"> {t('projects.Game')}</span>
                                    {t('projects.Game')}
                                </label>
                            </div>
                            <div id="projets">
                                {renderSection()}
                            </div>
                        </div>
                    </div>
                    <br />
                </>
            )}
        </div>
    );
}