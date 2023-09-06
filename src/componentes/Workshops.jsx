import CardWorkshop from "./CardWorkshop";
import wordshops from "../workshops";

const Workshops = () => {
  return (
    <>
      <div className="bg-blue-500 text-center text-white uppercase mb-2 p-8">
        <h2 className=" md:text-4xl text-2xl font-bold">Workshops  (16 - 20 October)</h2>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {wordshops.map((work, i) => (
            <CardWorkshop key={i} workshop={work}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Workshops;
