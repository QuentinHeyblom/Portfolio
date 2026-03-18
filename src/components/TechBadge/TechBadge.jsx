import React from 'react';
import './TechBadge.css';

export const TECH_DATA = {
    html: { name: 'HTML5', level: 'Avancé', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', bgShape: 'circle' },
    css: { name: 'CSS3', level: 'Avancé', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', bgShape: 'circle' },
    javascript: { name: 'JavaScript', level: 'Intermédiaire', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', bgShape: 'circle' },
    php: { name: 'PHP', level: 'Intermédiaire', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', bgShape: 'circle' },
    python: { name: 'Python', level: 'Intermédiaire', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', bgShape: 'circle' },
    csharp: { name: 'C#', level: 'Intermédiaire', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', bgShape: 'circle' },

    react: { name: 'React', level: 'Avancé', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', bgShape: 'circle' },
    nextjs: { name: 'Next.js', level: 'Avancé', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', bgShape: 'circle' },
    reactnative: { name: 'React Native', level: 'Avancé', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', bgShape: 'circle' },
    symfony: { name: 'Symfony', level: 'Avancé', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg', bgShape: 'circle' },
    nodejs: { name: 'Node.js', level: 'Intermédiaire', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', bgShape: 'circle' },

    mysql: { name: 'MySQL / SQL', level: 'Intermédiaire', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', bgShape: 'circle' },
    sqlite: { name: 'SQLite', level: 'Intermédiaire', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg', bgShape: 'circle' },
    sqlserver: { name: 'SQL Server', level: 'Débutant', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg', bgShape: 'circle' },
    phpmyadmin: { name: 'phpMyAdmin', level: 'Intermédiaire', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/PhpMyAdmin_logo.svg', bgShape: 'circle' },

    vscode: { name: 'VS Code', level: 'Avancé', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', bgShape: 'circle' },
    visualstudio: { name: 'Visual Studio', level: 'Avancé', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg', bgShape: 'circle' },
    git: { name: 'Git', level: 'Avancé', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', bgShape: 'circle' },
    github: { name: 'GitHub', level: 'Avancé', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', bgShape: 'circle' },
    gitkraken: { name: 'GitKraken', level: 'Avancé', icon: 'https://cdn.simpleicons.org/gitkraken/179287', bgShape: 'circle' },
    wampserver: { name: 'WampServer', level: 'Avancé', icon: '/stacks/wamp.png', bgShape: 'circle' },
    filezilla: { name: 'FileZilla', level: 'Avancé', icon: 'https://cdn.simpleicons.org/filezilla/BF0000', bgShape: 'circle' },
    termius: { name: 'Termius', level: 'Intermédiaire', icon: 'https://cdn.simpleicons.org/termius/12253A', bgShape: 'circle' },

    postman: { name: 'Postman', level: 'Intermédiaire', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', bgShape: 'circle' },
    httpie: { name: 'HTTPie', level: 'Avancé', icon: 'https://cdn.simpleicons.org/httpie/000000', bgShape: 'circle' },
    jwt: { name: 'JWT', level: 'Avancé', icon: 'https://cdn.simpleicons.org/jsonwebtokens/000000', bgShape: 'circle' },
    json: { name: 'JSON', level: 'Intermédiaire', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg', bgShape: 'circle' },

    canva: { name: 'Canva', level: 'Avancé', icon: '/stacks/canva.png', bgShape: 'circle' },
    figma: { name: 'Figma', level: 'Débutant', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', bgShape: 'circle' },
    teams: { name: 'Teams', level: 'Avancé', icon: '/stacks/teams.png', bgShape: 'circle' },
    trello: { name: 'Trello', level: 'Avancé', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-plain.svg', bgShape: 'circle' },
    notion: { name: 'Notion', level: 'Intermédiaire', icon: 'https://cdn.simpleicons.org/notion/000000', bgShape: 'circle' },
    wordpress: { name: 'WordPress', level: 'Avancé', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg', bgShape: 'circle' },

    ionos: { name: 'IONOS', level: 'Avancé', icon: 'https://cdn.simpleicons.org/ionos/003D8F', bgShape: 'circle' },
    hostinger: { name: 'Hostinger', level: 'Avancé', icon: 'https://cdn.simpleicons.org/hostinger/673DE6', bgShape: 'circle' }
};

const TechBadge = ({ id, variant = 'large' }) => {
    const tech = TECH_DATA[id.toLowerCase()];

    if (!tech) {
        console.warn(`Stack "${id}" non trouvée dans TECH_DATA`);
        return <span className="tech-badge-fallback">{id}</span>;
    }

    if (variant === 'small') {
        return (
            <div className="tech-badge-small" title={tech.name}>
                <div className={`badge-icon-wrap bg-${tech.bgShape}`}>
                    <img src={tech.icon} alt={tech.name} />
                </div>
                <span>{tech.name}</span>
            </div>
        );
    }

    const levelsMap = { 'Nul': 0, 'Débutant': 20, 'Intermédiaire': 50, 'Avancé': 80, 'Pro': 100 };
    const percent = levelsMap[tech.level] !== undefined ? levelsMap[tech.level] : 50;

    return (
        <div className="node-item">
            <div className={`node-icon-wrap bg-${tech.bgShape}`}>
                <img src={tech.icon} alt={tech.name} />
            </div>
            <div className="node-info">
                <h4>{tech.name}</h4>
                <div className="level-indicator">
                    <span className="level-text">{tech.level}</span>
                    <div className="progress-track">
                        <div className="progress-fill" style={{ width: `${percent}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechBadge;
