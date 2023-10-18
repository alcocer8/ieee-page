import React from "react";
import { speakers } from "../speakes";

function Keynotes() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl text-center mt-4">
        Keynote Speakers
      </h1>

      <div className="m-4 grid md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3 container mx-auto gap-2">
        {speakers.map((speaker) => (
          <img src={speaker.flyer} alt="" srcset="" />
        ))}
        {/* {speakers.map((speaker) => console.log(speaker.flyer))} */}
      </div>
    </>
  );
}

export default Keynotes;
