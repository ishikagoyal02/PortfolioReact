import React, { useState } from "react";
import { Link } from "react-scroll";
import './navbar.css';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navlist ${isOpen ? "open" : ""}`}>
            <button className="menuButton" onClick={toggleMenu}>
                ☰
            </button>
            <div className={`navLinks ${isOpen ? "open" : ""}`}>
                <Link to="intro" smooth={true} duration={1000} className="navButton" onClick={toggleMenu}>HOME</Link>
                <Link to="about" smooth={true} duration={1000} className="navButton" onClick={toggleMenu}>ABOUT</Link>
                <Link to="skills" smooth={true} duration={1000} className="navButton" onClick={toggleMenu}>SKILLS</Link>
                <Link to="education" smooth={true} duration={1000} className="navButton" onClick={toggleMenu}>EDUCATION</Link>
                <Link to="experience" smooth={true} duration={1000} className="navButton" onClick={toggleMenu}>EXPERIENCE</Link>
                <Link to="projects" smooth={true} duration={1000} className="navButton" onClick={toggleMenu}>PROJECTS</Link>
                <Link to="contact" smooth={true} duration={1000} className="navButton" onClick={toggleMenu}>CONTACT</Link>
            </div>
        </nav>
    );
}

export default NavBar;
