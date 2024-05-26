import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/logements.json";
import ErrorPage from "./ErrorPage";

export const Accommodation = () => {
  // get the id from the url using react router
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState();


  useEffect(() => {
    // find the accommodation with the id from the url
    const filteredaccommodation = data.find((accommodation) => accommodation.id === id);
    // set the accommodation in the state
    setAccommodation(filteredaccommodation);
  }, [id]);

  if(!accommodation) {
    return <ErrorPage/>
  }

  return <div>
    {/* display the accommodation data */}
    {accommodation && (
      <div>
        <h1>{accommodation.title}</h1>
        
      </div>
    )}
  </div>;
};
