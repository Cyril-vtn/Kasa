import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data/logements.json";
import ErrorPage from "../ErrorPage";
import "./accommodation.scss";
import { Tag } from "../../components/Tag";
import { useMemo } from "react";
import { StarRating } from "../../components/StarRating";
import { Slider } from "../../components/Slider";

export const Accommodation = () => {
  // get the id from the url using react router
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState();
  const rating = useMemo(() => {
    return accommodation && parseInt(accommodation.rating);
  }, [accommodation]);
  const [firstName, lastName] = useMemo(() => {
    return (accommodation && accommodation.host.name.split(" ")) || ["", ""];
  }, [accommodation]);

  useEffect(() => {
    // find the accommodation with the id from the url
    const filteredaccommodation = data.find(
      (accommodation) => accommodation.id === id
    );
    // set the accommodation in the state
    setAccommodation(filteredaccommodation);
    console.log(filteredaccommodation);
  }, [id]);

  if (!accommodation) {
    return <ErrorPage />;
  }

  return (
    <div>
      {accommodation && (
        <div className="accommodation_container">
          {/* <div
            className="accommodation_image"
            style={{ backgroundImage: `url(${accommodation.cover})` }}
          ></div> */}
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
        </div>
      )}
    </div>
  );
};
