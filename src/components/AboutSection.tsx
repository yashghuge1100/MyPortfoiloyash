import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

interface SkillCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const SkillCard = (
  { title, description, icon }: SkillCardProps = {
    title: "Skill",
    description: "Description of the skill",
    icon: null,
  },
) => {
  return (
    <Card className="h-full bg-white shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-t-black hover:translate-y-[-5px]">
      <CardHeader className="pb-2">
        {icon && <div className="mb-2 text-primary">{icon}</div>}
        <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-gray-600 leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden lg:text-justify"
      id="about"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-70"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gray-100 rounded-full opacity-50 blur-xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gray-100 rounded-full opacity-50 blur-xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="flex flex-col justify-end items-center"
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="inline-block text-3xl font-bold py-2 px-8 border-2 border-gray-800 rounded-full text-center shadow-md bg-white">
              ABOUT ME
            </h2>
          </motion.div>

          <div>
            <motion.div
              variants={itemVariants}
              className="mb-16 max-w-3xl text-center"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm Yash Ghuge — a Computer Science student with a strong tech
                edge. From AI-based automation tools to clean, user-focused
                visual design, I thrive at the intersection of art and
                engineering.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                I've worked on projects involving Octoparse, AppScript, XML,
                Tableau, Splunk, AWS, and developed intelligent systems like
                Script Sage (an AI chatbot for C learning).
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4 font-medium">
                Whether it's a poster, a UI, or a fully functional data-driven
                app — I design with purpose.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <SkillCard
                title="Design"
                description="Posters, branding kits, UI/UX, layout design"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <SkillCard
                title="Development"
                description="Frontend skills, automation tools, backend workflows"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <SkillCard
                title="Innovation"
                description="AI tools, scripting workflows, process optimization"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
