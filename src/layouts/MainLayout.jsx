import { Outlet } from "react-router-dom";
import Navbar from "../componentes/Navbar"
import Footer from "../componentes/Footter"

const MainLayout = () => {

  // Funcion que retorna al tope de la pagina
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
};

export default MainLayout;
