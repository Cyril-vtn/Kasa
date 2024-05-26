import { useNavigate } from "react-router-dom";
import "../styles/card.scss";

export const Card = ({
  title,
  cover,
  id,
}) => {
  const navigate = useNavigate();
  return (
    <div className="card" style={{
      backgroundImage: `url(${cover})`
    }} tabIndex={0} role="button" aria-label={title} onClick={() => {
      navigate(`/logment/${id}`);
    }}>
      <div className="card-overlay"></div>
      <h2>{title}</h2>
    </div>
  )
}
