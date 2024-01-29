import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="block">
      <ul className="hidden md:flex text-center text-sm font-bold">
        <Link className="hover:text-yellow-400 px-3  border-r" to="/">
          Home
        </Link>
        <Link
          className="hover:text-yellow-400 px-3  border-r"
          to="/call-for-papers"
        >
          Call For Papers
        </Link>
        <Link
          className="hover:text-yellow-400 px-3  border-r"
          to="/submission-of-papers"
        >
          Submission Of Papers
        </Link>
        <Link className="hover:text-yellow-400 px-3  border-r" to="/camara">
          Camera Ready
        </Link>
        <Link className="hover:text-yellow-400 px-3  border-r" to="/topics">
          Topic
        </Link>
        <Link className="hover:text-yellow-400 px-3  border-r" to="/program">
          Program
        </Link>
        <Link
          className="hover:text-yellow-400 px-3  border-r"
          to="/registration"
        >
          Registration
        </Link>
        <Link className="hover:text-yellow-400 px-3  border-r" to="/industry">
          Industry
        </Link>
        <Link className="hover:text-yellow-400 px-3" to="/beca">
          Beca IEEE
        </Link>
      </ul>
      <ul className="hidden md:flex text-center text-sm font-bold mt-2">
        <Link className="hover:text-yellow-400 px-3" to="/committe">
          Committee
        </Link>
        <Link className="hover:text-yellow-400 px-3" to="/keynotes">
          Keynote Speakers
        </Link>
        <Link className="hover:text-yellow-400 px-3" to="/call-for-papers-2024">
          IEEE ICEV 2024
        </Link>
      </ul>
    </div>
  );
};

export default Links;
