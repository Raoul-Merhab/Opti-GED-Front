"use client";
import {useState} from "react";
import Urls from "@/api/Urls";
import Api from "@/api/Api";
import { useRouter } from "next/navigation";

const FormCreationProjet = () => {
	const router = useRouter()
	const [nom, setNom] = useState("");
	const [description, setDescription] = useState("");
	const onClickCreer = () =>{
		Api.post(Urls.CREATE_PROJECT, {
			"token": localStorage.getItem("token"),
			"nom": nom,
			"description": description
		}).then((res) => {
			console.log(res.data);
			if ( res.data["Status"] === "Success" ){
				router.push("/ListeProjets")
			}else{
				alert(res.data["Message"] || "Erreur lors de la création du projet")
			}
		})
	}
	return (
		<div className="form w-full flex flex-col justify-center items-center">
			<h1 className="text-4xl font-semibold mb-2">
				Créez un nouveau projet
			</h1>
			<p className="text-lg font-normal mb-10 text-[#A1A1A1]">
				Choisissez un nom unique pour votre projet et ajoutez une
				description
			</p>
			<input
				type="text"
				value={nom}
				onChange={(e) => setNom(e.target.value)}
				className="w-1/3 mb-4 flex px-4 py-2 rounded-lg"
				placeholder="Nom du projet"
			/>
			<textarea
				type="text"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				className="w-1/3 flex px-4 py-2 rounded-lg mb-6"
				placeholder="description du projet"
				rows={5}
			/>
			<button className="flex px-4 py-2 rounded-lg bg-noir text-white" onClick={onClickCreer}>
				Suivant
			</button>
		</div>
	);
};

export default FormCreationProjet;
