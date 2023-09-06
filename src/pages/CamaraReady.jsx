import React from "react";
import { BsFillFileWordFill } from "react-icons/bs";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";

function CamaraReady() {
  return (
    <>
      {/* Hero azul */}
      <div className="font-mono bg-blue-600">
        <div className="w-full h-screen flex flex-col justify-center px-20">
          <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold md:py-6 text-center">
            Camera Ready IEEE ICEV 2023®
          </h1>

          <h2 className="my-5 text-white md:text-3xl sm:text-2xl text-4xl font-bold md:py-6 text-center">
            Engineering Advances for the Benefit of Humanity Boca del Río,
            Veracruz
          </h2>

          <div className="mx-auto w-fit flex flex-col md:flex-row gap-4">
            <a
              href="/assets/camara.pdf"
              className="text-xl uppercase bg-black  text-white py-2 px-4 rounded-xl  hover:bg-white hover:text-black transition-all duration-500 "
            >
              View Full Document
            </a>
          </div>
        </div>
      </div>
      {/* Hero azul */}

      {/* Main Principal */}
      <main className="container mx-auto my-2 text-justify ">
        <div>
          <div className="grid grid-cols-1 gap-12 text-md md:text-2xl my-10 mx-5 md:mx-10">
            <h3 className="font-bold ">Dear Author</h3>
            <div className="text-justify ">
              <p>
                We are writing to inform you that you can submit your
                Camera-Ready paper until September 29, 2023.
              </p>

              <p className="mb-4">
                Before submitting the final version of your paper, please follow
                the instructions:
              </p>
              <a
                href="https://www.ieeeicev.org/#/submission-of-papers"
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250 px-4 py-2 text-center mx-5 md:w-fit md:mx-auto font-extrabold uppercase bg-gray-500 text-white rounded-xl flex justify-center items-center gap-2"
              >
                <p>Submission Of Papers</p>
              </a>
            </div>
            <h3 className="font-bold">
              Step 1: Use of the proper IEEE ICEV 2023® template
            </h3>
            <p>
              • If all the authors of your paper are from the same institution
              or organization, please use the following template
            </p>
            <a
              href="/assets/t1.doc"
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250 px-4 py-2 text-center mx-5 md:w-fit md:mx-auto font-extrabold uppercase bg-gray-500 text-white rounded-xl flex justify-center items-center gap-2"
            >
              <BsFillFileWordFill /> <p>Template</p>
            </a>

            <p>
              Using this template, you may differentiate among departments of
              the organization or you may decide not to mention departments.{" "}
            </p>

            <p>
              • If the authors of your paper are from two institutions or
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
              mention departments.{" "}
            </p>

            <p>
              • If the authors of your paper belong to three or more
              institutions or organizations, please use the following template:
            </p>

            <a
              href="/assets/t3.doc"
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250 px-4 py-2 text-center mx-5 md:w-fit md:mx-auto font-extrabold uppercase bg-gray-500 text-white rounded-xl flex justify-center items-center gap-2"
            >
              <BsFillFileWordFill /> <p>Template 3</p>
            </a>

            <p>
              Using this template, you may differentiate among organizations or
              institutions, but you are asked not to mention departments.{" "}
            </p>

            <p>The ISBN of the conference proceedings for IEEE Xplore is: </p>

            <h2 className="font-bold text-center">979-8-3503-1295-9</h2>
            <p>which will be published under the copyright of the IEEE </p>

            <h3 className="font-bold">
              Step 2: Creating your PDF using IEEE PDF eXpress
            </h3>

            <p>
              Publication of paper in IEEE Xplore requires a standard format for
              PDF files. IEEE provides a web site and online software to help
              you either to convert source files or to check PDF files for IEEE
              Xplore-compatibility.{" "}
            </p>

            <p>
              Access the IEEE PDF eXpress web site at (IEEE PDF eXpress Site
              opens: 2023-09-10):{" "}
            </p>

            <a
              href="https://ieee-pdf-express.org/"
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250 px-4 py-2 text-center mx-5 md:w-fit md:mx-auto font-extrabold uppercase bg-gray-500 text-white rounded-xl"
            >
              IEEE PDF EXPRESS
            </a>

            <p>The Login page will be displayed</p>

            <img src={img1} alt="" />

            <p>
              If you are a new user of IEEE PDF eXpress, click on the link: ​New
              Users – Click here to create an account.{" "}
            </p>

            <img src={img2} alt="" />

            <p>
              Creating your PDF eXpress Account Log in to the IEEE PDF eXpress
              TM site First-time users should do the following:{" "}
            </p>

            <div className="mx-auto">
              <p>1. Select the New Users - Click Here link.</p>
              <p>2. Enter the following:</p>
              <p>
                {" "}
                • 59168X for the Conference ID • your email address • a password
              </p>
              <p>3. Continue to enter information as prompted.</p>
            </div>

            <p>
              An Online confirmation will be displayed and an e-mail
              confirmation will be sent verifying your account setup. Previous
              users of PDF eXpress need to follow the above steps, but should
              enter the same password that was used for previous conferences.
              Verify that your contact information is valid. Upload source
              file(s) for Conversion; and/or PDF(s) for Checking. The site
              contains extensive instructions, resources, helpful hints, and
              access to technical support.{" "}
            </p>

            <h3 className="font-bold">
               Step 3: Submitting your validated final paper{" "}
            </h3>

            <p>
              Your final paper, already validated by IEEE PDF eXpress, must be
              sent directly to:{" "}
            </p>
            <a
              href="malito:presidenciaieee@uv.mx"
              type="email"
              className="text-center font-bold"
            >
              presidenciaieee@uv.mx
            </a>
            <p>
              and they must register with their payment in the following link
            </p>

            <a
              href="https://www.uv.mx/veracruz/microna/icevresgistro/"
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250 px-4 py-2 text-center mx-5 md:w-fit md:mx-auto font-extrabold uppercase bg-gray-500 text-white rounded-xl"
            >
              ICEV REGISTER
            </a>

            <p>Thank you very much for your contribution. Best regards, </p>
            <p className="font-thin">
              *Verify, before sending the PDF eXpress, if the authors
              transferred the electronically copyright, if not, wait for the
              corresponding copyright e-mail.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default CamaraReady;
