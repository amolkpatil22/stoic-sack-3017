import axios from "axios"
import { PRODUCT_FAILURE, PRODUCT_LOADING, FETCH_ELECTRONICS,FETCH_FURNITURES, FETCH_FOOTWEARS } from "./actionTypes"


export function fetchElectronics(obj){
  return async function(dispatch){
    dispatch({type:PRODUCT_LOADING});
    try {
        const res=await axios.get(`https://6516bce509e3260018ca387d.mockapi.io/electronics`,obj);
        console.log(res)
        dispatch({type:FETCH_ELECTRONICS,payload:res.data})
        
        
    } catch (error) {
        dispatch({type:PRODUCT_FAILURE})
        
    }
  }

}

export const fetchFootwears=(obj)=>(dispatch)=>{
    dispatch({type:PRODUCT_LOADING})
let Data=axios.get(`https://6516c35509e3260018ca42bf.mockapi.io/footwears`, obj).then((res)=>{
    dispatch({type:FETCH_FOOTWEARS, payload:res.data})

}).catch((err)=>{
dispatch({type:PRODUCT_FAILURE})
})
return Data;
}


export const fetchFurnitures=(obj)=>(dispatch)=>{
    dispatch({type:PRODUCT_LOADING})
let Data=axios.get(`https://6516bce509e3260018ca387d.mockapi.io//furnitures`, obj).then((res)=>{
    dispatch({type:FETCH_FURNITURES, payload:res.data})

}).catch((err)=>{
dispatch({type:PRODUCT_FAILURE})
})
return Data;
}