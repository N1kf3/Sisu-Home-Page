import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

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
                newarr[i][j]=arr[cont]
                cont = cont +1
            }            
        }
        
        return newarr
    }

    const reduceArr=()=>{
        if (picArr.length ==0){
            let ar = store.picturesArray.slice(0,18)
            console.log(store.picturesArray)
            getViewArr(slipArr(ar))
            getPicArr(store.picturesArray)
            
        }
    }

    const runpic=(num)=>{
        let pos = viewPic+num
        let ar = picArr.slice((pos*18),(18*pos)+18)
        getViewArr(slipArr(ar))
        getViewPic(pos)
    }

    const getId=(pic)=>{
        console.log(typeof pic)
        let pos = pic.indexOf(".png")
        let dec= pic[pos-2]
        let uni = pic[pos-1]
        if (parseInt(dec)>= 0){
            return (dec+uni)
        }
        else { return(uni)}

    }

    const selectloc = (id)=>{    
        getLoc(id)
    }


    return(
        <div> escoge la portada

            <div className="container text-center ">
                <div className="container text-center">
                    {store.picturesArray?(viewArr.map((item,index)=>
                        <div key={index} id={index}className="row">
                            {item.map((pic,index)=>
                                <div className="col" key={index} id={pic["val"]}>
                                    {pic["route"]} 
                                    <input type="checkbox"id={pic["val"]} onChange={(e)=>selectloc(e.target.id)} checked={loc==pic["val"]? true:false}/>
                                </div>)}
                        </div>)):(<div>cargando info</div>)}
                    
        
                </div>
            </div>
            <button onClick={(e)=>runpic(-1)}  disabled={viewPic==0?true:false}>{"<--"} </button>
            <button onClick={(e)=>runpic(1)} disabled={viewPic==3?true:false}>{"-->"} </button>


        </div>
    )


}
