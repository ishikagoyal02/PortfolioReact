import React from "react";
import './skill.css';
import {motion} from 'framer-motion';
import { Link } from "react-scroll";

const skills =({name,x,y}) =>
    {
        return(
            <motion.div className="cont" whileInView={{ x, y }}
            viewport={{ once: true }}>
                                {name}
                    </motion.div>
        )
    }

const skill = ()=>
    {
        
        return (
            <Link to="skill" smooth={true} duration={1000}>
            <section id="skill">SKILLS.helllo
                <div className="content">
                    <motion.div className="cont1">
                                WEB
                    </motion.div>

                    <skills name="HTML" x="-50vw" y="-10vw" />
                    <skills name="CSS" x="-30vw" y="-20vw" />
                    <skills name="Javascript" x="-10vw" y="-30vw" />
                    <skills name="ReactJS" x="10vw" y="-20vw" />
                    <skills name="C" x="30vw" y="-10vw" />
                    <skills name="C++" x="50vw" y="0vw" />
                    <skills name="JAVA" x="30vw" y="10vw" />
                    <skills name="MySQL" x="10vw" y="20vw" />
                    <skills name="TailwindCSS" x="-10vw" y="30vw" />
                    <skills name="GitHub" x="-30vw" y="20vw" />
                </div>
            </section>  
            </Link> 
    
        )
    }

    export default skill

    