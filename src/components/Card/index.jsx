import '../../style/CardHome.css'
import { Link } from 'react-router-dom'
function Card(props) {
  return(
    <Link to={`/fiche-logement/${props.id}`}>
      <div className={"card_Home"}>
        <img src={props.image} alt={props.alt}/>
        <p>{props.titre}</p>
      </div>
    </Link>
  );
}
export default Card;