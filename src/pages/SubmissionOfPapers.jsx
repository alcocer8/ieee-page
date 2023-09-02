import React from "react";
import { BsFillFileWordFill } from "react-icons/bs";

const SubmissionOfPapers = () => {
  return (
    <>
      <h1 className="text-3xl md:text-4xl text-center mt-4">
        Submission Of Papers
      </h1>

      <div className="container px-3 md:mx-auto text-justify font-light text-xl py-6">
        <h2 className="text-2xl my-3">Authors are welcome!</h2>

        <p>
          Authors from all over the world are invited to submit original and
          unpublished papers to the 2023 IEEE International Conference on
          Engineering Veracruz (IEEE ICEV 2023®).
          <br />
          All papers will be peer reviewed by the program committee. Submitted
          papers must be written in English and should be in PDF format. Paper
          length must be between 4 and 6 pages. All papers must be original and
          not simultaneously submitted to another journal or conference.
        </p>

        <p className="my-3">
          You can submit your paper until{" "}
          <span className="bg-red-500 px-2 py-1 text-white font-bold rounded-md">
            August 1, 2023
          </span>
        </p>

        <p>Before submitting your paper, please follow the instructions:</p>

        <h3 className="sm:rounded-xl py-4 bg-blue-500 text-center text-white text-xl md:text-3xl px-4 rounded-xl font-semibold my-4">
          Step 1. Use of the proper IEEE-ICEV template:
        </h3>

        <div className="my-4 grid grid-col-1 md:grid-cols-3 gap-8 text-justify">
          <div className="flex flex-col gap-5">
            <p>
              If all the authors of your paper are from the same institution or
              organization, please use the following template:
            </p>
            <a
              href="/assets/t1.doc"
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250 px-4 py-2 text-center mx-5 md:w-fit md:mx-auto font-extrabold uppercase bg-gray-500 text-white rounded-xl flex justify-center items-center gap-2"
            >
              <BsFillFileWordFill /> <p>Template</p>
            </a>

            <p>
              Using this template, you may diffe rentiate among departments of
              the organization or you may decide not to mention departments.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <p>
              If the authors of your paper are from two institutions or
              organizations, please use the following template:
            </p>
            <a
              href="/assets/t2.doc"
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250 px-4 py-2 text-center mx-5 md:w-fit md:mx-auto font-extrabold uppercase bg-gray-500 text-white rounded-xl flex justify-center items-center gap-2"
            >
              <BsFillFileWordFill /> <p>Template 2</p>
            </a>

            <p>
              Using this template, you classify your authors in two groups,
              according to the organization, and you may also differentiate
              among departments of the organization or you may decide not to
              mention departments.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <p>
              If the authors of your paper belong to three or more institutions
              or organizations, please use the following template:
            </p>

            <a
              href="/assets/t3.doc"
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250 px-4 py-2 text-center mx-5 md:w-fit md:mx-auto font-extrabold uppercase bg-gray-500 text-white rounded-xl flex justify-center items-center gap-2"
            >
              <BsFillFileWordFill /> <p>Template 3</p>
            </a>

            <p>
              Using this template, you may differentiate among organizations or
              institutions, but you are asked not to mention departments.
            </p>
          </div>
        </div>

        <h3 className="sm:rounded-xl py-4 bg-blue-500 text-center text-white text-xl md:text-3xl px-4 rounded-xl font-semibold my-4">
          All papers must be uploaded using following link
        </h3>

        <div className="flex items-center justify-center">
          <a
            href="https://www.uv.mx/veracruz/microna/icevsubmission/"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250 px-4 py-2 text-center mx-5 md:w-fit md:mx-auto font-extrabold uppercase bg-gray-500 text-white rounded-xl"
          >
            ICEV submission
          </a>
        </div>

        <h3 className="sm:rounded-xl py-4 bg-blue-500 text-center text-white text-xl md:text-3xl px-4 rounded-xl font-semibold my-4">
          Templates for speakers
        </h3>

        <div className="flex items-center justify-center">
          <a
            href="/assets/ICEV.pptx"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250 px-4 py-2 text-center mx-5 md:w-fit md:mx-auto font-extrabold uppercase bg-gray-500 text-white rounded-xl"
          >
            Background ICEV 2023
          </a>

          <a
            href="https://brand-experience.ieee.org/templates/ieee-powerpoint-templates/"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250 px-4 py-2 text-center mx-5 md:w-fit md:mx-auto font-extrabold uppercase bg-gray-500 text-white rounded-xl"
          >
            official templates IEEE
          </a>
        </div>

      </div>
    </>
  );
};

export default SubmissionOfPapers;
