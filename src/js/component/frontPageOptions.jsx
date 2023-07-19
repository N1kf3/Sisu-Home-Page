import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import IMAGES from "./images";


export const FrontPageOptions =()=>{
    const [loc , getLoc] = useState(null);
    const {store, actions}=useContext(Context)

    
    useEffect(()=>{
                
    })


    const selectloc = (id)=>{    
        getLoc(id)
        store.notebook['frontPage']=id
    }


    return(
        <div className="d-flex flex-column justify-content-between h100">
        

            <div className="container list-history">
                    <div className="row ">
                        {IMAGES.map((pic,index)=>
                            <div className="col-2 d-flex flex-column mt-2 text-center align-items-center" key={index} id={pic["id"]}>
                                <img src={pic["image"]} className="hpic" alt="..." htmlFor={pic["id"]}/>
                                <input className="mt-2"type="checkbox"id={pic["id"]} onChange={(e)=>selectloc(e.target.id)} checked={loc==pic["id"]? true:false}/>
                            </div>)}
                    </div>
            </div>






        </div>
    )


}
