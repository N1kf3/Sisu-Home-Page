import React, { useState ,useContext,useEffect, useRef} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Context } from "../store/appContext";
import { BodyOptions } from "../component/bodyOptions.jsx";
import {PageOptions} from "../component/pageOptions.jsx";
import { FrontPageOptions } from "../component/frontPageOptions.jsx";
import emailjs, { sendForm } from '@emailjs/browser';

//include images into your bundle


//create your first component
export const Home = () => {
	const [page, getPage]= useState(2)//cambiar a -1
	const {store, actions}=useContext(Context)
	const [userName, getUsername]= useState("")
	const [userID, getUserID]= useState("")
	const [userEmail, getUserEmail]= useState("")
	const [userPhoneNumber, getUserPhoneNumber]= useState("")
	const [userComments, getUserComments]= useState("")
	const form = useRef();

	const nextPage=(num)=>{
		let sum = page +num;
		getPage(sum);
	}
	useEffect(()=>{
        let arr = []
        for (let i=0; i<63;i++){
            arr.push({route:`../src/img/portadas/${i}.png`, val:i})
        }
        store.picturesArray=arr		
    


    })

	const viewPage =()=>{
		switch (page){
			case 0:
				return(<BodyOptions/>)			
			case 1:
				return(<PageOptions/>)
			case 2:
				return(<FrontPageOptions/>)			
		}
	}


	const submitForm =(e)=>{
		
		let templateParams = {
			user_name: userName,
			user_email: userEmail,
			user_ID: userID,
			notebook_size : store.notebook['size'],
			notebook_location: store.notebook['location'],
			notebook_page : store.notebook['page'],
			notebook_frontPage :store.notebook['frontPage'],		
			message: userComments,
			user_phone: userPhoneNumber,
		};
		console.log(templateParams)
		
		emailjs.send('service_s3r3cfh', 'template_awx3yan', templateParams, '7Y5V7Ni9V4jEZx8b6')
			.then(function(response) {
			console.log('SUCCESS!', response.status, response.text);
			}, function(error) {
			console.log('FAILED...', error);
			});
		

	} 





	return (
		<div className="" >
			<div className="container border h100" id=""> 
				<div className="interno " style={{ display: `${page==3?"none":"inline"}`}}>			
					{page == -1? (<div>Empezar o instrucciones </div>):(viewPage())}
				</div>
				<div className=" "style={{ display: `${page==3?"inline":"none"}`}}>
					<div className="d-flex justify-content-center container" >
						<div className="border p-5 me-4 w-50 "  > Resumen de la libreta
							<p>Tamaño: {store.notebook['size']}</p>
							<p>Ubicacion de la espiral: {store.notebook['location']}</p>
							<p>Tipo de hoja: {store.notebook['page']}</p>
							<p>Portada elegida:</p>
							<div className="text-center">
								{store.notebook['frontPage'] =='none'?("Sin imgen seleccionada"):(<img src={`images/${store.notebook['frontPage']}.png`} className="img-thumbnail w-50" alt="..."/>)}  
							</div>
							
						</div>
						<form className="ms-4 border d-flex flex-column p-5" reft={form} >					
							<label htmlFor="Name_lastname">Nombre y apellido</label>
							<input type="text" name="Name_lastname" id="Name_lastname" onChange={(e)=>getUsername(e.target.value)}/>
							<label htmlFor="personal_ID">Cedula de identidad</label>
							<input type="number" name="personal_ID" id="personal_ID" onChange={(e)=>getUserID(e.target.value)} />
							<label htmlFor="phone_number">Numero de telefono</label>						
							<input type="number" name="phone_number" id="phone_number" onChange={(e)=>getUserPhoneNumber(e.target.value)}/>
							<label htmlFor="email">Direccion de correo</label>											
							<input type="email" name="email" id="email" onChange={(e)=>getUserEmail(e.target.value)}/>
							<label htmlFor="comments">Comentarios y observaciones</label>											
							<textarea name="comments" id="comments" cols="30" rows="10" onChange={(e)=>getUserComments(e.target.value)}/>
						</form>
					</div>

				</div>
        	</div>
			<div className="container d-flex justify-content-between mt-2">
				<button className="me-4" onClick={(e)=>nextPage(-1)}  style={{ display: `${page==-1?"none":"inline"}`}}>anterior</button>
				<button onClick={(e)=>nextPage(1)}   style={{ display: `${page==3?"none":"inline"}`}}>Siguiente</button>
				<button   style={{ display: `${page==3?"inline":"none"}`}} type="submit" onClick={(e)=>submitForm()}>Enviar informacion</button>
			</div>


		</div>
	);
};
