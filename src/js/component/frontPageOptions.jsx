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
    const runpic2=(num)=>{
        let pos = num-1
        let ar = picArr.slice((pos*18),(18*pos)+18)
        getViewArr(slipArr(ar))
        getViewPic(pos)
    }

    const selectloc = (id)=>{    
        getLoc(id)
        store.notebook['frontPage']=id
    }


    return(
        <div className="d-flex flex-column justify-content-between h100">
        
            <div className="container">
                {viewArr?(viewArr.map((item,index)=>
                    <div key={index} id={index}className="row">
                        {item.map((pic,index)=>
                            <div className="col d-flex flex-column mt-2 text-center align-items-center" key={index} id={pic["id"]}>
                                <img src={pic["image"]} className="hpic" alt="..." htmlFor={pic["id"]}/>
                                <input className="mt-2"type="checkbox"id={pic["id"]} onChange={(e)=>selectloc(e.target.id)} checked={loc==pic["id"]? true:false}/>
                            </div>)}
                    </div>)):(<div>cargando info</div>)}
            </div>
            <div className=" d-flex justify-content-center">           
                <button className="ms-2" onClick={(e)=>runpic2(1)} disabled={viewPic==0?true:false}>1 </button>
                <button className="ms-2" onClick={(e)=>runpic2(2)} disabled={viewPic==1?true:false}>2 </button>
                <button className="ms-2" onClick={(e)=>runpic2(3)} disabled={viewPic==2?true:false}>3 </button>
                <button className="ms-2" onClick={(e)=>runpic2(4)} disabled={viewPic==3?true:false}>4 </button>
                <button className="ms-2" onClick={(e)=>runpic2(5)} disabled={viewPic==4?true:false}>5 </button>
            </div>
          


        </div>
    )


}
