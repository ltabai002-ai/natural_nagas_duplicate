import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bird, Trees, GanttChart as Elephant, Users, Award, MapPin, Calendar } from 'lucide-react';

const Programs = () => {
  const flagshipPrograms = [
    {
      id: 'amur-falcon',
      title: 'Amur Falcon Conservation',
      subtitle: 'Protecting the World\'s Longest Migrating Raptor',
      description: 'Our flagship program protects the Amur Falcon during its critical stopover in Nagaland. Through community engagement, education, and alternative livelihood programs, we\'ve transformed hunting grounds into conservation sanctuaries.',
      image: 'https://images.pexels.com/photos/3646176/pexels-photo-3646176.jpeg',
      impact: ['10,000+ Falcons Protected Annually', '15 Villages Engaged', '85% Reduction in Hunting'],
      status: 'Active Since 2012',
      icon: Bird
    },
    {
      id: 'green-dream',
      title: 'Green Dream Project',
      subtitle: 'Transforming New Riphyim Village',
      description: 'A comprehensive community development initiative in New Riphyim village focusing on sustainable agriculture, forest restoration, and alternative livelihoods that benefit both people and nature.',
      image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg',
      impact: ['500+ Trees Planted', '50 Families Benefited', '200 Hectares Restored'],
      status: 'Ongoing',
      icon: Trees
    },
    {
      id: 'jica-nfmp',
      title: 'JICA NFMP Initiative',
      subtitle: 'Nagaland Forest Management Project',
      description: 'Partnering with JICA to implement sustainable forest management practices across Nagaland, focusing on biodiversity conservation and community forest rights.',
      image: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg',
      impact: ['5,000 Hectares Under Management', '20 Community Forest Committees', '30% Increase in Forest Cover'],
      status: 'Phase II Active',
      icon: Trees
    },
    {
      id: 'element',
      title: 'ELEMENT Program',
      subtitle: 'World Bank Collaboration',
      description: 'The Environmental and Social Management Framework under the World Bank\'s ELEMENT program, focusing on landscape-level conservation and sustainable development.',
      image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg',
      impact: ['10 Districts Covered', '$2M+ Investment', '100+ Conservation Activities'],
      status: 'Multi-year Initiative',
      icon: Award
    }
  ];

  const wildlifeProjects = [
    {
      title: 'Black Soft-shell Turtle Rescue',
      description: 'Emergency conservation efforts for the critically endangered Black Soft-shell Turtle found in Nagaland\'s wetlands.',
      image: 'https://images.pexels.com/photos/1618606/pexels-photo-1618606.jpeg',
      impact: '50+ Turtles Rescued',
      icon: MapPin
    },
    {
      title: 'Human-Elephant Conflict Mitigation',
      description: 'Developing innovative solutions to reduce conflicts between Asian elephants and farming communities.',
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg',
      impact: '85% Conflict Reduction',
      icon: Elephant
    }
  ];

  const communityProjects = [
    {
      title: 'Eco-tourism Development',
      description: 'Creating sustainable tourism opportunities that generate income while protecting natural areas.',
      image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg',
      impact: '5 Eco-tourism Sites'
    },
    {
      title: 'Clean-up Drives',
      description: 'Regular community-led environmental clean-up initiatives across villages and natural areas.',
      image: 'https://images.pexels.com/photos/2767815/pexels-photo-2767815.jpeg',
      impact: '200+ Volunteers'
    },
    {
      title: 'Plantation & Environment Days',
      description: 'Annual tree planting events and environmental awareness programs with schools and communities.',
      image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg',
      impact: '1,000+ Trees Planted'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl md:text-2xl text-emerald-200 max-w-3xl mx-auto">
            Community-driven conservation initiatives protecting Nagaland's unique biodiversity
          </p>
        </div>
      </section>

      {/* Flagship Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Flagship Programs</h2>
            <p className="text-xl text-gray-600">Large-scale initiatives driving conservation impact across Nagaland</p>
          </div>
          
          <div className="space-y-20">
            {flagshipPrograms.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <div key={program.id} id={program.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                  <div className="lg:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                      <img 
                        src={program.image} 
                        alt={program.title}
                        className="w-full h-96 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-emerald-600 font-medium">
                          {program.status}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">{program.title}</h3>
                        <div className="text-emerald-600 font-semibold">{program.subtitle}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">{program.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      {program.impact.map((item, idx) => (
                        <div key={idx} className="bg-emerald-50 rounded-lg p-3 text-center">
                          <div className="text-emerald-600 font-bold text-sm">{item}</div>
                        </div>
                      ))}
                    </div>
                    
                    <Link
                      to="/get-involved"
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      Support This Program <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wildlife Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Wildlife Conservation Projects</h2>
            <p className="text-xl text-gray-600">Targeted efforts to protect endangered and vulnerable species</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {wildlifeProjects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.impact}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <IconComponent className="w-6 h-6 text-emerald-600" />
                      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{project.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Community Projects</h2>
            <p className="text-xl text-gray-600">Empowering local communities through conservation action</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {communityProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <div className="bg-white text-emerald-600 px-3 py-1 rounded-full text-sm font-medium">
                      {project.impact}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Support Our Conservation Work</h2>
          <p className="text-xl text-emerald-200 mb-8">
            Every contribution helps us protect more species, engage more communities, and create lasting conservation impact.
          </p>
          <Link
            to="/get-involved"
            className="inline-flex items-center gap-2 bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Involved Today <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Programs;