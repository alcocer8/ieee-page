import HeroImage from "../assets/HeroImage.jpg";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div
      className="text-white bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          IEEE International Conference on Engineering Veracruz
        </h1>
        <p> - </p>
        <Typed
          className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-blue-400"
          strings={["Boca del Río, Veracruz, México", "23 to 26 October 2023", "On-Site Event"]}
          typeSpeed={120}
          backSpeed={50}
          loop
        />
      </div>
    </div>
  );
};

export default Hero;
