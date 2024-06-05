import React from "react";
import './experience.css';
import { Link } from "react-scroll";



const Experience = () => {
  return (
    <Link to="education" smooth={true} duration={1000}>
    <section className="experience" id="experience">
      <div className="title"><span>My Experience</span></div>
      <div className="text"><span>Experience is the teacher of all things.</span></div>
      <div className="experience-boxes">
        <div className="box">
          <i className="fas fa-award"></i>
          <span className="duration">June 2024 - Present</span>
          <h3 className="wow animate__animated animate__lightSpeedInLeft" data-wow-offset="190">Engineer Trainee at <a href="https://www.aryaka.com/" target="_blank" rel="noreferrer">Aryaka Network</a></h3>
          <ul>
            <li>Aryaka Networks is a global SD-WAN provider that has simplified networking and IT infrastructure management with a converged software-defined solution for both branch offices and data centers.</li>
            <li>Working on network optimization solutions.</li>
            <li>Collaborating with a team of software engineers.</li>
            <li>Implementing new features and fixing bugs.</li>
          </ul>
        </div>
        <div className="box">
          <i className="fas fa-award"></i>
          <span className="duration">May 2023 - July 2024</span>
          <h3 className="wow animate__animated animate__lightSpeedInLeft" data-wow-offset="190">GirlScript Summer of Code (Open Source Contributor)</h3>
          <ul>
            <li>Contributed to multiple open-source projects.</li>
            <li>Enhanced my skills in front-end development.</li>
            <li>Collaborated with other developers worldwide.</li>
            <li>Tech Stacks: HTML, CSS, JavaScript, GitHub</li>
          </ul>
        </div>
        <div className="box">
          <i className="fas fa-award"></i>
          <span className="duration">Oct 2022</span>
          <h3 className="wow animate__animated animate__lightSpeedInLeft" data-wow-offset="190">Hacktoberfest (Contributor)</h3>
          <ul>
            <li>Contributed to various projects.</li>
            <li>Successfully merged and got accepted 5 PRs.</li>
            <li>Tech Stacks: C++, GitHub</li>
          </ul>
        </div>
        <div className="box">
          <i className="fas fa-award"></i>
          <span className="duration">July 2023 - Present</span>
          <h3 className="wow animate__animated animate__lightSpeedInLeft" data-wow-offset="190">Campus Ambassador of Cisco</h3>
          <ul >
            <li>Organized and managed events on campus.</li>
            <li>Promoted Cisco's products and services.</li>
            <li>Developed leadership and networking skills.</li>
            <li>Skills: Team Management, Teamwork, Communication, Networking, Problem Solving</li>
          </ul>
        </div>
      </div>
    </section>
    </Link>
  );
}

export default Experience;
