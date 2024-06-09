import { useState } from "react";
import "../styles/slider.scss";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
export const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleChangeImg = (direction) => {
    if (direction === "left") {
      setCurrentImageIndex((oldIndex) => {
        return oldIndex === 0 ? images.length - 1 : oldIndex - 1;
      });
    } else if (direction === "right") {
      setCurrentImageIndex((oldIndex) => {
        return oldIndex === images.length - 1 ? 0 : oldIndex + 1;
      });
    }
  };

  return (
    <div
      className="slider"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      {images.length > 1 && (
        <>
          <MdArrowBackIosNew
            size={79}
            className="arrow_left"
            onClick={() => handleChangeImg("left")}
          />
          <MdArrowForwardIos
            className="arrow_right"
            onClick={() => handleChangeImg("right")}
          />
        </>
      )}
    </div>
  );
};
