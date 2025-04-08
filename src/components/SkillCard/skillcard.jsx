"use client";

import Image from "next/image";
import style from "../../styles/SkillCard/SkillCard.scss";
import { useState } from "react";
import gsap from "gsap";

const SkillCard = ({ image, title, description, key }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleCardClick = () => {
        setIsExpanded(true);
        setTimeout(() => {
            document.querySelector(".expanded-card")?.classList.add("entering");
            gsap.fromTo(
                ".expanded-card.entering",
                {
                    scale: 0.3,
                    opacity: 0,
                },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.6,
                }
            );
        }, 0);
    };

    const handleCloseClick = () => {
        document.querySelector(".expanded-card")?.classList.remove("entering");
        setIsExpanded(false);
    };

    return (
        <>
            {isExpanded && (<div className="blur" />)}
            <div onClick={handleCardClick} className="card" id={key}>
                <Image
                    className="card-image"
                    src={image}
                    alt={description}
                    title={title}
                />
            </div>
            {isExpanded && (
                <div className="expanded-card">
                    <button className="expanded-card-btn" onClick={handleCloseClick}>X</button>
                    <Image
                        className="expanded-card-image"
                        src={image}
                        alt={description}
                        title={title}
                    />
                    <p className="expanded-card-title">{title}</p>
                    <p className="expanded-card-description">{description}</p>
                </div>
            )}
        </>
    );
};

export default SkillCard;

