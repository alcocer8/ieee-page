import { industry } from "../industry";
import CardIndustry from "../componentes/CardIndustry";

function Industries() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 mx-auto container">
        {industry.map((indus, i) => (
          <CardIndustry key={i} industry={indus} />
        ))}
      </div>
    </>
  );
}

export default Industries;
