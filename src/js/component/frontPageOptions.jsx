import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import IMAGES from "./images";


export const FrontPageOptions =()=>{
    const [viewPic, getViewPic] = useState(0)
    const [picArr, getPicArr] = useState([])
    const [viewArr, getViewArr]=useState([])
    const [loc , getLoc] = useState(null);
    const {store, actions}=useContext(Context)

    
    useEffect(()=>{
        reduceArr()        
    })

    const slipArr=(arr)=>{
        let newarr=[]
        let cont =0
        for (let i=0;i<3;i++){
            newarr[i]= []
            for (let j=0;j<6;j++){
                if (arr[cont]!= undefined){
                    newarr[i][j]=arr[cont]
                    cont = cont +1
                }
            }            
        }
        console.log("reducido", newarr)
        
       
        return newarr
    }

    const reduceArr=()=>{
        if (picArr.length ==0){
            let ar = IMAGES.slice(0,18)          
            getViewArr(slipArr(ar))
            getPicArr(IMAGES)
            
        }
    }

    const runpic=(num)=>{
        let pos = viewPic+num
        let ar = picArr.slice((pos*18),(18*pos)+18)
        getViewArr(slipArr(ar))
        getViewPic(pos)
    }

    const selectloc = (id)=>{    
        getLoc(id)
        store.notebook['frontPage']=id
    }


    return(
        <div> escoge la portada
          
            <div className="container text-center ">
                <div className="container text-center">
                    {viewArr?(viewArr.map((item,index)=>
                        <div key={index} id={index}className="row">
                            {item.map((pic,index)=>
                                <div className="col-2" key={index} id={pic["id"]}>
                                    <img src={pic["image"]} className="img-thumbnail" alt="..."/>
                                    <input type="checkbox"id={pic["id"]} onChange={(e)=>selectloc(e.target.id)} checked={loc==pic["id"]? true:false}/>
                                </div>)}
                        </div>)):(<div>cargando info</div>)}
                    
        
                </div>
            </div>
            <button onClick={(e)=>runpic(-1)}  disabled={viewPic==0?true:false}>{"<--"} </button>
            <button onClick={(e)=>runpic(1)} disabled={viewPic==3?true:false}>{"-->"} </button>


        </div>
    )


}
