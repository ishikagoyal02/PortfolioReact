import React, { useEffect, useState } from "react";
import './project.css';
import { Link } from 'react-scroll';
import RSP from "../../assets/RPS.jpg";
import bday from "../../assets/bday.jpg";
import tdl from "../../assets/tdl.jpg";
import goprep from "../../assets/goprep.jpg";
import github from "../../assets/github1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {

  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSettings({
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        });
      } else {
        setSettings({
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1
        });
      }
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="projects" id="projects">
    <h2 className="title">Personal Projects</h2>
    <div className="project-cards">
      <Slider {...settings}>

        <div className="project-card">
          <img src="" alt='Image' className='img'></img>
          <div className="project-info">
          <div className="project-links">
            <h3><a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer">My Portfolio</a></h3>
            <a href="https://github.com/yourusername/your-portfolio" target="_blank" rel="noopener noreferrer">
              <img src={github} className='refimg' alt='GitHub' />
            </a>
           </div>
         <p>This is my Portfolio website that helps others know about me and my works.</p>
          </div>
         
        </div>

        <div className="project-card">
          <img src={goprep} alt="" className='img'></img>
          <div className="project-info">
            <h3><a href="https://goprep.com" target="_blank" rel="noopener noreferrer">GoPrep</a></h3>
            <div className="project-links">
            <a href="https://github.com/yourusername/goprep" target="_blank" rel="noopener noreferrer">
              <img src={github} className='refimg' alt='GitHub' />
            </a>
          </div><p>An ed-tech website where teachers can upload courses and students can purchase them.</p>
          </div>
          
        </div>
        <div className="project-card">
          <img src={tdl} alt="" className='img'></img>
          <div className="project-info">
            <h3><a href="https://ishikagoyal02.github.io/To-Do-List/" target="_blank" rel="noopener noreferrer">To-Do List Website</a></h3>
            <div className="project-links">
            <a href="https://github.com/ishikagoyal02/To-Do-List" target="_blank" rel="noopener noreferrer">
              <img src={github} className='refimg' alt='GitHub' />
            </a>
          </div><p>Designed and developed an interactive ToDo List website, offering seamless task management through dynamic addition and deletion features.</p>
          </div>
          
        </div>
        <div className="project-card">
          <img src={bday} alt="" className='img'></img>
          <div className="project-info">
            <h3><a href="https://my-works-xi.vercel.app/birthday.html" target="_blank" rel="noopener noreferrer className">Online Wish Card</a></h3>
            <div className="project-links">
            <a href="https://github.com/ishikagoyal02/MyWorks" target="_blank" rel="noopener noreferrer">
              <img src={github} className='refimg' alt='GitHub' />
            </a>
          </div><p>It features beautiful designs, customizable messages, and an intuitive interface, providing a unique way to express birthday greetings.</p>
          </div>
          
        </div>
        <div className="project-card">
          <img src={RSP} alt="" className='img'></img>
          <div className="project-info">
        
            <h3><a href="https://ishikagoyal02.github.io/RockPaperScissors/" target="_blank" rel="noopener noreferrer">Rock Paper Scissors Game</a></h3>
            <div className="project-links">
            <a href="https://github.com/ishikagoyal02/RockPaperScissors" target="_blank" rel="noopener noreferrer">
              <img src={github} className='refimg' alt='GitHub' />
            </a></div>
            <p>The game allows users to play against the computer and see the results on the screen.</p>
          
          
          </div>
        </div>
      </Slider>
    </div>
  </section>
  );
}

export default Projects;
