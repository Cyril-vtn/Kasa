import { FaStar } from "react-icons/fa";
import "../styles/starRating.scss";
export const StarRating = ({ rating }) => {
  return (
    <div className="star_rating">
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;
        return (
          <div key={i}>
            {ratingValue <= rating ? (
              <FaStar size={24} className="star_filled" />
            ) : (
              <FaStar size={24} className="star_empty" />
            )}
          </div>
        );
      })}
    </div>
  );
};

