import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <ul className="hidden md:flex text-center text-sm font-bold">
      <Link
        className="hover:text-yellow-400 px-3  border-r"
        to="/call-for-papers"
      >
        Call For Papers
      </Link>
      <Link className="hover:text-yellow-400 px-3  border-r" to="/program">
        Program
      </Link>
      <Link className="hover:text-yellow-400 px-3  border-r" to="#">
        Topic
      </Link>
      <Link className="hover:text-yellow-400 px-3  border-r" to="#">
        Registration
      </Link>
      <Link className="hover:text-yellow-400 px-3  border-r" to="#">
        Committees
      </Link>
      <Link className="hover:text-yellow-400 px-3" to="#">
        CIPEV IEEE
      </Link>
    </ul>
  );
};

export default Links;
