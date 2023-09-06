import Hero from "../componentes/Hero";
import Events from "../componentes/Events";
import KeynoteSpeakers from "../componentes/KeynoteSpeakers";
import IndustrySector from "../componentes/IndustrySector";
import Workshops from "../componentes/Workshops";
import x2 from "../assets/fiesta.png";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <Hero />
      <Events />
      <KeynoteSpeakers />
      <IndustrySector />
      <Workshops />

      <div class="group fixed bottom-20 right-5 p-2 flex items-end justify-end ">
        <button class="delay-150 hover:-translate-y-1 hover:scale-110 duration-250 w-40 h-40 bg-white rounded-full active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
          <Link
            className="hover:text-yellow-400 text-center"
            to="/industry"
          >
            <img src={x2} alt="" srcset="" className="rounded-2xl" />
          </Link>
        </button>
      </div>
    </>
  );
  a;
};

export default MainPage;
