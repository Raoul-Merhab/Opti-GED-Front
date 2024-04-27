"use client";
import Sidebar from "@/components/Sidebar";
import React, { useEffect, useState } from "react";
import Datagrid from "./Datagrid";
import Api from "@/api/Api";
import Urls from "@/api/Urls";
import { usePathname } from "next/navigation";

const page = ({ params }) => {
  const pathname = usePathname();
  const idProject = pathname.split("/")[pathname.split("/").length - 1];
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
        <Datagrid data={Acteurs}/>
      </div>
    </div>
  );
};

export default page;
