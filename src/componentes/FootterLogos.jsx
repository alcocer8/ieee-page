import React from "react";
import logo1 from "../assets/1.png";
import logo2 from "../assets/2.png";
import logo3 from "../assets/3.jpeg";
import logo4 from "../assets/4.jpg";
import logo5 from "../assets/5.png";
import logo6 from "../assets/6.png";
import logo7 from "../assets/7.jpeg";
import logo8 from "../assets/8.png";
import logo9 from "../assets/9.png";

const FootterLogos = () => {
  return (
    <div className="grid grid-rows-1 grid-flow-col items-center gap-2 my-6 container mx-auto">
      <img src={logo1} />
      <img src={logo2} className="md:h-24" />
      <img src={logo3} className="md:h-24" />
      <img src={logo4} />
      <img src={logo5} />
      <img src={logo6} />
      <img src={logo9} />
      <img src={logo7} />
      <img src={logo8} />
    </div>
  );
};

export default FootterLogos;
