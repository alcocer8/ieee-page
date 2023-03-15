import { Link } from "react-router-dom";
import LogoIEEE from "./LogoIEEE";
import {
  FaFacebookSquare
} from "react-icons/fa";

import {TfiWorld} from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="max-w-[1240px] mx-auto py-16 px-4 content-start grid grid-cols-2 text-gray-300 ">
        <div>
          <Link to="/">
            <LogoIEEE />
          </Link>
          <p className="py-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
            ullam iste repellat consequatur libero reiciendis, blanditiis
            accusantium.
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <a href="https://www.facebook.com/ICEV2023"><FaFacebookSquare size={30} /></a>
            <a href="" ><TfiWorld size={30}/></a>
          </div>
        </div>

        <div>
          <ul className="uppercase ">
            <li className="mt-4">Tema 1</li>
            <li className="mt-4">Tema 2</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
