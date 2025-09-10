import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Award, Users, Heart, MapPin, Target, Trees } from 'lucide-react';

const About = () => {
  const milestones = [
    {
      year: '2012',
      title: 'Foundation & Amur Falcon Crisis Response',
      description: 'Natural Nagas was founded (Reg. No. HOME/SRC-6390 dated 07-08-2012) in response to the Amur Falcon massacre in Nagaland, inspired by wildlife photography at Kaziranga National Park in 2011.',
      icon: Target
    },
    {
      year: '2013',
      title: 'Historic MoU & Conservation Success',
      description: 'Signed tripartite MOU with Wildlife Trust of India and village councils of Pangti, Sungro, and Ashaa. Achieved zero killing of Amur Falcons from 100,000+ killed in 2012.',
      icon: Award
    },
    {
      year: '2015',
      title: 'Green Dream Project Launch',
      description: 'Launched Green Village New Riphyim initiative with the motto "Of the community, by the community and for the community" as a model sustainable village.',
      icon: Trees
    },
    {
      year: '2018',
      title: 'First Amur Falcon Festival',
      description: 'Organized the first-ever Amur Falcon Conservation Festival (Nov 8-10, 2018) at Doyang reservoir, promoting eco-tourism and conservation awareness.',
      icon: Calendar
    },
    {
      year: '2021',
      title: 'Major Project Partnerships',
      description: 'Began partnerships with JICA NFMP Project and World Bank ELEMENT Project for large-scale ecosystem management and forest conservation.',
      icon: Users
    },
    {
      year: '2025',
      title: '13+ Years of Conservation Impact',
      description: 'Continuing to expand conservation programs across 40+ villages in Wokha district and beyond, with focus on community-based conservation.',
      icon: MapPin
    }
  ];

  const teamMembers = [
    {
      name: 'Steve Odyuo',
      role: 'Founder & Chairman',
      education: 'Graduate, social activist and entrepreneur',
      passion: 'Deep passion for wildlife and travel photography, outdoor and wildlife enthusiast',
      positions: [
        'Member of State Wildlife Advisory Board Nagaland',
        'Member Standing Committee on Environment, BAN'
      ],
      inspiration: {
        location: 'Kaziranga National Park, Assam (2011)',
        moment: 'A shot of a serpent eagle flying off with a snake',
        impact: 'Led to passion for wildlife photography and eventual founding of Natural Nagas'
      },
      keyAchievements: [
        'Amur Falcon Conservation - from 100,000+ killed to zero in protected areas',
        'Human-Elephant Conflict mitigation through RAP programs',
        'Rescue and rediscovery of the Black Soft Shell Turtle',
        'Green Dream Project - model village initiatives',
        'Creative and innovative awareness strategies'
      ],
      vision: 'To create a generation of responsible citizens who can safeguard and take care of our environment in a sustainable way.',
      bio: 'Graduate, social activist and entrepreneur with a deep passion for wildlife and travel photography. Steve founded Natural Nagas in 2012 after a transformative wildlife photography experience at Kaziranga National Park in 2011. Member of State Wildlife Advisory Board Nagaland and Member Standing Committee on Environment, BAN. His work spans Amur Falcon conservation, Human-Elephant Conflict mitigation, and the rediscovery of the Black Soft Shell Turtle.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
    }
  ];

  const partners = [
    {
      name: 'Wildlife Trust of India (WTI)',
      description: 'Leading wildlife conservation organization providing technical support and expertise.',
      type: 'Conservation Partner'
    },
    {
      name: 'Japan International Cooperation Agency (JICA)',
      description: 'Supporting sustainable development and environmental conservation initiatives.',
      type: 'Development Partner'
    },
    {
      name: 'World Bank',
      description: 'Funding critical conservation projects through the ELEMENT program.',
      type: 'Funding Partner'
    },
    {
      name: 'Government of Nagaland',
      description: 'Official support and collaboration for state-wide conservation policies.',
      type: 'Government Partner'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl md:text-2xl text-emerald-200 max-w-3xl mx-auto">
              Born from passion, driven by purpose, sustained by community partnership
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Origin Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/30 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-200/30 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">The Beginning</h2>
              </div>
              
              <div className="prose prose-lg text-gray-700">
                <p>
                  Natural Nagas was officially registered (HOME/SRC-6390) on August 7, 2012, in Wokha, Nagaland, 
                  born from founder Steve Odyuo's transformative wildlife photography experience at Kaziranga National Park in 2011. 
                  A shot of a serpent eagle flying off with a snake ignited his passion for wildlife photography and conservation.
                </p>
                <p>
                  The organization emerged in response to the exposé on the massacre of Amur Falcons in Nagaland, 
                  which went viral globally. Natural Nagas, along with the Wildlife Trust of India, spearheaded 
                  the Amur Falcon Conservation project, achieving remarkable success - from over 100,000 birds 
                  killed in 2012 to zero killing in Pangti village by 2013.
                </p>
                <p>
                  The name "Natural Nagas" stems from the tribal Nagas who are basically natural biologists, 
                  knowing their land, flora and fauna through practical exposure and ancestral practices. 
                  Today, with 13+ years of conservation work, we continue Steve's vision to create a generation 
                  of responsible citizens who can safeguard and take care of our environment in a sustainable way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership</h2>
            <p className="text-xl text-gray-600">Guided by vision, driven by passion for conservation</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="lg:flex">
                  {/* Profile Image & Basic Info */}
                  <div className="lg:w-1/3 relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-80 lg:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 lg:hidden">
                      <div className="text-white">
                        <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                        <div className="text-emerald-200 font-semibold">{member.role}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Detailed Information */}
                  <div className="lg:w-2/3 p-8 lg:p-12">
                    <div className="hidden lg:block mb-6">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <div className="text-emerald-600 font-semibold text-xl">{member.role}</div>
                    </div>
                    
                    {/* Background & Education */}
                    <div className="mb-8">
                      <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5 text-emerald-600" />
                        Background & Experience
                      </h4>
                      <p className="text-gray-700 leading-relaxed mb-4">{member.education}</p>
                      <p className="text-gray-700 leading-relaxed">{member.passion}</p>
                      
                      <div className="mt-4 space-y-2">
                        {member.positions.map((position, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-emerald-700">
                            <Award className="w-4 h-4" />
                            <span className="text-sm font-medium">{position}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Inspiration Story */}
                    <div className="mb-8 bg-emerald-50 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-emerald-600" />
                        The Inspiration Moment
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div><strong className="text-gray-900">Location:</strong> <span className="text-gray-700">{member.inspiration.location}</span></div>
                        <div><strong className="text-gray-900">Moment:</strong> <span className="text-gray-700">{member.inspiration.moment}</span></div>
                        <div><strong className="text-gray-900">Impact:</strong> <span className="text-gray-700">{member.inspiration.impact}</span></div>
                      </div>
                    </div>
                    
                    {/* Key Achievements */}
                    <div className="mb-8">
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-emerald-600" />
                        Key Conservation Achievements
                      </h4>
                      <div className="grid gap-3">
                        {member.keyAchievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors duration-200">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Vision */}
                    <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg p-6 text-white">
                      <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5" />
                        Vision for Natural Nagas
                      </h4>
                      <p className="leading-relaxed italic">"{member.vision}"</p>
                      
                      <div className="mt-4 pt-4 border-t border-white/20">
                        <div className="flex items-center gap-2 text-emerald-100">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">13+ Years Conservation Leadership</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Users className="w-8 h-8 text-emerald-600" />
                <h3 className="text-2xl font-bold text-gray-900">Growing Conservation Team</h3>
              </div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                We're continuously expanding our team of dedicated conservationists, researchers, 
                field workers, and community organizers. Join Steve's mission to create a generation 
                of responsible citizens safeguarding our environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/get-involved#volunteer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  <Heart className="w-5 h-5" />
                  Join Our Mission
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  <MapPin className="w-5 h-5" />
                  Contact Leadership
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our conservation story</p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon;
                return (
                  <div key={index} className="relative flex items-start gap-6">
                    {/* Timeline node */}
                    <div className="relative z-10 w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-gray-50 rounded-lg p-6 hover:bg-emerald-50 transition-colors duration-300">
                      <div className="text-emerald-600 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Collaborators */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partners & Collaborators</h2>
            <p className="text-xl text-gray-600">Building conservation success through strategic partnerships</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-emerald-600 text-sm font-medium mb-1">{partner.type}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{partner.name}</h3>
                    <p className="text-gray-700">{partner.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl text-emerald-200 mb-8">
            Join our mission to protect Nagaland's incredible biodiversity and support local communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-involved"
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Support Our Work
            </Link>
            <Link
              to="/contact"
              className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;