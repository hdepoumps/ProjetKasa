/*import { useParams } from 'react-router-dom'
function Survey() {
  const { questionNumber } = useParams()*/
import Banner from '../../components/Banner/index'
import '../../style/About.css'
import img_about from '../../img/banner_about.png'
import fleche from '../../img/fleche.svg'
function About(){
  return (
    <div id={"about"}>
      <Banner className={"card_banner_about"} image={img_about} alt={"fond représentant une montagne"} />
      <section>
        <div className={"card_about"}>
          <div className={"card_about_titre"}>
            <p>Fiabilité</p>
            <img src={fleche} alt={"flèche"}/>
          </div>
          <div className={"card_about_detail"}>
            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
