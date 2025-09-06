import React from "react";
import { motion } from "framer-motion";
import { FiFileText, FiGlobe, FiShield, FiActivity, FiCloud } from "react-icons/fi";

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
};

const hoverFx = { scale: 1.02, y: -4 };

const Pill = ({ children }) => (
  <span className="text-xs px-2 py-1 rounded-full border border-neutral-700 text-neutral-300">
    {children}
  </span>
);

const ProjectCard = ({ icon, title, subtitle, description, tech = [], highlights = [] }) => (
  <motion.div
    variants={cardVariants}
    initial="initial"
    whileInView="whileInView"
    viewport={{ once: true, amount: 0.2 }}
    whileHover={hoverFx}
    transition={{ duration: 0.5 }}
    className="relative rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6 shadow-xl overflow-hidden"
  >
    {/* subtle corner gradient accent */}
    <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-to-br from-purple-500/20 to-fuchsia-500/10 blur-2xl" />

    <div className="flex items-start gap-3">
      <div className="mt-1">{icon}</div>
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-white">{title}</h3>
        {subtitle && <p className="text-sm text-neutral-400 mt-0.5">{subtitle}</p>}
      </div>
    </div>

    <p className="text-sm md:text-[15px] text-neutral-300 mt-4 leading-relaxed">{description}</p>

    {!!highlights.length && (
      <ul className="mt-4 space-y-1.5 text-sm text-neutral-300 list-disc list-inside">
        {highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
    )}

    {!!tech.length && (
      <div className="mt-5 flex flex-wrap gap-2">
        {tech.map((t, i) => (
          <Pill key={i}>{t}</Pill>
        ))}
      </div>
    )}
  </motion.div>
);

export default function Portfolio() {
  // Projects reordered in your desired series
  const projects = [
    {
      icon: <FiShield className="h-7 w-7 text-emerald-400" />,
      title: "Plagiarism Detection System",
      subtitle: "NLP Similarity Analysis",
      description:
        "Detects document similarity and flags potential plagiarism using vectorization and similarity metrics with optional snippet-level highlights.",
      tech: ["Python", "TF-IDF / n-grams", "Cosine Similarity", "Scikit-learn"],
      highlights: ["Generates similarity score & summary", "Supports academic integrity workflows"],
    },
    {
      icon: <FiFileText className="h-7 w-7 text-purple-400" />,
      title: "SwasthyaSaar – GenAI-Powered Regional Language Medical Report Simplifier",
      subtitle: "AI + OCR + Translation | Web & Mobile",
      description:
        "Patient-centric system that extracts report text via OCR, simplifies medical jargon using a Medical Layman dataset with GenAI, then translates into Hindi/Marathi and delivers a clear, user-friendly report.",
      tech: [
        "Tesseract / GCV OCR",
        "Python (NLTK, spaCy, Regex)",
        "Flan-T5 / BART / GPT",
        "Google Translate / IndicTrans",
        "Flask/FastAPI",
      ],
      highlights: [
        "OCR → Simplify (GenAI) → Translate → Deliver pipeline",
        "Improves healthcare accessibility for regional/rural users",
      ],
    },
    {
      icon: <FiGlobe className="h-7 w-7 text-cyan-400" />,
      title: "Real-Time Translation Engine for Announcements",
      subtitle: "Live Multilingual Announcements",
      description:
        "Translates live/public announcements into user-preferred languages with low latency and optional TTS playback via web/mobile clients.",
      tech: [
        "Python",
        "Flask/FastAPI",
        "Google Translate API",
        "WebSockets",
        "gTTS / Cloud TTS",
        "Android/Web",
      ],
      highlights: [
        "On-demand playback in multiple Indian languages",
        "Bridges language gaps in transit/public spaces",
      ],
    },
    {
      icon: <FiCloud className="h-7 w-7 text-sky-400" />,
      title: "Weather Forecast Website (APIs)",
      subtitle: "6 Meteorological Services as Products",
      description:
        "Real-time weather, interactive UI, and navigable service tiles using OpenWeather API; helps users plan daily activities with accurate insights.",
      tech: ["HTML", "CSS", "JavaScript", "jQuery", "OpenWeather API"],
      highlights: ["Live conditions & forecasts", "Productized service layout"],
    },
    {
      icon: <FiActivity className="h-7 w-7 text-lime-400" />,
      title: "Automatic Ration Distribution System",
      subtitle: "Smart IoT + Biometric Verification",
      description:
        "Designed a smart ration distribution system that uses biometric authentication to ensure transparency and avoid fraud in public distribution.",
      tech: ["Arduino", "IoT Sensors", "Python", "MySQL"],
      highlights: [
        "Biometric-based authentication",
        "Automated ration dispensing",
        "Real-time stock management",
      ],
    },
  ];

  return (
    <section id="portfolio" className="my-24 bg-black text-white">
      {/* Animated Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.6 }}
        className="text-4xl text-center mb-12"
      >
        Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
