import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const Layout = ({children}) => {
  return (
    <>
      <div className="container">
        <Header />
        <main>{children}</main>
      </div>
      <Footer/>
    </>
  );
};
