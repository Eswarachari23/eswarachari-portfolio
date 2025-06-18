import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'eswarpurna23@gmail.com',
      href: 'mailto:eswarpurna23@gmail.com',
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6301398764',
      href: 'tel:+916301398764',
      color: 'text-teal-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bengaluru, Karnataka',
      href: '#',
      color: 'text-orange-600'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Eswarachari23',
      color: 'hover:text-gray-900'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/uppaluri-eswarachari-94218229b',
      color: 'hover:text-blue-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-teal-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-blue-400">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss opportunities, collaborate on projects, or just have a conversation about technology? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-12">Get In Touch</h3>
            
            {/* Contact Details */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="flex flex-col items-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 group"
                  >
                    <div className={`w-16 h-16 ${info.color} bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-300 font-medium mb-1">{info.label}</div>
                      <div className="text-lg font-semibold">{info.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="mb-12">
              <h4 className="text-xl font-semibold mb-6">Follow Me</h4>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/20 ${social.color} transition-all duration-300 hover:scale-110`}
                    >
                      <Icon className="w-8 h-8" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Facts */}
            <div className="max-w-2xl mx-auto p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
              <h4 className="text-2xl font-semibold mb-6 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 mr-3" />
                Quick Facts
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                <div className="flex items-center space-x-2">
                  <span>🎓</span>
                  <span>Computer Science & AI/ML Student</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>🏢</span>
                  <span>Available for internships & collaborations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>💬</span>
                  <span>Languages: English, Telugu</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>⚡</span>
                  <span>Interests: Badminton, Cricket</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;