import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Advanced Deep Learning Methods for Healthcare',
      provider: 'Coursera',
      description: 'Specialized training in applying deep learning techniques to healthcare applications, including medical image analysis and patient data processing.',
      skills: ['Deep Learning', 'Healthcare AI', 'Medical Imaging', 'Neural Networks'],
      icon: '🧠',
      color: 'from-blue-500 to-purple-500',
      bgColor: 'bg-blue-50'
    },
    {
      id: 2,
      title: 'Introduction to Agile Development and Scrum',
      provider: 'Coursera',
      description: 'Comprehensive understanding of Agile methodologies and Scrum framework for efficient project management and software development.',
      skills: ['Agile', 'Scrum', 'Project Management', 'Team Collaboration'],
      icon: '🚀',
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-50'
    },
    {
      id: 3,
      title: 'Business Intelligence (BI) Essentials',
      provider: 'Coursera',
      description: 'Essential skills in business intelligence, data visualization, and analytics to drive data-driven decision making.',
      skills: ['Business Intelligence', 'Data Visualization', 'Analytics', 'Decision Making'],
      icon: '📊',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="text-blue-600">Certifications</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              {/* Certificate Header */}
              <div className={`${cert.bgColor} p-8 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className={`w-full h-full bg-gradient-to-br ${cert.color} rounded-full transform translate-x-8 -translate-y-8`}></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{cert.icon}</div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-green-600">Certified</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">{cert.title}</h3>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Award className="w-4 h-4" />
                    <span className="font-medium">{cert.provider}</span>
                  </div>
                </div>
              </div>

              {/* Certificate Body */}
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed mb-6">{cert.description}</p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Skills Gained</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 bg-gradient-to-r ${cert.color} text-white rounded-full text-sm font-medium`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Stats */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
                <div className="text-gray-600 font-medium">Professional Certifications</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-600 mb-2">100%</div>
                <div className="text-gray-600 font-medium">Completion Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">2024</div>
                <div className="text-gray-600 font-medium">Latest Certification</div>
              </div>
            </div>
          </div>
        </div>

        {/* Provider Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">All certifications are provided through</p>
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white rounded-full shadow-md">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="font-semibold text-gray-900">Coursera</span>
            <a
              href="https://www.coursera.org/user/1aba096c63be881a0d438562487d03ec"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;