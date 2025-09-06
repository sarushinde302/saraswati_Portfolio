import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-neutral-900 text-white">
      <div className="container mx-auto px-6">
        {/* Animated Heading */}
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold text-center mb-10"
        >
          Get in Touch
        </motion.h2>

        <div className="max-w-2xl mx-auto space-y-6">
          {/* Address Section */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 bg-neutral-800 p-4 rounded-lg shadow-md"
          >
            <FaMapMarkerAlt className="text-blue-500 text-2xl" />
            <p className="text-lg">Chintamani Park, Theur, Pune 412110</p>
          </motion.div>

          {/* Phone Section */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 bg-neutral-800 p-4 rounded-lg shadow-md"
          >
            <FaPhoneAlt className="text-green-400 text-2xl" />
            <a href="tel:+919307378250" className="text-lg text-blue-400 hover:underline">
              +91 7755912230
            </a>
          </motion.div>

          {/* Email Section */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 bg-neutral-800 p-4 rounded-lg shadow-md"
          >
            <FaEnvelope className="text-red-400 text-2xl" />
            <a href="mailto:gayatrishinde1404@gmail.com" className="text-lg text-blue-400 hover:underline">
              sarushinde302@gmail.com
            </a>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center gap-6 mt-6"
          >
            <a href="https://github.com/sarushinde302" target="_blank" rel="noopener noreferrer" className="text-3xl text-white hover:text-gray-400">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/saraswatishinde43/" target="_blank" rel="noopener noreferrer" className="text-3xl text-white hover:text-blue-400">
              <FaLinkedin />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
