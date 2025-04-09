"use client";

import style from "../../../styles/Projects/ProjectCard/project.scss";
import Image from "next/image";


const ProjectComponent = ({ name, image, description, url, urlcode }) => {




    return (
        <div className="card-project">
                <Image
                    className="project-image"
                    src={image}
                    alt={description}
                    title={name}
                />
            <div className="card-content">
                <p className="title">{name}</p>
                <p className="description">{description}</p>
                <a className="card-button" target="__blank" href={url} >Demo</a>
                <a className="card-button secondary" target="__blank" href={urlcode} >Code</a>
            </div>
        </div>
    )
}

export default ProjectComponent;