import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Bot, 
  Zap, 
  Database, 
  Users, 
  Code, 
  DollarSign,
  Scale,
  Clock,
  Settings,
  Star,
  ChevronLeft,
  ChevronRight,
  Twitter,
  Linkedin,
  Github
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechFlow",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "SamysAi transformed our customer support. Response times dropped by 80% and customer satisfaction soared."
    },
    {
      name: "Marcus Rodriguez",
      role: "Operations Director, ScaleUp",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "The workflow automation saved us 25 hours per week. ROI was evident within the first month."
    },
    {
      name: "Emily Watson",
      role: "Founder, GrowthLab",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "Their AI solutions are game-changing. We've scaled 3x faster than projected with their automation."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full z-50 bg-black/90 backdrop-blur-xl border-b border-gray-800/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              className="flex flex-col items-start"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Bot className="h-8 w-8 text-cyan-400" />
                  <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  SamysAi
                </span>
              </div>
              <span className="text-xs text-gray-400 font-medium tracking-wider ml-11">
                Smart Automation. Real Growth.
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'services', label: 'Services' },
                { id: 'why-us', label: 'Why Us' },
                { id: 'testimonials', label: 'Testimonials' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-cyan-400 transition-colors font-medium tracking-wide"
                >
                  {item.label}
                </button>
              ))}
              <motion.button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all font-medium tracking-wide"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Demo
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
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800/50"
          >
            <div className="px-4 py-6 space-y-4">
              {[
                { id: 'home', label: 'Home' },
                { id: 'services', label: 'Services' },
                { id: 'why-us', label: 'Why Us' },
                { id: 'testimonials', label: 'Testimonials' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-gray-300 hover:text-cyan-400 font-medium"
                >
                  {item.label}
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
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/10 to-pink-500/5"
        ></motion.div>
        <motion.div 
          style={{ y: y2 }}
          className="absolute inset-0 bg-grid-pattern opacity-10"
        ></motion.div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI-Powered Automation
              </span>
              <br />
              <span className="text-white text-3xl md:text-5xl lg:text-6xl font-light">
                for Modern Businesses
              </span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto font-light leading-relaxed"
          >
            SamysAi helps you save time, reduce costs, and grow with AI-driven solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button 
              onClick={() => scrollToSection('services')}
              className="group bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-12 py-4 rounded-full text-lg font-medium hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 tracking-wide"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button 
              onClick={() => scrollToSection('contact')}
              className="group border-2 border-gray-600 text-white px-12 py-4 rounded-full text-lg font-medium hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 tracking-wide"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Demo
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              Comprehensive AI solutions designed to transform your business operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Settings,
                title: "Workflow Automation",
                description: "Streamline repetitive tasks and optimize your business processes with intelligent automation",
                highlight: false
              },
              {
                icon: Bot,
                title: "AI Customer Support",
                description: "24/7 intelligent customer service that learns and improves over time",
                highlight: false
              },
              {
                icon: Database,
                title: "Data Enrichment",
                description: "Transform raw data into actionable insights with AI-powered analytics",
                highlight: false
              },
              {
                icon: Users,
                title: "Lead Generation",
                description: "Automated lead qualification and nurturing systems that convert prospects",
                highlight: false
              },
              {
                icon: Code,
                title: "Website Development",
                description: "Custom AI-integrated websites and applications built for the future",
                highlight: true
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`group relative overflow-hidden p-8 rounded-3xl border transition-all duration-300 ${
                  service.highlight 
                    ? 'bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-cyan-500/50 hover:border-cyan-400' 
                    : 'bg-gradient-to-br from-gray-800/30 to-gray-900/30 border-gray-700/50 hover:border-cyan-500/50'
                }`}
              >
                {service.highlight && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                      Key Service
                    </span>
                  </div>
                )}
                
                <div className={`p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform ${
                  service.highlight 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500' 
                    : 'bg-gradient-to-r from-gray-600 to-gray-700 group-hover:from-cyan-500 group-hover:to-purple-500'
                }`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">{service.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{service.description}</p>
                
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
              Why Choose SamysAi
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              Experience the future of business automation with our cutting-edge solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Cost Savings",
                description: "Reduce operational costs by up to 60% with intelligent automation"
              },
              {
                icon: Scale,
                title: "Scalable Solutions",
                description: "AI that grows with your business and adapts to changing needs"
              },
              {
                icon: Clock,
                title: "24/7 Availability",
                description: "Round-the-clock automation that never sleeps or takes breaks"
              },
              {
                icon: Settings,
                title: "Tailored Automation",
                description: "Custom-built AI systems designed for your specific workflows"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div 
                  className="relative bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-6 rounded-3xl w-fit mx-auto mb-6 border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <feature.icon className="h-10 w-10 text-cyan-400" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              See how businesses like yours are transforming with our AI solutions
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <motion.div 
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm p-12 rounded-3xl border border-gray-700/30 text-center"
            >
              <div className="flex justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-2xl md:text-3xl text-white mb-8 font-light leading-relaxed italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full border-2 border-cyan-400/50"
                />
                <div className="text-left">
                  <div className="text-lg font-semibold text-white tracking-tight">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-cyan-400 font-medium">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation buttons */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button 
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all"
              >
                <ChevronLeft className="h-5 w-5 text-gray-400 hover:text-cyan-400" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentTestimonial 
                        ? 'bg-cyan-400' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all"
              >
                <ChevronRight className="h-5 w-5 text-gray-400 hover:text-cyan-400" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
              Ready to automate and scale with AI?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
              Join hundreds of companies already transforming their operations with our AI automation solutions.
            </p>
            <motion.button 
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-16 py-5 rounded-full text-xl font-medium tracking-wide hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Talk to Us
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
              <div className="flex items-center space-x-3 mb-2">
                <div className="relative">
                  <Bot className="h-8 w-8 text-cyan-400" />
                  <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  SamysAi
                </span>
              </div>
              <span className="text-sm text-gray-400 font-medium tracking-wider">
                Smart Automation. Real Growth.
              </span>
            </div>
            
            <div className="flex items-center space-x-8 mb-8 md:mb-0">
              {[
                { id: 'home', label: 'Home' },
                { id: 'services', label: 'Services' },
                { id: 'why-us', label: 'Why Us' },
                { id: 'testimonials', label: 'Testimonials' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} 
                  className="text-gray-400 hover:text-cyan-400 transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-6">
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <Twitter className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <Github className="h-6 w-6" />
              </motion.a>
            </div>
          </div>
          
          <div className="border-t border-gray-800/50 pt-8 text-center">
            <p className="text-gray-500 font-light">
              © 2025 SamysAi. All rights reserved. Automating the future, one business at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;