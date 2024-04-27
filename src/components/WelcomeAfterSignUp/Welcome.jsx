import React from "react";
import OneFunc from "./OneFunc";

const Welcome = () => {
  return (
    <div className="w-full flex justify-center flex-col items-center gap-3">
      <h1 className="text-black text-4xl font-bold">
        Bienvenue à Nom_Solution, Nom_User
      </h1>
      <p className="text-[#A1A1A1] text-lg">
        Profitez des avantages qu’offre notre solution complémentaire
      </p>
      <div className="flex flex-row gap justify-center items-center gap-6">
        <OneFunc />
        <OneFunc />
        <OneFunc />
      </div>
      <a href="/ListeProjets">
        <button className="bg-black text-white py-3 px-6 text-2xl rounded-2xl">
          C'est parti !
        </button>
      </a>
    </div>
  );
};

export default Welcome;
