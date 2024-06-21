import "../styles/home.scss";
import data from "../data/logements.json";
import { Card } from "../components/Card";
import { OverlayCard } from "../components/OverlayCard";
import img from '../assets/home-background.png';

export default function Home() {
  return (
    <div className="page-wrapper">
      <OverlayCard image={img} text={"Chez vous, partout et ailleurs"} />
      <div className="content-wrapper">
        {data.map((logement) => {
          return (
            <Card key={logement.id} title={logement.title} id={logement.id} cover={logement.cover} />
          );
        })}
      </div>
    </div>
  );
}
