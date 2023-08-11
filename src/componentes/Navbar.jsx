import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import Links from "./Links";
import LogoIEEE from "./LogoIEEE";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-black">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white uppercase">
        <Link to="/">
          <LogoIEEE />
        </Link>

        {/* Links que usamos para navegar */}
        <Links />

        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <div className="grid grid-flow-row gap-4 items-center p-6">
            <Link to="/" onClick={handleNav}>
              <LogoIEEE />
            </Link>

            <Link
              to="/"
              onClick={handleNav}
              className="hover:text-yellow-400 text-center"
            >
              Home
            </Link>
            <Link
              onClick={handleNav}
              className="hover:text-yellow-400 text-center"
              to="/call-for-papers"
            >
              Call For Papers
            </Link>

            <Link
              onClick={handleNav}
              className="hover:text-yellow-400 text-center"
              to="/submission-of-papers"
            >
              Submission Of Papers
            </Link>

            <Link
              onClick={handleNav}
              className="hover:text-yellow-400 text-center"
              to="/call-for-papers"
            >
              Program
            </Link>

            <Link
              onClick={handleNav}
              className="hover:text-yellow-400 text-center"
              to="/topics"
            >
              Topic
            </Link>

            <Link
              onClick={handleNav}
              className="hover:text-yellow-400 text-center"
              to="/registration"
            >
              Registration
            </Link>

            <Link
              onClick={handleNav}
              className="hover:text-yellow-400 text-center"
              to="/call-for-papers"
            >
              Committees
            </Link>

            <Link
              onClick={handleNav}
              className="hover:text-yellow-400 text-center"
              to="/beca"
            >
              Beca IEEE
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
