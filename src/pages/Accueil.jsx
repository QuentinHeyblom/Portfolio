import '../style/Accueil.css';

const Accueil = () => {
  return (
    <div className="accueil-container">
      {/* Présentation */}
      <div className="hero-wrapper">

        <div className="hero-glow glow-1"></div>
        <div className="hero-glow glow-2"></div>

        <section className="hero-section">
          <div className="hero-text">
            <h1>Bonjour, je suis <span>Quentin</span></h1>
            <h2>Développeur Web Junior</h2>
            <p>
              Actuellement en niveau Bac+2, je suis passionné par le développement web.
              Découvrez mon parcours, mes compétences et mes réalisations.
            </p>
            <div className="hero-buttons">
              <a href="#projets" className="btn-primary">Mes Projets</a>
              <a href="#contact" className="btn-secondary">Me Contacter</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/public/tete/tete.jpg" alt="Photo de profil" />
          </div>
        </section>
      </div>

      {/* Stacks */}
      <section id="competences" className="content-section">
        <div className="section-container">
          <h2>Stacks</h2>

          <div className="creative-skills-grid">

            {/* Front-End */}
            <div className="skill-panel">
              <div className="panel-header">
                <span className="panel-icon">🎨</span>
                <h3>Front-End</h3>
              </div>
              <div className="skill-nodes">
                <div className="node-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" />
                  <div className="node-info">
                    <h4>JavaScript</h4>
                    <span>Intermédiaire</span>
                  </div>
                </div>
                <div className="node-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                  <div className="node-info">
                    <h4>React</h4>
                    <span>Avancé</span>
                  </div>
                </div>
                <div className="node-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" />
                  <div className="node-info">
                    <h4>Next.js</h4>
                    <span>Avancé</span>
                  </div>
                </div>
                <div className="node-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Native" />
                  <div className="node-info">
                    <h4>React Native</h4>
                    <span>Avancé</span>
                  </div>
                </div>
                <div className="node-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                  <div className="node-info">
                    <h4>HTML5</h4>
                    <span>Avancé</span>
                  </div>
                </div>
                <div className="node-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
                  <div className="node-info">
                    <h4>CSS3</h4>
                    <span>Avancé</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Back-End */}
            <div className="skill-panel">
              <div className="panel-header">
                <span className="panel-icon">⚙️</span>
                <h3>Back-End & BDD</h3>
              </div>
              <div className="skill-nodes">
                <div className="node-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" />
                  <div className="node-info">
                    <h4>PHP</h4>
                    <span>Intermédiaire</span>
                  </div>
                </div>
                <div className="node-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg" alt="Symfony" />
                  <div className="node-info">
                    <h4>Symfony</h4>
                    <span>Avancé</span>
                  </div>
                </div>
                <div className="node-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                  <div className="node-info">
                    <h4>Node.js</h4>
                    <span>Intermédiaire</span>
                  </div>
                </div>
                <div className="node-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                  <div className="node-info">
                    <h4>Python</h4>
                    <span>Intermédiaire</span>
                  </div>
                </div>
                <div className="node-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" />
                  <div className="node-info">
                    <h4>C#</h4>
                    <span>Intermédiaire</span>
                  </div>
                </div>
                <div className="node-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
                  <div className="node-info">
                    <h4>MySQL / SQL</h4>
                    <span>Intermédiaire</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Outils & Outillage */}
            <div className="skill-panel">
              <div className="panel-header">
                <span className="panel-icon">🛠️</span>
                <h3>Outils & Workflow</h3>
              </div>
              <div className="skill-nodes">
                <div className="node-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                  <div className="node-info">
                    <h4>Git / GitHub</h4>
                    <span>Avancé</span>
                  </div>
                </div>
                <div className="node-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" />
                  <div className="node-info">
                    <h4>Figma & Canva</h4>
                    <span>Intermédiaire</span>
                  </div>
                </div>
                <div className="node-item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" alt="WordPress" />
                  <div className="node-info">
                    <h4>WordPress</h4>
                    <span>Avancé</span>
                  </div>
                </div>
                <div className="node-item">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png" alt="Postman" />
                  <div className="node-info">
                    <h4>Postman</h4>
                    <span>Intermédiaire</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projets */}
      <section id="projets" className="content-section alternate-bg">
        <div className="section-container">
          <h2>Projets</h2>
          <div className="placeholder-block">
            <p>Lorem ipsum</p>
          </div>
        </div>
      </section>

      {/* Stages */}
      <section id="stages" className="content-section">
        <div className="section-container">
          <h2>Stages</h2>
          <div className="placeholder-block">
            <p>Lorem ipsum</p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifs" className="content-section alternate-bg">
        <div className="section-container">
          <h2>Certifications</h2>
          <div className="placeholder-block">
            <p>Lorem ipsum</p>
          </div>
        </div>
      </section>

      {/* Liens */}
      <section id="liens" className="content-section">
        <div className="section-container">
          <h2>Liens</h2>
          <div className="placeholder-block">
            <p>Lorem ipsum</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="content-section alternate-bg">
        <div className="section-container">
          <h2>Contact</h2>
          <div className="placeholder-block">
            <p>Lorem ipsum</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;