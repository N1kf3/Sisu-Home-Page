import React, { useContext, useState, useRef } from "react";
import { Context } from "../store/appContext";
import emailjs, { sendForm } from '@emailjs/browser';


export const SendInfo =()=>{
    const {store,actions}=useContext(Context)
    const [userName, getUsername]= useState("")
	const [userID, getUserID]= useState("")
	const [userEmail, getUserEmail]= useState("")
	const [userPhoneNumber, getUserPhoneNumber]= useState("")
	const [userComments, getUserComments]= useState("")
	const form = useRef();
    


    const submitForm =()=>{
		event.preventDefault();
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
	
		
		emailjs.send('service_s3r3cfh', 'template_awx3yan', templateParams, '7Y5V7Ni9V4jEZx8b6')
			.then(function(response) {
			
			alert("La informacion fue cargada con exito")
            getUsername("")
            getUserID("")
            getUserEmail("")
            getUserPhoneNumber("")
            getUserComments("")
			}, function(error) {
                alert('FAILED...', error)
			});		
	} 

    return(
        <div className=" h100 d-flex align-items-center">
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
                    <input type="text" name="Name_lastname" id="Name_lastname" value={userName} onChange={(e)=>getUsername(e.target.value)}/>
                    <label htmlFor="personal_ID">Cedula de identidad</label>
                    <input type="number" name="personal_ID" id="personal_ID" value={userID} onChange={(e)=>getUserID(e.target.value)} />
                    <label htmlFor="phone_number">Numero de telefono</label>						
                    <input type="number" name="phone_number" id="phone_number"value={userPhoneNumber} onChange={(e)=>getUserPhoneNumber(e.target.value)}/>
                    <label htmlFor="email">Direccion de correo</label>											
                    <input type="email" name="email" id="email" value={userEmail} onChange={(e)=>getUserEmail(e.target.value)}/>
                    <label htmlFor="comments">Comentarios y observaciones</label>											
                    <textarea name="comments" id="comments" cols="30" rows="10" value={userComments} onChange={(e)=>getUserComments(e.target.value)}/>
                    <button  className="mt-3"  type="btn" onClick={(e)=>submitForm()}>Enviar informacion</button>
                </form>
            </div>
        </div>
    )


}
