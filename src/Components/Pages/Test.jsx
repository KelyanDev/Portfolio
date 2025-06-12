import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

const projects = [
  { id: 1, title: "Projet A", x: 120, y: 200 },
  { id: 2, title: "Projet B", x: 185, y: 300 },
  { id: 3, title: "Projet C", x: 400, y: 175 },
  { id: 4, title: "Projet D", x: 350, y: 90 },
  { id: 5, title: "Projet E", x: 150, y: 110 },
];

const links = [
  { source: 1, target: 2 },
  { source: 2, target: 3 },
  { source: 3, target: 4 },
  { source: 4, target: 5 },
  { source: 1, target: 3 },
];

export default function Test() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
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

  return (
    <div id="Projet" className={`part ${inView ? 'visible' : ''} `} ref={ref}>
            { hasBeenViewed && (
                <>
                    <h2 className="titre">{t('projects.Title')}</h2>
                    <div className="sous-ligne"></div>
                    <br />
                    <div className="graph-container">
        {/* Lignes de connexion entre nœuds */}
        <svg>
          {links.map((link, index) => {
            const source = projects.find((p) => p.id === link.source);
            const target = projects.find((p) => p.id === link.target);
            if (!source || !target) return null;

            const nodeRadius = hoveredNode === source.id || hoveredNode === target.id ? 12 : 6; // Taille variable

            return (
              <line
                key={index}
                className="link"
                x1={source.x}
                y1={source.y}
                x2={target.x}
                y2={target.y}
              />
            );
          })}
        </svg>

        {/* Nœuds */}
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={`node ${hoveredNode === project.id ? "hovered" : ""}`}
            style={{
              left: `${project.x}px`,
              top: `${project.y}px`,
              width: hoveredNode === project.id ? "24px" : "12px",
              height: hoveredNode === project.id ? "24px" : "12px",
              transform: "translate(-50%, -50%)",
            }}
            onMouseEnter={() => setHoveredNode(project.id)}
            onMouseLeave={() => setHoveredNode(null)}
            onClick={() => setSelectedProject(project)}
            animate={{
              width: hoveredNode === project.id ? 24 : 12,
              height: hoveredNode === project.id ? 24 : 12,
            }}
          />
        ))}
      </div>

      {/* Affichage des détails */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-info"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <h2 className="text-lg font-bold">{selectedProject.title}</h2>
            <p>Aucune description disponible.</p>
            <button className="close-btn" onClick={() => setSelectedProject(null)}>
              Fermer
            </button>
          </motion.div>
        )}
      </AnimatePresence>
                    
                    <br />
                </>
            )}
        </div>
  );
}
