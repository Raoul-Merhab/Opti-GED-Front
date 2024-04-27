"use client";
import {useState} from "react";
import Urls from "@/api/Urls";
import Api from "@/api/Api";
import { useRouter } from "next/navigation";


const page = () => {
	const router = useRouter()
	const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const onClickSignIn = () =>{
		Api.post(Urls.SIGN_IN, {
			"email": email,
			"password": password
		  }).then((response) => {
			if ( response.data["Status"] === "Success" ){
				localStorage.setItem("token", response.data["Token"])
				router.replace("/ListeProjets")
			}else{
				alert("Email ou mot de passe incorrect")
			}
		  })
    }
    return (
		<div className=" h-screen gap-6 flex flex-col justify-center items-center">
			<h1 className="text-4xl font-semibold mb-2">
				Connectez vous
			</h1>
			<input
				type="text"
				className="w-1/3 mb-4 flex px-4 py-2 rounded-lg"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
			/>
			<input
				type="text"
				className="w-1/3 mb-4 flex px-4 py-2 rounded-lg"
				placeholder="Mot de Passe"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
			/>
			<p className=" text-base">vous n'avez pas un compte? <a className=" text-blue-800" href="/SignUp">Inscrivez vous</a></p>
            <button className="flex px-4 py-2 rounded-lg bg-noir text-white" onClick={onClickSignIn}>
                Suivant
            </button>
		</div>
	);
};

export default page;
