import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="bg-black py-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-white text-center text-4xl mb-16"
      >
        Education
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-8"
      >
        {/* B.Tech Degree */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="bg-neutral-900 border border-purple-400 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 max-w-md"
        >
          <h3 className="text-2xl font-semibold text-white">
            B.Tech in Information Technology 
          </h3>
          <p className="text-sm text-gray-500">
            MIT ADT University, Loni Kalbhor | 2023 – Present
          </p>
          <p className="mt-4 text-gray-300">
            Currently pursuing my degree with a focus on{" "}
            <span className="font-semibold">Data Analysis, AI, and Software Development</span>. 
            Worked on projects involving{" "}
            <span className="font-semibold">AI, Web Applications, and Real-time Systems</span>.
          </p>
        </motion.div>

        {/* Diploma */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
          className="bg-neutral-900 border border-purple-400 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 max-w-md"
        >
          <h3 className="text-2xl font-semibold text-white">
            Diploma in Information Technology
          </h3>
          <p className="text-sm text-gray-500">
            JSPM Handewadi College | 2020 – 2023
          </p>
          <p className="mt-4 text-gray-300">
            Completed with <span className="font-semibold">68%</span>. 
            Built a strong foundation in{" "}
            <span className="font-semibold">Programming, Databases, and Software Design</span>. 
            Actively participated in{" "}
            <span className="font-semibold">academic projects and technical competitions</span>.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
