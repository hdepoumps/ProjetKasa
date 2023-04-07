/*import { useParams } from 'react-router-dom'
function Survey() {
  const { questionNumber } = useParams()*/
import Banner from '../../components/Banner/index'
import Collapse from "../../components/Collapse";
import '../../style/About.css';
import img_about from '../../img/banner_about.png';
import collapsedata from "../../data/collapseAbout.json";
function About(){
  const collapsabout = collapsedata.map((item) => {
    return (
      <Collapse
        id={item.id}
        title={item.title}
        description={item.description}
      />
    );
  });
  return (
    <div id={"about"}>
      <Banner
        className={"card_banner_about"}
        image={img_about}
        alt={"fond représentant une montagne"} />
      <section>
        {collapsabout}
      </section>
    </div>
  )
}

export default About
