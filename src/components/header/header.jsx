import styles from "../../styles/Header/header.scss";

const Header = () => {
    return (
        <header>
            <div className="nav-container">
            <h1><span>&lt;</span> Pedro Ferreira <span>&gt;</span></h1>
            <nav>
                <ul>
                    <li><a href="#home">Início</a></li>
                    <li><a href="#about">Sobre mim</a></li>
                    <li><a href="#skills">Habilidades</a></li>
                    <li><a href="#">Projetos</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Header;