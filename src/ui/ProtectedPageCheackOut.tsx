import React, { useEffect } from "react"
import { ProductType } from "../servises/getProdcts";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface TypeChildren{
    children:React.ReactNode
}
interface TypeSelctor{
    cartCustomer:{
      cartProducts:ProductType[]
    }
  }
export default function ProtectedPageCheackOut({children}:TypeChildren) {
    
    const products =useSelector((res:TypeSelctor)=>res.cartCustomer.cartProducts)  ;
    const navigate = useNavigate();

   console.log(products.length );
   
    useEffect(()=>{
        if(products.length === 0)  navigate("/");

    },[products , navigate]);

    if( products.length !== 0) return children ;
    

}
