import React, { useContext, useState } from 'react'
import { productcontext } from '../Utills/Context';
import { nanoid } from 'nanoid';

function Create() {

 const[products,setproducts] =  useContext(productcontext);

     const[title,settitle]  =  useState("");
     const[image,setimage]  =  useState("");
     const[category,setcategory]  =  useState("");
     const[price,setprice]    =  useState("");
     const[description,setdescription]    =  useState("");
    
  const Addproducthandler = (e)=>{
     e.preventDefault();

     if(title.trim().length<5 || image.trim().length<5||category.trim().length<5||price.trim().length<1||description.trim().length<5){
      alert("Each and every input must have atleast 4 character")
      return;
     }

     const product = {
         id:nanoid(),
         title,
         image,
         category,
         price,
         description
     }
     setproducts([...products, product])
    
  }   

  return (
    <div className='w-full h-screen p-[8%] bg-zinc-200 '>
        <form className='flex flex-col  items-center' action="" onSubmit={Addproducthandler}  >
            <h1 className='text-3xl mb-5 w-1/2'>Add New Product</h1>
            <input onChange={((e)=>{return settitle(e.target.value)})} value={title} className='text-2xl bg-zinc-50 rounded-md p-1 w-1/2 mb-3' type="text" placeholder='Title' />
            <input onChange={((e)=>{return setimage(e.target.value)})} value={image} className='text-2xl bg-zinc-50 rounded-md p-1 w-1/2 mb-3' type="text" placeholder='image url' />
       
            <div className='w-1/2 flex justify-between '>
            <input onChange={((e)=>{return setcategory(e.target.value)})} value={category} className='text-2xl bg-zinc-50 rounded-md p-1 w-[45%] mb-3' type="text" placeholder='category' />
            <input onChange={((e)=>{return setprice(e.target.value)})} value={price} className='text-2xl bg-zinc-50 rounded-md p-1 w-[45%] mb-3' type="number" placeholder='price' />
            </div>
            <textarea onChange={((e)=>{return setdescription(e.target.value)})} value={description} className='text-2xl bg-zinc-50 rounded-md p-1 w-1/2 mb-3' rows="5" type="text" placeholder='enter product descrption here...    ' >
            </textarea>

           <div className='w-1/2'>
           <button className='px-4 py-2 border border-blue-600 rounded mt-4 self-start'>Add New Product</button>

           </div>
           


        </form>
    </div>
  )
}

export default Create