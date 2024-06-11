import React from "react";
import "./skill.css";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaGithub, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiCplusplus, SiC } from "react-icons/si";

const SkillBubble = ({ name, icon, x, y }) => {
  return (
    <motion.div
      className="conti"
      whileInView={{ x, y }}
      viewport={{ once: true }}
    >
      <div className="icon">{icon}</div>
      <div>{name}</div>
    </motion.div>
  );
};

const Skills = () => {
  const skills = [
    { name: "C++", icon: <SiCplusplus />, x: "-15vh", y: "5vw" },
    { name: "C", icon: <SiC />, x: "-5vh", y: "-8vw" },
    { name: "Java", icon: <FaJava />, x: "15vh", y: "2vw" },
    { name: "TailwindCSS", icon: <SiTailwindcss />, x: "10vh", y: "15vw" },
    { name: "CSS", icon: <FaCss3Alt />, x: "30vh", y: "-10vw" },
    { name: "HTML", icon: <FaHtml5 />, x: "-36vh", y: "0vw" },
    { name: "JavaScript", icon: <FaJs />, x: "40vh", y: "5vw" },
    { name: "MySQL", icon: <FaDatabase />, x: "0vh", y: "-17vw" },
    { name: "ReactJS", icon: <FaReact />, x: "-35vh", y: "-10vw" },
    { name: "GitHub", icon: <FaGithub />, x: "-30vh", y: "10vw" },
  ];

  return (
    <Link to="skills" smooth={true} duration={1000}>
      <section id="skill">
        <div className="content1">
          <div className="title"><span>My Skills</span></div>
          <motion.div className="cont1"></motion.div>
          {skills.map((skill, index) => (
            <SkillBubble key={index} name={skill.name} icon={skill.icon} x={skill.x} y={skill.y} />
          ))}
        </div>
      </section>
    </Link>
  );
};

export default Skills;
