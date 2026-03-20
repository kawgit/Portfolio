import { useEffect, useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  Code2,
  Terminal,
  Cpu,
  BrainCircuit,
  Database,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import './App.css';
import pfp from './assets/pfp.png';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'projects', 'skills'];
      const scrollY = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop - 200 && scrollY < offsetTop + offsetHeight - 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-container">
      {/* Background Elements */}
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
      <div className="bg-noise"></div>

      {/* Navigation */}
      <nav className="glass-nav">
        <div className="nav-content">
          <a href="#home" className="logo">KW.</a>
          <ul className="nav-links">
            <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
            <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a></li>
            <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
            <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills & Edu</a></li>
          </ul>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <div className="greeting">Hi, I'm</div>
              <h1 className="name gradient-text">Kenneth Wilber</h1>
              <h2 className="title">Software Engineer & AI Researcher</h2>
              <p className="description">
                Computer Science student at Boston University specializing in ML/AI, Computer Vision, and distributed systems. Passionate about building intelligent systems and solving complex computational problems.
              </p>

              <div className="contact-info">
                <span className="contact-item">
                  <MapPin size={18} /> Greenwich, CT
                </span>
                <span className="contact-item">
                  <Mail size={18} /> kawgit56@gmail.com
                </span>
                <span className="contact-item">
                  203-564-6079
                </span>
              </div>

              <div className="social-links">
                <a href="https://github.com/kawgit" target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
                  <Github size={22} />
                </a>
                <a href="https://linkedin.com/in/kenneth-wilber" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
                  <Linkedin size={22} />
                </a>
                <a href="mailto:kawgit56@gmail.com" className="social-btn primary-btn">
                  Get in Touch
                </a>
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="social-btn secondary-btn">
                  View Resume
                </a>
              </div>
            </div>

            <div className="hero-image-container">
              <div className="image-wrapper glass-panel">
                <img src={pfp} alt="Kenneth Wilber" className="profile-img" />
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section">
          <div className="section-header">
            <Briefcase className="section-icon" />
            <h2 className="section-title">Experience</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item glass-panel card-hover">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Apr 2024 - Aug 2025 (two summers)</div>
              <div className="timeline-content">
                <h3>DragonGC</h3>
                <h4>Software Engineering Summer Intern</h4>
                <p className="location">Greenwich, CT</p>
                <ul>
                  <li>Built and scaled <strong>distributed, AI-powered pipelines</strong> to process SEC filings (10-K, 10-Q, S-1, etc.) into structured, searchable data using LLM-driven NLP parsing.</li>
                  <li>Strengthened platform reliability by developing <strong>end-to-end automated tests</strong> that measured error rates and reduced tagging errors through custom heuristics.</li>
                </ul>
                <div className="tech-tags">
                  <span>Distributed Systems</span>
                  <span>LLM</span>
                  <span>NLP</span>
                  <span>Automated Testing</span>
                </div>
              </div>
            </div>

            <div className="timeline-item glass-panel card-hover">
              <div className="timeline-dot"></div>
              <div className="timeline-date">May 2022 - Aug 2023 (two summers)</div>
              <div className="timeline-content">
                <h3>Chess.com</h3>
                <h4>Software Engineering Summer Intern</h4>
                <p className="location">Remote</p>
                <ul>
                  <li><strong>Optimized the world's 2nd strongest chess engine</strong> (Torch) by designing sparse neural network inference improvements, boosting speed by 20% and drastically cutting scaling costs.</li>
                  <li><strong>Built core C++ modules</strong> for the AI Chess Coach to detect advanced board patterns, serving tens of millions of players worldwide.</li>
                </ul>
                <div className="tech-tags">
                  <span>C++</span>
                  <span>Neural Networks</span>
                  <span>Performance Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <div className="section-header">
            <Code2 className="section-icon" />
            <h2 className="section-title">Featured Projects</h2>
          </div>

          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card glass-panel card-hover">
              <div className="project-header">
                <div className="project-icon-bg">
                  <BrainCircuit className="project-icon" size={24} />
                </div>
                <div className="project-links">
                  <a href="https://github.com/kawgit/Athena" target="_blank" rel="noreferrer" aria-label="GitHub Source">
                    <Github size={20} />
                  </a>
                </div>
              </div>
              <h3 className="project-title">Small Language Model</h3>
              <p className="project-desc">
                Developed a custom transformer-based language model from scratch with PyTorch, trained on Harry Potter and Fineweb-Edu. Features a BPE tokenizer with a novel deduplication scheme, new architectures including GQA sliding window attention, and Muon-inspired optimizer algorithm changes that cut training time by half.
              </p>
              <div className="tech-tags">
                <span>Python</span>
                <span>PyTorch</span>
                <span>W&B</span>
                <span>HuggingFace</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card glass-panel card-hover">
              <div className="project-header">
                <div className="project-icon-bg">
                  <Terminal className="project-icon" size={24} />
                </div>
                <div className="project-links">
                  <a href="https://github.com/kawgit/Vision-Chess" target="_blank" rel="noreferrer" aria-label="GitHub Source">
                    <Github size={20} />
                  </a>
                  <a href="https://kawgit.github.io/Vision-JS/index.html" target="_blank" rel="noreferrer" aria-label="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <h3 className="project-title">Chess Engine</h3>
              <p className="project-desc">
                Lightweight chess engine utilizing bitboards, alpha-beta pruning, and selective search heuristics in C++, along with a simplified JS version featuring a web interface.
              </p>
              <div className="tech-tags">
                <span>C++</span>
                <span>JavaScript</span>
                <span>CMake</span>
                <span>Algorithms</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card glass-panel card-hover">
              <div className="project-header">
                <div className="project-icon-bg">
                  <Database className="project-icon" size={24} />
                </div>
                <div className="project-links">
                  <a href="https://github.com/kawgit/slam" target="_blank" rel="noreferrer" aria-label="GitHub Source">
                    <Github size={20} />
                  </a>
                </div>
              </div>
              <h3 className="project-title">Video-Based Point Cloud</h3>
              <p className="project-desc">
                Implemented a computer vision pipeline to reconstruct 3D point clouds directly from raw video footage using robust feature tracking algorithms.
              </p>
              <div className="tech-tags">
                <span>Python</span>
                <span>OpenCV</span>
                <span>Computer Vision</span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="project-card glass-panel card-hover">
              <div className="project-header">
                <div className="project-icon-bg">
                  <Cpu className="project-icon" size={24} />
                </div>
                <div className="project-links">
                  <a href="https://github.com/kawgit/3D-Model-Renderer" target="_blank" rel="noreferrer" aria-label="GitHub Source">
                    <Github size={20} />
                  </a>
                  <a href="https://kawgit.github.io/3D-Model-Renderer/index.html" target="_blank" rel="noreferrer" aria-label="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <h3 className="project-title">3D Model Renderer</h3>
              <p className="project-desc">
                Built a 3D graphics renderer entirely from scratch by rasterizing triangles directly to the screen utilizing low-level math without external rendering libraries.
              </p>
              <div className="tech-tags">
                <span>JavaScript</span>
                <span>Linear Algebra</span>
                <span>Graphics</span>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Skills Section */}
        <section id="skills" className="section split-section">
          {/* Education */}
          <div className="edu-col">
            <div className="section-header">
              <GraduationCap className="section-icon" />
              <h2 className="section-title">Education</h2>
            </div>

            <div className="edu-card glass-panel card-hover">
              <div className="edu-header">
                <h3>Boston University</h3>
                <span className="edu-date">Expected May 2027</span>
              </div>
              <p className="degree">Bachelor of Arts in Computer Science</p>
              <p className="gpa">GPA: 3.8</p>
            </div>

            <div className="edu-card glass-panel card-hover">
              <div className="edu-header">
                <h3>Case Western Reserve</h3>
                <span className="edu-date">Transferred</span>
              </div>
              <p className="degree">Bachelor of Science in Computer Science</p>
              <p className="gpa">GPA: 3.9</p>
            </div>
          </div>

          {/* Skills */}
          <div className="skills-col">
            <div className="section-header">
              <Cpu className="section-icon" />
              <h2 className="section-title">Technical Skills</h2>
            </div>

            <div className="skills-grid">
              <div className="skill-category glass-panel">
                <h4>Languages</h4>
                <p>Python, TypeScript, C++, Java, SQL, Svelte, Node.js, Bash</p>
              </div>

              <div className="skill-category glass-panel">
                <h4>ML & AI</h4>
                <p>Machine Learning, Deep Learning, NLP, Computer Vision, Distributed Systems, Clustering</p>
              </div>

              <div className="skill-category glass-panel">
                <h4>Libraries & Tools</h4>
                <p>PyTorch, NumPy, OpenCV, Linux, Docker, Git, W&B, Vercel, VS Code</p>
              </div>

              <div className="skill-category glass-panel">
                <h4>Other</h4>
                <p>Data Visualization, Statistics, Linear Algebra, GPU Acceleration (CUDA, MPS)</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Kenneth Wilber. Designed and built with React.</p>
        <div className="footer-links">
          <a href="https://kennethwilber.us" target="_blank" rel="noreferrer">Website</a>
          <span className="divider">|</span>
          <a href="https://github.com/kawgit" target="_blank" rel="noreferrer">GitHub</a>
          <span className="divider">|</span>
          <a href="https://linkedin.com/in/kenneth-wilber" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
