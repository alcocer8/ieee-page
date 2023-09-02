import React from "react";

function CardIndustry({industry}) {
    const { title, img } = industry;
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <img src={img} className="mb-4 w-36 md:w-1/2" />
      <p className="my-2 text-blue-600 font-medium uppercase">{title}</p>
    </div>
  );
}

export default CardIndustry;
