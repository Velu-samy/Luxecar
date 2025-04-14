import React, { useEffect, useRef } from "react";
import introLarge from "../data/intro.mp4";       // The default, large-screen video
import introSmall from "../data/small-intro.mp4";   // A smaller, optimized video for small screens
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  // Create refs for both videos
  const videoRefLarge = useRef(null);
  const videoRefSmall = useRef(null);

  useEffect(() => {
    // Pause and schedule play for both videos
    if (videoRefLarge.current) {
      videoRefLarge.current.pause();
      setTimeout(() => {
        videoRefLarge.current.play();
      }, 2000);
    }
    if (videoRefSmall.current) {
      videoRefSmall.current.pause();
      setTimeout(() => {
        videoRefSmall.current.play();
      }, 2000);
    }
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Video Background Container */}
      <div className="video-container">
        {/* Large screen video */}
        <video
          ref={videoRefLarge}
          src={introLarge}
          type="video/mp4"
          muted
          loop
          preload="auto"
          className="video-background video-large"
        />
        {/* Small screen video */}
        <video
          ref={videoRefSmall}
          src={introSmall}
          type="video/mp4"
          muted
          loop
          preload="auto"
          className="video-background video-small"
        />
      </div>

      {/* Page Content */}
      <div className="relative z-10 overflow-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Landing Page Content */}
        <div className="h-screen flex flex-col items-center justify-center">
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 2 }}
            className="font-extralight sm:text-center mt-52 text-4xl mb-5 lg:text-6xl text-white lg:mt-60"
          >
            Explore Excellence
          </motion.h1>
          <motion.h2
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.6 }}
            className="font-thin text-neutral-400 mb-4 text-lg"
          >
            Your Gateway to Luxury, Speed, and Reliability
          </motion.h2>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.4 }}
            className="mt-4 bg-transparent border border-white text-white px-6 py-2 rounded-lg text-xl flex items-center group"
          >
            <Link to="/models" className="text-white flex items-center">
              Book Now
              <span className="ml-2 transform transition-transform group-hover:translate-x-2">
                ⇨
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Additional Content After Scroll */}
      </div>
    </div>
  );
}

export default Hero;