import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import Big from "../../img/big.png"
import Med from "../../img/med.png"
import Small from "../../img/small.png"
import Lat from "../../img/lat.png"
import Sup from "../../img/sup.png"







export const BodyOptions =()=>{
    const {store, actions}=useContext(Context);
    const [size, getSize ] = useState(store.notebook['size']);
    const [loc , getLoc] = useState(store.notebook['location']);


    const selectsize = (id)=>{
        getSize(id)
        store.notebook['size']=id
        getLoc("none")
        if (id =="Grande")
            store.notebook["location"]="izquierda"
        else 
            store.notebook["location"]="none"
    }

    const selectloc = (id)=>{
        store.notebook['location']=id
        getLoc(id)
    }

    const selectSpiral = (size)=>{
        if (size!="Grande")
            return(
                <div>
                    <ul className="no-list ms-5">
                        <li> <input type="checkbox" name="Superior" id="Superior" onChange={(e)=>selectloc(e.target.id)} checked={loc=="Superior"? true:false}/> Espiral superior</li>
                        <li> <input type="checkbox" name="izquierda" id="izquierda" onChange={(e)=>selectloc(e.target.id)} checked={loc=="izquierda"? true:false}/> Espiral lateral</li>
                    </ul>
                </div>
            )
 
    }

    return (
        <div className="border px-5 h100 d-flex flex-column justify-content-center" > 
            <span className="">Tamaño de la libreta.</span>
            <div className="d-flex justify-content-evenly mt-5 align-items-center">
                <ul className="no-list">
                    <li className="d-flex align-items-center"> 
                        <div>
                            <input className="" type="checkbox" name="Grande" id="Grande" onChange={(e)=>selectsize(e.target.id)} checked={size=="Grande"? true:false}/>                             
                            <label className="ms-4"htmlFor="Grande">Grande</label>
                        </div>
                        <img src={Big} className="ms-4 hpic" alt="..."/>   
                    </li>
                    <li className="d-flex align-items-center"> 
                        <div>
                            <input className="" type="checkbox" name="Mediana" id="Mediana" onChange={(e)=>selectsize(e.target.id)} checked={size=="Mediana"? true:false}/>                             
                            <label className="ms-4"htmlFor="Mediana">Mediana</label>
                        </div>
                        <img src={Med} className="ms-4 hpic" alt="..."/>   
                    </li>
                    <li className="d-flex align-items-center"> 
                        <div>
                            <input className="" type="checkbox" name="Pequeña" id="Pequeña" onChange={(e)=>selectsize(e.target.id)} checked={size=="Pequeña"? true:false}/>                             
                            <label className="ms-4"htmlFor="Pequeña">Pequeña</label>
                        </div>
                        <img src={Small} className="ms-4 hpic" alt="..."/>   
                    </li>
                </ul>                
                <ul className="no-list ms-5" style={{ visibility: size=="none"? "hidden":"visible"}} >
                    <li className="d-flex align-items-center"> 
                        <div>
                            <input type="checkbox" name="Superior" id="Superior" onChange={(e)=>selectloc(e.target.id)} checked={loc=="Superior"? true:false} disabled={size=="Grande"? true:false}/>                             
                            <label className="ms-4"htmlFor="Superior">Espiral superior</label>
                        </div>
                        <img src={Sup} className="hpic" alt="..."/>   
                    </li>
                    <li className="d-flex align-items-center"> 
                        <div>
                            <input type="checkbox" name="izquierda" id="izquierda" onChange={(e)=>selectloc(e.target.id)} checked={loc=="izquierda"? true:false}/>                            
                            <label className="ms-4"htmlFor="izquierda">Espiral lateral</label>
                        </div>
                        <img src={Lat} className="hpic" alt="..."/>   
                    </li>
                </ul>            
            </div>

        </div>
    )
}