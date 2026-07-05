import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <p href="#" className="logo">NORA.</p>

        {/*  menu */}
            <div className={`menu-toggle ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <nav className="navbar">
                <ul className={menuOpen ? "active" : ""}>
                    <li><a style={{ "--i": 1 }} href="#home ">Home</a></li>
                    <li><a style={{ "--i": 2 }} href="#About">About</a></li>
                    <li><a style={{ "--i": 4 }} href="#Skills">Skills</a></li>
                    <li><a style={{ "--i": 5 }} href="#portfolio">Projects</a></li>
                    <li><a style={{ "--i": 3 }} href="#services">Services</a></li>
                    <li><a style={{ "--i": 6 }} href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;