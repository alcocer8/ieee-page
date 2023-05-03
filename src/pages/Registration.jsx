import React from "react";
import FootersLogos from "../componentes/FootterLogos"
import FootterLogos from "../componentes/FootterLogos";

const Registration = () => {
  return (
    <>
      <h1 className="text-2xl text-center font-bold my-4 ">
        Registration Fees and Procedure
      </h1>

      <div className="container mx-auto text-justify">
        <h2 className="text-xl my-4 font-bold">Registration fees</h2>

        <p className="text-xl">
          These are cost of registration for authors of accepted papers and
          other attendees, with differencces in the fees for members of the
          institute of Electrical and Electronics Engineers (IEEE) with a{" "}
          <span className="text-red-500">valid ID for 2023 membership.</span>
        </p>

        <p className="text-red-500">
          All fees are in Mexican Pesos (MXM) and are not subject to taxes
        </p>

        <div className="mx-auto my-10 w-ful md:px-20">
          <table className="mx-auto w-full my-10">
            <tr className="bg-blue-500 text-white pb-4">
              <th className="text-center">
                <h3>
                  IEEE ICEV 2023 Registration Fees <span className="text-xs">1</span>{" "}
                </h3>
                <span className="text-red-600">
                  All fees in Mexican Pesos (MXN)
                </span>
              </th>
              <th>Regular</th>
              <th>IEEE Members</th>
            </tr>
            <tr>
              <td className="text-center">
                Author, per each paper presented <span className="text-xs">2</span>{" "}
              </td>
              <td>$ 7,500.00</td>
              <td>$ 4,500.00</td>
            </tr>
            <tr>
              <td className="text-center">Professio nal attendee</td>
              <td>$ 2,000.00</td>
              <td>$ 1,000.00</td>
            </tr>
            <tr>
              <td className="text-center">Student attendee</td>
              <td>$ 800.00</td>
              <td>$ 400.00</td>
            </tr>
          </table>

          <div className="font-light text-blue-900 ">
            <p>
              <span>1.</span> Fees will cover maintly the costs of meeting IEEE
              standars for publication and other organisation expenses
            </p>
            <p>
              <span>2.</span> This fee includes registration to the conference
              and presentation of only one paper
            </p>
          </div>
        </div>

        <h2 className="text-center text-xl md:text-2xl my-5">
          Datos de pago/ Payment Infomation
        </h2>

        <table className="border-separate border-2 border-slate-800 mx-auto text-center" >
          <tr>
            <td className="border-2 border-slate-700 " >Beneficiario</td>
            <td className="border-2 border-slate-700 px-4">
              INSTITUTO INTERNACIONAL DE INNOVACION TECNOLOGICA INTELIG SC
            </td>
          </tr>

          <tr>
            <td className="border-2 border-slate-700">Clave Interbancaria</td>
            <td className="border-2 border-slate-700">012905001156890829</td>
          </tr>
          <tr>
            <td className="border-2 border-slate-700">Código SWIFT/BIC</td>
            <td className="border-2 border-slate-700">BCMRMXMMPYM</td>
          </tr>
          <tr>
            <td className="border-2 border-slate-700">Formato de cuenta</td>
            <td className="border-2 border-slate-700">Pesos Mexicanos (MXN)</td>
          </tr>
          <tr>
            <td className="border-2 border-slate-700">Banco</td>
            <td className="border-2 border-slate-700">BBVA Bancomer</td>
          </tr>
          <tr>
            <td className="border-2 border-slate-700">Pais</td>
            <td className="border-2 border-slate-700">Mexico</td>
          </tr>
          <tr>
            <td className="border-2 border-slate-700">Ciudad</td>
            <td className="border-2 border-slate-700">Veracruz</td>
          </tr>
        </table>
      </div>

    </>
  );
};

export default Registration;
