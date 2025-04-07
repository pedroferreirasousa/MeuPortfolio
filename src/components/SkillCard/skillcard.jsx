import Image from "next/image";
import style from "../../styles/SkillCard/SkillCard.scss";



const SkillCard = ({image, title, description, key}) => {




    return (
        <div className="card" id={key}>
            <Image className="card-image" src={image} alt={description} title={title} width={50} height={50}/>
            <div className="content-card">
              <p className="card-title">{title}</p>
              <p className="card-description">{description}</p>  
            </div>
        </div>
    )

}


export default SkillCard;
