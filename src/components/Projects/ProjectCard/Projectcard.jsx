"use client";

import style from "../../../styles/Projects/ProjectCard/project.scss";
import Image from "next/image";


const ProjectComponent = ({ name, image, description, url }) => {




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
                <button className="card-button">Demo</button>
                <button className="card-button secondary">Code</button>
            </div>
        </div>
    )
}

export default ProjectComponent;