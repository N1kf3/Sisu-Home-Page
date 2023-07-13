import React, { useState ,useContext,useEffect} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Context } from "../store/appContext";
import { BodyOptions } from "../component/bodyOptions.jsx";
import {PageOptions} from "../component/pageOptions.jsx";
import { FrontPageOptions } from "../component/frontPageOptions.jsx";
import { SendForm } from "../component/sendForm.jsx";

//include images into your bundle


//create your first component
export const Home = () => {
	const [page, getPage]= useState(-1)//cambiar a -1
	const {store, actions}=useContext(Context)

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


	return (
		<div className="">
			<div className="container border " id=""> 
				<div className="" style={{ display: `${page==3?"none":"inline"}`}}>			
					{page == -1? (<div>Empezar o instrucciones </div>):(viewPage())}
				</div>
				<div style={{ display: `${page==3?"inline":"none"}`}}>
					<div className="d-flex justify-content-center container" >
						<div className="border p-5 me-4" > Resumen de la libreta
							<p>Tamaño: {store.notebook['size']}</p>
							<p>Ubicacion de la espiral: {store.notebook['location']}</p>
							<p>Tipo de hoja: {store.notebook['page']}</p>
							<p>Portada escogida:</p>
							{store.notebook['frontPage'] =='none'?("Sin imgen seleccionada"):(<img src={`images/${store.notebook['frontPage']}.png`} className="img-thumbnail" alt="..."/>)}  
							
						</div>
						<form className="ms-4 border d-flex flex-column p-5" >					
							<label htmlFor="Name_lastname">Nombre y apellido</label>
							<input type="text" name="Name_lastname" id="Name_lastname" />
							<label htmlFor="personal_ID">Cedula de identidad</label>
							<input type="number" name="personal_ID" id="personal_ID" />
							<label htmlFor="phone_number">Numero de telefono</label>						
							<input type="number" name="phone_number" id="phone_number" />
							<label htmlFor="email">Direccion de correo</label>											
							<input type="email" name="email" id="email" />
							<label htmlFor="comments">Comentarios y observaciones</label>											
							<textarea name="comments" id="comments" cols="30" rows="10"></textarea>
						</form>
					</div>

				</div>
        	</div>
			<div className="container d-flex justify-content-end mt-2">
				<button className="me-4" onClick={(e)=>nextPage(-1)}  style={{ display: `${page==-1?"none":"inline"}`}}>anterior</button>
				<button onClick={(e)=>nextPage(1)}   style={{ display: `${page==3?"none":"inline"}`}}>Siguiente</button>
				<button   style={{ display: `${page==3?"inline":"none"}`}}>Enviar informacion</button>
			</div>


		</div>
	);
};
