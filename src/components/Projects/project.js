import React from 'react';
import './project.css';
import { Link } from 'react-scroll';
import RSP from "../../assets/RPS.jpg";
import bday from "../../assets/bday.jpg";
import tdl from "../../assets/tdl.jpg";
import goprep from "../../assets/goprep.jpg";

const Projects = () => {
  return (
    <Link to="link" smooth={true} duration={1000}>
    <section className="projects" id="projects">
      <h2 className="title">Personal Projects</h2>
      <div className="project-cards">
      <div className="project-card">
          <div className="project-info">
            <h3>My Portfolio</h3>
            <p>This is my Portfolio website that helps others know about me and my works.</p>
          </div>
          <img src="" alt='Image' className='img'></img>
          <div className="project-links">
            <a href="https://github.com/yourusername/your-portfolio" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>
        <div className="project-card">
          <div className="project-info">
            <h3>GoPrep</h3>
            <p>An ed-tech website where teachers can upload courses and students can purchase them.</p>
          </div>
          <img src={goprep} alt="" className='img'></img>
          <div className="project-links">
            <a href="https://github.com/yourusername/goprep" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://goprep.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>
     
        <div className="project-card">
          <div className="project-info">
            <h3>To-Do List Website</h3>
            <p>Designed and developed an interactive ToDo List website, offering seamless task management through dynamic addition and deletion features.</p>
            <img src={tdl} alt="" className='img'></img>
            <div className="project-links">
              <a href="https://ishikagoyal02.github.io/To-Do-List/" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href="https://github.com/ishikagoyal02/To-Do-List" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-info">
            <h3>Online Wish Card</h3>
            <p>The website offers a personalized and interactive experience for users to celebrate their loved one’s special day. It features beautiful designs, customizable messages, and an intuitive interface, providing a unique way to express birthday greetings.</p>
            <img src={bday} alt="" className='img'></img>
            <div className="project-links">
              <a href="https://my-works-xi.vercel.app/birthday.html" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href="https://github.com/ishikagoyal02/MyWorks" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-info">
            <h3>Rock Paper Scissors Game</h3>
            <p>This is a simple implementation of the classic Rock, Paper, Scissors game. The game allows users to play against the computer and see the results on the screen.</p>
              <img src={RSP} alt="" className='img'></img>
            <div className="project-links">
              <a href="https://ishikagoyal02.github.io/RockPaperScissors/" target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href="https://github.com/ishikagoyal02/RockPaperScissors" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Link>
  );
}

export default Projects;
