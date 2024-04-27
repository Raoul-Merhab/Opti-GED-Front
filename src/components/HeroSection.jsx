import React from "react";
import { FaArrowRightLong, FaGithub } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="w-full flex flex-row justify-between">
      <div className="Left w-1/2 flex flex-col gap-16">
        <h1 className="text-4xl font-semibold">
        Anticipez les changements de votre GED
        </h1>
        <p className="text-[#606060] text-lg">
        Une solution destinée aux prestataires de solutions de gestion électronique de documents pour optimiser le déploiement des outils GED.
        </p>
        <div className="buttons flex flex-row items-center gap-10">
          <a href={localStorage.getItem("token")?"/ProjectCreation":"SignIn"}>
            <button className="flex flex-row items-center gap-2 text-white bg-noir py-2 px-4 rounded-xl">
              <p>Créer un projet</p>
              <FaArrowRightLong />
            </button>
          </a>
          <a href="/SignUp">
            <button className="flex flex-row items-center gap-2 bg-white text-noir py-2 px-4 rounded-xl">
              Se connecter
            </button>
          </a>
        </div>
        <div className="compatible flex flex-col gap-2">
          <p>Compatible avec</p>
          <div className="LogosGED flex flex-row gap-6">
            <div className="bg-white py-1 px-2 flex items-center justify-center rounded-xl">
              <img src="/images/logoAWS.png" alt="logoAWS" />
            </div>
            <div className="bg-white py-1 px-2 flex items-center justify-center rounded-xl">
              <img src="/images/logoOB.png" alt="logoAWS" />
            </div>
            <div className="bg-white py-1 px-2 flex items-center justify-center rounded-xl">
              <img src="/images/logoDO.png" alt="logoAWS" />
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="/images/HeroBG.png" alt="Hero image" />
      </div>
    </div>
  );
};

export default HeroSection;
