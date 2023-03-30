import Banner from "../../components/Banner";
import img_home from "../../img/banner_accueil.png";

function Home() {
  return (
    <div>
      <Banner className={"card_banner_home"} image={img_home} alt={"fond représentant une montagne"} />
    </div>
  )
}

export default Home
