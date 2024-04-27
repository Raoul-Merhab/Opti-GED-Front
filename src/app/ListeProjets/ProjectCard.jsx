import Link from "next/link";
import React from "react";

const ProjectCard = ({ desc, title, id }) => {
  return (
    <Link href={`/ProjectDetail/${id}`}>
      <div className="w-full border-[1px solid #484848] px-[5%] py-[5%] flex flex-col bg-white rounded-lg gap-3 cursor-pointer hover:scale-105 transform-all duration-200">
        <div className="icon">
          <img src="/images/ProjectIcon.png" alt="icon" />
        </div>
        <h2>{title}</h2>
        <p className="text-[#A1A1A1] text-sm">{desc}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
