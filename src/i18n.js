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
                'Part1': "My name is <b>Tournebize Kélyan</b>, I'm 19 years old and I'm a second year student in <b>Networks and Telecommunications</b> Bachelor, with a <b>Cybersecurity</b> specialty.",
                'Part2': `After graduating from a General Baccalaureate with Mathematics and Numerical & Computer Sciences specialties (NSI in France),
                    I decided to join a training course in Networks and Telecommunications in order to be able to follow the <b>Cybersecurity</b> course offered upon the second year,
                    but also for the possibility of following an <b>apprenticeship</b>, during the second and third years of study. I'm passionnate, autonomous and persevering`,
                'Part3': `Currently, I am looking forward to continue as a third year student in my Bachelor, starting in September 2025.`,
            },
            training: {
                /* === Training course === */
                'Title': "Training course",
                'Train-4-Tit': 'February 2025',
                'Train-4-Desc': 'Third semester completion of a bachelor in Networks and Telecommunications',
                'Train-3-Desc': 'Second year student of a bachelor in Networks and Telecommunications',
                'Train-2-Desc': "First year completion of a bachelor in Networks and Telecommunications",
                'Train-1-Tit': "June 2023",
                'Train-1-Desc': "Graduating from a French Baccalaureate with Mathematics and Numeric & Computer Science (NSI) specialties, with honors",
            },
            experience: {
                /* === Professional Experience === */
                'Title': 'Professional Experience',
                // Internship
                'Exp-3-Tit': "Integration internship in User Support",
                'Exp-3-P1': "From April 2025 to June 2025, I joined Abicom's service center to complete an internship.",
                'Exp-3-P2': "My role during these months was to provide technical support for users, aiming to help and assist clients by resolving their technical issues and handling their service requests.",
                'Exp-3-P3': "I also had the opportunity to work on monitoring client's backups, which helped me improve my skills with Veeam tools and data backup management.",
                'Exp-3-P4': "This experience greatly enhanced both my technical and interpersonal skills",
                // Support
                'Exp-2-Tit': 'Support for first-year students',
                'Exp-2-P1': "From September 2024 to December 2024, I had the opportunity to provide support in telecommunications for first-year students.",
                'Exp-2-P2': "I helped first-year students in my program who were struggling to understand their telecommunications courses.",
                'Exp-2-P3': "I had to assist some students in understanding certain concepts related to their courses, by having them redo exercices or explaining these concepts to them.",
                'Exp-2-P4': "This experience allowed me to develop my sense of responsibility and my ability to teach.",
                // 9th grade internship
                'Exp-1-Tit': 'Bacteriology internship',
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
                'Secu': 'Security',
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
                'Title': 'Projects',
                'CompanyNetwork': 'Integrative Project',
                'FluxBiz': 'FluxBiz',
                'SAE22': 'Signal Simulation',
                'RToDo': 'React App',
                'Ticket': 'TicketManagement',
                'Vacation': 'Data analysis',
                'Portfolio': 'Portfolio',
                'Hatsu': 'Gaming console'
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
                Part1: "Je m'appelle <b>Tournebize Kélyan</b>, j'ai 19 ans, et je suis étudiant en deuxième année de BUT en <b>Réseaux et Télécommunications</b>, spécialité <b>Cybersécuritée</b>.",
                Part2: `Après avoir passé un baccalauréat Général avec pour spécialités Mathématiques et Numérique et Sciences Informatiques (NSI),
                    j'ai décidé d'intégrer une formation de BUT en Réseaux et Télécommunications afin de pouvoir suivre le parcours <b>Cybersécurité</b> proposé dès la deuxième année,
                    mais aussi pour la possibilité de faire de l'<b>alternance</b>, en deuxième et en troisième année. Je suis quelqu'un de <b>passionné</b>, d'<b>autonome</b> et de <b>persévérant</b>.`,
                Part3: `Entre les mois d'Avril et de Juin 2025, j'ai eu l'occasion de réaliser un stage au sein du centre de service de l'entreprise <b>Abicom</b>. 
                    Actuellement, je souhaite continuer à suivre ma formation en tant qu'alternant en 3ème année dès Septembre 2025.`
            },
            training: {
                /* === Training course === */
                'Title': "Formation",
                'Train-4-Tit': 'Février 2025',
                'Train-4-Desc': 'Validation troisième semestre de BUT Réseaux et Télécommunications',
                'Train-3-Desc': 'Deuxième année de BUT Réseaux et Télécommunications',
                'Train-2-Desc': "Validation première année de BUT Réseaux et Télécommunications",
                'Train-1-Tit': "Juin 2023",
                'Train-1-Desc': "Obtention d'un Baccalauréat Général spécialités Maths et NSI, mention assez bien"
            },
            experience: {
                /* === Professional Experience === */
                'Title': 'Experience professionnelle',
                // Stage
                'Exp-3-Tit': "Stage d'intégration au service Support Utilisateur",
                'Exp-3-P1': "D'Avril 2025 jusqu'à Juin 2025, j'ai eu l'occasion d'intégrer le centre de services de l'entreprise Abicom, afin d'y réaliser un stage.",
                'Exp-3-P2': "Ma mission lors de ce stage était de réaliser le support des utilisateurs, dont l'objectif était d'aider et d'accompagner les clients, que ce soit en résolvant des incidents techniques, mais également en répondant à leurs demandes de services",
                'Exp-3-P3': "Cependant, j'ai également eu l'occasion de réaliser un travail approfondi sur la supervision des sauvegardes des clients, ce qui m'a permis par la suite de monter en compétences sur les outils Veeam et le domaine des sauvegardes de données.",
                'Exp-3-P4': "Ainsi, cette expérience m'a permi de grandement développer mes compétences techniques mais également mes compétences humaines",
                // Soutien
                'Exp-2-Tit': 'Soutien élèves de première année',
                'Exp-2-P1': "De Septembre 2024 jusqu'à Décembre 2024, j'ai eu l'occasion de réaliser du soutien en télécommunications pour les élèves de premières années, pour une durée totale d'une dizaine d'heures.",
                'Exp-2-P2': "J'ai en effet aider des étudiants de première année de ma formation qui avaient des difficultés dans la compréhension de leurs cours de télécommunications.",
                'Exp-2-P3': "J'ai donc dû aider certains élèves à comprendre certaines notions liées aux cours, en leur faisant refaire des exercices où en leur expliquant ces notions.",
                'Exp-2-P4': "Ainsi, cette expérience m'as permi de développer ma responsabilité ainsi que ma capacité à vulgariser.",
                // Stage de 3ème
                'Exp-1-Tit': 'Stage de bactériologie',
                'Exp-1-P1': "Lors de mon année de 3ème (Janvier 2020), j'ai eu l'occasion de réaliser un stage d'une semaine aux Thermes de Vichy.",
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
                'Secu': 'Sécurité',
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
                'Title': 'Projets',
                'CompanyNetwork': 'Projet Intégratif',
                'FluxBiz': "FluxBiz",
                'SAE22': 'Simulation de signaux',
                'RToDo': 'Application React',
                'Ticket': 'TicketManagement',
                'Vacation': 'Analyse de données',
                'Portfolio': 'Portfolio',
                'Hatsu': 'Console de Jeu'
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