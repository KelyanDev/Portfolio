import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            sidebar: {
                /* === Sidebar === */
                SidHead: 'Tabs',
                SidAbout: 'About me',
                SidSkills: 'Skills',
                SidMisc: 'Miscellaneous',
                SidExp: 'Experience',
                SidTrai: 'Training course',
                SidProj: 'Projects',
                SidWhite: 'White Mode',
                SidDark: 'Dark Mode',
            },
            about: {
                /* === About me === */
                'Title': 'Second year student in Network and Telecommunications',
                'Part1': "My name is <b>Tournebize Kélyan</b>, I'm 18 years old and I have just completed my first year of a <b>Networks and Telecommunications</b> Bachelor.",
                'Part2': `After graduating from a General Baccalaureate with Mathematics and Numerical & Computer Sciences specialties (NSI in France),
                    I decided to join a training course in Networks and Telecommunications in order to be able to follow the <b>Cybersecurity</b> course offered upon the second year,
                    but also for the possibility of following an <b>apprenticeship</b>, during the second and third years of study.`,
                'Part3': `Currently, I am <b>looking for</b> a <b>work-study contract</b> starting in September 2024,
                    on a <b>pace</b> of <b>1 month / 1 month</b>, in order to work with a company for one or two years and strengthen my skills
                    while understanding the challenges of the professional environment.`,
            },
            training: {
                /* === Training course === */
                'Title': "Training course",
                'Train-3-Tit': "July 2024",
                'Train-3-Desc': "First year completion of a bachelor in Networks and Telecommunications",
                'Train-2-Desc': "First year of a bachelor in Networks and Telecommunications",
                'Train-1-Tit': "June 2023",
                'Train-1-Desc': "Graduating from a French Baccalaureate with Mathematics and Numeric & Computer Science (NSI) specialties, with honors",
            },
            experience: {
                /* === Professional Experience === */
                'Title': 'Professional Experience',
                'Exp-1-Tit': 'January 2020',
                'Exp-1-P1': "During my ninth (9th) grade, I had the opportunity to do a one-week internship at the Vichy Thermal Baths.",
                'Exp-1-P2': "During this internship, I helped the establishment's bacteriologist to carry out analyzes on various thermal source waters.",
                'Exp-1-P3': "After recovering the spring waters, it was necessary to go through an evaporation process before placing the filters in petrie dishes.",
                'Exp-1-P4': "Finally, I had to analyze the petrie dishes to identify if it contained any dangerous bacteria.",
            },
            skills: {
                /* === Skills === */
                'Title': "Skills",
                /* == Hard Skills == */
                'Hard-Title': "Hard skills",
                'Title-list': 'Skills list',
                'Syst': 'Systems',
                'Coding': 'Coding',
                'Net': 'Networks',
                'Telecoms': 'Telecommunications',
                'Telepho': 'Telephony',
                /* == Soft Skills == */
                'Soft-Title': "Soft skills",
                "First-title": "Maturity",
                "First-dsc": "I can accept feedback and comments with the aim of improving myself without adopting a defensive attitude.",
                "Second-title": "Patience",
                "Second-dsc": "When I encounter a problem in a project, I know how to be patient to find a solution to the problem.",
                "Third-title": "Passion",
                "Third-dsc": "When I am interested in a topic, I can fully commit to achieving my goals.",
                "Fourth-title": "Efficiency",
                "Fourth-dsc": "I can be efficient in order to complete my projects within the given time frames.",
                "Fifth-title": "Team Spirit",
                "Fifth-dsc": "I can work with others and be supportive to help my colleagues achieve our goals."
            },
            projects: {
                /* === Projects === */
                'Integration': 'Integrative Project (SAE24)',
                'Title': 'Projects',
                'Numeric': 'Numeric Signal Simulation (SAE22)',
                'Re-App': 'React App',
                'Ticket': 'Ticket Management Application (SAE23)',
                'Data': 'Data analysis (SAE15)',
                'Aware': 'Awareness of computer hygiene(SAE11)',
                'Game': 'Gaming console (12th Grade)'
            },
            miscellaneous: {
                /* === Miscellaneous === */
                "Title": "Miscellaneous",
                "First-title": "Surfing",
                "First-dsc": "I enjoy surfing, mostly in surf clubs, during my summer holidays on the Atlantic Ocean.",
                "Second-title": "Climbing",
                "Second-dsc": "I practice bouldering on indoor courses, with the example of the B'up climbing gym.",
                "Third-title": "Stones and Minerals",
                "Third-dsc": "I have shown an interest in stones and minerals since I was very young.",
                "Fourth-title": "Gym",
                "Fourth-dsc": "I like working out in the gym to exercise physically.",
                "Fifth-title": "Computing",
                "Fifth-dsc": "I like discovering different programming languages and developing computer tools.",
                "Sixth-title": "Manga/Anime",
                "Sixth-dsc": `I enjoy reading manga and watching anime, with the example of the manga and scans of "Jujutsu Kaisen".`
            },
            copyright: 'all rights reserved',
            CV: 'Download my CV',
            Mail: 'Mail Address'
        }
    },
    fr: {
        translation: {
            sidebar: {
                /* === Sidebar === */
                SidHead: 'Onglets',
                SidAbout: 'A propos de moi',
                SidSkills: 'Compétences',
                SidMisc: 'Divers',
                SidExp: 'Expérience',
                SidTrai: 'Formation',
                SidProj: 'Projets',
                SidWhite: 'Mode Clair',
                SidDark: 'Mode Sombre'
                },
            about: {
                /* === About me === */
                Title: 'Etudiant en deuxième année de BUT Réseaux et Télécommunications',
                Part1: "Je m'appelle <b>Tournebize Kélyan</b>, j'ai 18 ans, et j'ai récemment validé ma première année de BUT en <b>Réseaux et Télécommunications</b>.",
                Part2: `Après avoir passé un baccalauréat Général avec pour spécialités Mathématiques et Numérique et Sciences Informatiques (NSI),
                    j'ai décidé d'intégrer une formation de BUT en Réseaux et Télécommunications afin de pouvoir suivre le parcours <b>Cybersécurité</b> proposé dès la deuxième année,
                    mais aussi pour la possibilité de faire de l'<b>alternance</b>, en deuxième et en troisième année.`,
                Part3: `Actuellement, je suis à la <b>recherche</b> d'un <b>contrat d'alternance</b> à compter de Septembre 2024,
                    sur un <b>rythme</b> de <b>1 mois / 1 mois</b>, afin de travailler avec une entreprise pendant une ou deux années et renforcer mes compétences
                    tout en comprenant les enjeux du milieu professionnel.`
            },
            training: {
                /* === Training course === */
                'Title': "Formation",
                'Train-3-Tit': "Juillet 2024",
                'Train-3-Desc': "Validation première année de BUT Réseaux et Télécommunications",
                'Train-2-Desc': "Première année de BUT en Réseaux et Télécommunications",
                'Train-1-Tit': "Juin 2023",
                'Train-1-Desc': "Obtention d'un Baccalauréat Général spécialités Maths et NSI, mention assez bien"
            },
            experience: {
                /* === Professional Experience === */
                'Title': 'Experience professionnelle',
                'Exp-1-Tit': 'Janvier 2020',
                'Exp-1-P1': "Lors de mon année de 3ème, j'ai eu l'occasion de réaliser un stage d'une semaine aux Thermes de Vichy.",
                'Exp-1-P2': "Lors de ce stage, j'ai accompagné le bactériologiste de l'établissement afin de faire des analyses sur les différentes eaux de source thermale",
                'Exp-1-P3': "Une fois les eaux de sources récupérées, il fallait passer par un processus d'évaporation avant de déposer les filtres dans des boîtes de pétries.",
                'Exp-1-P4': "Enfin, j'ai dû analyser les boîtes de pétries afin de repérer si des bactéries dangereuses étaient présentes."
            },
            skills: {
                /* === Skills === */
                'Title': "Compétences",
                /* == Hard Skills == */
                'Hard-Title': "Compétences techniques",
                'Title-list': 'Liste compétences',
                'Syst': 'Système',
                'Coding': 'Programmation',
                'Net': 'Réseaux',
                'Telecoms': 'Télécom',
                'Telepho': 'Téléphonie',
                /* == Soft Skills == */
                'Soft-Title': "Qualités",
                'First-title': "Autonome",
                'First-dsc': "Je suis capable de prendre des initiatives afin de trouver par moi-même la solution aux problèmes que je rencontre",
                'Second-title': "Persévérant",
                'Second-dsc': "Lorsque je rencontre des difficultés en projet, je sais me montrer persévérant afin de trouver la solution à ce problème",
                'Third-title': "Passionné",
                'Third-dsc': "Lorsque je suis intéressé par un sujet, je sais me donner à fond pour atteindre mes objectifs",
                'Fourth-title': "Efficace",
                'Fourth-dsc': "Je sais me montrer efficace afin de réaliser mes projets dans les temps données",
                'Fifth-title': "Esprit d'équipe",
                'Fifth-dsc': "Je sais oeuvrer avec les autres et être solidaire afin d'aider mes collègues à la réalisation de nos objectifs."
            },
            projects: {
                /* === Projects === */
                'Integration': 'Projet Intégratif (SAE24)',
                'Title': 'Projets',
                'Numeric': 'Simulation de signaux numériques (SAE22)',
                'Re-App': 'Application React',
                'Ticket': 'Application de gestion de tickets (SAE23)',
                'Data': 'Analyse de données (SAE15)',
                'Aware': "Sensibilisation à l'hygiène informatique(SAE11)",
                'Game': 'Console de Jeu (Terminale)'
            },
            miscellaneous: {
                /* === Miscellaneous === */
                'Title': 'Divers',
                'First-title': "Surf",
                'First-dsc': "J'aime pratiquer le surf en club lors de mes vacances d'été, sur l'océan Atlantique",
                'Second-title': "Escalade",
                'Second-dsc': "Je pratique l'escalade de bloc sur des parcours en intérieur au sein de la salle d'escalade B'up",
                'Third-title': "Pierres et minéraux",
                'Third-dsc': "Je montre un intérêt pour les pierres et les minéraux depuis très jeune",
                'Fourth-title': "Musculation",
                'Fourth-dsc': "Je fais du sport en salle afin de m'exercer physiquement",
                'Fifth-title': "Informatique",
                'Fifth-dsc': "J'aime découvrir la programmation et j'aime développer des outils informatiques",
                'Sixth-title': "Manga/Anime",
                'Sixth-dsc': `J'aime lire des mangas et regarder des animes, avec l'exemple du manga et des scans de "Jujutsu Kaisen"`
            },
            copyright: 'tous droits réservés',
            CV: 'Télécharger mon CV',
            Mail: 'Adresse Mail'
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'fr',
        keySeparator: '.',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;