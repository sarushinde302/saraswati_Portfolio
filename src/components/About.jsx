import AboutImg from "../assets/About.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (  
    <section id="about">
      <div className="bg-gradient-to-b from-black via-gray-800 to-black text-white min-h-screen py-20">
        {/* Section Heading */}
        <h2 className="my-20 text-center text-4xl font-semibold">
          About <span className="text-purple-500">Me</span>
        </h2>
        
        {/* Content Container */}
        <div className="flex flex-wrap items-center justify-center lg:justify-between px-6 lg:px-20">
          
          {/* Image Section */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full lg:w-1/2 lg:p-8 flex justify-center"
          >
            <div className="relative group">
              <img
                src={AboutImg}
                className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-lg"
                alt="About"
              />
              <motion.div
                className="absolute inset-0 bg-purple-500 bg-opacity-20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              ></motion.div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full lg:w-1/2 mt-10 lg:mt-0 px-4 lg:px-0 text-center lg:text-left"
          >
            <p className="text-lg leading-relaxed">
  I’m <span className="font-bold text-purple-400">Saraswati Shinde</span>, an IT student specializing in 
  <span className="text-purple-400"> Data Analysis</span> with a strong foundation in 
  <span className="text-purple-400"> Python, SQL, Power BI, and Tableau</span>. I also have experience in 
  <span className="text-purple-400"> Software Design, Web Development, and Software Quality Management</span>, 
  focusing on building innovative and data-driven solutions.
</p>
<p className="mt-4 text-lg leading-relaxed">
  My projects span across <span className="text-purple-400">AI, OCR, API Integration</span>, and 
  <span className="text-purple-400"> Real-time Applications</span>. I prioritize writing efficient, 
  scalable code and aim to continuously advance my expertise in 
  <span className="text-purple-400"> Analytics, AI, and Modern Software Technologies</span>.
</p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full transition-transform transform hover:scale-105"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
