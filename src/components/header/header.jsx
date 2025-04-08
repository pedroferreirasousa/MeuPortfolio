import styles from "../../styles/Header/header.scss";
import MobileMenu from "../MobileMenu/mobilemenu";

const Header = () => {
    return (
        <header>
            <div className="nav-container">
            <h1><span>&lt;</span> Pedro Ferreira <span>&gt;</span></h1>
            <nav className="desktop-nav">
                <ul>
                    <li><a href="#home">Início</a></li>
                    <li><a href="#about">Sobre mim</a></li>
                    <li><a href="#skills">Habilidades</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
            <MobileMenu/>
            </div>
        </header>
    )
}

export default Header;