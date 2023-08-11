import FootterLogos from "../componentes/FootterLogos";
import { Link } from "react-router-dom";

const CallForPapers = () => {
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
            Engineering Advances for the Benefit of Humanity Boca del Río,
            Veracruz
          </h2>

          <div className="mx-auto w-fit flex flex-col md:flex-row gap-4">
            <a
              href="/assets/call-for-paper.pdf"
              className="text-xl uppercase bg-black  text-white py-2 px-4 rounded-xl  hover:bg-white hover:text-black transition-all duration-500 "
            >
              View Full Document
            </a>
            <Link
              className="text-xl uppercase bg-black  text-white py-2 px-4 rounded-xl  hover:bg-white hover:text-black transition-all duration-500 "
              to="/submission-of-papers"
            >
              Submission Of Papers
            </Link>
          </div>
        </div>
      </div>
      {/* Hero azul */}

      {/* Main Principal */}
      <main className="container mx-auto my-2 text-justify">
        <div>
          <div className="grid grid-cols-1 gap-12 text-md md:text-2xl my-10 mx-5 md:mx-10">
            <p>
              On behalf of the Organizing Committee, we have the pleasure to
              invite you to submit your contributions to the 2023 IEEE
              International Conference on Engineering Veracruz (IEEE ICEV 2023®)
              (2023 IEEE Conferencia Internacional de las Ingenierías Veracruz).
              The conference will be held in a On-Site Environment from 23 to 26
              October 2023, organized by the Universidad Veracruzana, the CASS
              Professional Chapter, the IEEE Student Branches, IEEE EDS Student
              Chapter and IEEE RAS Student Chapter with the support of IEEE
              Veracruz Section, Instituto Internacional de Innovación
              Tecnológica Inteligente de las Ingenierías (IIITII), Universidad
              Cristóbal Colón (UCC) and Consejo Veracruzano de Investigación
              Científica y Desarrollo Tecnológico (Coveicydet).
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

            <p className="text-center">
              The ISBN of the conference proceedings for IEEE Xplore is:{" "}
              <span className="font-extrabold">979-8-3503-1295-9</span>
            </p>
          </div>

          <div>
            <h3 className="sm:rounded-xl py-4 bg-blue-500 text-center text-white font-bold text-xl md:text-3xl">
              Submission Guidelines
            </h3>

            <div className="grid grid-cols-1 gap-8 mx-4 my-8 text-md md:text-2xl ">
              <p>
                All papers must be original and not simultaneously submitted to
                another journal or conference. Papers must be prepared using the
                IEEE conference templates.
              </p>

              <a
                href="https://www.ieee.org/conferences/publishing/templates.html"
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250 px-4 py-2 text-center mx-5 md:w-fit md:mx-auto font-extrabold uppercase bg-gray-500 text-white rounded-xl"
              >
                Manuscript Templates for Conference Proceedings
              </a>

              <p>All papers must be uploaded using following link:</p>
              <a
                href="https://www.uv.mx/veracruz/microna/icevsubmission/"
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250 px-4 py-2 text-center mx-5 md:w-fit md:mx-auto font-extrabold uppercase bg-gray-500 text-white rounded-xl"
              >
                ICEV submission
              </a>
            </div>
          </div>

          <div className="text-center ">
            <h3 className="sm:rounded-xl py-4 bg-blue-500 text-white font-bold text-xl md:text-3xl">
              Important Information
            </h3>
            <ul className="mx-10 py-2 font-mono w-fit sm:mx-auto md:text-2xl xl:text-3xl">
              <div className=" rounded-xl m transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250 md:flex md:justify-center   p-4 ">
                <p className="md:mr-8">Peper Submission DeadLine:</p>
                <p>August 1, 2023</p>
              </div>

              <div className=" rounded-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-250 md:flex md:justify-center   p-4 ">
                <p className="md:mr-8">Notification of acceptance after:</p>
                <p>August 31, 2023</p>
              </div>

              <div className=" rounded-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-250 md:flex md:justify-center   p-4 ">
                <p className="md:mr-8">Camera-ready due:</p>
                <p>September 17, 2023</p>
              </div>

              <div className=" rounded-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-250 md:flex md:justify-center   p-4 ">
                <p className="md:mr-8">
                  Registration and Payment Deadline for authors:
                </p>
                <p>October 15, 2023</p>
              </div>

              <div className=" rounded-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-250 md:flex md:justify-center   p-4 ">
                <p className="md:mr-8">Registration Deadline:</p>
                <p>October 21, 2023</p>
              </div>

              <div className=" rounded-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-250 md:flex md:justify-center   p-4 ">
                <p className="md:mr-8">Presentation of Papers:</p>
                <p>23 to 26 October, 2023</p>
              </div>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default CallForPapers;
