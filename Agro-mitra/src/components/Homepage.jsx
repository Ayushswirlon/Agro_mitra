import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, User, Zap, Leaf, BarChart2, Users } from 'lucide-react';
import '../colors.css';

// Logo Component
const AgroMitraLogo = () => (
  <div className="text-2xl font-bold text-primary">Agro-Mitra</div>
);

// NavLink Component
const NavLink = ({ href, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-text-primary rounded-md transition duration-300 ease-in-out relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </a>
  );
};

// NavBar Component
const NavBar = ({ onLoginClick, onSignupClick, isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-opacity-90 shadow-lg' : ''}`}
      style={{ backgroundColor: isScrolled ? 'var(--secondary-dark)' : 'transparent' }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <AgroMitraLogo />
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <NavLink href="#services">Services</NavLink>
                <NavLink href="#about">About Us</NavLink>
                <NavLink href="#government-scheme">Government Scheme</NavLink>
                <NavLink href="#testimonials">Testimonials</NavLink>
                <NavLink href="#contact">Contact Us</NavLink>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            {isLoggedIn ? (
              <div className="relative">
                <button className="flex items-center text-sm font-medium text-text-secondary hover:text-primary focus:outline-none focus:text-primary transition duration-300">
                  <User className="h-6 w-6 mr-1" />
                  <span>Profile</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
            ) : (
              <div>
                <button 
                  onClick={onLoginClick} 
                  className="px-3 py-2 rounded-md text-sm font-medium text-text-secondary hover:text-primary focus:outline-none focus:text-primary transition duration-300">
                  Login
                </button>
                <button 
                  onClick={onSignupClick} 
                  className="ml-3 px-3 py-2 rounded-md text-sm font-medium text-text-primary bg-primary hover:bg-primary-light focus:outline-none focus:bg-emerald-500 transition duration-300">
                  Sign Up
                </button>
              </div>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-text-primary hover:bg-primary-dark focus:outline-none focus:bg-primary-dark focus:text-text-primary transition duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#about">About Us</NavLink>
              <NavLink href="#government-scheme">Government Scheme</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#contact">Contact Us</NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <div className="relative overflow-hidden" style={{ height: '100vh', backgroundColor: 'var(--background)' }}>
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center">
        <motion.div
          className="text-left mb-8 max-w-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl tracking-tight font-extrabold text-text-primary sm:text-5xl md:text-6xl">
            <span className="block">Revolutionizing</span>{' '}
            <span className="block text-primary">Agriculture with AI</span>
          </h1>
          <p className="mt-3 text-base text-text-secondary sm:text-lg md:mt-5 md:text-xl">
            Empowering Farmers to Grow Smarter and Harvest Better
          </p>
          <motion.div
            className="mt-5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#services" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-text-primary bg-primary hover:bg-primary-dark md:py-4 md:text-lg md:px-10 transition-colors duration-300">
              Explore Solutions
            </a>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden">
          <motion.div
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="w-full h-full bg-[url('/api/placeholder/1920/200')] bg-repeat-x animate-slide-left"></div>
          </motion.div>
        </div>

        <motion.div
          className="absolute right-0 top-1/6 w-85 h-85"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
        >
          <img
            src="https://media.tenor.com/SsN_iw5_OlAAAAAi/%D0%B0%D1%8D%D1%80%D0%BE%D1%81%D1%8A%D0%B5%D0%BC%D0%BA%D0%B0-%D0%B4%D1%80%D0%BE%D0%BD.gif"
            alt="AI in Agriculture"
            className="w-full h-full object-contain"
          />
          <div className="absolute -bottom-4 left-0 right-0 h-8 bg-black opacity-20 blur-md transform skew-x-12"></div>
        </motion.div>
      </div>

      {/* Full-width and full-height crops gif video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.5)' }}
        >
          <source src="/api/placeholder/video.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
    </div>
  );
};

// Main App Component
const AgroMitra = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleCloseSignup = () => {
    setShowSignup(false);
  };

  return (
    <div className="bg-background">
      <NavBar 
        onLoginClick={handleLoginClick} 
        onSignupClick={handleSignupClick} 
        isLoggedIn={isLoggedIn} 
      />
      <HeroSection />
      
      <AnimatePresence>
        {showLogin && <LoginModal onClose={handleCloseLogin} />}
        {showSignup && <SignupModal onClose={handleCloseSignup} />}
      </AnimatePresence>

      {/* Additional Content Here */}
    </div>
  );
};

export default AgroMitra;
