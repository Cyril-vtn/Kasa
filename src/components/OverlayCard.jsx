import "../styles/overlayCard.scss";
export const OverlayCard = ({ image, text }) => {
  return (
    <div className="overlay_card" style={{ backgroundImage: `url(${image})` }}>
      <div className="background-overlay"></div>
      {text && <h1>{text}</h1>}
    </div>
  );
};
