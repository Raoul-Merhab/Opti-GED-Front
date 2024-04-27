"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Api from "@/api/Api";
import Urls from "@/api/Urls";
import { IoCloudUploadOutline } from "react-icons/io5";
import CircularProgress from "@mui/material/CircularProgress";

const Page = ({ params }) => {
	const [resultat, setresultat] = useState(null);
	const [image, setimage] = useState(null);
	const [loading, setLoading] = useState(false);
	async function handleChange(e) {
		e.preventDefault();
		const file = e.target.files[0];
		setimage(file);
	}
	const onClickSend = () => {
    if ( !image ) {
      alert("Image non uploadée")
      return
    }
    setLoading(true);
		var fileReader = new FileReader();
		var base64File;
		fileReader.onload = function (event) {
			base64File = event.target.result;
			Api.post(Urls.SUGGERER_WORKFLOW, {
				token: "merhab$abderraouf$la_merhab@esi.dz",
				base64: base64File,
			}).then((res) => {
				if (res.data.Status === "Success") {
					setresultat(res.data.Data);
					setLoading(false);
				} else {
					alert(
						"Erreur lors de l'envoi de l'image, veuillez réessayer."
					);
				}
			});
		};
		fileReader.readAsDataURL(image);
	};
	return (
		<div className="w-full flex flex-row">
			<Sidebar projet={true} />
			<div className="w-auto ml-[20%] pl-[5%] pr-[10%] py-[5%] flex flex-col gap-4 items-center">
				<h1 className="text-4xl font-semibold text-[#262626] mb-4">
					Suggerer des améliorations à un circuit de validation
				</h1>
				<p className="text-[#A1A1A1] mb-6">
					Vous pouvez uploadez une image contenant un circuit de
					validation d'un processus métier necessitant plusieurs
					documents passant par plusieurs acteurs au sein de
					l'entreprise
				</p>
				<div className="w-full h-48 relative flex flex-col gap-10 justify-center items-center bg-white border-[1px solid #A1A1A1] rounded-xl py-5">
					<input
						type="file"
						accept="image/png"
						onChange={(e) => handleChange(e)}
						className="w-full h-full block opacity-0 absolute"
					/>
					<IoCloudUploadOutline size={100} color="#A1A1A1" />
					<h1>Déposez votre circuit de validation</h1>
				</div>
				{loading ? (
					<CircularProgress />
				) : (
					<button
						type="button"
						onClick={onClickSend}
						className=" bg-gray-300 rounded-xl py-4 px-6 text-xl w-fit self-center"
					>
						Génerer
					</button>
				)}
				{resultat && (
					<>
						<h2 className="text-4xl font-semibold mt-5">
							Résultat :
						</h2>
						<p>{resultat}</p>
					</>
				)}
			</div>
		</div>
	);
};

export default Page;
