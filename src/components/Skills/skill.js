import React from "react";
import "./skill.css";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="conti"
      whileInView={{ x, y }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <Link to="skills" smooth={true} duration={1000}>
      <section id="skill">
      
        
        <div className="content1"> 
        <div className="title"><span>My Skills</span></div>
          <motion.div className="cont1"></motion.div>

          <Skill name="C++" x="-15vh" y="5vw" />
          <Skill name="C" x="-5vh" y="-8vw" />
          <Skill name="Java" x="15vh" y="2vw" />
          <Skill name="TailwindCSS" x="10vh" y="15vw" />
          <Skill name="CSS" x="30vh" y="-10vw" />
          <Skill name="HTML" x="-36vh" y="0vw" />
          <Skill name="Javascript" x="40vh" y="5vw" />
          <Skill name="MySQL" x="0vh" y="-17vw" />
          <Skill name="ReactJS" x="-35vh" y="-10vw" />
          <Skill name="GitHub" x="-30vh" y="10vw" />
        </div>
      </section>
    </Link>
  );
};

export default Skills;

