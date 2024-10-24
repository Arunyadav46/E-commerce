import React, { useContext } from 'react'
import { productcontext } from '../Utills/Context'
import { Link } from 'react-router-dom';

function Nav() {
     
      const[products] =  useContext(productcontext);
     
       
      let distinct_category =  products && products.reduce((acc,curr)=>{
                              return  [...acc, curr.category]
                       },[])

           distinct_category =  [...new Set(distinct_category)];      
           console.log(distinct_category);


  return (
    <nav className='w-[15%] h-full bg-red-100 pt-10 flex flex-col items-center'>
          <a className='px-3 py-2 border border-zinc-600' href="/create">Add New Product </a>

          <hr className='border border-zinc-300 mt-5 w-[80%]'/>
          <h1 className='text-2xl w-[80%] mt-4'>Category Filter</h1>

          <div className='w-[80%]'>
      
              {distinct_category.map((item,index)=>{
                 return   <Link key={index} to={`/?category=${item}`} className=' mt-4 flex items-center gap-2 my-4'>
                 <span className='w-[15px] h-[15px] bg-green-400 rounded-full'></span>
                 <h2>{item}</h2>
               </Link>
              })}


            

            

          </div>

            
         </nav>
  )
}

export default Nav