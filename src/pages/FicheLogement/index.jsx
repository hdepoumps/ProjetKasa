import data from "../../data/logements.json";
import { useParams } from "react-router-dom";
import '../../style/FicheLogement.css';
import redstar from '../../img/redstar.svg';
import greystar from '../../img/greystar.svg';
import flecheCarrroussel from '../../img/fleche.svg';
import Collapse from "../../components/Collapse";
import Error from "../../components/Error";
import { useState } from "react";
function FicheLogement() {
  const { id } = useParams();
  const logement = data.find(logement => logement.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!logement) {
    return <Error />;
  }
  const pictures = logement.pictures;
  const showNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % pictures.length;
    setCurrentImageIndex(nextIndex);
  };

  const showPreviousImage = () => {
    const previousIndex = currentImageIndex === 0 ? pictures.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(previousIndex);
  };


  const rating = parseInt(logement.rating);
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(true); // étoile rouge
    } else {
      stars.push(false); // étoile grise
    }
  }

  return (
    <div className={"ficheLogement"}>
      <div className={"carrousel"}>
          <div className={"fleche flechegauche"} onClick={showPreviousImage}>
            {pictures.length > 1 && <img src={flecheCarrroussel} alt={"flèche carroussel"}/>}
          </div>
          <img src={pictures[currentImageIndex]} alt="" />
          <div className={"fleche flechedroite"} onClick={showNextImage}>
            {pictures.length > 1 && <img src={flecheCarrroussel} alt={"flèche carroussel"}/>}
          </div>
          {pictures.length > 1 && (
            <p className={"counter"}>
              {currentImageIndex + 1}/{pictures.length}
            </p>
          )}
      </div>
      <div className={"enTete"}>
        <div>
          <h1>{logement.title}</h1>
          <p className={"location"}>{logement.location}</p>
          <div className={"tags"}>
            {logement.tags.map((tag, index) => (
              <div key={index} className="tag">
                <p>{tag}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className={"profile"}>
            <div className="name">
              <p>{logement.host.name.split(' ')[0]}</p>
              <p>{logement.host.name.split(' ')[1]}</p>
            </div>
            <img src={logement.host.picture} alt={logement.host.name}/>
          </div>
          <div className={"stars"}>
            {stars.map((isRed, index) => (
              <img key={index} src={isRed ? redstar : greystar} alt="étoile"/>
            ))}
          </div>
        </div>
      </div>
      <div className={"descriEquip"}>
        <Collapse
          id={"description"+logement.id}
          title={"Description"}
          description={logement.description}
        />
        <Collapse
          id={"equipments"+logement.id}
          title={"Équipements"}
          description={
            <div>
              {logement.equipments.map(equipment => (
                <p key={equipment}>{equipment}</p>
            ))}
            </div>}
        />
      </div>
    </div>
  );
}

export default FicheLogement;