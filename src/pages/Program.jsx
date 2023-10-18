import p1 from "../assets/P1.jpg";
import p2 from "../assets/P2.jpg";
import p3 from "../assets/P3.jpg";
import p4 from "../assets/P4.jpg";
import p5 from "../assets/P5.jpg";
import p6 from "../assets/P6.jpg";
import p7 from "../assets/P7.jpg";
import p8 from "../assets/P8.jpg";
import p9 from "../assets/P9.jpg";


const Program = () => {
  return (
    <>
      <div className="font-mono bg-blue-600">
        <div className="w-full h-screen flex flex-col justify-center p-6 text-center">
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            2023 IEEE International Conference on Engineering Veracruz (IEEE
            ICEV 2023)®
          </h1>

          <h2 className="mt-5 text-white md:text-5xl sm:text-4xl text-2xl font-bold md:py-6 uppercase">
            General Program
          </h2>

          <div className="mx-auto w-fit uppercase">
            <a
              href="/assets/program.pdf"
              className="text-xl bg-black  text-white py-2 px-4 rounded-xl  hover:bg-white hover:text-black transition-all duration-500 "
            >
              View Full Document
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:mx-48" >
        <img src={p1}/>
        <img src={p2}/>
        <img src={p3}/>
        <img src={p4}/>
        <img src={p5}/>
        <img src={p6}/>
        <img src={p7}/>
        <img src={p8}/>
        <img src={p9}/>
      </div>
    </>
  );
};

export default Program;
