import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, User, Zap, Leaf, BarChart2, Users } from 'lucide-react';
import '../colors.css';

const AgroMitraLogo = () => (
  <div className="text-2xl font-bold text-primary">Agro-Mitra</div>
);

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

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
                <button className="px-3 py-2 rounded-md text-sm font-medium text-text-secondary hover:text-primary focus:outline-none focus:text-primary transition duration-300">
                  Login
                </button>
                <button className="ml-3 px-3 py-2 rounded-md text-sm font-medium text-text-primary bg-primary hover:bg-primary-light focus:outline-none focus:bg-emerald-500 transition duration-300">
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
        >
          <source src="https://videos.pexels.com/video-files/4377026/4377026-uhd_2560_1440_24fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="p-6 rounded-lg shadow-lg"
    style={{ backgroundColor: 'var(--secondary-light)' }}
    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <motion.div
      className="w-16 h-16 mx-auto bg-primaryrounded-full flex items-center justify-center"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      <Icon className="w-8 h-8 text-text-primary" />
    </motion.div>
    <h3 className="mt-4 text-xl font-semibold text-text-primary text-center">{title}</h3>
    <p className="mt-2 text-text-secondary text-center">{description}</p>
  </motion.div>
);

const AboutSection = () => {
  const features = [
    {
      icon: Zap,
      title: "AI-Powered Detection",
      description: "Instantly identify crop diseases and get treatment plans"
    },
    {
      icon: Leaf,
      title: "Sustainable Farming",
      description: "Access resources for eco-friendly agricultural practices"
    },
    {
      icon: BarChart2,
      title: "Productivity Boost",
      description: "Optimize your yield with data-driven insights"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Connect with agricultural experts for personalized advice"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-primary mb-4">About Agro-Mitra</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Agro-Mitra is an AI-powered platform revolutionizing agriculture by empowering farmers with cutting-edge technology and essential resources.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative h-64 md:h-auto">
            <img
              src="https://imgs.search.brave.com/8h1tDxVbFXeIzvD4I9K_NS7qP0nldLwy-ZZTFZUcG98/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YW5hbHl0aWNzdmlk/aHlhLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8wMy9L/aXNzYW5BSV9VbnZl/aWxzX0RoZW51X1Zp/c2lvbl9MTE1zX2Zv/cl9Dcm9wX0Rpc2Vh/c2VfRGV0ZWN0aW9u/LmpwZw"
              alt="Farmer using Agro-Mitra app"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Empowering Farmers</h3>
            <p className="text-text-secondary">
              Our mission is to bridge the gap between traditional farming practices and cutting-edge technology.
              With Agro-Mitra, farmers can make data-driven decisions, improve crop yields, and contribute to
              sustainable agriculture.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, description, icon: Icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="p-6 bg-secondary rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="flex items-center justify-center w-16 h-16 mx-auto bg-primaryrounded-full"
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <Icon className="w-8 h-8 text-text-primary" />
      </motion.div>
      <h3 className="mt-4 text-xl font-semibold text-text-primary">{title}</h3>
      <p className="mt-2 text-text-secondary">{description}</p>
    </motion.div>
  );
};

const ServicesSection = () => (
  <motion.div
    id="services"
    className="py-12 bg-background"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">Our Services</h2>
        <p className="mt-4 text-xl text-text-secondary">Empowering farmers with AI-driven solutions</p>
      </motion.div>
      <motion.div
        className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <ServiceCard
          title="Crop Disease Detection"
          description="AI-powered disease detection for early intervention"
          icon={() => <div>🌿</div>}
        />
        <ServiceCard
          title="Soil Analysis"
          description="Comprehensive soil health assessment"
          icon={() => <div>🔬</div>}
        />
        <ServiceCard
          title="Fertilizer Recommendations"
          description="Personalized fertilizer plans for optimal growth"
          icon={() => <div>🧪</div>}
        />
        <ServiceCard
          title="Weather Forecasting"
          description="Accurate weather predictions for informed decisions"
          icon={() => <div>🌤️</div>}
        />
      </motion.div>
    </div>
  </motion.div>
);

const SchemeCard = ({ title, description }) => (
  <motion.div
    className="bg-secondary p-6 rounded-lg shadow-lg"
    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <h3 className="text-xl font-semibold text-primary-light mb-2">{title}</h3>
    <p className="text-text-secondary">{description}</p>
    <motion.button
      className="mt-4 px-4 py-2 bg-primarytext-text-primary rounded hover:bg-primary-light transition duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      Learn More
    </motion.button>
  </motion.div>
);

const GovernmentSchemeSection = () => (
  <div id="government-scheme" className="py-12 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-primary text-center mb-8">Government Schemes</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <SchemeCard
          title="Pradhan Mantri Fasal Bima Yojana"
          description="Crop insurance scheme to provide financial support to farmers in case of crop failure due to natural calamities."
        />
        <SchemeCard
          title="Soil Health Card Scheme"
          description="Provides information to farmers on nutrient status of their soil along with recommendations on appropriate dosage of nutrients."
        />
        <SchemeCard
          title="PM Kisan Samman Nidhi"
          description="Direct income support of ₹6000 per year to eligible farmer families, payable in three equal installments."
        />
      </div>
    </div>
  </div>
);

const TestimonialCard = ({ name, role, content, image }) => (
  <motion.div
    className="bg-secondary p-6 rounded-lg shadow-lg"
    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <p className="text-text-secondary italic mb-4">"{content}"</p>
    <div className="flex items-center">
      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-text-primary font-bold text-xl overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          name[0]
        )}
      </div>
      <div className="ml-4">
        <h4 className="text-lg font-semibold text-text-primary">{name}</h4>
        <p className="text-primary-light">{role}</p>
      </div>
    </div>
  </motion.div>
);

