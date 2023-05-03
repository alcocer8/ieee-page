import React from "react";
import FootterLogos from "../componentes/FootterLogos";

const Topics = () => {
  return (
    <div className="text-center">
      <h3 className="sm:rounded-xl py-4 font-bold text-xl md:text-3xl">
        List Of Topic But Not Limited To The Following Area
      </h3>

      <div className="my-10 grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm sm:text-xl font-bold uppercase ">
        <div className="bg-blue-400 p-4 m-2 rounded-xl text-white flex flex-col justify-center">
          <p>Power Engineering</p>
          <p>Materials Science and Engineering</p>
          <p>Nanomedice and Biomedical Engineering</p>
          <p>Mechanical Engineering</p>
          <p>Electrical Engineering</p>
          <p>Electronic Engineering</p>
          <p>Mechatronics Engineering</p>
          <p>Chemical Engineering</p>
          <p>Computational Engineering</p>
          <p>Energy Harvesting</p>
          <p>Micro and Nanosystem</p>
          <p>Micro and Nanotechnology</p>
        </div>

        <div className="p-4 m-2 rounded-xl">
          <p>Communication Systems</p>
          <p>Devices and Sensors</p>
          <p>MEMS</p>
          <p>NEMS</p>
          <p>Application Specific Integrared Circuits(ASIC)</p>
          <p>Modelling and Simulation</p>
          <p>Internet of Things and Industry 4.0</p>
          <p>Electronic Instrumentation Engineering</p>
          <p>Signal Processing Engineering</p>
          <p>Physics and Processing Engineering</p>
          <p>Physics and Optical Engineering</p>
          <p>Educational Innovation with Information and Communication</p>
        </div>

        <div className="bg-blue-400 p-4 m-2 rounded-xl text-white flex flex-col justify-center">
          <p>Educational Systems And Enviromenmets</p>
          <p>Information Technologies In Organizations</p>
          <p>Infomation Technology Management</p>
          <p>Research, Innovation and Development In Organizations</p>
          <p>Circular Economy And Sustainability</p>
          <p>Recycling Economy</p>
          <p>Renewable Energy</p>
        </div>
      </div>
    </div>
  );
};

export default Topics;
