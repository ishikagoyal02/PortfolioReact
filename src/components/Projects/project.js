import React from 'react';
import './project.css';
import { Link as ScrollLink } from 'react-scroll';
import RSP from "../../assets/RPS.jpg";
import bday from "../../assets/bday.jpg";
import tdl from "../../assets/tdl.jpg";
import goprep from "../../assets/goprep.jpg";
import github from "../../assets/github1.png";
import port from "../../assets/port.jpg";

const projects = [
  {
    name: "My Portfolio",
    link: "https://ishikaportfolio-ishikagoyal02s-projects.vercel.app/",
    github: "https://github.com/ishikagoyal02/PortfolioReact",
    image: port,
    description: "This is my Portfolio website that helps others know about me and my works."
  },
  {
    name: "GoPrep",
    link: "https://goprep.com",
    github: "https://github.com/yourusername/goprep",
    image: goprep,
    description: "An ed-tech website where teachers can upload courses and students can purchase them."
  },
  {
    name: "To-Do List Website",
    link: "https://ishikagoyal02.github.io/To-Do-List/",
    github: "https://github.com/ishikagoyal02/To-Do-List",
    image: tdl,
    description: "Designed and developed an interactive ToDo List website, offering seamless task management through dynamic addition and deletion features."
  },
  {
    name: "Online Wish Card",
    link: "https://my-works-xi.vercel.app/birthday.html",
    github: "https://github.com/ishikagoyal02/MyWorks",
    image: bday,
    description: "It features beautiful designs, customizable messages, and an intuitive interface, providing a unique way to express birthday greetings."
  },
  {
    name: "Rock Paper Scissors Game",
    link: "https://ishikagoyal02.github.io/RockPaperScissors/",
    github: "https://github.com/ishikagoyal02/RockPaperScissors",
    image: RSP,
    description: "This is a simple implementation of the classic Rock, Paper, Scissors game. The game allows users to play against the computer and see the results on the screen."
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="title">Personal Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt='Project' className='img'></img>
            <div className="project-info">
              <h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">{project.name}</a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                  <img src={github} className='refimg' alt='GitHub' />
                </a>
              </h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
