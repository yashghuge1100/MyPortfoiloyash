import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

const PortfolioSection = () => {
  // Sample portfolio items
  const portfolioItems: PortfolioItem[] = [
    {
      id: "1",
      title: "Data Pipeline Architecture",
      category: "Data Engineering",
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      description:
        "Designed and implemented a scalable data pipeline for real-time analytics.",
    },
    {
      id: "2",
      title: "Workflow Automation Tool",
      category: "Automation",
      imageUrl:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      description:
        "Created an automation tool that reduced manual processes by 75%.",
    },
    {
      id: "3",
      title: "E-commerce Platform",
      category: "Full Stack",
      imageUrl:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      description:
        "Built a complete e-commerce solution with React and Node.js.",
    },
    {
      id: "4",
      title: "AI Content Generator",
      category: "AI",
      imageUrl:
        "https://images.unsplash.com/photo-1677442135136-760c813a743d?w=800&q=80",
      description:
        "Developed an AI-powered content generation tool for marketing teams.",
    },
    {
      id: "5",
      title: "Data Visualization Dashboard",
      category: "Data Engineering",
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      description: "Created interactive dashboards for business intelligence.",
    },
    {
      id: "6",
      title: "Smart Home System",
      category: "Automation",
      imageUrl:
        "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80",
      description:
        "Designed a complete smart home automation system with IoT integration.",
    },
  ];

  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Data Engineering",
    "Automation",
    "Full Stack",
    "AI",
  ];

  const filteredItems =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

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
    <section
      id="portfolio"
      className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-70"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-gray-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-gray-200 rounded-full opacity-30 blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block text-3xl font-bold py-2 px-10 border-2 border-black rounded-full mb-8 shadow-md bg-white"
          >
            PORTFOLIO
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Tabs defaultValue="All" className="w-full max-w-md mx-auto">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8 p-1 bg-gray-100 rounded-xl">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    onClick={() => setFilter(category)}
                    className="px-4 py-2 font-medium data-[state=active]:bg-black data-[state=active]:text-white rounded-lg transition-all duration-300"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 bg-white rounded-xl">
                <div className="relative aspect-video overflow-hidden rounded-t-xl">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                      View Project
                    </span>
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <span className="text-xs bg-gray-100 px-3 py-1 rounded-full font-medium shadow-sm">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 italic font-medium">
            Many more designs in my creative vault.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
