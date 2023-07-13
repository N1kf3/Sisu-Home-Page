import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const SendForm =()=>{
    const {store,actions}=useContext(Context)

    return(
        <div> formulario y resumen de la libreta
            <p>{store.notebook['size']}</p>
            <p>{store.notebook['location']}</p>
            <p>{store.notebook['page']}</p>
            <p> {store.notebook['frontPage']}</p>  
        </div>
    )


}
