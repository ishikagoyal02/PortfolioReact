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
    <Link to="skill" smooth={true} duration={1000}>
      <section id="skill">
        
        <div className="content"> 
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

// import React from "react";
// // import "./skill.css";
// import { motion } from "framer-motion";
// import { Link } from "react-scroll";

// const Skill = ({ name, x, y }) => {
//   return (
//     <motion.div
//       className="hover:scale-105 flex items-center justify-center rounded-full bg-gray-700 text-white cursor-pointer p-3 absolute transition-transform duration-200"
//       whileInView={{ x, y }}
//       viewport={{ once: true }}
//     >
//       {name}
//     </motion.div>
//   );
// };

// const Skills = () => {
//   return (
//     <Link to="skill" smooth={true} duration={1000}>
//       <section id="z-10 text-[rgb(190,190,37)] text-2xl leading-tight mx-auto text-center">
        
//         <div className="relative w-[80vw] h-[80vh] bg-[#130303] flex items-center justify-center rounded-full overflow-hidden bg-circularLight">
//           <motion.div className="absolute rounded-[13%] p-8 cursor-pointer text-[2rem] transition-transform duration-200"></motion.div>

//           <Skill name="HTML" x="-40vh" y="-10vw" />
//           <Skill name="CSS" x="-5vh" y="-8vw" />
//           <Skill name="Javascript" x="-5vh" y="-15vw" />
//           <Skill name="ReactJS" x="30vh" y="12vw" />
//           <Skill name="C" x="30vh" y="-10vw" />
//           <Skill name="C++" x="33vh" y="0vw" />
//           <Skill name="JAVA" x="60vh" y="-5vw" />
//           <Skill name="MySQL" x="-30vh" y="2vw" />
//           <Skill name="TailwindCSS" x="-65vh" y="5vw" />
//           <Skill name="GitHub" x="-30vh" y="10vw" />
//         </div>
//       </section>
//     </Link>
//   );
// };

// export default Skills;