import data from "../../data/logements.json";
import { useParams } from "react-router-dom";
import '../../style/FicheLogement.css'
import Collapse from "../../components/Collapse";
function FicheLogement() {
  const { id } = useParams();
  const logement = data.find(logement => logement.id === id);

  const rating = parseInt(logement.rating);
  const redStars = rating;
  const grayStars = 5 - rating;
  const stars = '★'.repeat(redStars) + '☆'.repeat(grayStars);
  // ... utiliser `fiche` pour afficher les détails du logement

  return (
    <div className={"ficheLogement"}>
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
          <p>{stars}</p>
        </div>
      </div>



    </div>
  );
}

export default FicheLogement;