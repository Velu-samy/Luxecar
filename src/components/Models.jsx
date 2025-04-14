import React from 'react';
import cars from "../data/Cars.json";
import Navbarcom from '../components/Navrbarcom';
import { div } from 'motion/react-client';
import Footer from './Footer';
import Banner2 from './Banner2';
import { motion } from 'framer-motion';
import ServiceGrid from './ServiceGrid';

function Models() {
  // Split the cars array into two groups: first 6 cars and next 6 cars
  const firstThreeCars = cars.slice(0, 5);
  const nextThreeCars = cars.slice(6, 9);
  const nextfourCars = cars.slice(9, 12);

  return (
    <>
       <Navbarcom/>
    <div className=" mb-5 car-container h-full lg:px-20  px-10 ">
      {/* Section Title */}
      <div className="border-b border-neutral-500 mb-8 mt-14 text-white ">
        <motion.h1 animate={{x:0,opacity:1}} initial ={{x:0,opacity:0}}  transition={{duratiion:1,delay:0.4}}  className="  text-3xl   lg:text-4xl italic p-2">Porche</motion.h1>
      </div>

      {/* Grid Container to Display First 3 Cars */}
      <div className="grid mb-10 lg:grid-cols-3 sm:grid-col-2 grid-cols-1   gap-8 max-w-6xl mx-auto text-white">
        {firstThreeCars.map((car) => (
          <motion.div
            key={car.id} animate={{x:0,opacity:1}} initial ={{x:0,opacity:0}}  transition={{duratiion:1,delay:0.4}} 
            className="card  border border-neutral-50 rounded-md hover:scale-105 transition-transform duration-300 text-black"
          >
            <div className="img-container  p-5 mb-5">
              <img
                src={car.image}
                alt={car.name}
                className="rounded-md w-full object-cover"
              />
            </div>
            <div className="p-4 content-container bg-slate-300">
              <h5 className="lg:text-2xl text-xl font-bold mb-3">{car.name}</h5>
              <p className="text-lg mb-2">Price: {car.price}</p>
              <p className="text-md">{car.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="border-b border-neutral-500 mb-5 text-white">
        <motion.h1 whileInView={{x:0,opacity:1}} initial ={{x:0,opacity:0}}  transition={{duratiion:1,delay:0.2}}  className="lg:text-4xl  text-3xl italic p-2 mt-32">Tesla</motion.h1>
      </div>

      {/* Grid Container to Display Next 3 Cars */}
      <div className=" mb-10 mt-10  grid lg:grid-cols-3 sm:grid-col-2 gird-col-1 gap-8 max-w-6xl mx-auto text-white">
        {nextThreeCars.map((car) => (
          <motion.div whileInView={{x:0,opacity:1}} initial ={{x:0,opacity:0}}  transition={{duratiion:1,delay:0.5}} 
            key={car.id}
            className="card   border  overflow-hidden   border-neutral-50 rounded-md    hover:scale-105 transition-transform   duration-300 text-black"
          >
            <div className="img-container   h-48   overflow-hidden  mt-2 mb-2 ">
              <img
                src={car.image}
                alt={car.name}
                className="rounded-md  p-5 object-cover"
              />
            </div>
            <div className="content-container p-8 bg-slate-300 ">
              <h5 className="lg:text-2xl text-xl font-bold mb-3">{car.name}</h5>
              <p className="text-lg mb-2">Price: {car.price}</p>
              <p className="text-md">{car.description}</p>
            </div>
          </motion.div>
        ))}
      </div>



       <div className=" mt-32 border-b border-neutral-500  mb-8 text-white">
        <motion.h1 whileInView={{x:0,opacity:1}} initial ={{x:0,opacity:0}}  transition={{duratiion:1,delay:0.2}}   className="lg:text-4xl text-3xl  italic p-2">BMW</motion.h1>
      </div>

      {/* Grid Container to Display Next 3 Cars */}
      <div className=" m-2  grid lg:grid-cols-3  grid-col-1 sm:grid-col-2 gap-8 max-w-6xl mx-auto text-white">
        {nextfourCars.map((car) => (
          <motion.div whileInView={{x:0,opacity:1}} initial ={{x:0,opacity:0}}  transition={{duratiion:1,delay:0.5}} 
            key={car.id}
            className="card border  overflow-hidden border-neutral-50 rounded-md    hover:scale-105 transition-transform   duration-300 text-black"
          >
            <div className="img-container overflow-hidden h-48  mt-5 mb-5">
              <img
                src={car.image}
                alt={car.name}
                className="rounded-md w-full p-6 "
              />
            </div>
            <div className="content-container p-8 bg-slate-300 ">
              <h5 className="lg:text-2xl text-xl font-bold mb-3">{car.name}</h5>
              <p className="text-lg mb-2">Price: {car.price}</p>
              <p className="text-md">{car.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    <Banner2/>
  
    <Footer/>
    </>
 
  );
}

export default Models;



