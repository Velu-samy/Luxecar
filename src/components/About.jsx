import React from 'react'
import about from '../data/about.png';
import offer from '../data/offer.png';
import './Aboutstyle.css';
import { div } from 'motion/react-client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Navbarcom from './Navrbarcom';
import { motion } from 'framer-motion';
function About() {
  return (


   <div>
    <Navbarcom/>

<div className="about-container">
<div className="top-container  m-5 rounded-md flex justify-center mt-20 lg:p-10 p-4 py-28 bg-neutral-950  text-white flex-col items-center lg:px-32  font-tittle  ">
<motion.h1  whileInView={{y:0,opacity:1}} initial ={{y:-50,opacity:0}}  transition={{duratiion:2.5,delay:0.5}} className='lg:text-5xl text-3xl mb-2  text-neutral-500 '>About us</motion.h1>
<motion.h1  whileInView={{y:0,opacity:1}} initial ={{y:-50,opacity:0}}  transition={{duratiion:2.5,delay:0.7}} className='lg:text-5xl  text-3xl mt-4'>LuxeDrive
</motion.h1>

<motion.p  whileInView={{y:0,opacity:1}} initial ={{y:-50,opacity:0}}  transition={{duratiion:2.5,delay:0.9}} className='p-2 mt-10 text-center'>
  At LuxeDrive, we are passionate about redefining the automotive experience by delivering unparalleled quality and service. From luxury performance vehicles to state-of-the-art electric cars, we pride ourselves on offering a carefully curated selection that combines innovation, style, and sustainability. Our dedicated team is committed to ensuring every customer journey is seamless, providing exceptional support from the moment you step into our showroom to long after you've driven away in your dream car. With a focus on precision craftsmanship, advanced technology, and an unwavering commitment to customer satisfaction, we strive to set new standards in the automotive industry. Experience excellence and drive with confidence—welcome to LuxeDrive.
</motion.p>
  
  </div>    

<div className="about-car flex     lg:mt-20 font-tittle text-white">
<motion.div whileInView={{x:0,opacity:1}} initial ={{x:-100,opacity:0}}  transition={{duratiion:2.5,delay:0.3}} className=" flex flex-col justify-center px-10  lg:border-b border-t h-full lg:w-1/2">
<h1 className=' text-2xl lg:text-3xl font-bold'> Did You Know? – The Future of Cars is Here!!</h1>
<h2 className='text-md   opacity-75 mt-2 mb-3 '>Cars are evolving faster than ever! Here are some groundbreaking trends shaping the future:
</h2>
<ul className='gap-3  mt-6 flex flex-col '>
  <li>- Electric Vehicles (EVs): Leading the charge are cars like the Porsche Taycan and Tesla. With sustainability at their core, EVs offer lightning-fast acceleration and zero emissions.
</li>
<li>- Autonomous Driving: Self-driving cars are no longer science fiction! Brands like Waymo and Mercedes-Benz are pioneering this revolutionary tech.
</li>
</ul>
<div className="button-container mt-7">
<button className='px-5 py-2 rounded-sm border hover:bg-neutral-200  hover:text-black  mt-3 bg-transparent '>Check more</button>

</div>
</motion.div>
<motion.div whileInView={{x:0,opacity:1}} initial ={{x:100,opacity:0}}  transition={{duratiion:3.5,delay:0.3}} className='lg:w-1/2' >
<img  src={offer} alt=""  className=''  />
</motion.div>


</div>
</div>



    <div className="about-conatiner    lg:flex     items-center   p-10 mt-10   font-tittle  lg:justify-between lg:gap-10 lg:p-20 ">
      <motion.div whileInView={{x:0,opacity:1}} initial ={{x:-100,opacity:0}}  transition={{duratiion:3.5,delay:0.3}} className="col-1 lg:w-2/5 w-full">
        <img src={about}  className='rounded-md mb-20' style={{with:"20px"}} alt="" />
      </motion.div>
      <motion.div whileInView={{x:0,opacity:1}} initial ={{x:100,opacity:0}}  transition={{duratiion:3.5,delay:0.3}} className="col-2 lg:w-2/4  w-full text-white text-md  lg:mt-0  md:mt-10">
      <p>
  The interiors of LuxeDrive's luxury cars are designed to elevate every journey into an experience of unmatched comfort and style. Step inside, and you'll be surrounded by hand-stitched leather seating, fine wood trims, and sleek metallic accents—all chosen to perfection. Every element, from the ambient lighting to the panoramic sunroof, creates an atmosphere of refined elegance. Advanced technology seamlessly integrates with the design, featuring intuitive touchscreens, voice-controlled systems, and personalized climate settings. Our attention to detail ensures that every switch, finish, and texture not only looks stunning but feels exceptional to the touch. At LuxeDrive, we turn every mile into a masterpiece.
</p>
      </motion.div>
    </div>
    <Footer/>
   </div>
  )
}

export default About
