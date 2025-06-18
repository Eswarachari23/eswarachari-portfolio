import React from 'react';
import { Code, Brain, Target, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Python', level: 90, color: 'bg-blue-500' },
    { name: 'Java', level: 85, color: 'bg-orange-500' },
    { name: 'C/C++', level: 88, color: 'bg-teal-500' },
    { name: 'SQL', level: 82, color: 'bg-purple-500' },
    { name: 'Machine Learning', level: 87, color: 'bg-green-500' },
    { name: 'Data Science', level: 85, color: 'bg-pink-500' },
  ];

  const highlights = [
    {
      icon: Code,
      title: 'Programming Excellence',
      description: 'Proficient in multiple programming languages with strong problem-solving abilities'
    },
    {
      icon: Brain,
      title: 'AI & ML Enthusiast',
      description: 'Deep understanding of machine learning algorithms and artificial intelligence concepts'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Driven to contribute meaningfully and grow within dynamic organizations'
    },
    {
      icon: Zap,
      title: 'Continuous Learner',
      description: 'Always enthusiastic to learn new technologies and enhance capabilities'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I am a dedicated Computer Science student specializing in AI & ML, passionate about 
            applying programming and analytical skills to real-world challenges. Eager to contribute 
            meaningfully and grow within a dynamic organization.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
              </div>
            );
          })}
        </div>

        {/* Skills Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-800">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 text-gray-600">
            <div>
              <span className="text-2xl font-bold text-blue-600 block">4+</span>
              <span className="text-sm">Years of Study</span>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div>
              <span className="text-2xl font-bold text-teal-600 block">3</span>
              <span className="text-sm">Major Projects</span>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div>
              <span className="text-2xl font-bold text-orange-500 block">3</span>
              <span className="text-sm">Certifications</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;