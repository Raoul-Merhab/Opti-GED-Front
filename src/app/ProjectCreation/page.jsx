import Navbar from "@/components/Navbar";
import React from "react";
import FormCreationProjet from "@/components/FormCreationProjet";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center py-[2%] gap-[10vh] px-[5%]">
      <Navbar />
      <FormCreationProjet />
    </div>
  );
};

export default page;
