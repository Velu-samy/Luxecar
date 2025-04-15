import React from 'react'
import  './stylef.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


function Footer() {
  return (
 <div className="footer-container bg-neutral-900">
     <div className=' bg-footer font-tittle '>
      <div className="footer-container lg:flex     text-white  border-r-white p-5">
      <motion.div  whileInView={{x:0,opacity:1}} initial ={{x:0,opacity:0}}  transition={{duratiion:2.5,delay:0.5}} className="col-1 lg:flex lg:flex-row lg:justify-evenly w-full   lg:border-r lg:items-center lg:w-3/4 lg:p-6">  
      <div className="company">
      <p className="text-center text-sm text-white">
  Thank you for choosing LuxeDrive—drive the best,<br /> live the best.
</p>
</div>
      <div className="company flex justify-center flex-col items-center mt-7">
  <h2 className='text-2xl mb-3 text-center ' >Company</h2>
  <p className='group lg:flex lg:items-center     '>
    <Link to="/about" className="text-white">About</Link>
    <span className="ml-2 transform transition-transform group-hover:translate-x-2">
      ⇨
    </span>
  </p>
  <p className='group flex items-center'>
    <Link to='/' className="text-white">Home</Link>
    <span className="ml-2 transform transition-transform group-hover:translate-x-2">
      ⇨
    </span>
  </p>
  <p className='group flex items-center'>
    <Link to="/contact" className="text-white">Contact</Link>
    <span className="ml-2 transform transition-transform group-hover:translate-x-2">
      ⇨
    </span>
  </p>
  <p className='group flex items-center'>
    <a href="/" className="text-white">Test Drive</a>
    <span className="ml-2 transform transition-transform group-hover:translate-x-2">
      ⇨
    </span>
  </p>
</div>
        <div className="company flex justify-center flex-col items-center mt-10">
            <h2 className='text-2xl mb-3 text-center'>Services</h2>
            <p className='group flex items-center'>
    <a href="" className="text-white">Test Drive</a>
    <span className="ml-2 transform transition-transform group-hover:translate-x-2">
      ⇨
    </span>
  </p>
            <p className='group flex items-center'><a href="">Track Service</a>   <span className="ml-2 transform transition-transform group-hover:translate-x-2">
      ⇨
    </span></p>
            <p className='group flex it<ems-center'><a href="">Cancel Service</a><span className='ml-2 transform transition-transform group-hover:translate-x-2'> ⇨</span></p>
            <p className='group flex items-center'><a href="">Warrenty Check</a>   <span className="ml-2 transform transition-transform group-hover:translate-x-2">
      ⇨
    </span></p>

        </div>
        <div className="company flex justify-center flex-col items-center mt-10">
        <h2 className='text-2xl mb-3 text-center'>Contact</h2>
            <p>91+ 8072624995 </p>
            <p>Logo@gmail.com</p>

            </div></motion.div>

      <motion.div  whileInView={{x:0,opacity:1}} initial ={{x:0,opacity:0}}  transition={{duratiion:2.5,delay:0.5}}  className="col-2 lg:w-2/5 p-8  w-full  flex flex-col justify-center items-center ">
      <p className=' lg:italic text-md      font-bold   text-blue-600 mb-3'>Newsletter</p>
       <h1 className='font-bold' >Subscribe To our  NewsLetter!! </h1>
       <input type="text " className='w-2/3 border-white  rounded-md p-2 m-4 bg-transparent border-neutral-300 border outline-none'  />
       <button className='px-5 py-2 border rounded-sm mt-4 bg-blue-500 transition-transform transition '>Submit</button>
      </motion.div>
      </div>
      <div className="footer-d flex justify-center p-3 border-t bg-zinc-900  text-white font-bold border-neutral-400">
        <h1>LuxeDrive@2025 All rights Recived</h1>
      </div>
    </div>
 </div>
  )
}

export default Footer
