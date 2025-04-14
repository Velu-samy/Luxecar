import React from 'react'
import './stylef.css';
import { motion } from 'framer-motion';
import bc from '../data/banner-car.png'
 function Banner2() {
  return (
    <div className='bg-container mb-32 font-tittle text-white items-center  mt-20  p-5  lg:flex '>
      <motion.div whileInView={{x:0,opacity:1}} initial ={{x:-100,opacity:0}}  transition={{duratiion:1,delay:0.5}}  className='lg:w-1/2 mt-5 pt-10    w-full lg:p-10'>
      <h1 className='font-serif lg:text-6xl text-5xl'>Audi e-tron</h1>
    <p className='font-sans py-3'> The Audi e-tron is a premium electric SUV that combines cutting-edge technology with luxury. It features a spacious interior with high-quality materials, advanced digital displays, and intuitive controls..<br/></p> 
      <p className='text-2xl font-bold'><strong>EMI Starts From:</strong> ₹10,104 per month.</p>
<button className='px-5  py-2 border mt-5 hover:bg-white hover:text-black transition'>Explore More</button>
     </motion.div>
      <motion.div whileInView={{x:0,opacity:1}} initial ={{x:100,opacity:0}}  transition={{duratiion:1,delay:0.5}}  className='lg:w-1/2  w-full'>
        <img src={bc} alt=""  className='mt-20 w-full' />
        </motion.div>     
    </div>
  )
}

export default Banner2
