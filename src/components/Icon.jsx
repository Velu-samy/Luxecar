import React from 'react';
import { motion } from 'framer-motion';
import logo1 from '../data/logo1.png';
import logo2 from '../data/logo2.png';
import logo3 from '../data/logo3.png';
import logo4 from '../data/logo4.png';
import logo5 from '../data/logo5.png';
import logo6 from '../data/logo6.png';
import '../components/stylef.css';

function Icon() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  // Animation variants for container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger appearance by 0.3 seconds per icon
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Start slightly below
    visible: { opacity: 1, y: 0 }, // Fade in and move up
  };

  return (
    <motion.div
      className="icon-container lg:p-10 p-4 pt-10 flex justify-center items-center lg:p-10 lg:gap-20 gap-4 "
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" // Triggers animation when in view
      viewport={{  amount: 0.5 }} // Customizes when to trigger animation
    >
      {logos.map((logo, index) => (
        <motion.div
          key={index}
          className="i-p mr-2"
          variants={itemVariants}
          whileHover={{ scale: 1.2 }} // Bounce effect on hover
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <img src={logo} alt={`Logo ${index + 1}`}  className="lg:w-16  w-2      opacity-50" />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Icon;