import React from 'react';
import { ExternalLink, MessageSquare, Shield, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'SMS Spam Detection',
      description: 'Built a machine learning model to classify SMS messages as Spam or Ham using text preprocessing and TF-IDF vectorization.',
      technologies: ['Python', 'Scikit-learn', 'TF-IDF', 'Naive Bayes', 'Logistic Regression', 'SVM'],
      features: [
        'Text preprocessing and cleaning',
        'TF-IDF vectorization for feature extraction',
        'Multiple classifier comparison',
        'High accuracy spam detection'
      ],
      icon: MessageSquare,
      gradient: 'from-blue-500 to-teal-500',
      bgColor: 'bg-blue-50'
    },
    {
      id: 2,
      title: 'Credit Card Fraud Detection',
      description: 'Built a fraud detection model using advanced algorithms to identify fraudulent transactions with over 90% precision.',
      technologies: ['Python', 'Logistic Regression', 'Isolation Forest', 'Random Forest', 'SMOTE'],
      features: [
        'Imbalanced data handling with SMOTE',
        'Multiple algorithm implementation',
        'Over 90% precision achieved',
        'Real-time fraud detection capability'
      ],
      icon: Shield,
      gradient: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-50'
    },
    {
      id: 3,
      title: 'Movie Recommendation System',
      description: 'Built a hybrid recommendation system combining collaborative and content-based filtering with interactive UI.',
      technologies: ['Python', 'Scikit-learn', 'Surprise', 'Pandas', 'NumPy', 'Streamlit'],
      features: [
        'Hybrid recommendation approach',
        'Interactive Streamlit interface',
        'Collaborative and content-based filtering',
        'Real-time movie suggestions'
      ],
      icon: Star,
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my work in machine learning, data science, and software development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
              >
                {/* Project Header */}
                <div className={`${project.bgColor} p-8 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className={`w-full h-full bg-gradient-to-br ${project.gradient} rounded-full transform translate-x-8 -translate-y-8`}></div>
                  </div>
                  <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>

                {/* Project Body */}
                <div className="p-8">
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-center">
                    <button className="flex items-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors group/btn">
                      <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      <span className="text-sm font-medium">View Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;