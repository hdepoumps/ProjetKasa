import Banner from "../../components/Banner";
import Card from "../../components/Card";
import img_home from "../../img/banner_accueil.png";
import "../../style/home.css"
import data from '../../data/logements.json';

function Home() {
  const cards = data.map((item) => {
    return (
      <Card
        id={item.id}
        image={item.cover}
        alt={item.title}
        titre={item.title}
      />
    );
  });
  return (
    <div className={"home"}>
      <Banner
        className={"card_banner_home"}
        image={img_home}
        alt={"fond représentant une montagne"}
        texte={"Chez vous, partout et ailleurs"}
      />
      <section>
        {cards}
      </section>
    </div>
  );
}

export default Home
