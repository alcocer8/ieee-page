import { Link } from "react-router-dom";
import LogoIEEE from "./LogoIEEE";
import { FaFacebookSquare } from "react-icons/fa";

import { TfiWorld } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="max-w-[1240px] mx-auto py-16 px-4 text-gray-300">
        <div className="grid grid-cols-2">
          <Link to="/">
            <LogoIEEE />
          </Link>

          <div className="flex justify-between md:w-[75%] my-6 flex-col">
            <a
              href="https://www.facebook.com/ICEV2023"
              className="flex items-center"
            >
              <FaFacebookSquare size={30} className="m-2" />
              Facebook
            </a>
            <a
              href="https://www.uv.mx/veracruz/microna"
              className="flex items-center"
            >
              <TfiWorld size={30} className="m-2"/>
              UV Microna
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
