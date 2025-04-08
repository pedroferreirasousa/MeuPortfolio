"use client"

import { useState } from "react";
import style from "../../styles/MobileMenu/mobileMenu.scss"

const MobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="nav">
            <div className={`iconMenu ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={`menulist ${isMenuOpen ? "open" : ""}`}>
                <a href="#home" onClick={closeMenu}>Início</a>
                <a href="#about" onClick={closeMenu}>Sobre mim</a>
                <a href="#skills" onClick={closeMenu}>Habilidades</a>
                <a href="#projects" onClick={closeMenu}>Projetos</a>
                <a href="#contact" onClick={closeMenu}>Contato</a>
            </div>
        </nav>
    );
};

export default MobileMenu;