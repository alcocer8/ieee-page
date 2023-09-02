import React from "react";
import { industry } from "../industry";
import CardIndustry from "../componentes/CardIndustry";
import x from "../assets/fiesta.jpeg";

function Industries() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 mx-auto container">
        {industry.map((indus, i) => (
          <CardIndustry key={i} industry={indus} />
        ))}
      </div>

      <hr />

      <img
        id="fiesta"
        src={x}
        alt=""
        srcset=""
        className="mt-8 mx-auto rounded-xl"
        width="50%"
      />
    </>
  );
}

export default Industries;
