import React from 'react'
import offer from '../data/offer.png'
import car from '../data/car.png'
import Icon from './Icon'
import { motion } from 'framer-motion'

function Banner() {
  return (
    <div>
      <div className="banner-container  bg-neutral-900 py-4">
        <div className="middle-banner mt-20  flex lg:flex-row-reverse  font-tittle  flex-col-reverse  justify-around items-center ">
          <motion.div    whileInView={{x:0,opacity:1}}  initial={{x:-150,opacity:0}}  transition={{duration:0.6 ,delay:0.2}}   className='lg:w-1/2 lg:p-10 p-4 lg:px-20 w-full'><img src={car} alt="" /></motion.div>
          < motion.div whileInView={{x:0,opacity:1}}  initial={{x:150,opacity:0}}  transition={{duration:0.6 ,delay:0.2}}   className=" lg:p-10  ml-10 contens p-4   text-white   lg:text-black lg:w-1/3 w-full">
            <h1 className="text-5xl font-bold mb-4">Ferrari LaFerrari</h1>
            <p className="text-lg mb-4">Starting at $250,000</p>
            <p className="text-lg font-serif ">
              The Ferrari LaFerrari achieves a top speed of 350 km/h with a V12
              Hybrid engine delivering 950 horsepower.
            </p>
            <button className='px-5 py-2  border border-black bg-slate-800 text-white  mt-5 hover:bg-transparent hover:text-black'>Discover Now</button>

          </motion.div>
        </div>



        <div className="banner-2  lg:flex font-tittle   items-center  flex-row-reverse lg:m-10 p-4  pt-10 lg:pl-10 lg:pr-10  gap-20 text-white mt-20">
          <motion.div whileInView={{x:0,opacity:1}} initial ={{x:100,opacity:0}}  transition={{duratiion:2,delay:0.5}}  className="col-1 w-full  w-1/2">
            <h1 className="text-5xl font-bold mb-4">Porsche Taycan</h1>
            <p className="text-lg mb-4">Starting at ₹1.50 Crore</p>
            <p className="text-lg font-serif">
              The Porsche Taycan combines luxury with sustainability, featuring a top
              speed of 260 km/h and delivering up to 750 horsepower with its all-electric drivetrain.
            </p>
            <button className="lg:px-6 py-3 border p-2 border-white bg-transparent text-white mt-5 hover:bg-white hover:text-black transition duration-300">
              Explore More
            </button>

          </motion.div>
          <motion.div whileInView={{x:0,opacity:1}} initial ={{x:-100,opacity:0}}  transition={{duratiion:2,delay:0.5}} className="col-2 sm:mt-20 mt-20  w-full  w-1/2">
            <img src={offer} alt="" />
          </motion.div>
        </div>
<div className='flex justify-center'>        <div className='border-b w-3/4 flex  border-b-neutral-500 justify-center items-center '></div>
</div>

<Icon/>
      </div>
    </div>
  )
}

export default Banner
