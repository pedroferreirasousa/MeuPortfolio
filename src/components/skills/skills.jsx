
import SkillCard from "../SkillCard/skillcard";
import style from "../../styles/Skills/skills.scss";
import html from "../../../public/media/icons/html.svg";
import css from "../../../public/media/icons/css.svg";
import javascript from "../../../public/media/icons/js.svg";
import react from "../../../public/media/icons/react.svg";
import next from "../../../public/media/icons/next.svg";
import vite from "../../../public/media/icons/vite.svg";
import typescript from "../../../public/media/icons/typescript.svg";
import angular from "../../../public/media/icons/angular.svg";
import gsap from "../../../public/media/icons/gsap.svg";
import tailwindcss from "../../../public/media/icons/tailwind.svg";
import sass from "../../../public/media/icons/sass.svg";
import git from "../../../public/media/icons/git.svg";



const Skills = () => {

    const cards = [{
        name: "HTML5",
        image: html,
        description: "HTML é a linguagem de marcação utilizada para criar páginas Web estáticas. É uma linguagem de marcação semântica, que permite definir elementos semânticos, como cabeçalhos, parágrafos, imagens, links, etc.",

    },
    {
        name: "CSS3",
        image: css,
        description: "CSS é uma linguagem de estilo de páginas Web. É usada para definir a aparência de elementos de uma página Web, como cores, fontes, espaçamento, posição, etc.",
    },
    {
        name: "JavaScript",
        image: javascript,
        description: "JavaScript é uma linguagem de programação interpretada, de alto nível, dinâmica e orientada a objetos. É a linguagem de programação mais comumente utilizada em navegadores Web.",
    },
    {
        name: "Typescript",
        image: typescript,
        description: "lorem ipsum",
    },
    {
        name: "React",
        image: react,
        description: "React é uma biblioteca JavaScript para criar interfaces de usuário em páginas Web. É uma biblioteca de código aberto que permite criar componentes reutilizáveis e renderizar a interface de usuário de forma eficiente.",
    },
    {
        name: "Next.js",
        image: next,
        description: "Next.js é uma plataforma de desenvolvimento de aplicativos Web com foco em desenvolvimento rápido, produtividade e produtos altamente escaláveis. É uma plataforma de desenvolvimento de aplicativos Web que permite criar aplicativos de alto desempenho e escalabilidade.",
    },
    {
        name: "Angular",
        image: angular,
        description: "lorem ipsum",
    },
    {
        name: "Vite",
        image: vite,
        description: "Vite é uma ferramenta de desenvolvimento de aplicativos Web que permite criar aplicativos de alto desempenho e escalabilidade. É uma ferramenta de desenvolvimento de aplicativos Web que permite criar aplicativos de alto desempenho e escalabilidade.",
    },
    {
        name: "GSAP",
        image: gsap,
        description: "lorem ipsum",
    },
    {
        name: "TailwindCSS",
        image: tailwindcss,
        description: "lorem ipsum",
    },
    {
        name: "Sass",
        image: sass,
        description: "lorem ipsum",
    },
    {
        name: "Git",
        image: git,
        description: "lorem ipsum",
    },


    ]

    return (
        <section id="skills" className="section-skills">
            <h1>Tecnologias que utilizo</h1>
            <div className="skills-container">

                {cards.map((card, index) => (
                    <SkillCard
                        image={card.image}
                        title={card.name}
                        description={card.description}
                        key={index}
                    />
                ))}

            </div>
        </section>
    )
}


export default Skills;