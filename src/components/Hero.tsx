import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
            <img 
              src="/WhatsApp Image 2025-06-18 at 14.28.15_4f13cd71.jpg" 
              alt="Uppaluri Eswarachari"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-orange-500 bg-clip-text text-transparent">
              UPPALURI
            </span>
            <br />
            <span className="text-gray-800">ESWARACHARI</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light">
            Computer Science & AI/ML Enthusiast
          </p>
          
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about transforming ideas into intelligent solutions through machine learning, 
            data science, and innovative software development.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-gray-600">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>Bengaluru, Karnataka</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-teal-600" />
              <span>6301398764</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-orange-500" />
              <span>eswarpurna23@gmail.com</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/Eswarachari23"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
            >
              <Github className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/uppaluri-eswarachari-94218229b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce mx-auto block"
          >
            <ChevronDown className="w-8 h-8 text-gray-400 hover:text-blue-600 transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;