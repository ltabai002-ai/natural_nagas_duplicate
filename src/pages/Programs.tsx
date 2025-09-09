import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bird, Trees, GanttChart as Elephant, Users, Award, MapPin, Calendar } from 'lucide-react';

const Programs = () => {
  const flagshipPrograms = [
    {
      id: 'amur-falcon',
      title: 'Amur Falcon Conservation',
      subtitle: 'From 100,000+ Killed to Zero - Nagaland as Falcon Capital of World',
      description: 'Our flagship program transformed Nagaland from a massacre site to a safe haven for Amur Falcons. Partnering with WTI, we signed historic MoUs with Pangti, Sungro, and Ashaa villages. The program includes Bird-for-Bird initiatives, Grain-for-Grain compensation, patrolling squads, and the annual Amur Falcon Festival.',
      image: 'https://images.pexels.com/photos/3646176/pexels-photo-3646176.jpeg',
      impact: ['Zero Killing Achieved in 2013', 'Doyang Reservoir - Global Roosting Site', 'Villages: Pangti, Sungro, Ashaa'],
      status: 'Active Since 2012',
      icon: Bird
    },
    {
      id: 'green-dream',
      title: 'Green Dream Project (GDP)',
      subtitle: 'Model Green Village New Riphyim Initiative',
      description: 'Green Village New Riphyim with the motto "Of the community, by the community and for the community" was adopted as a model village for disseminating awareness and education about sustainable development and biodiversity conservation. Launched on World Environment Day 2015.',
      image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg',
      impact: ['Model Village Program', 'Water Table Recharge Projects', 'Sustainable Development Focus'],
      status: 'Ongoing Since 2015',
      icon: Trees
    },
    {
      id: 'jica-nfmp',
      title: 'JICA NFMP Project',
      subtitle: 'Natural Forest Management Project Partnership',
      description: 'As an organization familiar with the local landscape in Wokha district, Natural Nagas provides experts, logistics and data for this Japan-funded forest management project. We monitor, train and handhold community representatives across 24 villages in 4 batches.',
      image: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg',
      impact: ['24 Villages Across 4 Batches', 'Wokha District Focus', 'Community Training & Monitoring'],
      status: 'Active Partnership',
      icon: Trees
    },
    {
      id: 'element',
      title: 'ELEMENT World Bank Project',
      subtitle: 'Enhancing Landscape and Ecosystem Management ($225.5M)',
      description: 'Natural Nagas has officially signed a contract with the Government of Nagaland as part of the ELEMENT Project. We provide expertise, logistics, data, and community training across two Protected Forest Areas (PFAs) in Wokha district covering 23 villages.',
      image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg',
      impact: ['PFA 1: 10 Villages', 'PFA 2: 13 Villages', 'Wokha District Coverage'],
      status: 'Active Contract',
      icon: Award
    }
  ];

  const wildlifeProjects = [
    {
      title: 'Black Soft-shell Turtle Conservation',
      description: 'Rediscovery and conservation of the Black Soft-Shell Turtle (listed as Extinct in Wild in 2002 by IUCN) at Wozhu Tsophow wetlands, Old Akuk village, Wokha District. This species was thought to be extinct until our discovery.',
      image: 'https://images.pexels.com/photos/1618606/pexels-photo-1618606.jpeg',
      impact: 'Species Back from Extinction',
      icon: MapPin
    },
    {
      title: 'Human-Elephant Conflict Mitigation',
      description: 'Addressing human-animal conflict in Wokha District through Rapid Action Programme (RAP) with WTI. Providing relief to affected households in Pangti, Sungro, and Ashaa areas where elephants cause crop damage and livelihood losses.',
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg',
      impact: 'RAP Program with WTI',
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