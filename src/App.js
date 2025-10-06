import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <section id="home" className="section home-section">
        <h1>Hi, I’m Chris Jaylord Lacre 👋</h1>
        <p>A 4th Year BSIT Student passionate about building creative digital solutions.</p>
      </section>

      <section id="about" className="section about-section">
        <h2>About Me</h2>
        <p>
          I’m a student developer who enjoys exploring web development, IoT systems,
          and modern technologies. I aim to design systems that improve everyday life.
        </p>
      </section>

      <section id="projects" className="section projects-section">
        <h2>My Projects</h2>
        <ul>
          <li>💻 Barangay Complaint and Feedback System</li>
          <li>📱 Watch Shop React Native App</li>
          <li>🌐 Centralized Digital Bulletin System</li>
        </ul>
      </section>

      <section id="contact" className="section contact-section">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:chrislacre@example.com">chrisejaylord@gmail.com</a></p>
        <p>Facebook: <a href="https://www.facebook.com/Askaberados" target="_blank" rel="noopener noreferrer">Chris Jaylord Lacre</a></p>
      </section>
    </div>
  );
}

export default App;
