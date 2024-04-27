import React from "react";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center py-2 px-4 rounded-xl border-2">
      <div className="Logo">
        <img src="/images/Logo.png" alt="Logo" />
      </div>
      <div className="Items flex flex-row items-center gap-4 text-[#606060] mx-6">
        <div>Docs</div>
        <div>Prix</div>
        <div>À propos</div>
        <div>Blog</div>
        <div>Communauté</div>
      </div>
      <div className="Button flex flex-row items-center gap-2 bg-noir text-white px-4 py-2 rounded-xl">
        <FaGithub color="#fff" />
        <p>Support us</p>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
