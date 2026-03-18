export const projectsData = [
    {
        id: "guernes",
        title: "Site Mairie de Guernes",
        shortDescription: "Création complète du site internet de la commune de Guernes. Développement d'une vitrine moderne, accessible et conçue pour offrir l'information de façon claire aux citoyens.",
        fullDescription: `
      Le projet de la Mairie de Guernes consistait à moderniser entièrement la présence en ligne de la commune.
      
      J'ai pris en charge la conception et le développement de bout en bout pour offrir aux citoyens une plateforme claire, rapide et accessible.
      Le site est un accès rapide aux actualités locales, et une présentation valorisante du patrimoine du villages.
      
      Suite au changement de maire au mois de mars 2026, le site est pour le moment toujours disponible en ligne mais risque de disparaitre d'ici peu.
    `,
        coverImage: "/projets/guernes/preview.png",
        coverBackground: "linear-gradient(135deg, #401f31ff 0%, #813978ff 100%)",
        galleryImages: [
            "/projets/guernes/1.png",
            "/projets/guernes/2.png",
            "/projets/guernes/3.png",
            "/projets/guernes/4.png",
            "/projets/guernes/5.png"
        ],
        adminImages: [
            "/projets/guernes/6.png",
            "/projets/guernes/7.png",
            "/projets/guernes/8.png",
            "/projets/guernes/9.png",
            "/projets/guernes/10.png"
        ],
        role: "Développeur Full-Stack & Webdesigner",
        duration: "2 mois",
        client: "Commune de Guernes",
        websiteUrl: "https://guernes.fr",
        githubUrl: "",
        category: "pro",
        technologies: ["html", "css", "php", "javascript", "mysql", "phpmyadmin", "termius", "ionos"]
    }

    ,

    {
        id: "disney",
        title: "Site (fictif) de gestion des Employés",
        shortDescription: "Création du site fictif avec 2 camarades durant mes études en BTS SIO",
        fullDescription: `
        Création du site fictif avec 2 camarades durant mes études en BTS SIO

        Le projet était de créer un site fictif de gestion des employés pour disney.
        Je me suis chargé de ces parties :
        -Page d'accueil
        -Page de connexion (Front + API)
        -Menu principale
        -Menu de recherche d'attractions (Front + API)
    `,
        coverImage: "/projets/disney/preview.png",
        coverBackground: "linear-gradient(135deg, #215c6eff 0%, #b34196ff 100%)",
        adminImages: [
            "/projets/disney/1.png",
            "/projets/disney/2.png",
            "/projets/disney/3.png",
            "/projets/disney/4.png",
            "/projets/disney/5.png"
        ],
        role: "Développeur Full-Stack & Webdesigner",
        duration: "2 mois et demi",
        githubUrl: "https://github.com/KelvinCvl/AP3_Disney",
        category: "Scolaire", // 'pro' (Perso/Pro) ou 'scolaire'
        technologies: ["react", "css", "javascript", "mysql", "phpmyadmin", "canva"]
    }
];

export const getProjectById = (id) => {
    return projectsData.find(project => project.id === id);
};
