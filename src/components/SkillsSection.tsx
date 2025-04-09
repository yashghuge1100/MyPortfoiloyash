import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

interface SkillItem {
  name: string;
  icon?: React.ReactNode;
}

interface SkillsProps {
  usingNow?: SkillItem[];
  learning?: SkillItem[];
  otherSkills?: SkillItem[];
}

const SkillsSection = ({
  usingNow = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "React.js" },
    { name: "Canva" },
  ],
  learning = [{ name: "Docker" }, { name: "DevOps" }],
  otherSkills = [
    { name: "Shell Scripting" },
    { name: "POWERBI" },
    { name: "AWS" },
    { name: "Python" },
    { name: "Git" },
    { name: "English (Fluent)" },
    { name: "Hindi (Native)" },
    { name: "Marathi (Fluent)" },
  ],
}: SkillsProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-gray-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gray-200 rounded-full opacity-30 blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          className="mb-12 text-center"
        >
          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600"
          >
            SKILLS
          </motion.h2>
          <motion.div
            variants={item}
            className="w-24 h-1 bg-gradient-to-r from-gray-900 to-gray-400 mx-auto mb-8 rounded-full"
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Using Now */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="bg-card shadow-lg border-t-4 border-black h-full">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Using Now
                </h3>
                <Separator className="mb-4 bg-gray-300" />
                <div className="flex flex-wrap gap-2 justify-center">
                  {usingNow.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge
                        variant="secondary"
                        className="px-3 py-1 text-sm font-medium shadow-sm"
                      >
                        {skill.name}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Learning */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="bg-card shadow-lg border-t-4 border-gray-600 h-full">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Learning
                </h3>
                <Separator className="mb-4 bg-gray-300" />
                <div className="flex flex-wrap gap-2 justify-center">
                  {learning.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge
                        variant="outline"
                        className="px-3 py-1 text-sm font-medium shadow-sm border-gray-400"
                      >
                        {skill.name}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Other Skills */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="bg-card shadow-lg border-t-4 border-gray-400 h-full">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-center">
                  Other Skills
                </h3>
                <Separator className="mb-4 bg-gray-300" />
                <div className="flex flex-wrap gap-2 justify-center">
                  {otherSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge className="px-3 py-1 text-sm font-medium shadow-sm">
                        {skill.name}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
