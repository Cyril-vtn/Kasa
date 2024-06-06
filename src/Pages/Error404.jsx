import { Link } from "react-router-dom";
import "../styles/error404.scss";
export default function Error404() {
  return (
    <div className="error_container">
    <h1 className="error_title">404</h1>
    <h2 className="error_text">Oups! La page que vous demandez n&apos;existe pas.</h2>
    <Link to="/" className="error_link">Retourner sur la page d&apos;accueil</Link>
  </div>
  )
}

