import React from "react";
import CardSpeakers from "./CardSpeakers";
import { speakers } from "../speakes";

const KeynoteSpeakers = () => {
  return (
    <>
      <div className="bg-blue-500 text-center text-white uppercase mb-2 p-8">
        <h2 className="md:text-4xl text-2xl font-bold">Keynote Speakers</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 mx-auto container">
        {speakers.map((speaker, i) => (
          <CardSpeakers key={i} speaker={speaker} />
        ))}
      </div>
    </>
  );
};

export default KeynoteSpeakers;
