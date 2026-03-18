import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../style/Accueil.css';
import TechBadge from '../components/TechBadge/TechBadge';
import { getProjectById, projectsData } from '../data/projects';
import MarqueeText from '../components/MarqueeText/MarqueeText';
const Accueil = () => {
  return (
    <div className="accueil-container">
      <div className="hero-wrapper">

        <div className="hero-glow glow-1"></div>
        <div className="hero-glow glow-2"></div>

        <section className="hero-section">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1>Bonjour, je suis<br /><span>Quentin</span></h1>
            <h2>Développeur Web Full Stack Junior</h2>
            <p className="hero-subtitle">
              Titulaire d'un Bac+2 (BTS SIO), je suis passionné par le développement web.
              <strong> Je recherche activement une alternance pour la rentrée de septembre 2026</strong>.
            </p>
            <div className="hero-contact-row">
              <a href="mailto:contact@qheyblom.fr" className="btn-primary hero-mail-btn">
                <span className="hero-mail-icon">✉️</span>
                contact@qheyblom.fr
              </a>
              <div className="hero-social-links">
                <a href="https://github.com/QuentinHeyblom" target="_blank" rel="noopener noreferrer" className="hero-social-btn" title="GitHub">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/quentin-heyblom-536b8333a" target="_blank" rel="noopener noreferrer" className="hero-social-btn" title="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <div className="hero-image-modern">
              <img src="/tete/tete.jpg" alt="Photo de profil de Quentin" />
            </div>
          </motion.div>
        </section>
      </div>

      <MarqueeText text="HTML5 ✦ CSS3 ✦ JAVASCRIPT ✦ REACT ✦ NODE.JS ✦ SYMFONY ✦ SQL ✦ GIT ✦ CANVA ✦ PYTHON ✦ C#" />

      <section id="competences" className="content-section">
        <div className="section-container">
          <h2>Stacks</h2>

          <div className="creative-skills-grid">
            <div className="skill-panel">
              <div className="panel-header">
                <h3>Langages Web</h3>
              </div>
              <div className="skill-nodes">
                <TechBadge id="html" />
                <TechBadge id="css" />
                <TechBadge id="javascript" />
                <TechBadge id="php" />
                <TechBadge id="python" />
                <TechBadge id="csharp" />
              </div>
            </div>

            <div className="skill-panel">
              <div className="panel-header">
                <h3>Frameworks & Librairies</h3>
              </div>
              <div className="skill-nodes">
                <TechBadge id="react" />
                <TechBadge id="reactnative" />
                <TechBadge id="nextjs" />
                <TechBadge id="symfony" />
                <TechBadge id="nodejs" />
              </div>
            </div>

            <div className="skill-panel">
              <div className="panel-header">
                <h3>Bases de Données</h3>
              </div>
              <div className="skill-nodes">
                <TechBadge id="mysql" />
                <TechBadge id="sqlite" />
                <TechBadge id="sqlserver" />
                <TechBadge id="phpmyadmin" />
              </div>
            </div>

            <div className="skill-panel">
              <div className="panel-header">
                <h3>Outils de Développement</h3>
              </div>
              <div className="skill-nodes">
                <TechBadge id="vscode" />
                <TechBadge id="visualstudio" />
                <TechBadge id="git" />
                <TechBadge id="github" />
                <TechBadge id="gitkraken" />
                <TechBadge id="wampserver" />
                <TechBadge id="filezilla" />
                <TechBadge id="termius" />
              </div>
            </div>

            <div className="skill-panel">
              <div className="panel-header">
                <h3>Architectures & API</h3>
              </div>
              <div className="skill-nodes">
                <TechBadge id="postman" />
                <TechBadge id="httpie" />
                <TechBadge id="json" />
                <TechBadge id="jwt" />
              </div>
            </div>

            <div className="skill-panel">
              <div className="panel-header">
                <h3>Design & Productivité</h3>
              </div>
              <div className="skill-nodes">
                <TechBadge id="figma" />
                <TechBadge id="canva" />
                <TechBadge id="teams" />
                <TechBadge id="trello" />
                <TechBadge id="notion" />
                <TechBadge id="wordpress" />
              </div>
            </div>

            <div className="skill-panel">
              <div className="panel-header">
                <h3>Hébergement</h3>
              </div>
              <div className="skill-nodes">
                <TechBadge id="ionos" />
                <TechBadge id="hostinger" />
              </div>
            </div>

          </div>
        </div>
      </section>
      <section id="projets" className="content-section alternate-bg">
        <div className="section-container">
          <h2>Mes Projets</h2>

          <h3 className="category-title" style={{ marginTop: '2rem', marginBottom: '1.5rem', color: '#63b4b8', fontSize: '1.5rem' }}>
            Professionnels & Personnels
          </h3>
          <div className="projects-grid">
            {projectsData.filter(p => !p.category || p.category.toLowerCase() !== 'scolaire').length > 0 ? (
              projectsData.filter(p => !p.category || p.category.toLowerCase() !== 'scolaire').map(project => (
                <article className="project-card" key={project.id}>
                  <div className="project-image">
                    <div className="image-placeholder" style={{
                      background: project.coverBackground || '#122b30',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      padding: '1.5rem', boxSizing: 'border-box'
                    }}>
                      {project.coverImage ? (
                        <img
                          src={project.coverImage} alt={project.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', borderRadius: '10px', boxShadow: '0 10px 25px rgba(0,0,0,0.5)', transition: 'transform 0.5s ease' }}
                          className="project-cover-img"
                        />
                      ) : (
                        <span className="project-domain">{project.websiteUrl.replace('https://', '') || project.id}</span>
                      )}
                    </div>
                    <div className="project-overlay">
                      <Link to={`/projet/${project.id}`} className="btn-project">Découvrir le projet</Link>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.shortDescription}</p>
                    <div className="project-techs">
                      {project.technologies.map(tech => (
                        <TechBadge key={tech} id={tech} variant="small" />
                      ))}
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div style={{ color: '#a0aec0', fontStyle: 'italic', gridColumn: '1 / -1', textAlign: 'center', padding: '2rem' }}>
                Projets à venir...
              </div>
            )}
          </div>

          <h3 className="category-title" style={{ marginTop: '4rem', marginBottom: '1.5rem', color: '#63b4b8', fontSize: '1.5rem' }}>
            Projets Scolaires
          </h3>
          <div className="projects-grid">
            {projectsData.filter(p => p.category && p.category.toLowerCase() === 'scolaire').length > 0 ? (
              projectsData.filter(p => p.category && p.category.toLowerCase() === 'scolaire').map(project => (
                <article className="project-card" key={project.id}>
                  <div className="project-image">
                    <div className="image-placeholder" style={{
                      background: project.coverBackground || '#122b30',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      padding: '1.5rem', boxSizing: 'border-box'
                    }}>
                      {project.coverImage ? (
                        <img
                          src={project.coverImage} alt={project.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', borderRadius: '10px', boxShadow: '0 10px 25px rgba(0,0,0,0.5)', transition: 'transform 0.5s ease' }}
                          className="project-cover-img"
                        />
                      ) : (
                        <span className="project-domain">{project.websiteUrl.replace('https://', '') || project.id}</span>
                      )}
                    </div>
                    <div className="project-overlay">
                      <Link to={`/projet/${project.id}`} className="btn-project">Découvrir le projet</Link>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.shortDescription}</p>
                    <div className="project-techs">
                      {project.technologies.map(tech => (
                        <TechBadge key={tech} id={tech} variant="small" />
                      ))}
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div style={{ color: '#a0aec0', fontStyle: 'italic', gridColumn: '1 / -1', textAlign: 'center', padding: '2rem', background: 'rgba(26, 61, 68, 0.4)', borderRadius: '16px', border: '1px dashed rgba(255,255,255,0.1)' }}>
                Projets à venir...
              </div>
            )}
          </div>
        </div>
      </section>
      <section id="stages" className="content-section">
        <div className="section-container">
          <h2>Stages</h2>
          <div className="placeholder-block">
            <p>Bientôt disponible...</p>
          </div>
        </div>
      </section>
      <section id="certifs" className="content-section alternate-bg">
        <div className="section-container">
          <h2>Certifications</h2>
          <div className="placeholder-block">
            <p>Bientôt disponible...</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;
