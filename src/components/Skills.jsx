import { RiReactjsLine, RiHtml5Line, RiCss3Line, RiJavascriptLine, RiTailwindCssLine } from "react-icons/ri";
import { FaGithub, FaPython, FaDatabase } from "react-icons/fa";
import {  SiMysql, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Skills() {
  return (
    <div id="skills" className="bg-black py-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-white text-center text-4xl mb-16"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 1 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-8"
      >
        {/* React */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="bg-black border-4 border-neutral-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <RiReactjsLine className="text-6xl text-cyan-400" />
        </motion.div>

        {/* HTML */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="bg-black border-4 border-neutral-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <RiHtml5Line className="text-6xl text-orange-500" />
        </motion.div>

        {/* CSS */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="bg-black border-4 border-neutral-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <RiCss3Line className="text-6xl text-blue-500" />
        </motion.div>

        {/* JavaScript */}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="bg-black border-4 border-neutral-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <RiJavascriptLine className="text-6xl text-yellow-400" />
        </motion.div>

        {/* Tailwind */}
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="bg-black border-4 border-neutral-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <RiTailwindCssLine className="text-6xl text-sky-500" />
        </motion.div>

        {/* Python */}
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="bg-black border-4 border-neutral-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <FaPython className="text-6xl text-yellow-300" />
        </motion.div>

        {/* MySQL */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="bg-black border-4 border-neutral-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <SiMysql className="text-6xl text-blue-600" />
        </motion.div>

        {/* Database */}
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="bg-black border-4 border-neutral-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <FaDatabase className="text-6xl text-green-500" />
        </motion.div>

      

        {/* Mongodb */}
        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className="bg-black border-4 border-neutral-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <SiMongodb className="text-6xl text-indigo-400" />
        </motion.div>

        {/* GitHub */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="bg-black border-4 border-neutral-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <FaGithub className="text-6xl text-gray-200" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Skills;