const TestimonialsSection = () => (
  <div id="testimonials" className="py-12 bg-background-light">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-primary text-center mb-8">What Our Users Say</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <TestimonialCard
          name="Rajesh Kumar"
          role="Wheat Farmer, Punjab"
          content="Agro-Mitra's AI-powered disease detection saved my crop from a severe fungal infection. It's a game-changer for small farmers like me!"
          image="/api/placeholder/100/100"
        />
        <TestimonialCard
          name="Anita Patel"
          role="Organic Vegetable Grower, Gujarat"
          content="The soil analysis feature helped me optimize my fertilizer use. My yields have improved, and I'm saving money on inputs. Highly recommended!"
          image="/api/placeholder/100/100"
        />
        <TestimonialCard
          name="Mahesh Singh"
          role="Mango Orchard Owner, Maharashtra"
          content="The weather forecasting is incredibly accurate. It has helped me plan my irrigation and harvesting schedules much more effectively."
          image="/api/placeholder/100/100"
        />
      </div>
    </div>
  </div>
);

const ContactForm = () => (
  <form className="mt-8 space-y-6">
    <div>
      <label htmlFor="name" className="sr-only">Name</label>
      <input id="name" name="name" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-emerald-300 placeholder-emerald-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm" placeholder="Name" />
    </div>
    <div>
      <label htmlFor="email" className="sr-only">Email</label>
      <input id="email" name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-emerald-300 placeholder-emerald-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm" placeholder="Email" />
    </div>
    <div>
      <label htmlFor="message" className="sr-only">Message</label>
      <textarea id="message" name="message" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-emerald-300 placeholder-emerald-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm" placeholder="Message" rows="4"></textarea>
    </div>
    <div>
      <motion.button
        type="submit"
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-text-primary bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Submit
      </motion.button>
    </div>
  </form>
);

const ContactSection = () => (
  <div id="contact" className="py-12 bg-background-light">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">Contact Us</h2>
        <p className="mt-4 max-w-2xl text-xl text-text-secondary lg:mx-auto">
          Get in touch with us for any inquiries or support.
        </p>
      </div>
      <div className="mt-10 lg:mt-20 lg:grid lg:grid-cols-2 lg:gap-8">
        <div>
          <ContactForm />
        </div>
        <div className="mt-10 lg:mt-0">
          {/* Map component would go here */}
          <div className="bg-primary-dark h-64 rounded-lg"></div>
        </div>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-background">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
        <div className="px-5 py-2">
          <a href="#" className="text-base text-primary hover:text-text-primary transition duration-300">
            Terms & Conditions
          </a>
        </div>
        <div className="px-5 py-2">
          <a href="#" className="text-base text-primary hover:text-text-primary transition duration-300">
            Privacy Policy
          </a>
        </div>
        <div className="px-5 py-2">
          <a href="#" className="text-base text-primary hover:text-text-primary transition duration-300">
            Support
          </a>
        </div>
      </nav>
      <div className="mt-8 flex justify-center space-x-6">
        {/* Social media icons would go here */}
      </div>
      <p className="mt-8 text-center text-base text-primary">
        &copy; 2024 Agro-Mitra. All rights reserved.
      </p>
    </div>
  </footer>
);

const Homepage = () => {
  return (
    <div style={{ backgroundColor: 'var(--background)', minHeight: '100vh' }}>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GovernmentSchemeSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Homepage;