import React from 'react';
import './Pages.css';
import myPhoto from '../assets/profile.jpg'; 
import fbIcon from '../icons/fb.jpg';
import igIcon from '../icons/instagram.jpg';
import gitIcon from '../icons/github.jpg';
import liIcon from '../icons/Linkedin.png';


function Home() {
  return (
    <section className="page home">
      <div className="home-container">
        <div className="home-content">
          <div className="profile-section">
            <div className="profile-image-wrapper">
              <img src={myPhoto} alt="Chris Jaylord Lacre" className="profile-pic" />
              <div className="profile-overlay"></div>
            </div>
          </div>
          
          <div className="intro-section">
            <div className="greeting">
              <span className="wave">👋</span>
              <h1>Hi, I'm <span className="highlight">Chris Jaylord Lacre</span></h1>
            </div>
            
            <div className="description">
              <p className="main-desc">A passionate <span className="accent">4th Year BSIT student</span> from Cebu Technological University – Danao Campus.</p>
              <p className="sub-desc">I love exploring <span className="accent">Web Development</span>, <span className="accent">IoT Systems</span>, and crafting digital solutions that make life easier.</p>
            </div>

            <div style={{ margin: '20px 0' }}>
              <a
                href={require('../assets/download.jpg')}
                download="download.jpg"
                className="download-cv-btn"
                >
                Download CV
              </a>
            </div>


            <div className="social-links">
  <a href="https://www.facebook.com/Askaberados" target="_blank" rel="noopener noreferrer" className="social-link facebook">
    <img src={fbIcon} alt="Facebook" className="social-icon-img" />
    <span className="social-text">Facebook</span>
  </a>
  <a href="https://www.instagram.com/chris.lacre" target="_blank" rel="noopener noreferrer" className="social-link instagram">
    <img src={igIcon} alt="Instagram" className="social-icon-img" />
    <span className="social-text">Instagram</span>
  </a>
  <a href="https://github.com/chrisjqt" target="_blank" rel="noopener noreferrer" className="social-link github">
    <img src={gitIcon} alt="GitHub" className="social-icon-img" />
    <span className="social-text">GitHub</span>
  </a>
  <a href="https://www.linkedin.com/in/chris-lacre-b4898829a" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
    <img src={liIcon} alt="LinkedIn" className="social-icon-img" />
    <span className="social-text">LinkedIn</span>
  </a>
</div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
