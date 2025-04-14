import React from "react";
import { motion } from "framer-motion";
export default function ServiceGrid() {
  return (
    <div className="my-7 flex items-center justify-center">
      <div className="max-w-7xl w-full p-8">
        <motion.h1 animate={{y:0,opacity:1}} initial ={{y:-50,opacity:0}}  transition={{duratiion:1,delay:0.6}}  className="lg:text-4xl text-3xl font-bold text-center text-white mb-8">Our Services</motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Find a New Car */}
          <motion.div animate={{x:0,opacity:1}} initial ={{x:0,opacity:0}}  transition={{duratiion:0.7,delay:0.8}}  className="bg-zinc-700 p-6 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-[0_4px_15px_-4px_rgba(255,255,255,0.75)]">
            <h2 className="lg:text-2xl text-xl font-bold mb-4 text-white">Find a New Car</h2>
            <p className="text-gray-300 mb-4">
              Explore our latest collection of cars designed to suit your style and needs.
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Learn More
            </button>
          </motion.div>

          {/* Request a Service */}
          <motion.div animate={{x:0,opacity:1}} initial ={{x:0,opacity:0}}  transition={{duratiion:1,delay:0.9}}  className="bg-zinc-700 p-6 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-[0_4px_15px_-4px_rgba(255,255,255,0.75)]">
            <h2 className="lg:text-2xl text-xl font-bold mb-4 text-white">Request a Service</h2>
            <p className="text-gray-300 mb-4">
              Book a service appointment to keep your car in excellent condition.
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Schedule Now
            </button>
          </motion.div>

          {/* Track the Warranty */}
          <motion.div animate={{x:0,opacity:1}} initial ={{x:0,opacity:0}}  transition={{duratiion:1,delay:1.1}}  className="bg-zinc-700 p-6 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-[0_4px_15px_-4px_rgba(255,255,255,0.75)]">
            <h2 className="lg:text-2xl text-xl font-bold mb-4 text-white">Track the Warranty</h2>
            <p className="text-gray-300 mb-4">
              Check your car's warranty status and details with ease.
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Track Now
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}