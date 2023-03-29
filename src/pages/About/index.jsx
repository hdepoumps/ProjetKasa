/*import { useParams } from 'react-router-dom'
function Survey() {
  const { questionNumber } = useParams()*/
import '../../style/About.css'
import img_about from '../../img/img_about.png'
function About(){
  return (
    <div id={"about"}>
      <div className={"card_img_about"} >
        <img src={img_about} alt={"image de fond représentant une montagne"}/>
      </div>
      <section>
        <div>
          <div>
            <p>Fiabilité</p>

          </div>

        </div>
      </section>
    </div>
  )
}

export default About
