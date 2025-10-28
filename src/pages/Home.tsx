import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, GraduationCap, Calendar, Heart, MapPin, Bird, Trees, GanttChart as Elephant, Award, Target, Globe } from 'lucide-react';

const Home = () => {
  const featuredPrograms = [
    {
      title: 'Amur Falcon Conservation',
      description: 'Our flagship program that made Nagaland the "Falcon Capital of the World" - protecting these raptors on their 22,000 km migration from Siberia to Africa via Doyang reservoir.',
      image: 'https://images.pexels.com/photos/3646176/pexels-photo-3646176.jpeg',
      link: '/programs#amur-falcon',
      stats: 'From 100,000+ Killed to Zero in 2013'
    },
    {
      title: 'Green Dream Project',
      description: 'Model village initiative in New Riphyim with the motto "Of the community, by the community and for the community" - sustainable development and biodiversity conservation.',
      image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg',
      link: '/programs#green-dream',
      stats: 'Model Village Program'
    },
    {
      title: 'Black Soft-Shell Turtle Conservation',
      description: 'Rediscovery and conservation of the Black Soft-Shell Turtle (listed as Extinct in Wild in 2002) at Wozhu Tsophow wetlands, Old Akuk village.',
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg',
      link: '/programs#turtle-conservation',
      stats: 'Species Back from Extinction'
    }
  ];

  const partners = [
    { name: 'Wildlife Trust of India', logo: 'WTI' },
    { name: 'JICA', logo: 'JICA' },
    { name: 'World Bank', logo: 'WB' },
    { name: 'Government of Nagaland', logo: 'GON' }
  ];

  const blogPosts = [
    {
      title: 'World Environment Day 2025: Ending Plastic Pollution at Longphijü',
      excerpt: 'Natural Nagas team carried out meaningful awareness and action campaign at Longphijü wetlands in Wokha district...',
      date: '2025-06-05',
      image: 'https://images.pexels.com/photos/3646176/pexels-photo-3646176.jpeg'
    },
    {
      title: 'JICA NFMP & World Bank ELEMENT Projects Update',
      excerpt: 'Progress report on our ongoing partnerships with JICA and World Bank for sustainable forest management...',
      date: '2025-01-10',
      image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg'
    },
    {
      title: 'Animal Action Education: Reaching 40+ Schools',
      excerpt: 'Our AAE program sponsored by IFAW and WTI continues to educate young minds about elephant conservation...',
      date: '2025-01-05',
      image: 'https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://page.gensparksite.com/v1/base64_upload/4e2770f56408d0f03c21d6383169f561)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Protecting Nagaland's Nature.
            <span className="block text-emerald-400">Empowering Communities.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Founded in 2012 in Wokha, Nagaland. From Amur Falcon protection to community-based conservation across 40+ villages.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/get-involved"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Donate Now
            </Link>
            <Link
              to="/programs"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Explore Projects
            </Link>
            <Link
              to="/get-involved#volunteer"
              className="text-emerald-400 hover:text-emerald-300 font-semibold text-lg transition-colors duration-300 flex items-center gap-2"
            >
              Volunteer <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Snapshot */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Our Conservation Impact</h2>
            <p className="text-xl text-emerald-200">Making a difference across Nagaland since 2012</p>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Conservation Programs</h2>
            <p className="text-xl text-gray-600">Community-driven initiatives protecting Nagaland's unique biodiversity</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPrograms.map((program, index) => (
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                  <Link
                    to={program.link}
                    className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Nagaland Matters</h2>
              <div className="prose prose-lg text-gray-700 mb-8">
                <p>
                  Nagaland is one of India's most biodiverse states, home to over 490 bird species, 
                  including the magnificent Amur Falcon that travels from Siberia to Africa. This 
                  northeastern state harbors unique ecosystems that support countless endemic species.
                </p>
                <p>
                  Our community-led approach combines traditional Naga wisdom with modern conservation 
                  science, creating sustainable solutions that benefit both wildlife and local communities.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Bird className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-emerald-600">490+</div>
                  <div className="text-sm text-gray-600">Bird Species</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Trees className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-green-600">75%</div>
                  <div className="text-sm text-gray-600">Forest Cover</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-amber-600">16</div>
                  <div className="text-sm text-gray-600">Districts</div>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300"
              >
                Learn Our Story <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-emerald-100 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <MapPin className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nagaland, Northeast India</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-emerald-600" />
                    <span>Biodiversity Hotspot</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Bird className="w-5 h-5 text-emerald-600" />
                    <span>Critical Migration Route</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-emerald-600" />
                    <span>Indigenous Communities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Trees className="w-5 h-5 text-emerald-600" />
                    <span>Pristine Forests</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Trusted Partners</h2>
            <p className="text-gray-600">Working together for conservation impact</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="w-32 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 font-bold text-lg hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-300">
                  {partner.logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Stories</h2>
            <p className="text-xl text-gray-600">Conservation updates from the field</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-emerald-600 font-medium mb-2">
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link
                    to="/publications"
                    className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/publications"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              View All Stories <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-emerald-800 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Be Part of the Change
            </h2>
            <p className="text-xl text-emerald-200 mb-8 max-w-3xl mx-auto">
              Join us in protecting Nagaland's incredible biodiversity and empowering local communities 
              through conservation action.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-emerald-400" />
                <span className="text-lg font-medium">Protect</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-emerald-400"></div>
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-emerald-400" />
                <span className="text-lg font-medium">Educate</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-emerald-400"></div>
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-emerald-400" />
                <span className="text-lg font-medium">Transform</span>
              </div>
            </div>
            
            <div className="mt-8">
              <Link
                to="/get-involved"
                className="inline-flex items-center gap-2 bg-white text-emerald-800 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Involved Today <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;