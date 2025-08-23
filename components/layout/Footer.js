'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer({ onOpenModal = () => {} }) {
  const fadeInUp = {
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const fadeInLeft = {
    hidden:  { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const fadeInRight = {
    hidden:  { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const scaleIn = {
    hidden:  { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
  };

  const socialLinks = [
    { href: 'https://www.linkedin.com/company/automateace', icon: '💼' },
    { href: 'https://x.com/automateaceoff?t=Xh2_kcdBRmTMpLpTaMowBA&s=08', icon: '🐦' },
    { href: 'https://www.instagram.com/automateaceofficial/',              icon: '📷' },
    { href: 'https://youtube.com/@automateace-90?si=im2BVNWRA5PnoA-8',    icon: '📺' }
  ];

  const quickLinks = [
    { href: '/',            label: 'Home'     },
    { href: '/services',    label: 'Services' },
    { href: '/workdone',    label: 'Our Work' },
    { href: '/about',       label: 'About'    },
    { href: '#contact',     label: 'Contact'  }
  ];

  const aiSolutions = [
    'AI Voice Assistant',
    'Marketing Agent',
    'WhatsApp Agent',
    'E-Commerce Agent',
    'Custom AI Solutions'
  ];

  const year = new Date().getFullYear();
  return (
    <motion.footer
      className="bg-black border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          <div className="lg:col-span-2">
            <Link href="/" className="text-3xl font-black text-white mb-4 inline-block">
              AutomateAce
            </Link>

            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Smarter Workflows. Automated Futures. We empower businesses worldwide
              with revolutionary AI automation solutions that drive exponential
              growth, efficiency and customer satisfaction.
            </p>

            <p className="text-gray-400 mb-6">
              <a
                href="mailto:automateaceofficial@gmail.com"
                className="hover:text-yellow-400 transition-colors"
              >
                automateaceofficial@gmail.com
              </a>
            </p>

            <motion.div
              className="flex gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {socialLinks.map(({ href, icon }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 border border-white/20 rounded-xl
                             flex items-center justify-center text-xl
                             hover:bg-yellow-400/20 hover:border-yellow-400/40
                             transition-all duration-300"
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.3 }
                  }}
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeInLeft}>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ href, label }, i) => (
                <li key={i}>
                  <Link href={href} className="text-gray-400 scroll-smooth hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInRight}>
            <h4 className="text-white font-bold mb-6 text-lg">AI Solutions</h4>
            <ul className="space-y-3">
              {aiSolutions.map((service, i) => (
                <li key={i}>
                  <button
                    onClick={onOpenModal}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="border-t border-white/10 pt-8 text-center"
        >
          <p className="text-gray-400">
            © {year} AutomateAce. All rights&nbsp;reserved. |
            <a href="#" className="text-yellow-400 hover:underline ml-1">Privacy Policy</a> |
            <a href="#" className="text-yellow-400 hover:underline ml-1">Terms of Service</a> |
            <a href="#" className="text-yellow-400 hover:underline ml-1">AI Ethics</a>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
