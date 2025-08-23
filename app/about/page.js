'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {ParticleBackground}  from '@/components/ui/partcle-effect';

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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

  const coreValues = [
    {
      icon: "💡",
      title: "Innovation",
      description: "Constantly pushing the frontiers of AI and automation technology to deliver cutting-edge solutions that stay ahead of industry trends."
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Partnering closely with clients and stakeholders to create tailored solutions that perfectly match their unique business needs."
    },
    {
      icon: "🛡️",
      title: "Transparency",
      description: "Ensuring data privacy, security, and transparent practices in all our interactions and solutions we develop."
    },
    {
      icon: "🚀",
      title: "Agility",
      description: "Rapid development and deployment to keep pace with market needs while maintaining the highest quality standards."
    },
    {
      icon: "❤️",
      title: "Customer-Centricity",
      description: "Designing with customers' success and satisfaction in mind, ensuring every solution delivers real value and measurable results."
    },
    {
      icon: "🏆",
      title: "Excellence",
      description: "Committed to delivering exceptional quality in every project, exceeding expectations through meticulous attention to detail and continuous improvement."
    }
  ];

  const teamMembers = [
    {
      name: "Prateek Srivastava",
      role: "Co-Founder & CEO",
      description: "Visionary leader passionate about automating real World Problems through AI System, driving innovation and strategic growth. Specializes in Chatbot Systems, WorkFlow Automation.",
      image: "/prateek.jpg"
    },
    {
      name: "Utkarsh Arora",
      role: "Co-Founder and CTO",
      description: "Driving scalable web solutions and automation architectures. Focused on building efficient, secure, and innovative tech to support business growth. Experienced in leading tech teams and delivering impactful digital products.",
      image: "/utkarsh.jpg"
    },
    {
      name: "Shivam Sharma",
      role: "Co-Founder and Lead AI Engineer",
      description: "Executive leader and core engineer behind the company's AI-driven products and automation systems. Shivam defines the AI roadmap and leads the design, architecture, and deployment of cutting-edge agents.",
      image: "/shivam.jpg"
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
          className="max-w-5xl mx-auto relative z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div 
            variants={scaleIn}
            className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full mb-8 backdrop-blur-md"
          >
            <span className="text-2xl">👥</span>
            <span className="font-semibold">About AutomateAce</span>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight"
          >
            Revolutionizing Business Through AI
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            At AutomateAce, we're on a mission to revolutionize the way businesses automate their workflows 
            and interactions using cutting-edge AI technology. Our vision is to create smarter, more efficient 
            workplaces where human creativity is empowered by AI-driven automation.
          </motion.p>
        </motion.div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {/* Mission Card */}
            <motion.div
              variants={fadeInLeft}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 lg:p-12 hover:bg-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-md relative overflow-hidden"
              whileHover={{ 
                y: -8,
                scale: 1.02,
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="w-20 h-20 bg-yellow-400/10 border border-yellow-400/30 rounded-2xl flex items-center justify-center text-3xl text-yellow-400 mb-8"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              >
                🎯
              </motion.div>
              <motion.h3 
                className="text-2xl sm:text-3xl font-bold text-white mb-6"
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Our Mission
              </motion.h3>
              <motion.p 
                className="text-gray-300 text-base sm:text-lg leading-relaxed"
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                To provide breakthrough AI automation solutions that streamline complex business processes 
                and enhance customer engagement globally. We strive to make advanced AI technology accessible 
                to businesses of all sizes, empowering them to achieve unprecedented efficiency and growth.
              </motion.p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              variants={fadeInRight}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 lg:p-12 hover:bg-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-md relative overflow-hidden"
              whileHover={{ 
                y: -8,
                scale: 1.02,
                rotateY: -2,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="w-20 h-20 bg-yellow-400/10 border border-yellow-400/30 rounded-2xl flex items-center justify-center text-3xl text-yellow-400 mb-8"
                whileHover={{ 
                  scale: 1.1,
                  rotate: -5,
                  transition: { duration: 0.3 }
                }}
              >
                👁️
              </motion.div>
              <motion.h3 
                className="text-2xl sm:text-3xl font-bold text-white mb-6"
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Our Vision
              </motion.h3>
              <motion.p 
                className="text-gray-300 text-base sm:text-lg leading-relaxed"
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                To be the leading provider of innovative AI-driven automation platforms that transform 
                industries and deliver measurable impact. We envision a future where intelligent automation 
                enables businesses to focus on creativity, strategy, and human connection while AI handles the rest.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
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
              <span className="text-2xl">💎</span>
              <span className="font-semibold">Core Values</span>
            </motion.div>
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6"
            >
              Our Guiding Principles
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
            >
              These fundamental principles guide everything we do and shape how we interact with our clients, partners, and each other
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-md"
                whileHover={{ 
                  y: -10,
                  scale: 1.03,
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="w-16 h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                  {value.icon}
                </motion.div>
                <motion.h4 
                  className="text-lg sm:text-xl font-bold text-white mb-4"
                  whileInView={{ opacity: [0, 1], y: [20, 0] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {value.title}
                </motion.h4>
                <motion.p 
                  className="text-gray-400 text-sm sm:text-base leading-relaxed"
                  whileInView={{ opacity: [0, 1], y: [20, 0] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {value.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white/5 to-transparent">
        <div className="max-w-6xl mx-auto">
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
              <span className="text-2xl">👥</span>
              <span className="font-semibold">Our Team</span>
            </motion.div>
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6"
            >
              The Brilliant Minds Behind AutomateAce
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
            >
              The brilliant minds behind AutomateAce's innovative AI automation solutions
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-md"
                whileHover={{ 
                  y: -15,
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-full mx-auto mb-6 overflow-hidden relative"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 20px 40px rgba(255, 235, 59, 0.3)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-300 flex items-center justify-center text-4xl font-black text-black">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </motion.div>
                <motion.h4 
                  className="text-xl font-bold text-white mb-2"
                  whileInView={{ opacity: [0, 1], y: [20, 0] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {member.name}
                </motion.h4>
                <motion.p 
                  className="text-yellow-400 font-semibold mb-4"
                  whileInView={{ opacity: [0, 1], y: [20, 0] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {member.role}
                </motion.p>
                <motion.p 
                  className="text-gray-400 text-sm leading-relaxed"
                  whileInView={{ opacity: [0, 1], y: [20, 0] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {member.description}
                </motion.p>
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
            Ready to Revolutionize Your Business?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to revolutionize your business with AutomateAce's AI automation? Let's get started 
            on transforming your workflows and empowering your team with intelligent solutions!
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
            Get Started Today
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
                      <>🚀 Get Started Today</>
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
