import React from "react";
import cars from "../data/Cars.json"; // Import car data from JSON
import { motion } from "framer-motion";
const Collection = () => {
  // Split cars into two groups: first three and next three
  const firstThreeCars = cars.slice(0, 3);
  const nextThreeCars = cars.slice(6, 9);

  return (
    <div className="car-container  bg-neutral-900 h-full  lg:px-20 px-10">
      {/* Section Title */}
      <div className="border-b border-neutral-500 mb-8 text-white">
        <motion.h1  whileInView={{x:0,opacity:1}} initial ={{x:0,opacity:0}}  transition={{duratiion:1,delay:0.4}} className="py-5 text-4xl italic p-2">Porche</motion.h1>
      </div>

      {/* Grid Container to Display First 3 Cars */}
      <div className="grid mb-10 lg:grid-cols-3 sm:grid-col-2 grid-cols-1 gap-8 max-w-6xl mx-auto text-white">
        {firstThreeCars.map((car) => (
          <motion.div  whileInView={{x:0,opacity:1}} initial ={{x:0,opacity:0}}  transition={{duratiion:1,delay:0.7}}
            key={car.id}
            className="card border border-neutral-50 rounded-md hover:scale-105 transition-transform duration-300 text-black"
          >
            <div className="img-container p-5 mb-5">
              <img
                src={car.image}
                alt={car.name}
                className="rounded-md w-full object-cover"
              />
            </div>
            <div className="p-4 content-container bg-slate-300">
              <h5 className="text-2xl font-bold mb-3">{car.name}</h5>
              <p className="text-lg mb-2">Price: {car.price}</p>
              <p className="text-md">{car.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="border-b border-neutral-500 mb-8 text-white">
        <motion.h1   whileInView={{x:0,opacity:1}} initial ={{x:0,opacity:0}}  transition={{duratiion:1,delay:0.6}} className="text-4xl italic p-2">Tesla</motion.h1>
      </div>

      {/* Grid Container to Display Next 3 Cars */}
      <div className="grid lg:grid-cols-3 sm:grid-col-2 grid-cols-1 gap-8 max-w-6xl mx-auto text-white">
        {nextThreeCars.map((car) => (
          <motion.div whileInView={{x:0,opacity:1}} initial ={{x:0,opacity:0}}  transition={{duratiion:1,delay:0.5}} 
            key={car.id}
            className="card border lg:h-3/4 lg:pb-36 overflow-hidden border-neutral-50 rounded-md hover:scale-105 transition-transform duration-300 text-black"
          >
            <div className="img-container lg:h-52  mt-4 mb-5">
              <img
                src={car.image}
                alt={car.name}
                className="rounded-md w-full p-5 object-cover"
              />
            </div>
            <div className="content-container bg-slate-300 p-5">
              <h5 className="text-2xl font-bold mb-3">{car.name}</h5>
              <p className="text-lg mb-2">Price: {car.price}</p>
              <p className="text-md">{car.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Collection;