import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router";
import { forceSimulation, forceLink, forceManyBody, forceCenter, forceCollide } from "d3-force";

import network from "./Data/network.json";

const rawNodes = network.nodes;
const rawLinks = network.links;

const MOBILE_BREAKPOINT = 640;
const SIMULATION_TICKS = 300; // nombre d'itérations avant de figer le layout

function computeLayout(width, height) {
    // On clone les données à chaque calcul : d3-force mute les objets qu'on lui passe
    const nodes = rawNodes.map(n => ({ ...n }));
    const links = rawLinks.map(l => ({ ...l }));

    const simulation = forceSimulation(nodes)
        .force("link", forceLink(links).id(d => d.id).distance(width < 900 ? 90 : 130))
        .force("charge", forceManyBody().strength(-260))
        .force("center", forceCenter(width / 2, height / 2))
        .force("collide", forceCollide(40))
        .stop();

    for (let i = 0; i < SIMULATION_TICKS; i++) {
        simulation.tick();
    }

    // On clamp dans le container avec une marge de 10%, comme avant
    const margin = 0.1;
    const xs = nodes.map(n => n.x);
    const ys = nodes.map(n => n.y);
    const minX = Math.min(...xs), maxX = Math.max(...xs);
    const minY = Math.min(...ys), maxY = Math.max(...ys);
    const spanX = maxX - minX || 1;
    const spanY = maxY - minY || 1;

    return nodes.map(n => ({
        ...n,
        x: margin * width + ((n.x - minX) / spanX) * (1 - 2 * margin) * width,
        y: margin * height + ((n.y - minY) / spanY) * (1 - 2 * margin) * height,
    }));
}

export default function Projects() {
    const [hoveredNode, setHoveredNode] = useState(null);
    const { t } = useTranslation();
    const { ref, inView } = useInView({ threshold: 0 });
    const [hasBeenViewed, setHasBeenViewed] = useState(false);
    const containerRef = useRef(null);
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (inView) setHasBeenViewed(true);
    }, [inView]);

    useEffect(() => {
        if (!hasBeenViewed || !containerRef.current) return;

        const observer = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            setContainerSize({ width, height });
        });

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [hasBeenViewed]);

    const isMobile = containerSize.width > 0 && containerSize.width < MOBILE_BREAKPOINT;

    // Layout recalculé uniquement quand la taille change réellement (pas à chaque pixel)
    const projects = useMemo(() => {
        if (containerSize.width === 0 || containerSize.height === 0 || isMobile) return [];
        return computeLayout(containerSize.width, containerSize.height);
    }, [containerSize, isMobile]);

    return (
        <div id="Projet" className={`part ${inView ? "visible" : ""}`} ref={ref}>
            {hasBeenViewed && (
                <>
                    <h2 className="titre">{t("projects.Title")}</h2>
                    <div className="sous-ligne"></div>

                    <div className="graph-container" ref={containerRef}>
                        {isMobile ? (
                            <ul className="graph-list">
                                {rawNodes.map(project => (
                                    <li key={project.id} className="graph-list-item">
                                        <span className={`dot dot--${project.category}`} />
                                        <div>
                                            <h3 className="node-title">{t(`projects.${project.id}`)}</h3>
                                            <p className="texte">{project.desc}</p>
                                            <Link className="node-button" to={`/Portfolio/projet/${project.id}`}>
                                                Voir plus {">"}
                                            </Link>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <>
                                <svg>
                                    {rawLinks.map((link, index) => {
                                        const source = projects.find(p => p.id === link.source);
                                        const target = projects.find(p => p.id === link.target);
                                        if (!source || !target) return null;

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

                                {projects.map(project => {
                                    const isHovered = hoveredNode === project.id;

                                    return (
                                        <motion.div
                                            key={project.id}
                                            className={`node ${isHovered ? "hovered" : ""} ${project.category}`}
                                            onMouseEnter={() => setHoveredNode(project.id)}
                                            onMouseLeave={() => setHoveredNode(null)}
                                            animate={{
                                                left: project.x,
                                                top: project.y,
                                                position: "absolute",
                                                transform: "translate(-50%, -50%)",
                                            }}
                                        >

                                            {isHovered && (
                                                <>
                                                    <div className="nodeContext">
                                                        <h3 className="node-title">{t(`projects.${project.id}`)}</h3>
                                                        <p className="texte">{project.desc}</p>
                                                    </div>
                                                    <Link className="node-button" to={`/Portfolio/projet/${project.id}`}>
                                                        Voir plus {">"}
                                                    </Link>
                                                </>
                                            )}
                                        </motion.div>
                                    );
                                })}
                            </>
                        )}
                    </div>

                    <p className="texte tiny">{t("projects.Hint")}</p>
                </>
            )}
        </div>
    );
}