import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data/logements.json";
import ErrorPage from "../ErrorPage";
import "./accommodation.scss";

export const Accommodation = () => {
  // get the id from the url using react router
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState();


  useEffect(() => {
    // find the accommodation with the id from the url
    const filteredaccommodation = data.find((accommodation) => accommodation.id === id);
    // set the accommodation in the state
    setAccommodation(filteredaccommodation);
    console.log(filteredaccommodation);
  }, [id]);

  if(!accommodation) {
    return <ErrorPage/>
  }

  return <div>
    {/* display the accommodation data */}
    {accommodation && (
      <div className="accommodation_container">
        <div className="accommodation_image" style={{backgroundImage: `url(${accommodation.cover})`}}></div>
        <div className="accommodation_content">
         <div className="accommodation_text">
            <h1>{accommodation.title}</h1>
            <p>{accommodation.location}</p>
         </div>
         <div></div>
        </div>
        
      </div>
    )}
  </div>;
};
