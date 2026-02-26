import '../style/Accueil.css';

const Accueil = () => {
  return (
    <div className="accueil-container">
      {/* Présentation */}
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

      {/* Stacks */}
      <section id="competences" className="content-section">
        <div className="section-container">
          <h2>Stacks & Compétences</h2>
          <div className="placeholder-block">
            <p>Lorem ipsum</p>
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