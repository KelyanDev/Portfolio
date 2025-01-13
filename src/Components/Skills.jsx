import { useEffect, useState } from "react";
import data from "./data.json";
import { useTranslation } from "react-i18next";
import { useInView } from 'react-intersection-observer';

export default function Skills() {
    const { t } = useTranslation();
    const { ref, inView } = useInView({
        threshold: 0,
    });
    const [hasBeenViewed, setHasBeenViewed] = useState(false);

    useEffect(() => {
        if (inView) {
            setHasBeenViewed(true);
        }
    }, [inView]);

    return (
        <div id="Competence" className={`part ${inView ? 'visible' : ''} `} ref={ref}>
            {hasBeenViewed && (
                <>
                    <h2 className="titre">{t('skills.Title')}</h2>
                    <div className="sous-ligne"></div>
                    <br />
                    <h3 className="souligne">{t('skills.Hard-Title')}</h3>
                    <HardSkills />
                    <h3 className="souligne">{t('skills.Soft-Title')}</h3>
                    <SoftSkills />
                    <br /> <br /> <br />
                </>
            )}
        </div>
    );
}

function HardSkills() {
    const [selectedComp, setSelectedComp] = useState(null);
    const { t } = useTranslation();

    function handleRadioChange(event) {
        setSelectedComp(event.target.id);
    };

    const renderSection = () => {
        const sectionData = data[selectedComp];

        if (!sectionData) {
            return (
                <div className="comp">
						<div className="cercle">
							<svg>
								<circle className="Scercle" r="80" cx="100" cy="100" fill="transparent" strokeWidth="15px"></circle>
								<circle className="Pcercle" r="80" cx="100" cy="100" fill="transparent" strokeWidth="15px" strokeLinecap="round" style={{'strokeDashoffset':'calc((502 * (100 - 0)) / 100)'}} ></circle>
							</svg>
							<span className="pourcent"> -- </span>
						</div>
						<div id="compDesc">
							<h4>Sélectionner une compétence</h4>
							<hr />
							<p className="text"> -- Les jauges dépendent des résultats attendus par nos professeurs. </p>
							<p className="text">.</p>
							<p className="text">.</p>
							<hr />
							<p className="text resume"><b>Compétences 1</b> / <b>Compétence 2</b></p>
						</div>
					</div>
            );
        };

        const description = (
            <div dangerouslySetInnerHTML={{ __html: sectionData.description.join('') }} />
        );

        return (
            <>
				<div className="comp">
					<div className="cercle">
						<svg>
							<circle className="Scercle" r="80" cx="100" cy="100" fill="transparent" strokeWidth="15px"></circle>
							<circle className="Pcercle" r="80" cx="100" cy="100" fill="transparent" strokeWidth="15px" strokeLinecap="round" style={{'strokeDashoffset': sectionData.circleStyle}} ></circle>
						</svg>
						<span className="pourcent"> {sectionData.circleText} </span>
					</div>
					<div id="compDesc">
						{description}
					</div>
				</div>
			</>
        );
    }

    return (
        <div className="section AffComp">
            <div>
                <div className="aligne">
                    <h4>{t('skills.Title-list')}</h4>
                </div>
                <div className="aligne select">
                    <label className="container" htmlFor="Secu">
                        <input type="radio" id="Secu" name="Compétences" className="RadComp" onChange={handleRadioChange}/>
                        <span className="checkmark"> {t('skills.Secu')}</span>
                        {t('skills.Secu')}
                    </label>
                    <label className="container" htmlFor="Progra">
                        <input type="radio" id="Progra" name="Compétences" className="RadComp" onChange={handleRadioChange}/>
                        <span className="checkmark"> {t('skills.Coding')}</span>
                        {t('skills.Coding')}
                    </label>
                    <label className="container">
                        <input type="radio" id="Conf" name="Compétences" className="RadComp" onChange={handleRadioChange}/>
                        <span className="checkmark"> {t('skills.Net')} </span>
                        {t('skills.Net')}
                    </label>
                    <label className="container" htmlFor="Syst">
                        <input type="radio" id="Syst" name="Compétences" className="RadComp" onChange={handleRadioChange}/>
                        <span className="checkmark"> {t('skills.Syst')}</span>
                        {t('skills.Syst')}
                    </label>
                    <label className="container">
                        <input type="radio" id="Analy" name="Compétences" className="RadComp" onChange={handleRadioChange}/>
                        <span className="checkmark"> {t('skills.Telecoms')}</span>
                        {t('skills.Telecoms')}
                    </label>
                    <label className="container">
                        <input type="radio" id="Tél" name="Compétences" className="RadComp" onChange={handleRadioChange}/> 
                        <span className="checkmark"> {t('skills.Telepho')}</span>
                        {t('skills.Telepho')}
                    </label>
                    <label className="container">
                        <input type="radio" id="Lang" name="Compétences" className="RadComp" onChange={handleRadioChange}/>
                        <span className="checkmark"> Langues</span>
                        Langues
                    </label>
                </div>
            </div>
            <div id="comp">
                {renderSection()}
            </div>
      </div>
    );
}

function SoftSkills() {
    const { t } = useTranslation();

    return (
        <>  
        <div className="Qligne">
            <div className="qualit section">
                <i className="bx bx-search" />
                <h4> {t('skills.First-title')}</h4>
                <div>
                    <p className="text"> {t('skills.First-dsc')} </p>
                </div>
            </div>
            <div className="qualit section">
                <i className="bx bx-hourglass" />
                <h4> {t('skills.Second-title')}</h4>
                <div>
                    <p className="text"> {t('skills.Second-dsc')} </p>
                </div>
            </div>
        </div>
        <div className="Qligne">
            <div className="qualit section">
                <i className="bx bx-code-curly" />
                <h4> {t('skills.Third-title')}</h4>
                <div>
                    <p className="text"> {t('skills.Third-dsc')} </p>
                </div>
            </div>
            <div className="qualit section">
                <i className="bx bx-calendar-check" />
                <h4> {t('skills.Fourth-title')}</h4>
                <div>
                    <p className="text"> {t('skills.Fourth-dsc')}</p>
                </div>
            </div>
            <div className="qualit section">
                <i className="bx bx-group" />
                <h4> {t('skills.Fifth-title')}</h4>
                <div>
                    <p className="text"> {t('skills.Fifth-dsc')}</p>
                </div>
            </div>
        </div>
        </>
    );
}