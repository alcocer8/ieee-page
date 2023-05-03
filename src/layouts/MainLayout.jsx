import { Outlet } from "react-router-dom";
import Navbar from "../componentes/Navbar"
import Footer from "../componentes/Footter"
import FootterLogos from "../componentes/FootterLogos";

const MainLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <FootterLogos />
      <Footer/>
    </>
  );
};

export default MainLayout;
