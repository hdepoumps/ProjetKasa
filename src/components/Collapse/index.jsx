import  '../../style/Collapse.css'
import fleche from "../../img/fleche.svg";

function Collapse(props) {
  return(
    <div className={Collapse}>
      <div className={"card_about_titre"}>
        <p>Fiabilité</p>
        <img src={fleche} alt={"flèche"}/>
      </div>
      <div className={"card_about_detail"}>
        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
      </div>
    </div>
  );
}

export  default Collapse