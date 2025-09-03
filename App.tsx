import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Bot, 
  Zap, 
  BarChart3, 
  Puzzle, 
  Clock, 
  Users, 
  Target, 
  CheckCircle,
  Twitter,
  Linkedin,
  Github
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <Bot className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                SamysAi
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'services', 'results', 'why-us'].map((section) => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-300 hover:text-cyan-400 transition-colors capitalize"
                >
                  {section.replace('-', ' ')}
                </button>
              ))}
              <motion.button 
                onClick={() => scrollToSection('cta')}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Call
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-cyan-400"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800"
          >
            <div className="px-4 py-6 space-y-4">
              {['home', 'about', 'services', 'results', 'why-us', 'cta'].map((section) => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block text-gray-300 hover:text-cyan-400 capitalize"
                >
                  {section.replace('-', ' ')}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"
        ></motion.div>
        <motion.div 
          style={{ y: y2 }}
          className="absolute inset-0 bg-grid-pattern opacity-20"
        ></motion.div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                SamysAi
              </span>
              <br />
              <span className="text-white text-4xl md:text-6xl font-light tracking-tight">
                Automating the Future of Business
              </span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto font-light leading-relaxed"
          >
            We help companies save time and scale faster with AI-driven automation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button 
              onClick={() => scrollToSection('cta')}
              className="group bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-12 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-medium tracking-wide">Get Started</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
              About SamysAi
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              At SamysAi, we design and implement AI automation systems tailored to your workflows—customer service, marketing, operations, and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              Comprehensive AI solutions designed to transform your business operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Bot,
                title: "AI Chatbots & Customer Support",
                description: "24/7 intelligent customer service that learns and improves over time"
              },
              {
                icon: Zap,
                title: "Workflow Automation",
                description: "Streamline repetitive tasks and optimize your business processes"
              },
              {
                icon: BarChart3,
                title: "Data Insights & Reporting",
                description: "Transform raw data into actionable insights with AI-powered analytics"
              },
              {
                icon: Puzzle,
                title: "Custom AI Integrations",
                description: "Bespoke AI solutions tailored to your specific business needs"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">{service.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
              Proven Results
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              Real impact for real businesses across industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                metric: "70%",
                description: "Reduced customer response times",
                detail: "From hours to minutes with AI chatbots"
              },
              {
                metric: "20+",
                description: "Hours saved per week",
                detail: "Automated lead qualification process"
              },
              {
                metric: "300%",
                description: "ROI increase",
                detail: "Through intelligent process automation"
              }
            ].map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/30 text-center hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4 tracking-tight">
                  {result.metric}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">{result.description}</h3>
                <p className="text-gray-400 font-light">{result.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
              Why Choose SamysAi
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Fast Deployment",
                description: "Get your AI systems up and running in weeks, not months"
              },
              {
                icon: Target,
                title: "Scalable Solutions",
                description: "AI that grows with your business and adapts to changing needs"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Seasoned AI engineers and automation specialists"
              },
              {
                icon: CheckCircle,
                title: "Tailored Solutions",
                description: "Custom-built AI systems designed for your specific workflows"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div 
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 p-4 rounded-2xl w-fit mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
              Ready to automate your business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Join hundreds of companies already transforming their operations with our AI automation solutions.
            </p>
            <motion.button 
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-12 py-4 rounded-full text-xl font-medium tracking-wide hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Free Call
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Bot className="h-6 w-6 text-cyan-400" />
              <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                SamysAi
              </span>
            </div>
            
            <div className="flex items-center space-x-8 mb-4 md:mb-0">
              <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-cyan-400 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-cyan-400 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('cta')} className="text-gray-400 hover:text-cyan-400 transition-colors">
                Contact
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500">
              © 2025 SamysAi. All rights reserved. Automating the future, one business at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;