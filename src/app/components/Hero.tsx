import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ChevronDown, Download } from 'lucide-react';

const profileImage = new URL('../../assets/Profile_Image.png', import.meta.url).href;

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#1E3A5F] to-[#0A1628]">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Data Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#00BCD4] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="#00BCD4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          {/* Left - Profile Image */}
          <motion.div
            className="md:col-span-2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#00BCD4] rounded-full blur-xl opacity-30 animate-pulse" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#00BCD4] shadow-2xl">
                <img
                  src={profileImage}
                  alt="Ankit Rathod"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="md:col-span-3 text-white text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ankit Rathod
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-[#00BCD4] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Data Engineer | Building Scalable Pipelines & Cloud Infrastructure
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Crafting scalable ETL pipelines, optimizing distributed data processing, and building cloud data platforms that power data-driven decisions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-[#00BCD4] text-white font-semibold rounded-lg hover:bg-[#4DD0E1] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                View My Work
              </button>
              <a
                href="/resume.pdf"
                download="resume.pdf"
              >
                <button className="px-8 py-3 border-2 border-[#00BCD4] text-[#00BCD4] font-semibold rounded-lg hover:bg-[#00BCD4] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2">
                  <Download size={20} />
                  Download Resume
                </button>
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex gap-6 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <a
                href="https://www.linkedin.com/in/ankit-rathod-27a631233/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#00BCD4] transition-colors transform hover:scale-110"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://github.com/ankit-1301?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#00BCD4] transition-colors transform hover:scale-110"
              >
                <Github size={28} />
              </a>
              <a
                href="mailto:asr95128@gmail.com"
                className="text-white hover:text-[#00BCD4] transition-colors transform hover:scale-110"
              >
                <Mail size={28} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#00BCD4] hover:text-[#4DD0E1] transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown size={40} />
      </motion.button>
    </section>
  );
}