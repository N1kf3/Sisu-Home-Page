import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";







export const BodyOptions =()=>{
    const {store, actions}=useContext(Context);
    const [size, getSize ] = useState(store.notebook['size']);
    const [loc , getLoc] = useState(store.notebook['location']);


    const selectsize = (id)=>{
        getSize(id)
        store.notebook['size']=id
        getLoc("none")
    }

    const selectloc = (id)=>{
        store.notebook['location']=id
        getLoc(id)
    }

    const selectSpiral = (size)=>{
        if (size!="Grande")
            return(
                <div>
                    <ul className="no-list">
                        <li> <input type="checkbox" name="Sup" id="Sup" onChange={(e)=>selectloc(e.target.id)} checked={loc=="Sup"? true:false}/> Sup</li>
                        <li> <input type="checkbox" name="Inf" id="Inf" onChange={(e)=>selectloc(e.target.id)} checked={loc=="Inf"? true:false}/> Inf</li>
                    </ul>
                </div>
            )
        else 
            return(
                <p>No se le puede cambiar la ubicacion de la espiral</p>
            )
        
    }

    return (
        <div className="border px-5" > 
            Tamaño de la libreta.
            <div className="d-flex justify-content-evenly">
                <ul className="no-list">
                    <li> <input type="checkbox" name="Grande" id="Grande" onChange={(e)=>selectsize(e.target.id)} checked={size=="Grande"? true:false}/> Grande</li>
                    <li> <input type="checkbox" name="Mediana" id="Mediana" onChange={(e)=>selectsize(e.target.id)} checked={size=="Mediana"? true:false}/> Mediana</li>
                    <li> <input type="checkbox" name="Pequeña" id="Pequeña" onChange={(e)=>selectsize(e.target.id)} checked={size=="Pequeña"? true:false}/> Pequeña</li>
                </ul>
                <div>
                    {size=="none"? (size):selectSpiral(size)}
                </div>
            </div>

        </div>
    )
}