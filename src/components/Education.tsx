import React from 'react';
import { GraduationCap, Calendar, MapPin, Trophy } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'Bachelor Of Technology',
      field: 'Computer Science and Engineering',
      institution: 'Alliance University',
      location: 'Bengaluru, India',
      duration: 'September 2022 – July 2026',
      cgpa: '7.58',
      status: 'Current',
      description: 'Specializing in AI & ML with focus on advanced algorithms and data structures'
    },
    {
      id: 2,
      degree: 'Intermediate - MPC',
      field: 'Mathematics, Physics, Chemistry',
      institution: 'Sri Jeevana Jyothi Junior College',
      location: 'Giddalur, India',
      duration: 'June 2020 – May 2022',
      marks: '799/1000',
      status: 'Completed',
      description: 'Strong foundation in mathematics and sciences'
    },
    {
      id: 3,
      degree: 'Class 10',
      field: 'Secondary Education',
      institution: 'Anusha E.M High School',
      location: 'Giddalur, India',
      duration: 'June 2019 – April 2020',
      marks: '498/600',
      status: 'Completed',
      description: 'Comprehensive secondary education with excellent academic performance'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Educational <span className="text-blue-600">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A progressive academic path building strong foundations in computer science and engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-teal-600 to-orange-500"></div>

            {educationData.map((education, index) => (
              <div key={education.id} className="relative mb-12 last:mb-0">
                {/* Timeline Node */}
                <div className="absolute left-6 w-5 h-5 bg-white border-4 border-blue-600 rounded-full shadow-lg"></div>

                {/* Content Card */}
                <div className="ml-20">
                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <GraduationCap className="w-6 h-6 text-blue-600" />
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            education.status === 'Current' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {education.status}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{education.degree}</h3>
                        <p className="text-lg text-blue-600 font-medium mb-2">{education.field}</p>
                        <p className="text-lg font-semibold text-gray-800">{education.institution}</p>
                      </div>
                      
                      {/* Score/Grade */}
                      {(education.cgpa || education.marks) && (
                        <div className="mt-4 md:mt-0 md:ml-6">
                          <div className="bg-gradient-to-br from-blue-600 to-teal-600 text-white p-4 rounded-2xl text-center group-hover:scale-105 transition-transform duration-300">
                            <Trophy className="w-6 h-6 mx-auto mb-2" />
                            <div className="text-2xl font-bold">
                              {education.cgpa && `${education.cgpa}`}
                              {education.marks && education.marks}
                            </div>
                            <div className="text-xs opacity-90">
                              {education.cgpa && 'CGPA'}
                              {education.marks && 'Marks'}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Details */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{education.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{education.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">{education.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Highlights */}
        <div className="mt-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-600">Years of Engineering</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl">
              <div className="text-3xl font-bold text-teal-600 mb-2">7.58</div>
              <div className="text-gray-600">Current CGPA</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">AI/ML</div>
              <div className="text-gray-600">Specialization</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;