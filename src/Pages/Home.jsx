import "../styles/home.scss";
import data from "../data/logements.json";
import { Card } from "../components/Card";

export default function Home() {
  return (
    <div className="page-wrapper">
      <div className="header-wrapper">
        <div className="background-overlay"></div>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
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
