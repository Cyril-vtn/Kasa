
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles.scss";

export const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
