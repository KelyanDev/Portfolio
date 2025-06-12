import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router";

import network from "./Data/network.json"

const projectsRaw = network.nodes;
const links = network.links;

console.log("ProjectsRaw",projectsRaw)


export default function Projects() {
    const [hoveredNode, setHoveredNode] = useState(null);
    const { t } = useTranslation();
    const { ref, inView } = useInView({ threshold: 0, });
    const [hasBeenViewed, setHasBeenViewed] = useState(false);
    const containerRef = useRef(null);
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0})
    const [ready, setReady] = useState(false);

    // Calculate new positions for nodes depending on container size
    const projects = useMemo(() => {
        const xs = projectsRaw.map(p => p.x);
        const ys = projectsRaw.map(p => p.y);
        const minX = Math.min(...xs), maxX = Math.max(...xs);
        const minY = Math.min(...ys), maxY = Math.max(...ys);

        return projectsRaw.map(p => ({
            ...p,
            x: 0.1 * containerSize.width + ((p.x - minX) / (maxX - minX)) * 0.8 * containerSize.width,
            y: 0.1 * containerSize.height + ((p.y - minY) / (maxY - minY)) * 0.8 * containerSize.height,
        }));
    }, [containerSize]);

    
    useEffect(() => {
        if (inView) {
            setHasBeenViewed(true);
        }
    }, [inView]);


    useEffect(() => {
        if (!hasBeenViewed ||!containerRef.current) return;

        const observer = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            setContainerSize({ width, height })

            if (width > 0 && height > 0 && !ready) {
                setReady(true);
                console.log("Ready")
            }
        });

        observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, [hasBeenViewed, ready])

    return (
        <div id="Projet" className={`part ${inView ? 'visible' : ''}`} ref={ref}>
            {hasBeenViewed && (
                <>
                    <h2 className="titre">{t('projects.Title')}</h2>
                    <div className="sous-ligne"></div>
                    <br />
                    <div className="graph-container" ref={containerRef}>
                        <svg>
                            {links.map((link, index) => {
                                const source = projects.find((p) => p.id === link.source);
                                const target = projects.find((p) => p.id === link.target);
                                if (!source || !target || !containerRef.current) return null;

                                return (
                                    <line
                                        key={index}
                                        className="link"
                                        x1={source.x}
                                        y1={source.y}
                                        x2={target.x}
                                        y2={target.y}
                                        stroke="#ccc"
                                        strokeWidth="2"
                                    />
                                );
                            })}
                        </svg>

                        {projects.map((project) => {
                            const isHovered = hoveredNode === project.id;

                            return(
                                <motion.div
                                    key={project.id}
                                    className={`node ${isHovered ? "hovered" : ""}`}
                                    onMouseEnter={() => setHoveredNode(project.id)}
                                    onMouseLeave={() => setHoveredNode(null)}
                                    animate={{
                                        left: project.x,
                                        top: project.y,
                                        position: "absolute",
                                        transform: "translate(-50%, -50%)",
                                    }}>
                                    {isHovered ? (
                                        <>
                                            <div className="nodeContext">
                                                <h3 className="node-title">{t(`projects.${project.id}`)}</h3>
                                                <p className="texte">{project.desc}</p>
                                            </div>
                                            <Link className="node-button" to={`/Portfolio/projet/${project.id}`}>
                                                Voir plus {">"}
                                            </Link>
                                        </>
                                    ) : null}
                                </motion.div>)
                        })}
                    </div>
                    <br />
                    <p className="texte tiny">Chaque noeud représente un projet que j'ai réalisé. Passez votre souris dessus pour en savoir plus!</p>
                </>
            )}
        </div>
    );
}
