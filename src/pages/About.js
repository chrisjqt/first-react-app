import React, { useState } from 'react';
import './Pages.css';

// Import icons
import htmlIcon from '../icons/html.jpg'; 
import cssIcon from '../icons/css - Copy.png';
import jsIcon from '../icons/js.png';
import tsIcon from '../icons/typescript.png';
import reactIcon from '../icons/React.png';
import javaIcon from '../icons/Java_programming_language_logo.svg.png';
import phpIcon from '../icons/php.png';
import laravelIcon from '../icons/Laravel.svg.png';
import mysqlIcon from '../icons/mysql.png';
import databaseIcon from '../icons/database - Copy.jpg';
import gitIcon from '../icons/Git.png';
import vscodeIcon from '../icons/vscode.jpg';
import githubIcon from '../icons/github.jpg';

function About() {
  const [activeTab, setActiveTab] = useState('frontend');
  return (
    <section className="page about">
      <h2>About Me</h2>
      <p>
        I'm currently a BSIT 4th-year student who enjoys designing and developing creative web applications.
        My passion lies in combining design and functionality to produce efficient and user-friendly systems.
      </p>
      <p>
        I specialize in front-end development, system design, and database-driven projects using modern web technologies.
      </p>

      {/* Simple Skills Section */}
      <div className="about-simple-section">
        <h3>My Learning Journey</h3>
        <div className="journey-cards">
          <div className="journey-card">
            <div className="journey-year">2022</div>
            <h4>Foundation Year</h4>
            <p>Started my programming journey with the fundamentals</p>
            <div className="journey-skills">
              <span className="skill-badge">HTML</span>
              <span className="skill-badge">CSS</span>
              <span className="skill-badge">C</span>
              <span className="skill-badge">Java</span>
            </div>
          </div>

          <div className="journey-card">
            <div className="journey-year">2023</div>
            <h4>Backend Development</h4>
            <p>Dived into server-side development and database management</p>
            <div className="journey-skills">
              <span className="skill-badge">PHP</span>
              <span className="skill-badge">Laravel</span>
              <span className="skill-badge">MySQL</span>
              <span className="skill-badge">Database Design</span>
            </div>
          </div>

          <div className="journey-card">
            <div className="journey-year">2024 - Present</div>
            <h4>Modern Frontend</h4>
            <p>Embracing modern JavaScript ecosystem and React development</p>
            <div className="journey-skills">
              <span className="skill-badge">JavaScript</span>
              <span className="skill-badge">TypeScript</span>
              <span className="skill-badge">React</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stacks & Skills with Tabs */}
      <div className="about-simple-section">
        <h3>Core Technologies</h3>
        
        {/* Tab Navigation */}
        <div className="skills-tabs">
          <button 
            className={`tab-button ${activeTab === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveTab('frontend')}
          >
            Frontend
          </button>
          <button 
            className={`tab-button ${activeTab === 'backend' ? 'active' : ''}`}
            onClick={() => setActiveTab('backend')}
          >
            Backend
          </button>
          <button 
            className={`tab-button ${activeTab === 'tools' ? 'active' : ''}`}
            onClick={() => setActiveTab('tools')}
          >
            Tools
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'frontend' && (
            <div className="skills-category-section">
              <h4>Frontend Development</h4>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-logo">
                    <img src={htmlIcon} alt="HTML" className="skill-icon" />
                  </div>
                  <span className="skill-name">HTML</span>
                </div>
                <div className="skill-item">
                  <div className="skill-logo">
                    <img src={cssIcon} alt="CSS" className="skill-icon" />
                  </div>
                  <span className="skill-name">CSS</span>
                </div>
                <div className="skill-item">
                  <div className="skill-logo">
                    <img src={jsIcon} alt="JavaScript" className="skill-icon" />
                  </div>
                  <span className="skill-name">JavaScript</span>
                </div>
                <div className="skill-item">
                  <div className="skill-logo">
                    <img src={tsIcon} alt="TypeScript" className="skill-icon" />
                  </div>
                  <span className="skill-name">TypeScript</span>
                </div>
                <div className="skill-item">
                  <div className="skill-logo">
                    <img src={reactIcon} alt="React" className="skill-icon" />
                  </div>
                  <span className="skill-name">React</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'backend' && (
            <div className="skills-category-section">
              <h4>Backend Development</h4>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-logo">
                    <img src={javaIcon} alt="Java" className="skill-icon" />
                  </div>
                  <span className="skill-name">Java</span>
                </div>
                <div className="skill-item">
                  <div className="skill-logo">
                    <img src={phpIcon} alt="PHP" className="skill-icon" />
                  </div>
                  <span className="skill-name">PHP</span>
                </div>
                <div className="skill-item">
                  <div className="skill-logo">
                    <img src={laravelIcon} alt="Laravel" className="skill-icon" />
                  </div>
                  <span className="skill-name">Laravel</span>
                </div>
                <div className="skill-item">
                  <div className="skill-logo">
                    <img src={mysqlIcon} alt="MySQL" className="skill-icon" />
                  </div>
                  <span className="skill-name">MySQL</span>
                </div>
                <div className="skill-item">
                  <div className="skill-logo">
                    <img src={databaseIcon} alt="Database Design" className="skill-icon" />
                  </div>
                  <span className="skill-name">Database Design</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tools' && (
            <div className="skills-category-section">
              <h4>Tools & Technologies</h4>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-logo">
                    <img src={gitIcon} alt="Git" className="skill-icon" />
                  </div>
                  <span className="skill-name">Git</span>
                </div>
                <div className="skill-item">
                  <div className="skill-logo">
                    <img src={vscodeIcon} alt="VS Code" className="skill-icon" />
                  </div>
                  <span className="skill-name">VS Code</span>
                </div>
                <div className="skill-item">
                  <div className="skill-logo">
                    <img src={githubIcon} alt="GitHub" className="skill-icon" />
                  </div>
                  <span className="skill-name">GitHub</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default About;
