"use client";

import style from "../../styles/Projects/projects.scss";
import ProjectComponent from "./ProjectCard/Projectcard";
import atlasMercantil from "../../../public/media/AtlasMercantil.png";



const Projects = () => {

    const cards = [{
        name: "AtlasMercantil",
        image: atlasMercantil,
        description: "description",
        url: "https://pedroferreirasousa.github.io/AtlasMercantil-2.0/",
        urlcode: "https://github.com/pedroferreirasousa/AtlasMercantil-2.0"
    },{
        name: "AtlasMercantil",
        image: atlasMercantil,
        description: "description",
        url: "url"
    }, {
        name: "AtlasMercantil",
        image: atlasMercantil,
        description: "description",
        url: "url"
    }, {
        name: "AtlasMercantil",
        image: atlasMercantil,
        description: "description",
        url: "url"
    }, {
        name: "AtlasMercantil",
        image: atlasMercantil,
        description: "description",
        url: "url"
    }, {
        name: "AtlasMercantil",
        image: atlasMercantil,
        description: "description",
        url: "url"
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
        </section>
    )
}

export default Projects;