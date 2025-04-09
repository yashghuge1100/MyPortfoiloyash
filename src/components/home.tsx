import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import PortfolioSection from "./PortfolioSection";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gray-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gray-200 rounded-full opacity-30 blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="inline-block px-8 py-2 mb-8 border-2 border-black rounded-full shadow-md bg-white">
            <h2 className="text-2xl font-bold">CONTACT</h2>
          </div>

          <p className="text-lg mb-12 font-medium">
            Interested in collaborating on a creative or technical project?
            Let's talk!
          </p>

          <form className="space-y-6 max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div>
              <Input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent transition-all"
              />
            </div>

            <div>
              <Textarea
                placeholder="Message"
                className="w-full p-3 border border-gray-300 rounded-md min-h-[150px] focus:ring-2 focus:ring-black focus:border-transparent transition-all"
              />
            </div>

            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type="submit"
                  className="px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-300 font-medium text-lg shadow-md"
                >
                  Submit
                </Button>
              </motion.div>
            </div>
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black text-white text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-700 via-gray-300 to-gray-700"></div>
        <div className="absolute top-0 right-0 w-40 h-40 bg-gray-800 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gray-800 rounded-full opacity-30 blur-3xl"></div>

        <div className="relative z-10">
          <div className="flex justify-center space-x-8 mb-8">
            <motion.a
              href="#"
              aria-label="LinkedIn"
              whileHover={{ y: -5, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </motion.a>
            <motion.a
              href="#"
              aria-label="GitHub"
              whileHover={{ y: -5, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </motion.a>
            <motion.a
              href="#"
              aria-label="Instagram"
              whileHover={{ y: -5, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </motion.a>
          </div>
          <p className="text-lg font-medium">
            © 2025 Yash Ghuge | Made with 💡 + ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
