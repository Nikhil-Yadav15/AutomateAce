'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {ParticleBackground}  from '@/components/ui/partcle-effect';
import { SiMake, SiZapier, SiPython, SiNodedotjs, SiTensorflow } from 'react-icons/si';
import { FaCloud, FaCogs, FaProjectDiagram } from 'react-icons/fa';

export default function WorkDonePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [countersAnimated, setCountersAnimated] = useState(false);

  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const fadeInLeft = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const fadeInRight = {
    hidden: { 
      opacity: 0, 
      x: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const scaleIn = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateX: 15
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Handle modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    if (!isSubmitting) {
      setIsModalOpen(false);
      setShowSuccess(false);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      service: formData.get('service'),
      message: formData.get('message')
    };

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setShowSuccess(true);
      setTimeout(() => {
        closeModal();
        e.target.reset();
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Counter animation component
  const AnimatedCounter = ({ target, suffix = '%' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!countersAnimated) return;

      let startTime = null;
      const duration = 2000;
      
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        setCount(Math.floor(progress * target));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [countersAnimated, target]);

    return (
      <span className="text-4xl sm:text-5xl font-black text-yellow-400">
        {count}{suffix}
      </span>
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countersAnimated) {
            setCountersAnimated(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const resultsSection = document.getElementById('results-section');
    if (resultsSection) {
      observer.observe(resultsSection);
    }

    return () => observer.disconnect();
  }, [countersAnimated]);

  const portfolioProjects = [
    {
      title: "Automated Email Data Extraction Agent",
      description: "An intelligent agent that scans incoming emails, extracts key information (like names, dates, order details, or complaints), and structures it into usable formats — ready for dashboards, CRMs, or automated workflows. Say goodbye to manual copy-paste and hello to smart inbox automation.",
      videoId: "vDzSmiWqHAs",
      tags: ["AI email agent", "Email Automation", "NLP"]
    },
    {
      title: "Daily Planning Automation Chatbot",
      description: "Boost your productivity with our intelligent chatbot that integrates Google Calendar, Gemini AI, and Telegram. It generates smart daily schedules, sends reminders, syncs tasks, and gives real-time updates — all through natural chat interactions.",
      videoId: "Hk4i24SbNKo",
      tags: ["AI Planner", "Google Calendar", "Telegram Bot"]
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Explore our intelligent analytics platform that transforms raw business data into actionable insights, helping a retail chain optimize inventory and boost sales performance.",
      videoId: null,
      tags: ["Analytics", "Retail", "ML"]
    },
    {
      title: "Smart Office Voice Assistant",
      description: "Experience our voice assistant technology seamlessly integrated into a smart office environment, enabling hands-free control and boosting productivity across the workspace.",
      videoId: null,
      tags: ["Voice AI", "IoT", "Smart Office"]
    }
  ];

  const resultStats = [
    {
      number: 85,
      title: "Response Time Reduction",
      description: "Average improvement in customer service response times across all deployed chatbots"
    },
    {
      number: 60,
      title: "Process Efficiency Gain",
      description: "Improvement in workflow efficiency through intelligent automation"
    },
    {
      number: 40,
      title: "Cost Savings",
      description: "Average operational cost reduction achieved through AI automation"
    },
    {
      number: 95,
      title: "Customer Satisfaction",
      description: "Client satisfaction rate with our AI automation solutions"
    }
  ];

  const technologies = [
    {
      name: "Make.com",
      description: "Advanced visual workflow automation with drag-and-drop scenario building and complex data transformations",
      icon: <SiMake className="w-6 h-6" />,
      gradient: "from-indigo-500 to-purple-600",
      badge: "2,800+ Integrations",
      badgeColor: "indigo"
    },
    {
      name: "Zapier",
      description: "Leading no-code automation platform with AI-powered workflows and the world's largest app ecosystem",
      icon: <SiZapier className="w-6 h-6" />,
      gradient: "from-orange-500 to-yellow-500",
      badge: "8,000+ Apps",
      badgeColor: "orange"
    },
    {
      name: "n8n",
      description: "Open-source powerhouse with self-hosted capabilities, AI agents, and advanced custom scripting support",
      icon: <FaCogs className="w-6 h-6" />,
      gradient: "from-pink-500 to-rose-500",
      badge: "Open Source",
      badgeColor: "pink"
    },
    {
      name: "Windmill",
      description: "Enterprise-grade workflow engine for developers with TypeScript, Python, and Go support for custom automation",
      icon: <FaProjectDiagram className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-500",
      badge: "Developer-First",
      badgeColor: "green"
    },
    {
      name: "Python & AI/ML",
      description: "Advanced machine learning models and AI frameworks for intelligent automation",
      icon: <SiPython className="w-6 h-6" />,
      gradient: "from-yellow-400 to-yellow-300",
      badge: "AI-Powered",
      badgeColor: "yellow"
    },
    {
      name: "Node.js & APIs",
      description: "Scalable backend services and RESTful API development",
      icon: <SiNodedotjs className="w-6 h-6" />,
      gradient: "from-green-400 to-green-500",
      badge: "Scalable",
      badgeColor: "green"
    },
    {
      name: "Cloud Infrastructure",
      description: "AWS, Azure, GCP deployment and management",
      icon: <FaCloud className="w-6 h-6" />,
      gradient: "from-blue-500 to-blue-600",
      badge: "Enterprise",
      badgeColor: "blue"
    },
    {
      name: "AI/ML Frameworks",
      description: "TensorFlow, PyTorch, OpenAI integration",
      icon: <SiTensorflow className="w-6 h-6" />,
      gradient: "from-purple-500 to-purple-600",
      badge: "Advanced AI",
      badgeColor: "purple"
    }
  ];

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
        <div className="fixed inset-0 -z-2 pointer-events-none">
        <ParticleBackground />
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 text-center px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent"></div>
        <motion.div 
          className="max-w-6xl mx-auto relative z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full mb-8 backdrop-blur-md"
          >
            <span className="text-2xl">🏆</span>
            <span className="font-semibold">Our Success Stories</span>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight"
          >
            Proven AI Solutions in Action
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Explore our innovative AI automation solutions in action. These real-world implementations 
            showcase how AutomateAce transforms businesses through cutting-edge technology and intelligent automation.
          </motion.p>
        </motion.div>
      </section>

      {/* Portfolio Overview */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6"
            >
              Watch Our Intelligent Solutions Drive Real Results
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Watch how our intelligent solutions drive real results for businesses across different industries
            </motion.p>
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                className="group bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 hover:bg-white/10 hover:border-white/20 hover:-translate-y-4 transition-all duration-500 backdrop-blur-md"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 2,
                  rotateX: 2,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Video Container */}
                <motion.div 
                  className="w-full h-56 sm:h-64 lg:h-72 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-yellow-400/10 to-yellow-300/10 border border-yellow-400/20 group-hover:border-yellow-400/40 transition-all duration-500"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.videoId ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${project.videoId}?rel=0`}
                      title={project.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-2xl"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-300 flex items-center justify-center relative">
                      <div className="text-4xl sm:text-5xl text-black/80">▶</div>
                      <span className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                        Demo
                      </span>
                    </div>
                  )}
                </motion.div>

                {/* Content */}
                <motion.h3 
                  className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300"
                  whileInView={{ opacity: [0, 1], y: [20, 0] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {project.title}
                </motion.h3>

                <motion.p 
                  className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base"
                  whileInView={{ opacity: [0, 1], y: [20, 0] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {project.description}
                </motion.p>

                {/* Tags */}
                <motion.div 
                  className="flex flex-wrap gap-2 mb-6"
                  whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full text-xs font-medium border border-yellow-400/20"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 235, 59, 0.2)" }}
                      transition={{ duration: 0.2 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                {/* CTA Button */}
                <motion.button
                  onClick={openModal}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-300 text-black font-bold py-3 px-6 rounded-full transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(255, 235, 59, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Get Similar Solution
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results-section" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div 
              variants={scaleIn}
              className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full mb-8 backdrop-blur-md"
            >
              <span className="text-2xl">📊</span>
              <span className="font-semibold">Proven Impact</span>
            </motion.div>
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6"
            >
              Measurable Outcomes
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Measurable outcomes from our AI automation implementations
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {resultStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-md"
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="mb-4"
                  whileInView={{
                    scale: [1, 1.2, 1],
                    transition: { duration: 0.5, delay: index * 0.1 }
                  }}
                  viewport={{ once: true }}
                >
                  <AnimatedCounter target={stat.number} />
                </motion.div>
                <motion.h4 
                  className="text-lg sm:text-xl font-bold text-white mb-3"
                  whileInView={{ opacity: [0, 1], y: [20, 0] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {stat.title}
                </motion.h4>
                <motion.p 
                  className="text-gray-400 text-sm sm:text-base leading-relaxed"
                  whileInView={{ opacity: [0, 1], y: [20, 0] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {stat.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div 
              variants={scaleIn}
              className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full mb-8 backdrop-blur-md"
            >
              <span className="text-2xl">⚡</span>
              <span className="font-semibold">Cutting-Edge Tech Stack</span>
            </motion.div>
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6"
            >
              Advanced Technologies Powering Our Solutions
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto"
            >
              The sophisticated technologies and platforms driving our AI automation solutions 
              to deliver unparalleled performance and reliability
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-md group"
                whileHover={{ 
                  y: -8,
                  scale: 1.03,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${tech.gradient} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 transition-transform duration-300`}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                  {tech.icon}
                </motion.div>
                
                <motion.h4 
                  className="text-lg font-bold text-white mb-2"
                  whileInView={{ opacity: [0, 1], y: [20, 0] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {tech.name}
                </motion.h4>
                
                <motion.p 
                  className="text-gray-400 text-sm mb-4 leading-relaxed"
                  whileInView={{ opacity: [0, 1], y: [20, 0] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {tech.description}
                </motion.p>
                
                <motion.div 
                  className={`inline-block bg-${tech.badgeColor}-400/10 text-${tech.badgeColor}-400 border border-${tech.badgeColor}-400/30 px-3 py-1 rounded-full text-xs font-medium`}
                  whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {tech.badge}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 sm:py-32 text-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white/5 to-transparent relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        <motion.div 
          className="max-w-4xl mx-auto relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
          >
            Ready to Join Our Success Stories?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Join our growing portfolio of successful AI automation implementations. 
            Let's discuss how AutomateAce can transform your business operations and drive measurable results.
          </motion.p>
          <motion.button
            variants={scaleIn}
            onClick={openModal}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-300 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 20px 50px rgba(255, 235, 59, 0.3)",
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl">🚀</span>
            Start Your Project
          </motion.button>
        </motion.div>
      </section>



      {/* Get Started Modal */}
      {isModalOpen && (
        <motion.div 
          className="fixed inset-0 bg-black/85 backdrop-blur-xl flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="bg-white/10 border border-white/20 rounded-3xl max-w-lg w-full p-8 relative backdrop-blur-2xl"
            initial={{ scale: 0.7, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white/60 hover:text-yellow-400 text-2xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-yellow-400/10 transition-all duration-300"
            >
              ×
            </button>

            {!showSuccess ? (
              <>
                <motion.h2 
                  className="text-2xl sm:text-3xl font-black  mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Get Started with AutomateAce
                </motion.h2>

                <motion.form 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/50 focus:bg-white/20 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/50 focus:bg-white/20 transition-all duration-300"
                      placeholder="you@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-white font-semibold mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 bg-black/80 border border-white/20 rounded-2xl text-white focus:outline-none focus:border-yellow-400/50 transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="AI Voice Assistant">AI Voice Assistant</option>
                      <option value="Marketing Agent">Marketing Agent</option>
                      <option value="WhatsApp Agent">WhatsApp Agent</option>
                      <option value="Job Search Automation">Job Search Automation</option>
                      <option value="Internal Process Automation">Internal Process Automation</option>
                      <option value="Automated Email & Complaint Agent">Automated Email & Complaint Agent</option>
                      <option value="Executive Assistant Agent">Executive Assistant Agent</option>
                      <option value="E-Commerce Agent">E-Commerce Agent</option>
                      <option value="Low Code Web App Builder">Low Code Web App Builder</option>
                      <option value="Carousel & Slide Show Automation">Carousel & Slide Show Automation</option>
                      <option value="Customised Specific Agent">Customised Specific Agent for any Domain</option>
                      <option value="Similar to Portfolio Project">Similar to Portfolio Project</option>
                      <option value="Other">Other (describe below)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-semibold mb-2">
                      Message/Notes <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/50 focus:bg-white/20 transition-all duration-300 resize-none"
                      placeholder="What do you want to achieve? Which portfolio project interests you?"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-300 text-black font-bold py-4 px-6 rounded-full transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <>🚀 Start Your Project</>
                    )}
                  </motion.button>
                </motion.form>
              </>
            ) : (
              <motion.div 
                className="text-center py-8"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.div 
                  className="text-6xl mb-4"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                >
                  ✅
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">Success!</h3>
                <p className="text-gray-300">
                  We've received your details. Our team will reach out to you soon.
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
