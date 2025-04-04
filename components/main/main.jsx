import styles from "../../styles/Main/main.scss";

const Main = () => {
    return (
        <section id="home" className="section-main">
                <video autoPlay muted loop>
                    <source src="/media/video.mp4" type="video/mp4" />
                </video>
                <div className="container-main">
                    <h1>Olá, Seja bem-vindo! <br />
                        Me Chamo Pedro Ferreira <br />
                        <span>Desenvolvedor Front-End</span>
                    </h1>
                    <p>Transformando ideias em experiências digitais 📱</p>
                <div className="container-social-icons">
                    <a href="#"><img src="/images/icons/icons8-linkedin-50 (1).png" alt="Ícone do LinkedIn com link para acesso à página" /></a>
                    <a href="#"><img src="/images/icons/icons8-github-50 (1).png" alt="Ícone do GitHub com link para acesso à página" /></a>
                    <a href="#"><img src="/images/icons/icons8-curriculum-50.png" alt="Ícone de currículo com link para acesso ao currículo em PDF" /></a>
                </div>
                </div>
        </section>
    )
}

export default Main;
