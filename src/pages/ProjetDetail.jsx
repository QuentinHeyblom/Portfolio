import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectById } from '../data/projects';
import TechBadge from '../components/TechBadge/TechBadge';
import '../style/ProjetDetail.css';

const ProjetDetail = () => {
    const { id } = useParams();
    const project = getProjectById(id);

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Rassembler toutes les images dans un seul tableau pour faciliter la navigation
    const allImages = React.useMemo(() => {
        if (!project) return [];
        return [...(project.galleryImages || []), ...(project.adminImages || [])];
    }, [project]);

    // Remonter en haut de la page au chargement
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const openLightbox = (imgSrc) => {
        const index = allImages.indexOf(imgSrc);
        if (index !== -1) {
            setCurrentImageIndex(index);
            setLightboxOpen(true);
            document.body.style.overflow = 'hidden'; // Empêcher le scroll du fond
        }
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = 'auto'; // Réactiver le scroll
    };

    const nextImage = (e) => {
        e.stopPropagation(); // Évite de fermer la lightbox en cliquant sur le bouton
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % allImages.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + allImages.length) % allImages.length);
    };

    // Gestion du clavier (Echap, flèches)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!lightboxOpen) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage(e);
            if (e.key === 'ArrowLeft') prevImage(e);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, allImages.length]);

    if (!project) {
        return (
            <div className="projet-not-found">
                <h2>Projet introuvable</h2>
                <Link to="/" className="btn-primary">Retour à l'accueil</Link>
            </div>
        );
    }

    return (
        <div className="projet-detail-container">
            <section className="projet-hero" style={{ background: project.coverBackground || '#122b30' }}>
                <div className="hero-overlay">
                    <Link to="/#projets" className="back-link">
                        <span className="arrow">←</span> Retour aux projets
                    </Link>
                    <div className="hero-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap-reverse', gap: '3rem' }}>
                        <div style={{ flex: '1 1 400px' }}>
                            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.2' }}>{project.title}</h1>
                            <div className="projet-tags" style={{ marginTop: '1.5rem' }}>
                                {project.technologies.slice(0, 6).map(tech => (
                                    <TechBadge key={tech} id={tech} variant="small" />
                                ))}
                            </div>
                        </div>
                        {project.coverImage && (
                            <div style={{ flex: '1 1 500px', display: 'flex', justifyContent: 'flex-end' }}>
                                <img 
                                    src={project.coverImage} 
                                    alt={`Aperçu ${project.title}`} 
                                    style={{ 
                                        width: '100%', 
                                        height: 'auto', 
                                        maxHeight: '400px',
                                        objectFit: 'contain', 
                                        borderRadius: '16px', 
                                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                                        border: '1px solid rgba(255,255,255,0.05)'
                                    }} 
                                />
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <section className="projet-content-section">
                <div className="section-container">

                    <div className="projet-layout">
            <div className="projet-main-column">
                            <h2>À propos du projet</h2>
                            <div className="projet-description">
                                {project.fullDescription.split('\n').map((paragraph, idx) => (
                                    paragraph.trim() && <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
            <div className="projet-galleries-container">
            {project.galleryImages && project.galleryImages.length > 0 && (
                                    <div className="projet-gallery">
                                        <h3>Aperçus du site</h3>
                                        <div className="gallery-grid">
                                            {project.galleryImages.map((img, idx) => (
                                                <img 
                                                    key={`public_${idx}`} 
                                                    src={img} 
                                                    alt={`Aperçu public ${idx + 1}`} 
                                                    className="gallery-image clickable" 
                                                    onClick={() => openLightbox(img)}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}
            {project.adminImages && project.adminImages.length > 0 && (
                                    <div className="projet-gallery admin-gallery">
                                        <h3>Interface d'Administration</h3>
                                        <div className="gallery-grid">
                                            {project.adminImages.map((img, idx) => (
                                                <img 
                                                    key={`admin_${idx}`} 
                                                    src={img} 
                                                    alt={`Aperçu admin ${idx + 1}`} 
                                                    className="gallery-image clickable" 
                                                    onClick={() => openLightbox(img)}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}
            {(!project.galleryImages || project.galleryImages.length === 0) && (!project.adminImages || project.adminImages.length === 0) && (
                                    <div className="projet-gallery">
                                        <h3>Aperçus</h3>
                                        <div className="media-placeholder">
                                            <span>(Emplacement pour de futures images ou vidéos)</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
            <div className="projet-sidebar">

                            <div className="sidebar-box">
                                <h3>Informations</h3>
                                <ul className="info-list">
                                    {project.role && <li><strong>Rôle :</strong> {project.role}</li>}
                                    {project.client && <li><strong>Client :</strong> {project.client}</li>}
                                    {project.duration && <li><strong>Durée :</strong> {project.duration}</li>}
                                </ul>

                                <div className="action-links">
                                    {project.websiteUrl && (
                                        <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="btn-primary full-width">
                                            Visiter le site
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary full-width">
                                            Code Source
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="sidebar-box">
                                <h3>Technologies (Stacks)</h3>
                                <div className="techs-grid">
                                    {project.technologies.map(tech => (
                                        <TechBadge key={tech} id={tech} variant="small" />
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            {lightboxOpen && allImages.length > 0 && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox}>×</button>
                    
                    {allImages.length > 1 && (
                        <button className="lightbox-nav prev" onClick={prevImage}>&#10094;</button>
                    )}
                    
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img 
                            src={allImages[currentImageIndex]} 
                            alt={`Image ${currentImageIndex + 1}`} 
                            key={currentImageIndex} // Force un re-render de l'image pour relancer une éventuelle animation
                        />
                        <div className="lightbox-counter">
                            {currentImageIndex + 1} / {allImages.length}
                        </div>
                    </div>

                    {allImages.length > 1 && (
                        <button className="lightbox-nav next" onClick={nextImage}>&#10095;</button>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProjetDetail;

