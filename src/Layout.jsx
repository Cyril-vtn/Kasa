import { Header } from "./components/Header";
import logo from "./assets/footer.png";

export const Layout = ({children}) => {
  return (
    <>
      <div className="container">
        <Header />
        <main>{children}</main>
      </div>
      <footer>
        <img src={logo} alt="logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  );
};
