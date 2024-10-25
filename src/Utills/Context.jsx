import axios from '../Utills/axios';
import React, {createContext, useEffect, useState } from 'react'

export const productcontext = createContext();

function Context(props) {

    const[products,setproducts]  = useState(null)

     const getproducts = ()=>{
      axios.get("/products")
      .then((data)=>{
        // console.log(data.data)
        setproducts(data.data)
      }).catch((err)=>{
        console.log(err)
      })
     };

     useEffect(()=>{
      getproducts();
     },[])
     console.log(products)

  
  return (
    <div>
       <productcontext.Provider value={[products,setproducts]} > {props.children} </productcontext.Provider>
    </div>
    
    
  )
}

export default Context