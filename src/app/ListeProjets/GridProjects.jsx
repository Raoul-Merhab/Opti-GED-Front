"use client"
import {useEffect, useState} from "react";
import ProjectCard from "./ProjectCard";
import Api from "@/api/Api";
import Urls from "@/api/Urls";

const GridProjects = () => {
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		Api.post(Urls.PROJETS,{
			token:localStorage.getItem("token")
		}).then((res) => {
			setProjects(res.data.Data);
		});
	}, []);
	return (
		<div className="grid grid-cols-3 gap-10">
			{
				projects.length === 0 ? (
					<div></div>
				) : (
					projects.map((project) => (
						<ProjectCard
							key={project.idProjet}
							desc={project.description}
							title={project.nom}
							id={project.idProjet}
						/>
					))
				)
			}
		</div>
	);
};

export default GridProjects;
