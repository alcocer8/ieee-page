import React from "react";

const CardSpeakers = ({ speaker }) => {
  const { name, pos, img, theme } = speaker;

  return (
    <div className="text-center flex flex-col justify-center items-center">
      <img src={img} className="mb-4 w-36 md:w-1/2 rounded-full" />
      <h3 className="md:text-2xl mb-2 text-xl font-medium leading-tight">
        {name}
      </h3>
      <p className="my-2 text-blue-600 font-medium uppercase">{theme}</p>
      <ul>
        {pos.map((p) => (
          <li className="font-mono">{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default CardSpeakers;
