'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  BarChart3, 
  Zap, 
  Shield, 
  Target, 
  Rocket,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Users,
  Clock,
  HeadphonesIcon
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import {Spotlight} from '@/components/ui/SpotLight';
import {ParticleBackground}  from '@/components/ui/partcle-effect';



export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Floating background elements data
  const floatingElements = [
    { icon: Bot, delay: 0, x: '75vw', y: '20vh' },
    { icon: BarChart3, delay: 1, x: '85vw', y: '60vh' },
    { icon: Zap, delay: 2, x: '70vw', y: '80vh' },
    { icon: Shield, delay: 0.5, x: '80vw', y: '40vh' },
    { icon: Target, delay: 1.5, x: '90vw', y: '25vh' },
    { icon: Rocket, delay: 2.5, x: '65vw', y: '65vh' },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "24/7", label: "Support Available" }
  ];

  const showcaseFeatures = [
    "Advanced AI algorithms for maximum efficiency",
    "Real-time automation and monitoring",
    "Seamless integration with existing systems",
    "24/7 customer support and maintenance"
  ];

  const showcaseCards = [
    { icon: Bot, title: "Smart Automation", description: "AI-powered workflows that adapt and learn" },
    { icon: BarChart3, title: "Data Insights", description: "Real-time analytics and reporting" },
    { icon: Zap, title: "Lightning Fast", description: "Optimized performance and speed" },
    { icon: Shield, title: "Enterprise Security", description: "Bank-grade security protocols" }
  ];

  const services = [
    {
      icon: Bot,
      title: "AI Chatbot Development",
      description: "Create intelligent chatbots that understand and respond naturally to customer queries, improving engagement and support.",
      features: ["Natural Language Processing", "Multi-platform Integration", "24/7 Automated Support", "Analytics Dashboard"]
    },
    {
      icon: BarChart3,
      title: "Business Process Automation",
      description: "Streamline your operations with custom automation solutions that reduce manual work and increase efficiency.",
      features: ["Workflow Optimization", "Data Integration", "Custom Solutions", "ROI Tracking"]
    },
    {
      icon: Zap,
      title: "Data Analytics & Insights",
      description: "Transform your data into actionable insights with advanced analytics and machine learning algorithms.",
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom Reports", "Data Visualization"]
    },
    {
      icon: Shield,
      title: "AI-Powered CRM Solutions",
      description: "Enhance customer relationships with intelligent CRM systems that predict needs and automate follow-ups.",
      features: ["Lead Scoring", "Automated Follow-ups", "Customer Insights", "Integration Ready"]
    },
    {
      icon: Target,
      title: "Machine Learning Models",
      description: "Custom ML models tailored to your specific business needs, from recommendation systems to fraud detection.",
      features: ["Custom Algorithms", "Model Training", "Performance Monitoring", "Continuous Learning"]
    },
    {
      icon: Rocket,
      title: "Digital Transformation",
      description: "Complete digital transformation services to modernize your business operations and stay competitive.",
      features: ["Technology Assessment", "Implementation Planning", "Change Management", "Ongoing Support"]
    }
  ];

  return (
    <>
      {/* <SmokeyBackground className="absolute inset-0" /> */}
      <Navbar scrolled={scrolled} onGetStarted={() => setIsModalOpen(true)} />
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="min-h-[100dvh] flex items-center relative overflow-hidden pt-[8rem] sm:pt-[6rem] lg:pt-[8rem]">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          {floatingElements.map((element, index) => {
            const IconComponent = element.icon;
            return (
              <motion.div
                key={index}
                className="absolute"
                style={{ 
                  left: element.x, 
                  top: element.y,
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ 
                  opacity: [0, 0.1, 0.05, 0.15, 0.08],
                  scale: [0, 1.2, 0.8, 1, 0.9],
                  rotate: [0, 360],
                  y: [-2, 2, -1, 3, 0],
                  x: [-1, 1, -2, 2, 0]
                }}
                transition={{
                  opacity: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: element.delay },
                  scale: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: element.delay },
                  rotate: { duration: 20, repeat: Infinity, ease: "linear", delay: element.delay },
                  y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: element.delay },
                  x: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: element.delay }
                }}
              >
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-white/5 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: element.delay + 1
                    }}
                  />
                  <div className="relative bg-white/[0.02] border border-white/10 rounded-[1.5rem] p-[2rem] backdrop-blur-sm">
                    <IconComponent className="w-[3rem] h-[3rem] text-white/20" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <motion.div
            className="absolute top-[10%] right-[15%] w-[20rem] h-[20rem] border border-white/10 rounded-full"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              rotate: { duration: 30, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          <motion.div
            className="absolute bottom-[20%] right-[10%] w-[15rem] h-[15rem] border border-white/5 rounded-full"
            animate={{
              rotate: [360, 0],
              scale: [1.1, 1, 1.1]
            }}
            transition={{
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        </div>

        <div className="container mx-auto px-[1.25rem] sm:px-[2rem] lg:px-[3rem] xl:px-[5rem] relative z-10">
          <div className="flex flex-col items-center justify-center min-h-[80dvh] text-center max-w-[75rem] mx-auto">
            {/* Hero Content - Now Full Width */}
            <motion.div 
              className="w-full"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.div 
                className="inline-flex items-center gap-[0.75rem] border border-white/10 text-white px-[1.25rem] py-[0.75rem] rounded-full text-[0.875rem] font-semibold mb-[2rem] backdrop-blur-md"
                animate={{ 
                  y: [-0.625, 0, -0.625],
                  boxShadow: [
                    '0 0 0.625rem rgba(255,255,255,0.1)',
                    '0 0 1.5625rem rgba(255,255,255,0.2)',
                    '0 0 0.625rem rgba(255,255,255,0.1)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-[1rem] h-[1rem]" />
                Revolutionizing Business with AI
              </motion.div>
            
            <motion.div> 
            <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
              <motion.h1 
                className="text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[7rem] xl:text-[11rem] font-black mb-[2rem] bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-[0.85] tracking-tighter"
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
              >
                Automate.
                <br />
                Accelerate.
                <br />
                Achieve.
              </motion.h1>

            </motion.div>

              <motion.p 
                className="text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] text-white mb-[1.5rem] font-semibold"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1], delay: 0.6 }}
              >
                Your AI-Powered Business Partner
              </motion.p>

              <motion.p 
                className="text-[1.125rem] sm:text-[1.25rem] lg:text-[1.375rem] text-gray-300 mb-[3rem] leading-relaxed max-w-[50rem] mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1], delay: 0.9 }}
              >
                Transform your business operations with cutting-edge AI solutions. 
                From chatbots to process automation, we make technology work for you.
              </motion.p>

              {/* Stats */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-[2rem] sm:gap-[4rem] mb-[4rem] justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1], delay: 1.2 }}
              >
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="text-center p-[2rem] rounded-[1.5rem] bg-white/[0.03] border border-white/10 hover:-translate-y-[0.5rem] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500"
                    whileHover={{ scale: 1.08 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut", delay: 1.5 + index * 0.2 }}
                  >
                    <motion.div 
                      className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] font-black text-white leading-none mb-[0.5rem]"
                      animate={{
                        textShadow: [
                          '0 0 0.625rem rgba(255,255,255,0.3)',
                          '0 0 1.25rem rgba(255,255,255,0.5)',
                          '0 0 0.625rem rgba(255,255,255,0.3)'
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-[1rem] text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-[1.5rem] items-center justify-center"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1], delay: 1.8 }}
              >
                <motion.button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-yellow-300 text-black px-[3rem] py-[1.5rem] rounded-full text-[1.125rem] sm:text-[1.25rem] font-bold hover:-translate-y-[0.5rem] hover:scale-110 transition-all duration-500 shadow-lg shadow-yellow-400/40 hover:shadow-yellow-400/60 hover:shadow-2xl relative overflow-hidden"
                  whileHover={{ boxShadow: "0 2rem 4rem rgba(255, 235, 59, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                  />
                  Get Started Now
                  <ArrowRight className="inline-block ml-[0.75rem] w-[1.5rem] h-[1.5rem]" />
                </motion.button>

                <motion.a 
                  href="#services"
                  className="w-full sm:w-auto text-white px-[3rem] py-[1.5rem] rounded-full text-[1.125rem] sm:text-[1.25rem] font-bold border-2 border-white/30 hover:border-white/60 hover:bg-white/10 hover:-translate-y-[0.5rem] hover:scale-105 transition-all duration-500"
                  whileHover={{ 
                    scale: 1.08,
                    boxShadow: "0 1rem 2rem rgba(255,255,255,0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Services
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Showcase Section */}
      <section className="py-[4.5rem] sm:py-[6rem] lg:py-[9rem] relative overflow-hidden">
        <div className="container mx-auto px-[1.25rem] sm:px-[2rem] lg:px-[3rem] xl:px-[5rem] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[3rem] lg:gap-[6rem] items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <motion.span 
                className="inline-block bg-white/5 border border-white/10 text-white px-[1.25rem] py-[0.75rem] rounded-full text-[0.875rem] font-semibold mb-[1.25rem] backdrop-blur-md"
                animate={{ 
                  boxShadow: [
                    '0 0 0.625rem rgba(255,255,255,0.1)',
                    '0 0 1.5625rem rgba(255,255,255,0.2)',
                    '0 0 0.625rem rgba(255,255,255,0.1)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                AI-Powered Excellence
              </motion.span>

              <h2 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] xl:text-[6rem] font-black mb-[1.5rem] text-white leading-tight tracking-tight">
                Transforming Business with Intelligent Solutions
              </h2>

              <p className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-300 mb-[2.5rem] leading-relaxed max-w-[40rem] mx-auto lg:mx-0">
                Our cutting-edge AI technology adapts to your business needs, 
                providing scalable solutions that grow with your success.
              </p>

              <ul className="mb-[2.5rem] space-y-[1rem]">
                {showcaseFeatures.map((feature, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center gap-[1rem] text-white text-[1rem] sm:text-[1.125rem] font-medium justify-center lg:justify-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <CheckCircle className="w-[1.5rem] h-[1.5rem] text-yellow-400 flex-shrink-0" />
                    </motion.div>
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <motion.button 
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-black px-[2rem] py-[1rem] rounded-full text-[1rem] sm:text-[1.125rem] font-bold hover:-translate-y-[0.25rem] hover:scale-105 transition-all duration-400 shadow-lg shadow-yellow-400/30"
                whileHover={{ boxShadow: "0 1.25rem 2.5rem rgba(255, 235, 59, 0.4)" }}
              >
                Explore Solutions
              </motion.button>
            </motion.div>

            {/* Visual Cards */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-[1.5rem]"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              {showcaseCards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <motion.div 
                    key={index}
                    className="bg-white/[0.03] border border-white/10 rounded-[1.875rem] p-[2.25rem] text-center hover:-translate-y-[1rem] hover:scale-[1.03] hover:border-white/20 hover:bg-white/[0.08] transition-all duration-600 relative overflow-hidden"
                    whileHover={{ 
                      boxShadow: "0 1.875rem 4.375rem rgba(255,255,255,0.1)" 
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-45 from-transparent via-white/10 to-transparent opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <IconComponent className="w-[2.5rem] sm:w-[3.5rem] h-[2.5rem] sm:h-[3.5rem] text-white mx-auto mb-[1.5rem]" />
                    </motion.div>
                    
                    <h4 className="text-[1.25rem] sm:text-[1.5rem] font-bold text-white mb-[1rem]">{card.title}</h4>
                    <p className="text-gray-300 text-[0.875rem] sm:text-[1.125rem] leading-relaxed">{card.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-[2.5rem] sm:py-[5rem] border-t border-b border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-[1.25rem] sm:px-[2rem] lg:px-[3rem] xl:px-[5rem] text-center relative z-10">
          <h3 className="text-[1rem] sm:text-[1.25rem] text-gray-300 mb-[2.5rem] font-semibold">
            Trusted by innovative companies worldwide
          </h3>
          
          <div className="flex justify-center items-center gap-[2.5rem] sm:gap-[5rem] flex-wrap">
            {[Users, Bot, BarChart3, Shield, Zap, Rocket].map((Icon, index) => (
              <motion.div
                key={index}
                animate={{ 
                  y: [0, -0.5, 0],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: index % 2 === 0 ? 0 : -2 
                }}
                whileHover={{ 
                  scale: 1.2, 
                  y: -0.3125,
                  opacity: 1 
                }}
              >
                <Icon className="w-[2rem] sm:w-[2.5rem] h-[2rem] sm:h-[2.5rem] text-white/30 hover:text-white transition-colors duration-600" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-[4.5rem] sm:py-[6rem] lg:py-[9rem] relative">
        <div className="container mx-auto px-[1.25rem] sm:px-[2rem] lg:px-[3rem] xl:px-[5rem] relative z-10">
          {/* Section Header */}
          <div className="text-center mb-[3rem] sm:mb-[6rem]">
            <motion.span 
              className="inline-block bg-white/5 border border-white/10 text-white px-[1.25rem] py-[0.75rem] rounded-full text-[0.875rem] font-semibold mb-[1.25rem] backdrop-blur-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Services
            </motion.span>

            <motion.h2 
              className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] xl:text-[6rem] font-black mb-[1.5rem] text-white leading-tight tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive AI Solutions
            </motion.h2>

            <motion.p 
              className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-300 max-w-[48rem] mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              From intelligent automation to advanced analytics, we provide 
              end-to-end solutions that transform how your business operates.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[2.5rem]">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div 
                  key={index}
                  className="bg-white/[0.02] border border-white/[0.08] rounded-[1.875rem] p-[2rem] sm:p-[3rem] hover:-translate-y-[0.75rem] hover:scale-[1.02] hover:border-white/20 hover:bg-white/[0.05] transition-all duration-600 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    boxShadow: "0 2.1875rem 5rem rgba(255,255,255,0.08)" 
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                  />

                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-[1.25rem] mb-[1.75rem]">
                    <motion.div 
                      className="w-[4.5rem] h-[4.5rem] bg-white/5 border border-white/10 rounded-[1rem] flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 group-hover:rotate-1 group-hover:scale-110 transition-all duration-400 flex-shrink-0"
                    >
                      <IconComponent className="w-[1.75rem] h-[1.75rem] text-white" />
                    </motion.div>
                    <h3 className="text-[1.25rem] sm:text-[1.5rem] font-bold text-white text-center sm:text-left">{service.title}</h3>
                  </div>

                  <p className="text-gray-300 mb-[1.75rem] text-[0.875rem] sm:text-[1.125rem] leading-relaxed text-center sm:text-left">
                    {service.description}
                  </p>

                  <ul className="space-y-[0.75rem]">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-[0.75rem] text-gray-300 font-medium text-[0.875rem] sm:text-[1rem]">
                        <CheckCircle className="w-[1.25rem] h-[1.25rem] text-yellow-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[4.5rem] sm:py-[6rem] lg:py-[9rem] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 100%27%3E%3Cdefs%3E%3Cpattern id=%27grid2%27 width=%2710%27 height=%2710%27 patternUnits=%27userSpaceOnUse%27%3E%3Cpath d=%27M 10 0 L 0 0 0 10%27 fill=%27none%27 stroke=%27%23ffffff%27 stroke-width=%270.1%27 opacity=%270.1%27/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=%27100%25%27 height=%27100%25%27 fill=%27url(%23grid2)%27/%3E%3C/svg%3E')] opacity-20" />
        
        <div className="container mx-auto px-[1.25rem] sm:px-[2rem] lg:px-[3rem] xl:px-[5rem] relative z-10">
          <motion.h2 
            className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] xl:text-[6rem] font-black mb-[1.75rem] text-white leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Business?
          </motion.h2>

          <motion.p 
            className="text-[1rem] sm:text-[1.125rem] lg:text-[1.25rem] text-gray-300 mb-[3rem] max-w-[48rem] mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join hundreds of companies that have already automated their success. 
            Let's discuss how AI can revolutionize your operations.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-[1.5rem] justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button 
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-yellow-300 text-black px-[2.5rem] py-[1.25rem] rounded-full text-[1rem] sm:text-[1.25rem] font-bold hover:-translate-y-[0.25rem] hover:scale-105 transition-all duration-400 shadow-lg shadow-yellow-400/30"
              whileHover={{ boxShadow: "0 1.5625rem 3.125rem rgba(255, 235, 59, 0.5)" }}
            >
              Start Your Journey
              <ArrowRight className="inline-block ml-[0.5rem] w-[1.5rem] h-[1.5rem]" />
            </motion.button>

            <motion.a 
              href="mailto:contact@automateace.online"
              className="w-full sm:w-auto text-white px-[2.5rem] py-[1.25rem] rounded-full text-[1rem] sm:text-[1.25rem] font-bold border-2 border-white/20 hover:border-white/50 hover:bg-white/5 hover:-translate-y-[0.25rem] transition-all duration-400"
              whileHover={{ scale: 1.05 }}
            >
              Contact Sales
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
