import React from "react";

function Survey() {
  return (
    <div>
      <div className="my-10">
        <h1 className="text-center text-3xl font-bold uppercase">Bases</h1>
        <ul className="container mx-auto text-xl font-mono my-10">
          <li>
            <p className="">
              1. Se otorgaran las 50 Becas de inscripcion para participantes con
              constancia de asistencia
            </p>
          </li>
          <li>
            <p>
              2. Se analizaran los cuestionarios de los aspirantes pra elegir a
              los 50 beneficiarios de su inscripcion como estudiantes
            </p>
          </li>
          <li>
            <p>
              3. La inscripcion finaliza el dia --- a traves de la pagina de
              FAceboo y podran participar en la rifa espacial para estudiantes
              asistentes al menos con el 85% de todas las actividades del evento
              IEEE ICEV 2023
            </p>
          </li>
        </ul>
      </div>
      <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
        <div className="mt-10 text-center font-bold">Ingresa tus datos</div>
        <div className="mt-3 text-center text-4xl font-bold text-blue-400">
          Queremos conocerte
        </div>
        <div className="p-8">
          <div className="md:flex gap-4">
            <input
              type="Name"
              name="name"
              className="w-full my-2 mt-1 block md:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Ingresa tu nombre "
            />
            <input
              type="email"
              name="email"
              className="w-full my-2 mt-1 block md:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Correo Electronico"
            />
          </div>
          <div className="my-6 md:flex gap-4">
            <input
              type="number"
              name="telefono"
              className="w-full my-2 mt-1 block md:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Numero de telefono"
            />
            <input
              type="text"
              name="institucion"
              className="w-full my-2 mt-1 block md:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Institucion educativa a la que perteneces"
            />
          </div>

          <div className="my-6 md:flex gap-4">
            <input
              type="text"
              name="ieee"
              className="w-full my-2 mt-1 block md:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="¿Eres miembro IEEE?"
            />
            <input
              type="text"
              name="institucion"
              className="w-full my-2 mt-1 block md:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="En caso de serlo, agrega numero"
            />
          </div>

          <div className="my-6 md:flex gap-4">
            <input
              type="text"
              name="ieee"
              className="w-full my-2 mt-1 block md:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="¿Eres miembro IEEE?"
            />
            <input
              type="text"
              name="institucion"
              className="w-full my-2 mt-1 block md:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="En caso de serlo, agrega numero"
            />
          </div>
          <div className="md:flex my-6 gap-4">
            <textarea
              name="textarea"
              id="text"
              cols="20"
              rows="4"
              className="w-full my-2 mt-1 block md:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Menciona 3 beneficios de ser miembro IEEE"
            ></textarea>
            <textarea
              name="textarea"
              id="text"
              cols="20"
              rows="4"
              className="w-full my-2 mt-1 block md:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="¿Porque te intersa asistir al ICEV IEEE 2023?"
            ></textarea>
          </div>

          <div className="md:flex gap-4">
            <textarea
              name="textarea"
              id="text"
              cols="20"
              rows="4"
              className="w-full my-2 mt-1 block md:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="¿Que aportaria tu formacion profesional el asistir al IEEE ICEV 2023?"
            ></textarea>
            <textarea
              name="textarea"
              id="text"
              cols="20"
              rows="4"
              className="w-full my-2 mt-1 block md:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Queremos conocerte mejor, compartenos tu historia o las metas que quieres conseguir con esta beca"
            ></textarea>
          </div>

          <div className="text-center mt-6">
            <button className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">
              Enviar Datos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Survey;
