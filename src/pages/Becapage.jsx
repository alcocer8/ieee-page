import React from "react";
import Back from "../assets/back2.jpg";
import { Navigate, useNavigate } from "react-router-dom";

function Becapage() {
  const navigate = useNavigate();

  function handleClick() {
    window.scrollTo(0, 0);
  }

  return (
    <div className="mx-auto container">
      <div className="flex flex-wrap">
        <div className="w-full sm:w-8/12 mb-10">
          <div className="container mx-auto h-full sm:p-10">
            <nav className="flex px-4 justify-between items-center">
              <div className=" text-xl  md:text-3xl font-bold">
                2023 IEEE International Conference on Engineering Veracruz
                <span className="text-blue-700">(IEEE ICEV 2023®).</span>
              </div>
            </nav>
            <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1 className="text-4xl lg:text-6xl font-bold">
                  Te invita a participar en su programa de{" "}
                  <span className="text-blue-700">BECAS</span> de Inscripción
                  para Estudiantes
                </h1>
                <div className="w-20 h-2 bg-blue-700 my-4"></div>
              </div>
            </header>
          </div>
        </div>
        <img
          src={Back}
          alt="Logo"
          className="w-full h-48 object-cover sm:h-screen sm:w-4/12"
        />
      </div>

      <div className="w-11/12 h-2 bg-blue-700 my-10 mx-auto "></div>
      {/* Aqui comienza el contenido  */}

      <div className="bg-white ">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
          <div className="text-center">
            <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
              REQUISITOS
            </p>
            <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
              Sigue estos pasos para participar para una{" "}
              <span className="text-blue-600">BECA</span>
            </h3>
          </div>

          <div className="mt-20">
            <ul className="">
              <li className="text-left mb-10">
                <div className="flex flex-row items-start">
                  <div className="flex flex-col items-center justify-center mr-5">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-500 text-white border-4 border-white text-xl font-semibold">
                      1
                    </div>
                    <span className="text-gray-500">PASO</span>
                  </div>
                  <div className="bg-gray-100 p-5 pb-10 ">
                    <h4 className="text-lg leading-6 font-semibold text-gray-900">
                      Ser estudiante activo
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Estar inscrito en una institución educativa de Nivel
                      Medio-Superior o Nivel Superior (Bachillerato o
                      Universidad).
                    </p>
                  </div>
                </div>
              </li>
              <li className="text-left mb-10">
                <div className="flex flex-row items-start">
                  <div className="flex flex-col items-center justify-center mr-5">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-500 text-white border-4 border-white text-xl font-semibold">
                      2
                    </div>
                    <span className="text-gray-500">PASO</span>
                  </div>
                  <div className="bg-gray-100 p-5 pb-10 ">
                    <h4 className="text-lg leading-6 font-semibold text-gray-900">
                      Envia tus datos
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Contestar el cuestionario que se presenta a continuación.
                      (en el botón FORMULARIO encontraras el cuestionario)
                    </p>
                  </div>
                </div>
              </li>
              <li className="text-left mb-10">
                <div className="flex flex-row items-start">
                  <div className="flex flex-col items-center justify-center mr-5">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-500 text-white border-4 border-white text-xl font-semibold">
                      3
                    </div>
                    <span className="text-gray-500">PASO</span>
                  </div>
                  <div className="bg-gray-100 p-5 pb-10 ">
                    <h4 className="text-lg leading-6 font-semibold text-gray-900">
                      Pertenecer a una rama
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Contar con Rama Estudiantil IEEE en tu institución
                      educativa
                    </p>
                  </div>
                </div>
              </li>
              <li className="text-left mb-10">
                <div className="flex flex-row items-start">
                  <div className="flex flex-col items-center justify-center mr-5">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-500 text-white border-4 border-white text-xl font-semibold">
                      4
                    </div>
                    <span className="text-gray-500">PASO</span>
                  </div>
                  <div className="bg-gray-100 p-5 pb-10 ">
                    <h4 className="text-lg leading-6 font-semibold text-gray-900">
                      Seguirnos en la pagina de Facebook
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Publicamos toda la infomacion acerca del evento
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Aqui acaba el contenido */}
      {/* Aqui Empieza el boton */}
      <div
    
        className="h-20 flex flex-col justify-center relative overflow-hidden "
      >
        <div className="max-w-7xl mx-auto">
          <div className="relative group cursor-pointer">
            <div className=" bg-slate-200 absolute -inset-1 bg-gradient-to-r from-blue-600 to-slate-800 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
              <div className="space-y-2">
                <a href="https://forms.gle/8dBhvpg9qrW8pxVbA" className="font-mono">
                  Realiza la encuesta
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Aqui Termina el boton */}
    </div>
  );
}

export default Becapage;
