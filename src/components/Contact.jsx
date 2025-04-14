import { div } from "motion/react-client";
import React from "react";
import Navbarcom from '../components/Navrbarcom';
import feature from '../data/home.png';
import ServiceGrid from "./ServiceGrid";
import Footer from "./Footer";
import { motion } from "framer-motion";
export default function Contact() {
  return (

    <>
    <Navbarcom/>
    <ServiceGrid/>
    <div className="form-container mt-20  bg-zinc-800 lg:m-10 rounded-md lg:flex justify-evenly gap-5 text-white ">
   
      <motion.div whileInView={{x:0,opacity:1}} initial ={{x:0,opacity:0}}  transition={{duratiion:1,delay:1.3}}  className="lg:flex  items-center w-full   lg:w-1/2  ">
      <div className=" p-8 flex flex-col lg:pl-28 rounded-lg  ml-5   shadow-md w-full ">
        <h2 className="lg:text-5xl  text-4xl opacity-65 font-bold mb-6">Contact Us</h2>
        <form>
          {/* Phone */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="phone">
              Tel.
            </label>
            <input
              type="tel"
              id="phone"
              className="px-4 w-2/3 py-2 bg-transparent border  outline-none border-gray-300 rounded-md focus:ring-blue-500 "
              placeholder="1800 102 2269"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-2/3 px-4 py-2 border bg-transparent  outline-none border-gray-300 rounded-md focus:ring-blue-500 "
              placeholder="contact.india@bmw.in"
            />
          </div>

          {/* Grievance Redressal Officer */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="grievance">
              Grievance Redressal Officer
            </label>
            <textarea
              id="grievance"
              className="w-2/3 px-4  bg-transparent outline-none py-7 border border-gray-300 rounded-md focus:ring-blue-500 "
              rows="4"
              placeholder="Enter unresolved issue details..."
            />
          </div>

          {/* Tip */}
          <div className="mb-4 text-sm text-gray-500">
            Tip: Please have your vehicle identification number ready during the call.
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-28 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>

    <motion.div whileInView={{x:0,opacity:1}} initial ={{x:0,opacity:0}}  transition={{duratiion:1,delay:1.3}}  className="lg:w-1/2 w-full   sm:mb-20  p-10 flex justify-center flex-col items-center">
    <h1 className="lg:text-5xl text-4xl text-center  opacity-55 font-sans font-bold mb-4 mb-5">We Are There For You</h1>
          <p className="text-lg text-center mb-4 font-tittle">
            Don't worry, we are here 24/7 to assist you. Whether it's a concern about your account 
            or a general inquiry, we are committed to providing timely and reliable support.
          </p>
         

      <img src={feature}   className="w-3/5 mt-10" alt="" />
      <p className="text-lg   text-center mt-3 font-serif ">
  For any queries, please let us know. Ensuring your satisfaction is our priority.
</p>
    </motion.div>

      
    
    </div>
    <Footer/>
   </>
  );
}

