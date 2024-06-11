import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaJava } from "react-icons/fa";
import { SiCplusplus, SiTailwindcss, SiMysql } from "react-icons/si";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./skill.css";

const skills = [
  { name: "C++", icon: <SiCplusplus /> },
  { name: "C", icon: <SiCplusplus /> },
  { name: "Java", icon: <FaJava /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "ReactJS", icon: <FaReact /> },
  { name: "GitHub", icon: <FaGithub /> }
];

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="title">My Skills</h2>
      <div className="skills-slider">
        <div className="slider-track">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
          {skills.map((skill, index) => (
            <div key={index + skills.length} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
