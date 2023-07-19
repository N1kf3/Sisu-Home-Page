import React, { useState ,useContext,useEffect, useRef} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Context } from "../store/appContext";
import { BodyOptions } from "../component/bodyOptions.jsx";
import {PageOptions} from "../component/pageOptions.jsx";
import { FrontPageOptions } from "../component/frontPageOptions.jsx";
import { SendInfo } from "../component/sendInfo.jsx";

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
				return(<SendInfo/>)		
		}
	}








	return (
		<div className="container" >
			{page == -1? (<div className="h100 border">Empezar o instrucciones </div>):(viewPage())}
		
			<div className="container d-flex justify-content-between mt-5">
				<button className="me-4" onClick={(e)=>nextPage(-1)}  disabled={page==-1? true:false} >Anterior</button>
				<button onClick={(e)=>nextPage(1)}   disabled={page==3? true:false}>Siguiente</button>
			</div>


		</div>
	);
};
