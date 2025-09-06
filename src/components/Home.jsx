{ /*   import React from 'react';
import { motion } from 'framer-motion';
import ProfilePic from '../assets/MyImg.jpg';

// Animation variants for smooth transitions
const Container = (delay) => ({
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: delay, type: 'spring', stiffness: 100 },
  },
});

function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-20 px-6">
       
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h1
            variants={Container(0)}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight"
          >
            Hello, I'm Gayatri Shinde
          </motion.h1>
          <motion.p
            variants={Container(0.4)}
            initial="hidden"
            animate="visible"
            className="text-xl sm:text-2xl mt-4 max-w-lg mx-auto lg:mx-0 font-light"
          >
            A passionate front-end developer with expertise in React.js, HTML, CSS, and JavaScript. I build beautiful, responsive web experiences that engage and delight users.
          </motion.p>

         
          <motion.a
            variants={Container(0.8)}
            initial="hidden"
            animate="visible"
            href="/Gayatri_Shinde_CV.pdf"
            download
            className="mt-6 inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full transition-transform transform hover:scale-105"
          >
            Download CV
          </motion.a>
        </div>

       
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg"
          >
            <img
              src={ProfilePic}
              alt="Gayatri Shinde"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;  */}




import React from 'react';
import { motion } from 'framer-motion';
import ProfilePic from '../assets/MyImg.jpg';

// Animation variants for smooth transitions
const Container = (delay) => ({
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: delay, type: 'spring', stiffness: 100 },
  },
});

function Home() {
  return (
  
    <div id="home"  
        className="bg-black text-white min-h-screen">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-20 px-6">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h1
            variants={Container(0)}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight"
          >
            Hello, I'm Saraswati Shinde
          </motion.h1>

          {/* Front End Developer with Gradient and Animation */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }} // Fade in and out
            transition={{ duration: 2, repeat: Infinity }} // Infinite animation
            className="text-3xl sm:text-4xl mt-4 bg-gradient-to-r from-pink-300 via-purple-500 to-blue-400 bg-clip-text text-transparent font-bold"
          >
            Aspiring Data Analyst
          </motion.h2>

          <motion.p
            variants={Container(0.4)}
            initial="hidden"
            animate="visible"
            className="text-xl sm:text-2xl mt-4 max-w-lg mx-auto lg:mx-0 font-light"
          >
            IT student specializing in Data Analysis with skills in software design, coding, and web development. Passionate about creating innovative, AI-driven solutions to solve real-world problems
          </motion.p>

          {/* Download CV Button */}
          <a
            href="/GAYATRI_SHINDE_CV.pdf"
            download="Gayatri_Resume.pdf"
            className="mt-6 inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full transition-transform transform hover:scale-105"
          >
            Download CV
          </a>

        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg"
          >
            <img
              src={ProfilePic}
              alt="Gayatri Shinde"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
   
  );
}

export default Home;
