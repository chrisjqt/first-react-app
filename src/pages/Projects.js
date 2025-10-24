import React, { useState } from 'react';
import './Pages.css';
import projectImage1 from '../assets/download.jpg';
import projectImage2 from '../assets/download (1).jpg';
import projectImage3 from '../assets/expense/analytics.jpg';
import projectImage4 from '../assets/expense/dashboard.jpg';
import projectImage5 from '../assets/expense/transactions.jpg';
import projectImage6 from '../assets/centralized/home.jpg';
import projectImage7 from '../assets/centralized/home1.jpg';
import projectImage8 from '../assets/centralized/memo.jpg';
import projectImage9 from '../assets/centralized/news.jpg';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Expense Tracker",
      description: "A smart system designed to record and monitor income and expenses, helping users manage their budget efficiently through automated tracking and detailed financial reports.",
      images: [
        projectImage3,
        projectImage4,
        projectImage5
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      status: "In development"
    },
    {
      id: 2,
      title: "Centralized Digital Portal for University News and Updates",
      description: "A digital platform that centralizes school news, announcements, and memorandums, ensuring fast, organized, and accessible information sharing between administrators, teachers, and students.",
      images: [
        projectImage6,
        projectImage7,
        projectImage8,
        projectImage9
      ],
      technologies: ["React", "TypeScript", "MongoDB", "Database Design"],
      status: "In development"
    },
    {
      id: 3,
      title: "Inventory Management System",
      description: "A streamlined system for tracking, organizing, and managing product stocks, ensuring accurate inventory levels, efficient restocking, and reduced losses through real-time monitoring.",
      images: [
        projectImage1,
        projectImage2
      ],
      technologies: ["Laravel", "Php", "Blade", "Responsive Design"],
      status: "In development"
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        (prev + 1) % selectedProject.images.length
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        (prev - 1 + selectedProject.images.length) % selectedProject.images.length
      );
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="page projects">
      <h2>My Projects</h2>
      <p>Here are some of the projects I've worked on during my BSIT journey</p>

      {/* Simple Project Grid */}
      <div className="projects-simple-grid">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="project-simple-card"
            onClick={() => openModal(project)}
          >
            <div className="project-image-wrapper">
              <img src={project.images[0]} alt={project.title} className="project-simple-image" />
              <div className="project-status">{project.status}</div>
            </div>
            <div className="project-simple-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-content">
              <div className="modal-image-container">
                <img 
                  src={selectedProject.images[currentImageIndex]} 
                  alt={selectedProject.title} 
                  className="modal-image"
                />
                
                {selectedProject.images.length > 1 && (
                  <>
                    <button className="modal-nav prev" onClick={prevImage}>
                      ‹
                    </button>
                    <button className="modal-nav next" onClick={nextImage}>
                      ›
                    </button>
                    
                    <div className="modal-dots">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          className={`modal-dot ${index === currentImageIndex ? 'active' : ''}`}
                          onClick={() => goToImage(index)}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              
              <div className="modal-info">
                <h3>{selectedProject.title}</h3>
                <p>{selectedProject.description}</p>
                
                <div className="modal-technologies">
                  <h4>Technologies:</h4>
                  <div className="tech-tags">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="modal-status">
                  <span className="status-badge">{selectedProject.status}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
