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
			case 3:
				return(<SendForm/>)				
		}
	}


	return (
		<div className="">
			<div className="container border" id=""> 
        		Arma tu libreta
				
				{page == -1? (<div>Empezar o instrucciones </div>):(viewPage())}

        	</div>
			<button onClick={(e)=>nextPage(-1)}  style={{ display: `${page==-1?"none":"inline"}`}}>anterior</button>
			<button onClick={(e)=>nextPage(1)}   style={{ display: `${page==3?"none":"inline"}`}}>Siguiente</button>
			<button   style={{ display: `${page==3?"inline":"none"}`}}>Enviar informacion</button>


		</div>
	);
};
