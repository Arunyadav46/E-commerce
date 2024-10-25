import React from 'react'
import Home from './Components/Home'
import Nav from './Components/Nav'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Details from './Components/Details'
import Create from './Components/Create'

function App() {
  // const{search ,pathname} = useLocation()
  // console.log("serach" +search, "pathname" +pathname)
  return (
    <div className='w-full h-screen bg-zinc-400 flex'>

      <Link className='text-red-300 absolute left-[20%] top-[3%] text-xl font-semibold' to="/">Home</Link>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/details/:id" element={<Details/>}/>
      </Routes>
    </div>
  )
}

export default App