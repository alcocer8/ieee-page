import Hero from "../componentes/Hero";
import Events from "../componentes/Events";
import KeynoteSpeakers from "../componentes/KeynoteSpeakers";
import IndustrySector from "../componentes/IndustrySector";
import Workshops from "../componentes/Workshops";
import EventsProgram from "../componentes/EventsProgram";
import x2 from "../assets/fiesta.png";
import martin from "../assets/industry4.jpeg";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <Hero />
      <Events />
      <KeynoteSpeakers />
      <IndustrySector />
      <Workshops />
      <EventsProgram/>

      <div class="group fixed bottom-20 left-5 p-2 flex items-end justify-end ">
        <a
          href="https://www.oyorooms.com/mx/217214/?utm_source=GMB_MX&utm_medium=Organic&utm_campaign=MX_VCZ034&latitude=19.175816301625495&longitude=-96.12140966579318&locale=es"
          className="delay-150 hover:-translate-y-1 hover:scale-110 duration-250 w-28 h-28 md:w-40 md:h-40 bg-white rounded-full active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
        >
          <img src={martin} alt="" srcset="" className="rounded-2xl" />
        </a>
      </div>

      <div class="group fixed bottom-20 right-5 p-2 flex items-end justify-end ">
        <button class="delay-150 hover:-translate-y-1 hover:scale-110 duration-250 w-28 h-28 md:w-40 md:h-40 bg-white rounded-full active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
          <Link className="hover:text-yellow-400 text-center" to="/hotel">
            <img src={x2} alt="" srcset="" className="rounded-2xl" />
          </Link>
        </button>
      </div>
    </>
  );
  a;
};

export default MainPage;
