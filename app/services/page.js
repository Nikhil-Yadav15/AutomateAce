'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {ParticleBackground}  from '@/components/ui/partcle-effect';

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFutureServices, setShowFutureServices] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const slideInFromBottom = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const services = [
    {
      icon: "🎤",
      title: "AI Voice Assistant",
      description: "Deploy intelligent voice interfaces that understand natural language commands with perfect accuracy and execute complex business operations seamlessly across all platforms.",
      features: [
        "Advanced voice recognition technology",
        "Natural language processing",
        "Multi-language support with accents",
        "Seamless integration capabilities"
      ]
    },
    {
      icon: "📢",
      title: "Marketing Agent",
      description: "AI-powered marketing automation that creates campaigns, analyzes performance, and optimizes strategies in real-time to maximize your ROI and engagement.",
      features: [
        "Automated campaign creation",
        "Real-time performance analysis",
        "Smart audience targeting",
        "Content generation and optimization"
      ]
    },
    {
      icon: "💬",
      title: "WhatsApp Agent",
      description: "Intelligent WhatsApp automation for customer support, sales, and engagement with 24/7 availability and human-like conversations.",
      features: [
        "24/7 automated customer support",
        "Lead qualification and conversion",
        "Multi-media message handling",
        "Integration with CRM systems"
      ]
    },
    {
      icon: "🔍",
      title: "Job Search Automation",
      description: "Automate your job search process with AI that finds, applies, and tracks job opportunities based on your preferences and qualifications.",
      features: [
        "Automated job discovery and matching",
        "Resume optimization for each role",
        "Application tracking and follow-up",
        "Interview scheduling assistance"
      ]
    },
    {
      icon: "⚙️",
      title: "Internal Process Automation",
      description: "Streamline internal workflows, automate repetitive tasks, and optimize business processes with intelligent automation solutions.",
      features: [
        "Workflow automation design",
        "Task management and routing",
        "Document processing automation",
        "Real-time process monitoring"
      ]
    },
    {
      icon: "📧",
      title: "Automated Email & Complaint Agent",
      description: "AI agent that handles email responses, manages complaints, and ensures customer satisfaction with intelligent routing and automated resolutions.",
      features: [
        "Intelligent email classification",
        "Automated complaint handling",
        "Customer sentiment analysis",
        "Escalation management system"
      ]
    },
    {
      icon: "👔",
      title: "Executive Assistant Agent",
      description: "Personal AI assistant that manages schedules, handles communications, organizes meetings, and provides executive-level support 24/7.",
      features: [
        "Calendar and meeting management",
        "Email prioritization and responses",
        "Travel planning and booking",
        "Task organization and reminders"
      ]
    },
    {
      icon: "🛒",
      title: "E-Commerce Agent",
      description: "Comprehensive e-commerce automation including inventory management, customer support, order processing, and sales optimization.",
      features: [
        "Automated inventory management",
        "Customer support and chat",
        "Order processing and tracking",
        "Price optimization and recommendations"
      ]
    },
    {
      icon: "💻",
      title: "Low Code Web App Builder",
      description: "Create powerful web applications with minimal coding using our AI-powered low-code platform that accelerates development and deployment.",
      features: [
        "Drag-and-drop interface builder",
        "AI-assisted code generation",
        "Database integration tools",
        "Rapid deployment and scaling"
      ]
    },
    {
      icon: "🖼️",
      title: "Carousel & Slide Show Automation",
      description: "Automated creation and management of dynamic carousels and slideshows with AI-powered content generation and optimization.",
      features: [
        "Automated content curation",
        "Dynamic slideshow generation",
        "Performance tracking and optimization",
        "Multi-platform deployment"
      ]
    },
    {
      icon: "📨",
      title: "Cold Email Automation",
      description: "Intelligent cold email campaigns with AI-powered personalization, automated follow-ups, and advanced deliverability optimization.",
      features: [
        "AI-powered email personalization",
        "Automated follow-up sequences",
        "Deliverability optimization",
        "Performance analytics & A/B testing"
      ]
    },
    {
      icon: "🧩",
      title: "Customised Specific Agent",
      description: "Tailored AI agents designed specifically for your industry and business needs, with deep domain expertise and custom functionality.",
      features: [
        "Industry-specific customization",
        "Domain expertise integration",
        "Custom workflow automation",
        "Specialized knowledge base"
      ]
    }
  ];

  const futureServices = [
    {
      icon: "🤖",
      title: "Autonomous AI Agents",
      badge: "Q2 2025",
      description: "Revolutionary AI agents that operate independently, making complex decisions and executing multi-step tasks without human intervention.",
      features: [
        "Self-learning and adaptation",
        "Complex decision-making capabilities",
        "Multi-system integration",
        "Autonomous task execution"
      ]
    },
    {
      icon: "👤",
      title: "AI-Powered Digital Avatars",
      badge: "Q3 2025",
      description: "Lifelike AI avatars with natural gestures, emotions, and conversations for websites, kiosks, and virtual meetings.",
      features: [
        "Photorealistic appearance",
        "Natural gesture recognition",
        "Emotional intelligence",
        "Multi-language fluency"
      ]
    },
    {
      icon: "💗",
      title: "Healthcare AI Suite",
      badge: "Q4 2025",
      description: "Comprehensive AI tools for healthcare providers including diagnosis assistance, patient monitoring, and treatment recommendations.",
      features: [
        "AI-powered diagnosis support",
        "Real-time patient monitoring",
        "Treatment optimization",
        "Medical record automation"
      ]
    },
    {
      icon: "⚖️",
      title: "Legal AI Assistant",
      badge: "Q1 2026",
      description: "Advanced AI system for legal document analysis, contract generation, compliance checking, and case law research.",
      features: [
        "Document analysis and review",
        "Contract generation and editing",
        "Compliance monitoring",
        "Legal research automation"
      ]
    },
    {
      icon: "🎮",
      title: "Gaming AI Integration",
      badge: "Q2 2026",
      description: "Intelligent NPCs, dynamic world generation, adaptive gameplay mechanics, and personalized gaming experiences.",
      features: [
        "Intelligent NPC behavior",
        "Dynamic world generation",
        "Adaptive difficulty scaling",
        "Personalized content creation"
      ]
    },
    {
      icon: "🏠",
      title: "Real Estate AI Platform",
      badge: "Q3 2026",
      description: "Complete real estate automation including property valuation, market analysis, virtual tours, and automated negotiations.",
      features: [
        "AI property valuation",
        "Market trend prediction",
        "Virtual property tours",
        "Automated negotiation"
      ]
    },
    {
      icon: "🔧",
      title: "Edge AI Systems",
      badge: "Q4 2026",
      description: "Ultra-fast AI processing at the edge for IoT devices, smart cities, and autonomous vehicles with millisecond response times.",
      features: [
        "Real-time edge processing",
        "IoT device optimization",
        "Offline AI capabilities",
        "Industrial automation"
      ]
    },
    {
      icon: "⚛️",
      title: "Quantum-AI Hybrid",
      badge: "Q1 2027",
      description: "Revolutionary computing platform combining quantum processing with AI for solving complex optimization problems.",
      features: [
        "Quantum-enhanced machine learning",
        "Complex optimization solving",
        "Scientific research acceleration",
        "Breakthrough pattern recognition"
      ]
    }
  ];

  return (
    <div className="min-h-screen  text-white overflow-x-hidden">
        <div className="fixed inset-0 -z-2 pointer-events-none">
        <ParticleBackground />
      </div>


      {/* Services Header */}
      <section className=" pt-32 pb-16 sm:pt-40 sm:pb-20 text-center px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div 
            variants={scaleIn}
            className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full mb-8 backdrop-blur-md"
          >
            <span className="text-2xl">🎯</span>
            <span className="font-semibold">Premium AI Solutions</span>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight"
          >
            Complete AI Automation Suite
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Transform your business with our comprehensive suite of AI-powered automation solutions. 
            From intelligent chatbots to advanced workflow automation, we deliver cutting-edge technology that drives real results.
          </motion.p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                className="group bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-md"
                whileHover={{ 
                  y: -15,
                  scale: 1.02,
                  rotateX: 2,
                  rotateY: 2,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="flex items-start gap-5 mb-6"
                  whileInView={{ opacity: [0, 1], x: [index % 2 === 0 ? -30 : 30, 0] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <motion.div 
                    className="text-4xl sm:text-5xl bg-white/10 p-4 rounded-2xl transition-transform duration-300"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                  >
                    {service.icon}
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="text-xl sm:text-2xl font-bold text-white mb-2"
                      whileInView={{ opacity: [0, 1], y: [20, 0] }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      {service.title}
                    </motion.h3>
                  </div>
                </motion.div>
                
                <motion.p 
                  className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base"
                  whileInView={{ opacity: [0, 1], y: [20, 0] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {service.description}
                </motion.p>
                
                <motion.ul 
                  className="space-y-3 mb-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  {service.features.map((feature, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center gap-3 text-gray-300 text-sm sm:text-base"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { 
                          opacity: 1, 
                          x: 0,
                          transition: { duration: 0.4 }
                        }
                      }}
                    >
                      <motion.span 
                        className="text-yellow-400 font-bold text-lg"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          transition: { 
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2
                          }
                        }}
                      >
                        ✓
                      </motion.span>
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
                
                <motion.button
                  onClick={openModal}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-300 text-black font-bold py-3 px-6 rounded-full transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(255, 235, 59, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Future Services Toggle */}
      <section className="py-16 text-center px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <motion.button
            onClick={() => setShowFutureServices(!showFutureServices)}
            className="inline-flex items-center gap-4 bg-gradient-to-r from-gray-800 to-gray-700 border-2 border-yellow-400/30 text-white font-bold px-8 py-4 rounded-full hover:border-yellow-400/60 transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              y: -5,
              boxShadow: "0 15px 40px rgba(255, 235, 59, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl">🚀</span>
            <span className="text-lg">
              {showFutureServices ? 'Hide Future Innovations' : 'Explore Future AI Innovations'}
            </span>
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: showFutureServices ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </motion.button>
        </motion.div>

        {/* Future Services Grid */}
        <motion.div 
          className="overflow-hidden"
          animate={{ 
            height: showFutureServices ? 'auto' : 0,
            opacity: showFutureServices ? 1 : 0
          }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {showFutureServices && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="mt-16"
            >
              <motion.div 
                variants={fadeInUp}
                className="mb-12"
              >
                <h3 className="text-3xl sm:text-4xl font-black text-yellow-400 mb-4">
                  Coming Soon - Revolutionary AI Solutions
                </h3>
                <p className="text-gray-300 text-lg max-w-4xl mx-auto">
                  The future of AI automation is here. These cutting-edge solutions are currently in development 
                  and will transform industries across the globe.
                </p>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
                variants={staggerContainer}
              >
                {futureServices.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="bg-gradient-to-br from-white/5 to-white/10 border border-yellow-400/20 rounded-2xl p-6 hover:border-yellow-400/40 transition-all duration-500 text-center"
                    whileHover={{ 
                      y: -8,
                      scale: 1.03,
                      rotateY: 5,
                      boxShadow: "0 20px 50px rgba(255, 235, 59, 0.15)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div 
                      className="text-4xl mb-4"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                    >
                      {service.icon}
                    </motion.div>
                    <motion.h4 
                      className="text-xl font-bold text-white mb-2"
                      whileInView={{ opacity: [0, 1], y: [20, 0] }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      {service.title}
                    </motion.h4>
                    <motion.div 
                      className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-black text-xs font-bold px-3 py-1 rounded-full inline-block mb-4"
                      whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {service.badge}
                    </motion.div>
                    <motion.p 
                      className="text-gray-300 text-sm mb-4 leading-relaxed"
                      whileInView={{ opacity: [0, 1], y: [20, 0] }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      {service.description}
                    </motion.p>
                    <motion.ul 
                      className="space-y-2 mb-6 text-left"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={staggerContainer}
                    >
                      {service.features.map((feature, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-center gap-2 text-gray-300 text-sm"
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { 
                              opacity: 1, 
                              x: 0,
                              transition: { duration: 0.4 }
                            }
                          }}
                        >
                          <span className="text-yellow-400">→</span>
                          {feature}
                        </motion.li>
                      ))}
                    </motion.ul>
                    <motion.button
                      onClick={openModal}
                      className="bg-gradient-to-r from-yellow-400/20 to-yellow-300/20 border border-yellow-400/30 text-yellow-400 font-semibold py-2 px-4 rounded-full hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-300 hover:text-black transition-all duration-300 text-sm"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(255, 235, 59, 1)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      🔔 Notify Me
                    </motion.button>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 sm:py-32 text-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white/5 to-transparent">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
          >
            Ready to Transform Your Business Forever?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Choose from our comprehensive range of AI services or let us create a custom solution 
            tailored specifically for your business needs. Start your AI transformation journey today!
          </motion.p>
          <motion.button
            variants={scaleIn}
            onClick={openModal}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-300 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 20px 50px rgba(255, 235, 59, 0.4)",
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl">🚀</span>
            Start Your AI Journey Now
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
                  className="text-2xl sm:text-3xl font-black text-white mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
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
                      {services.map((service, i) => (
                        <option key={i} value={service.title} className="bg-black text-white">
                          {service.title}
                        </option>
                      ))}
                      <option value="Other" className="bg-black text-white">Other (describe below)</option>
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
                      placeholder="What do you want to achieve?"
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
                      "🚀 Get Started"
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
