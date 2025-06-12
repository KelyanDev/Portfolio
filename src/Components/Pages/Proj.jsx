import { useParams } from "react-router";
import projects from "../Data/projects.json";
import { Link } from "react-router";

import './proj.css';

export default function Proj() {
    const { projectId } = useParams();

    const sectionData = projects[projectId];

    const updatedDescription = sectionData.description.map((line) => 
        line.replace(/src=['"]ScreenProjets\//g, `src=${process.env.PUBLIC_URL}/ScreenProjets/`)        
    );
    

    return (
        <header className="project">
            <img className="project-top" src={`${process.env.PUBLIC_URL}/Divers/Wave.svg`} alt=""></img>
            <div className="project-full">

                <div className="project-infos">
                    <div className="project-table">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Note</td>
                                    <td>{sectionData.note}</td>
                                </tr>
                                <tr>
                                    <td>Moyenne</td>
                                    <td>{sectionData.class}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="aligne">
                        <div className="GButton aligne">
                            <Link className="down" to={"/Portfolio"}>
                                <span className="button-txt"> Retour accueil</span>
                                <i className="bx bx-exit icon"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="project-context">
                    <div className="project-title aligne">
                        <h1 class='souligne'> {sectionData.title} </h1>
                    </div>
                    <div className="descript" dangerouslySetInnerHTML={{ __html: updatedDescription.join('') }}/>
                    <br/> <br/>
                </div>
            </div>
        </header>
    );
};