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
        <div className="border px-5 h100 d-flex align-items-center justify-content-center" > 
        Tipos de hojas.
        <div className="d-flex justify-content-evenly">
            <ul className="no-list">
                <li> 
                    <input type="checkbox" name="Linea" id="Linea" onChange={(e)=>selectPageType(e.target.id)} checked={page=="Linea"? true:false} /> 
                    <label className="ms-4"htmlFor="Linea">Hoja de 1 lina</label>
                </li>
                <li> 
                    <input type="checkbox" name="Blanca" id="Blanca" onChange={(e)=>selectPageType(e.target.id)} checked={page=="Blanca"? true:false}/> 
                    <label className="ms-4"htmlFor="Blanca">Hoja blanca</label>
                </li>
                <li style={{ display: `${store.notebook['size']== "Grande"?"none":"inline"}`}}> 
                    <input type="checkbox" name="cuadriculada" id="cuadriculada" onChange={(e)=>selectPageType(e.target.id)} checked={page=="cuadriculada"? true:false}/>
                    <label className="ms-4"htmlFor="cuadriculada">Hoja cuadriculada</label>
                </li>
            </ul>
        </div>

    </div>
    )
}