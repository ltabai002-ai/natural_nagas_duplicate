import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, BookOpen, Video, Download, Globe, Target, Award } from 'lucide-react';

const Education = () => {
  const educationPrograms = [
    {
      title: 'Youth & Schools Program',
      description: 'Comprehensive conservation education reaching 40+ schools across Nagaland with hands-on workshops, field trips, and conservation modules.',
      stats: '40+ Schools • 2,000+ Students',
      image: 'https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg',
      icon: GraduationCap
    },
    {
      title: 'Community Awareness',
      description: 'Local language conservation sessions conducted in villages to build awareness and support for wildlife protection among all age groups.',
      stats: '25+ Villages • 1,500+ Participants',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
      icon: Users
    },
    {
      title: 'Media & Documentation',
      description: 'Creating documentaries, radio programs, and podcasts to spread conservation awareness across Nagaland and beyond.',
      stats: '5 Documentaries • 20+ Radio Shows',
      image: 'https://images.pexels.com/photos/3781529/pexels-photo-3781529.jpeg',
      icon: Video
    }
  ];

  const resources = [
    {
      title: 'Amur Falcon Conservation Guide',
      type: 'Educational Poster',
      description: 'Comprehensive guide for teachers about Amur Falcon migration and conservation.',
      downloadUrl: '#',
      language: 'English & Local Languages'
    },
    {
      title: 'Biodiversity Activity Sheets',
      type: 'Activity Pack',
      description: 'Interactive worksheets for students to learn about Nagaland\'s wildlife.',
      downloadUrl: '#',
      language: 'English & Nagamese'
    },
    {
      title: 'Community Conservation Handbook',
      type: 'Guide Book',
      description: 'Practical guide for communities on implementing conservation practices.',
      downloadUrl: '#',
      language: 'Multiple Local Languages'
    },
    {
      title: 'Teacher Training Materials',
      type: 'Training Kit',
      description: 'Complete training package for educators on conservation education methods.',
      downloadUrl: '#',
      language: 'English'
    }
  ];

  const achievements = [
    {
      metric: '2,000+',
      label: 'Students Reached',
      icon: GraduationCap
    },
    {
      metric: '40+',
      label: 'Schools Partnered',
      icon: Target
    },
    {
      metric: '25+',
      label: 'Villages Engaged',
      icon: Users
    },
    {
      metric: '5',
      label: 'Documentaries Produced',
      icon: Video
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Education for Conservation</h1>
          <p className="text-xl md:text-2xl text-emerald-200 max-w-3xl mx-auto">
            Inspiring the next generation of conservation leaders through comprehensive education programs
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{achievement.metric}</div>
                  <div className="text-emerald-200">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Education Programs</h2>
            <p className="text-xl text-gray-600">Multi-faceted approach to conservation education</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {educationPrograms.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-sm font-medium bg-emerald-600 px-3 py-1 rounded-full">
                        {program.stats}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <IconComponent className="w-6 h-6 text-emerald-600" />
                      <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{program.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resources Hub */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Educational Resources</h2>
            <p className="text-xl text-gray-600">Free resources for teachers, students, and communities</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 transition-colors duration-300">
                    <Download className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <div className="text-emerald-600 text-sm font-medium mb-1">{resource.type}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{resource.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{resource.description}</p>
                    <div className="text-xs text-gray-500 mb-3">{resource.language}</div>
                    <a 
                      href={resource.downloadUrl}
                      className="text-emerald-600 hover:text-emerald-700 font-medium text-sm transition-colors duration-300"
                    >
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Media & Recognition</h2>
            <p className="text-xl text-gray-600">Our conservation work featured in leading publications</p>
          </div>
          
          <div className="bg-emerald-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Globe className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mongabay Features</h3>
                <p className="text-gray-700">Regular coverage of our conservation initiatives and community impact stories.</p>
              </div>
              <div>
                <BookOpen className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Outlook Traveller</h3>
                <p className="text-gray-700">Featured articles on eco-tourism and sustainable travel in Nagaland.</p>
              </div>
              <div>
                <Award className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">National Recognition</h3>
                <p className="text-gray-700">Recognized by various national and international conservation organizations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Education Mission</h2>
          <p className="text-xl text-emerald-200 mb-8">
            Help us reach more students and communities with conservation education programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-involved"
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Donate for Education
            </Link>
            <Link
              to="/get-involved#volunteer"
              className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Volunteer as Educator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;