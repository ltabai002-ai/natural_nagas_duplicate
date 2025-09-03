import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Award, Users, Heart, MapPin, Target } from 'lucide-react';

const About = () => {
  const milestones = [
    {
      year: '2012',
      title: 'Foundation & First Encounter',
      description: 'Natural Nagas was born from a transformative encounter with raptors and the urgent need to address the Amur Falcon crisis in Nagaland.',
      icon: Target
    },
    {
      year: '2015',
      title: 'Community Partnerships',
      description: 'Established strong partnerships with local communities, building trust and collaborative conservation approaches.',
      icon: Users
    },
    {
      year: '2018',
      title: 'Education Programs Launch',
      description: 'Launched comprehensive education initiatives reaching 40+ schools across Nagaland.',
      icon: Award
    },
    {
      year: '2020',
      title: 'Research & Documentation',
      description: 'Began systematic research and documentation of local biodiversity and conservation impacts.',
      icon: Calendar
    },
    {
      year: '2023',
      title: 'International Recognition',
      description: 'Gained international recognition for community-led conservation efforts and sustainable practices.',
      icon: Heart
    },
    {
      year: '2025',
      title: 'Expanding Impact',
      description: 'Continuing to expand conservation programs and community engagement across Northeast India.',
      icon: MapPin
    }
  ];

  const teamMembers = [
    {
      name: 'Steve Odyuo',
      role: 'Founder & Chairman',
      bio: 'A passionate conservationist and community leader, Steve founded Natural Nagas after witnessing the critical need for wildlife protection in Nagaland. His vision combines traditional Naga values with modern conservation science.',
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
                  In 2012, a transformative encounter with raptors sparked what would become Natural Nagas 
                  Conservation Initiative. Witnessing the Amur Falcon crisis in Nagaland - where thousands 
                  of these magnificent birds were being hunted during their epic migration from Siberia to Africa - 
                  founder Steve Odyuo knew immediate action was needed.
                </p>
                <p>
                  What started as an urgent response to protect a single species evolved into a comprehensive 
                  conservation movement. We realized that true conservation success could only come through 
                  empowering local communities, combining traditional Naga wisdom with modern conservation science, 
                  and creating sustainable solutions that benefit both wildlife and people.
                </p>
                <p>
                  Today, after 13+ years of dedicated work, Natural Nagas stands as a testament to what 
                  community-led conservation can achieve. From protecting the Amur Falcon to restoring 
                  ecosystems, from educating youth to building sustainable livelihoods - our journey 
                  continues with the same passion that sparked it all.
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
          
          <div className="max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8 md:p-12">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <div className="text-emerald-600 font-semibold mb-6">{member.role}</div>
                    <p className="text-gray-700 leading-relaxed text-lg">{member.bio}</p>
                    
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Award className="w-5 h-5" />
                        <span>13+ Years Conservation Leadership</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-emerald-50 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Growing Team</h3>
              <p className="text-gray-700">
                We're continuously expanding our team of dedicated conservationists, researchers, 
                and community organizers. Join us in making a difference.
              </p>
              <Link
                to="/get-involved#volunteer"
                className="inline-block mt-4 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300"
              >
                Join Our Team
              </Link>
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