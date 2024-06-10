import React from 'react';
import './project.css';
import { Link as ScrollLink } from 'react-scroll';
import RSP from "../../assets/RPS.jpg";
import bday from "../../assets/bday.jpg";
import tdl from "../../assets/tdl.jpg";
import goprep from "../../assets/goprep.jpg";
import github from "../../assets/github1.png";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="title">Personal Projects</h2>
      <div className="project-cards">
        <div className="project-card">
          <div className="project-info">
            <h3>My Portfolio</h3>
            <p>This is my Portfolio website that helps others know about me and my works.</p>
            
          </div>
          <a href="https://www.w3schools.com" >Visit W3Schools.com!</a>
          <img src="" alt='Image' className='img'></img>
          <div className="project-links">
            <a href="https://github.com/yourusername/your-portfolio" target="_blank" rel="noopener noreferrer">
              <img src={github} className='refimg' alt='GitHub' />
            </a>
            <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </div>
        </div>
        <div className="project-card">
          <div className="project-info">
            <h3>GoPrep</h3>
            <p>An ed-tech website where teachers can upload courses and students can purchase them.</p>
          </div>
          <img src={goprep} alt="" className='img'></img>
          <div className="project-links">
            <a href="https://github.com/yourusername/goprep" >
              <img src={github} className='refimg' alt='GitHub' />
            </a>
            <a href="https://goprep.com" >
              Live Demo
            </a>
          </div>
        </div>
        <div className="project-card">
          <div className="project-info">
            <h3>To-Do List Website</h3>
            <p>Designed and developed an interactive ToDo List website, offering seamless task management through dynamic addition and deletion features.</p>
          </div>
          <img src={tdl} alt="" className='img'></img>
          <div className="project-links">
            <a href="https://ishikagoyal02.github.io/To-Do-List/">
              Live Demo
            </a>
            <a href="https://github.com/ishikagoyal02/To-Do-List" >
              <img src={github} className='refimg' alt='GitHub' />
            </a>
          </div>
        </div>
        <div className="project-card">
          <div className="project-info">
            <h3>Online Wish Card</h3>
            <p>The website offers a personalized and interactive experience for users to celebrate their loved one’s special day. It features beautiful designs, customizable messages, and an intuitive interface, providing a unique way to express birthday greetings.</p>
          </div>
          <img src={bday} alt="" className='img'></img>
          <div className="project-links">
            <a href="https://my-works-xi.vercel.app/birthday.html" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
            <a href="https://github.com/ishikagoyal02/MyWorks" target="_blank" rel="noopener noreferrer">
              <img src={github} className='refimg' alt='GitHub' />
            </a>
          </div>
        </div>
        <div className="project-card">
          <div className="project-info">
            <h3>Rock Paper Scissors Game</h3>
            <p>This is a simple implementation of the classic Rock, Paper, Scissors game. The game allows users to play against the computer and see the results on the screen.</p>
          </div>
          <img src={RSP} alt="" className='img'></img>
          <div className="project-links">
            <a href="https://ishikagoyal02.github.io/RockPaperScissors/" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
            <a href="https://github.com/ishikagoyal02/RockPaperScissors" target="_blank" rel="noopener noreferrer">
              <img src={github} className='refimg' alt='GitHub' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
