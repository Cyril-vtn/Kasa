import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/logements.json";
import ErrorPage from "./ErrorPage";
import "../styles/accommodation.scss";
import { Tag } from "../components/Tag";
import { useMemo } from "react";
import { StarRating } from "../components/StarRating";
import { Slider } from "../components/Slider";
import { Dropdown } from "../components/Dropdown";

export default function Accommodation () {
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState();
  const rating = useMemo(() => {
    return accommodation && parseInt(accommodation.rating);
  }, [accommodation]);
  const [firstName, lastName] = useMemo(() => {
    return (accommodation && accommodation.host.name.split(" ")) || ["", ""];
  }, [accommodation]);

  useEffect(() => {
    const filteredaccommodation = data.find(
      (accommodation) => accommodation.id === id
    );
    setAccommodation(filteredaccommodation);
  }, [id]);

  if (!accommodation) {
    return <ErrorPage />;
  }

  return (
    <div>
      {accommodation && (
        <div className="accommodation_container">
          <Slider images={accommodation.pictures} />
          <div className="accommodation_content">
            <div className="accommodation_text">
              <h1>{accommodation.title}</h1>
              <p>{accommodation.location}</p>
              <div className="tags_container">
                {accommodation.tags.map((tag, index) => {
                  return <Tag key={index} tag={tag} />;
                })}
              </div>
            </div>
            <div className="accommodation_nameRate">
              <div className="accommodation_hostInfo">
                <div className="host_name">
                  <p>{firstName}</p>
                  <p>{lastName}</p>
                </div>
                <img
                  src={accommodation.host.picture}
                  alt="host"
                  className="host_picture"
                />
              </div>
              <StarRating rating={rating} />
            </div>
          </div>
          <div className="accommodation_description">
            <Dropdown description={accommodation.description} label="Description" />
            <Dropdown list={accommodation.equipments} label="Equipements" />
          </div>
        </div>
      )}
    </div>
  );
}
