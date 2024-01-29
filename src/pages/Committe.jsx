import { Link } from "react-router-dom";



function Committe() {
  return (
    <>
      {/* Hero azul */}
      <div className="font-mono bg-blue-600">
        <div className="w-full h-screen flex flex-col justify-center px-20">
          <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold md:py-6 text-center">
            2023 IEEE International Conference on Engineering Veracruz (IEEE
            ICEV 2023)®
          </h1>

          <h2 className="my-5 text-white md:text-3xl sm:text-2xl text-4xl font-bold md:py-6 text-center">
            Committee
          </h2>

          <div className="mx-auto w-fit flex flex-col md:flex-row gap-4">
            <a
              href="/assets/Steering.pdf"
              className="text-xl uppercase bg-black  text-white py-2 px-4 rounded-xl  hover:bg-white hover:text-black transition-all duration-500 "
            >
              Steering Committee
            </a>
            <a
              href="/assets/Technical.pdf"
              className="text-xl uppercase bg-black  text-white py-2 px-4 rounded-xl  hover:bg-white hover:text-black transition-all duration-500 "
            >
              Technical Program Committee
            </a>
            <a
              href="/assets/Students.pdf"
              className="text-xl uppercase bg-black  text-white py-2 px-4 rounded-xl  hover:bg-white hover:text-black transition-all duration-500 "
            >
              Students Committee
            </a>
            
          </div>
        </div>
      </div>
      {/* Hero azul */}
    </>
  )
}

export default Committe