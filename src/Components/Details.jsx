import axios from '../Utills/axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from './Loading';

function Details() {

  const[single,setproducts]  =  useState([]);

  const{id} =  useParams()
  console.log(id);

  const getsingleData = ()=>{
     axios.get(`/products/${id}`)
     .then((data)=>{
      // console.log(data.data)
      setproducts(data.data)
     }).catch((err)=>{
      console.log(err)
     })
  }
  useEffect(()=>{
    getsingleData();
  },[])

  console.log(single);

  return ( single?
    <div className='w-[60%] h-screen bg-red-100 container mx-auto p-20 flex justify-center items-center gap-10'>
         <img className='w-[30%] h-[50vh]' src={`${single.image}`} alt="" />

         <div className='content  h-[60%]'>
             <h1 className='text-3xl w-[80%] mb-4 '>{single.title}</h1>
             <h2 className='mb-4'>{single.category}</h2>
             <h2 className='text-red-300 mb-2'>${single.price}</h2>
             <p className='mb-10 w-[80%]'>{single.description}</p>
             <Link className='px-4 py-1 bg-green-400 mt-20 mt-4 rounded-md mr-4'>Edit</Link>
             <Link className='px-4 py-1 bg-blue-400 mt-20 mt-4 rounded-md'>Delete</Link>
         </div>

    </div>
    :<Loading/>
  )
  
}

export default Details