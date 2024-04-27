"use client";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";
import Datagrid from "./Datagrid";

const page = ({ params }) => {
  const [Acteurs, setActeurs] = useState();
  return (
    <div className="w-full flex flex-row">
      <Sidebar projet={true} />
      <div className="ml-[20%] w-auto pt-10 pl-10 flex flex-col gap-8">
        <h1 className="text-4xl font-semibold">Amazon</h1>
        <div className="desc flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Description :</h2>
          <p>
            Optimisation des processus de demande de congé et de publication
            d’arrêté juridique d’Amazon.
          </p>
        </div>
        <Datagrid />
      </div>
    </div>
  );
};

export default page;
