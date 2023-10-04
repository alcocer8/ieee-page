import { industry } from "../industry";
import CardIndustry from "./CardIndustry";

const IndustrySector = () => {
  return (
    <>
      <div className="bg-blue-500 text-center text-white uppercase mb-2 p-8">
        <h2 className=" md:text-4xl text-2xl font-bold">Industry Sectors</h2>
      </div>

      <div className="text-xl font-bold uppercase text-center my-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 mx-auto container">
          {industry.map((indus, i) => (
            <CardIndustry key={i} industry={indus} />
          ))}
        </div>
      </div>
    </>
  );
};

export default IndustrySector;
