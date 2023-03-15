import { useState } from "react";
import CallToPapersImage from "../assets/call-to-papers.png";

const CallForPapers = () => {
  const [hover, setHover] = useState(false);

  const hoverHandle = () => {
    setHover(!hover);
  };

  return (
    <>

      {/* Hero Verde */}
      <div className="font-mono bg-green-600">
        <div className="w-full h-screen flex flex-col justify-center p-6">
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            2023 IEEE International Conference on Engineering Veracruz (IEEE
            ICEV 2023)®
          </h1>

          <h2 className="mt-5 text-white md:text-5xl sm:text-4xl text-2xl font-bold md:py-6">
            Engineering Advances for the Benefit of Humanity Boca del Río,
            Veracruz
          </h2>
        </div>
      </div>
      {/* Hero Verde */}

      {/* Main Principal */}
      <main className="container mx-auto my-10">
        <h2 className="mt-5 text-center md:text-5xl sm:text-4xl text-2xl font-bold md:py-6 uppercase my-4">
          Description
        </h2>
        <div className="">
          <div
            className="relative bg-no-repeat bg-cover h-48 md:h-screen rounded-xl"
            style={{ backgroundImage: `url(${CallToPapersImage})` }}
            onMouseEnter={hoverHandle}
            onMouseLeave={hoverHandle}
          >
            <div
              className={
                hover
                  ? "absolute inset-0 w-full h-full bg-black bg-opacity-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 rounded-xl text-center"
                  : "absolute inset-0 w-full h-full bg-opacity-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 rounded-xl"
              }
            >
              {hover ? (
                <a
                  href="src/assets/call-to-papers.png"
                  className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 text-white text-4xl"
                >
                  View Full Image
                </a>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="flex flex-col justify-evenly ">
            <p>
              On behalf of the Organizing Committee, we have the pleasure to
              invite you to submit your contributions to the 2023 IEEE
              International Conference on Engineering Veracruz (IEEE ICEV 2023®)
              (2023 IEEE Conferencia Internacional de las Ingenierías Veracruz).
              The conference will be held in a On-Site Environment from 23 to 26
              October 2023, organized by the Universidad Veracruzana, the IEEE
              Student Branches and IEEE EDS Student Chapter with the support of
              IEEE Veracruz Section, Instituto Internacional de Innovación
              Tecnológica Inteligente de las Ingenierías (IIITII) and
              Universidad Cristóbal Colón (UCC).
            </p>

            <p>
              IEEE ICEV 2023® is technically sponsored by IEEE. Accepted papers
              will be submitted for inclusion into IEEE Xplore. Authors from all
              over the world are invited to submit original and unpublished
              papers, which are not under review in any other conference. All
              papers will be peer reviewed by the technical program committee.
              Submitted papers must be written in English and should be in PDF
              format. Paper length must be between 4 and 6 pages.
            </p>
          </div>
        </div>

        <h2 className="mt-5 text-center md:text-3xl sm:text-4xl font-bold md:py-6 uppercase my-4">
          Important Information
        </h2>
      </main>
    </>
  );
};

export default CallForPapers;
