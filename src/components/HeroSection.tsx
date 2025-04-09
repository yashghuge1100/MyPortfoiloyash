import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  subtitle?: string;
  socialLinks?: {
    linkedin?: string;
    github?: string;
    instagram?: string;
  };
  imageSrc?: string;
}

const HeroSection = ({
  name = "Yash Ghuge",
  title = "Computer Engineer & Data Science",
  subtitle = "I blend creativity with code — transforming ideas into intelligent design.",
  socialLinks = {
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    instagram: "https://instagram.com",
  },
  imageSrc = "https://i.imgur.com/wYhQOdc.jpg",
}: HeroSectionProps) => {
  return (
    <section className="flex flex-col md:flex-row h-screen bg-background overflow-hidden">
      {/* Left Section - Light Grey */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col justify-center px-8 md:px-16 py-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md relative z-10"
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="text-3xl font-bold border-2 border-black w-16 h-16 flex items-center justify-center rounded-full mb-8 bg-white shadow-lg"
            >
              YG
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg font-medium text-gray-600 mb-1"
            >
              Hi, I am
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600"
            >
              {name}
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-xl md:text-2xl font-medium text-gray-700 mb-4"
            >
              {title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-gray-600 mb-8 leading-relaxed"
            >
              {subtitle}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex space-x-4"
          >
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gray-300 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300 shadow-sm"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gray-300 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300 shadow-sm"
            >
              <Github size={20} />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gray-300 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300 shadow-sm"
            >
              <Instagram size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gray-200 rounded-full opacity-50 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gray-300 rounded-full opacity-40 blur-xl"></div>
      </div>

      {/* Right Section - Black */}
      <div className="w-full md:w-1/2 bg-black flex flex-col items-center justify-center relative px-8 py-12 overflow-hidden">
        {/* Full background image */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://i.imgur.com/wYhQOdc.jpg"
            alt="Background"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 w-full max-w-md flex flex-col items-center"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="w-64 h-64 md:w-80 md:h-80 mb-8 overflow-hidden rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            <img
              src={imageSrc}
              alt="Profile"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-black transition-all duration-300 px-6 py-2 text-lg font-medium"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-800 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-700 rounded-full opacity-20 blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;
