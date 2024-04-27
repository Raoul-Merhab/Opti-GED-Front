"use client";
import Sidebar from "@/components/Sidebar";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import Api from "@/api/Api";

const page = ({ params }) => {
  const pathname = usePathname();
  const idProject = pathname.split("/")[pathname.split("/").length - 1];
  const [project, setproject] = useState({
    description:"",
    idProjet:null,
    nom:"",
    user_id:null
  });
  const [pdfActive, setpdfActive] = useState(false);
  const [resultPDFActive, setresultPDFActive] = useState(false);
  const [rapport, setrapport] = useState(null);
  const [circuitActive, setcircuitActive] = useState(false);
  useEffect(()=>{
    let pathx = "/projet/"+idProject
    console.log(pathx);
    Api.get(pathx).then((response) => {
      setproject(response.data)
    })
  },[])
  // params.ProjectNumber = id tae l project
  function handleChange(e) {
    const file = e.target.files[0];
    setrapport(file);
    var fileReader = new FileReader();
    var base64File;
    fileReader.onload = function (event) {
      base64File = event.target.result;
      // send base64 to backend et f le last then =>
    };
  }
  function handleClick(e) {
    e.preventDefault();
    if (rapport != null) {
      setpdfActive(false);
      setresultPDFActive(true);
    }
  }
  function handleClickDetails(e) {
    e.preventDefault();
    setpdfActive(false);
    setresultPDFActive(false);
  }
  return (
    <div className="relative">
      <div
        className="w-full flex flex-row"
        style={{
          opacity: pdfActive === false && resultPDFActive === false ? 1 : 0.3,
        }}
      >
        <Sidebar  onClick={() => {setpdfActive(false); setresultPDFActive(false);}} projet={true} />
        <div className="right ml-[20%] w-auto pl-[5%] pr-[10%] py-[5%] flex flex-col ">
          <h1 className="text-4xl font-semibold mb-8">
            {project.nom}
          </h1>
          <h2 className="text-xl font-semibold mb-1">Description :</h2>
          <p className="text-[#575757] mb-8">
            {
              project.description
            }
          </p>
          <h2 className="text-xl font-semibold mb-3">Fonctionnalités</h2>
          <div className="flex gap-10 flex-row">
            <div
              className="card cursor-pointer flex flex-col bg-white px-[2%] py-4 gap-4 rounded-lg hover:scale-105"
              onClick={() => {
                setpdfActive(!pdfActive);
              }}
            >
              <div className="w-full h-auto">
                <img
                  src="/images/audit.png"
                  alt=""
                  className="rounded-lg w-full"
                />
              </div>
              <h2 className="w-4/5">
                Examiner le rapport d’audit documentaire
              </h2>
            </div>
            <a href={"/AmeliorerCircuit/" + idProject}>
              <div className="card cursor-pointer flex flex-col bg-white px-[2%] py-4 gap-4 rounded-lg hover:scale-105">
                <div className="w-full h-auto">
                  <img
                    src="/images/circuit.png"
                    alt=""
                    className="rounded-lg w-full"
                  />
                </div>
                <h2 className="w-4/5">
                  Examiner un circuit de validation (workflow)
                </h2>
              </div>
            </a>
          </div>
        </div>
      </div>
      {pdfActive && (
        <div className="absolute w-[40vw] bg-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 rounded-xl flex flex-col items-center justify-center gap-10 py-10">
          <div className="w-4/5 border-2 border-dashed flex flex-col justify-center items-center h-auto relative gap-4 py-4">
            <IoCloudUploadOutline size={100} />
            <h2>
              Drag&Drop le rapport ou{" "}
              <span className="border-bottom-2">l'importer</span>
            </h2>
            <p>Le rapport d'audit va etre examiné</p>
            <input
              type="File"
              className="w-full h-full block opacity-0 absolute"
              accept="application/pdf"
              onChange={(e) => handleChange(e)}
            />
          </div>
          {rapport != null && <p>{rapport.name}</p>}
          <button
            className="px-6 py-2 flex items-center justify-center bg-black text-white rounded-lg"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Suivant
          </button>
        </div>
      )}
      {resultPDFActive && (
        <div className="absolute w-[40vw] bg-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 rounded-xl flex flex-col items-center justify-center gap-10 py-10">
          <div className="results w-4/5">
            <p>N acteurs trouvés</p>
            <p>N documents trouvés</p>
            <p>N circuits de validation</p>
          </div>
          <button
            className="px-6 py-2 flex items-center justify-center bg-black text-white rounded-lg"
            onClick={(e) => {
              handleClickDetails(e);
            }}
          >
            Voir détails
          </button>
        </div>
      )}
    </div>
  );
};

export default page;
