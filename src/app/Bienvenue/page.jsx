import Navbar from "@/components/Navbar";
import Welcome from "@/components/WelcomeAfterSignUp/Welcome";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 pt-10">
      <Navbar />
      <Welcome />
    </div>
  );
};

export default page;
