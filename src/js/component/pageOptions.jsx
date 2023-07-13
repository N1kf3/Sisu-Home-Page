import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const PageOptions =()=>{
    const {store, actions}=useContext(Context)
    const [page, getPage]= useState(store.notebook['page'])


    const selectPageType =(id)=>{
        getPage(id)
        store.notebook['page']=id
    }

    return(
        <div className="border px-5" > 
        Tipos de hojas.
        <div className="d-flex justify-content-evenly">
            <ul className="no-list">
                <li> <input type="checkbox" name="Grande" id="Linea" onChange={(e)=>selectPageType(e.target.id)} checked={page=="Linea"? true:false}/> Hoja de 1 lina</li>
                <li> <input type="checkbox" name="Mediana" id="Blanca" onChange={(e)=>selectPageType(e.target.id)} checked={page=="Blanca"? true:false}/> Hoja blanca</li>
                <li> <input type="checkbox" name="Pequeña" id="Cuadr" onChange={(e)=>selectPageType(e.target.id)} checked={page=="Cuadr"? true:false}/> Hoja cuadriculada</li>
            </ul>
        </div>

    </div>
    )
}