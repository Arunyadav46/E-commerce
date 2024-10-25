import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import { productcontext } from '../Utills/Context'
import Loading from './Loading';
import axios from '../Utills/axios';



function Home() {
   const [products]  =  useContext(productcontext);
   // console.log(products);

  const{search}   =  useLocation();
   const category = decodeURIComponent(search.split("=")[1])
   console.log(category);

 

 const[filterproduct,setfilterproduct]  =  useState(null);

  const getproductcategory = ()=>{
        axios.get(`/products/category/${category}`)
        .then((data)=>{
          console.log(data.data)
          setfilterproduct(data.data)
        }).catch((err)=>{
          console.log(err)
        })
  }

  useEffect(()=>{
    console.log(category)
    // if(!filterproduct || category == "undefined"){
      if(category == "undefined"){
      setfilterproduct(products);
    }
    if(category!="undefined"){
      getproductcategory();
    }
  },[category,products])


  return ( products?
    <>
              <Nav/>
              <div className='w-[85%] h-full bg-zinc-50 p-10 flex gap-7 flex-wrap overflow-y-auto'>
              { filterproduct && filterproduct.map((elem,index)=>{
                return   <Link key={index} to={`/details/${elem.id}`} className='card w-[23%] h-[45vh] border border-zinc-400 mt-10'>
                <img className='h-[35vh] w-[60%]   mx-16 hover:scale-105'src={elem.image} alt="" />
                 <h2 className='mx-auto text-center  w-[90%] mt-2 hover:text-yellow-600'>{elem.title}</h2>
              </Link>
              })}
               
         </div>
    </>
    :<Loading/>


  
  )
}

export default Home