"use client";

import style from "../../styles/Projects/projects.scss";
import ProjectComponent from "./ProjectCard/Projectcard";
import atlasMercantil from "../../../public/media/AtlasMercantil.png";
import cecle from "../../../public/media/Cecle.png";
import Studia from "../../../public/media/Studia.png";



const Projects = () => {

  const cards = [{
    name: "CECLE",
    image: cecle,
    description: "Projeto da Donuts Tech, para um centro espirita kardecista de Uberlândia, feito utilizando Next.js, Typescript, Sass, Gsap...",
    url: "https://cecle.vercel.app",
  }, {
    name: "Studia",
    image: Studia,
    description: "WebAplicativo de uma platforma para gerenciamento de estudos com IA, desenvolvido utilizando tecnologias como Next.js, TypeScript, Scss, ContextAPI etc... ",
    url: "https://studiapro.vercel.app/",
    urlcode: "https://github.com/pedroferreirasousa/Plataforma-de-Estudos-com-IA"
  }, {
    name: "AtlasMercantil",
    image: atlasMercantil,
    description: "Landing page com foco academico, desenvolvido com react + styledcomponents",
    url: "https://pedroferreirasousa.github.io/AtlasMercantil-2.0/",
    urlcode: "https://github.com/pedroferreirasousa/AtlasMercantil-2.0"
  },
  ]


  return (
    <section className="section-projects" id="projects">
      <h1>Projetos</h1>
      <div className="container-projects">

        {cards.map((cards, index) => (
          <ProjectComponent
            name={cards.name}
            image={cards.image}
            description={cards.description}
            url={cards.url}
            urlcode={cards.urlcode}
            key={index}
          />
        ))}
      </div>
        <a className="linkGit" href="https://github.com/pedroferreirasousa?tab=repositories">Acessar repositórios do github</a>
    </section>
  )
}

export default Projects;