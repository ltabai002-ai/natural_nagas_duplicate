import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Clock, ArrowRight, Bird, Star } from 'lucide-react';

const Events = () => {
  const featuredEvent = {
    title: 'Amur Falcon Conservation Week & Festival',
    date: 'November 2025',
    location: 'Wokha District, Nagaland',
    description: 'Our flagship annual celebration combining conservation awareness, cultural festivities, and community engagement. Join us for a week of activities including bird watching, traditional performances, conservation workshops, and community feasts.',
    image: 'https://images.pexels.com/photos/3646176/pexels-photo-3646176.jpeg',
    highlights: [
      'Bird watching expeditions with expert guides',
      'Traditional Naga cultural performances',
      'Conservation photography workshops',
      'Community feast and celebrations',
      'Educational sessions for all ages',
      'Local artisan exhibitions'
    ]
  };

  const upcomingEvents = [
    {
      title: 'World Wildlife Day Celebration',
      date: '2025-03-03',
      time: '09:00 AM - 05:00 PM',
      location: 'Wokha Town Hall',
      type: 'Awareness Event',
      description: 'Join us for a day-long celebration of wildlife with educational exhibitions, student presentations, and community discussions.',
      registrationOpen: true
    },
    {
      title: 'Spring Migration Watch',
      date: '2025-04-15',
      time: '05:30 AM - 08:00 AM',
      location: 'Doyang Reservoir',
      type: 'Field Activity',
      description: 'Early morning bird watching session to observe spring migrants passing through Nagaland.',
      registrationOpen: true
    },
    {
      title: 'Community Forest Walk',
      date: '2025-05-22',
      time: '07:00 AM - 12:00 PM',
      location: 'New Riphyim Village',
      type: 'Educational Tour',
      description: 'Guided forest walk to learn about local flora, fauna, and traditional ecological knowledge.',
      registrationOpen: true
    },
    {
      title: 'Youth Conservation Camp',
      date: '2025-06-10',
      time: '3 Days',
      location: 'Zunheboto District',
      type: 'Workshop',
      description: 'Intensive 3-day conservation camp for young people aged 16-25 with hands-on activities and expert sessions.',
      registrationOpen: true
    }
  ];

  const pastEvents = [
    {
      title: 'Amur Falcon Festival 2024',
      date: '2024-11-15',
      participants: '500+',
      description: 'Successful celebration with record attendance and significant community engagement.',
      image: 'https://images.pexels.com/photos/3646176/pexels-photo-3646176.jpeg'
    },
    {
      title: 'World Environment Day 2024',
      date: '2024-06-05',
      participants: '300+',
      description: 'Community cleanup drive and tree planting ceremony across multiple villages.',
      image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg'
    },
    {
      title: 'International Bird Day 2024',
      date: '2024-05-10',
      participants: '200+',
      description: 'Bird watching expedition and photography competition for conservation awareness.',
      image: 'https://images.pexels.com/photos/1661546/pexels-photo-1661546.jpeg'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Events & Activities</h1>
          <p className="text-xl md:text-2xl text-emerald-200 max-w-3xl mx-auto">
            Join our conservation events and be part of positive change in Nagaland
          </p>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl overflow-hidden shadow-2xl">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredEvent.image}
                  alt={featuredEvent.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-6 h-6 text-yellow-400" />
                  <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                    Featured Event
                  </span>
                </div>
                
                <h2 className="text-3xl font-bold mb-4">{featuredEvent.title}</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-emerald-200" />
                    <span className="text-emerald-100">{featuredEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-emerald-200" />
                    <span className="text-emerald-100">{featuredEvent.location}</span>
                  </div>
                </div>
                
                <p className="text-emerald-100 leading-relaxed mb-6">
                  {featuredEvent.description}
                </p>
                
                <div className="space-y-2 mb-8">
                  <h4 className="font-semibold text-emerald-200">Event Highlights:</h4>
                  <ul className="space-y-1">
                    {featuredEvent.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-emerald-100 text-sm flex items-center gap-2">
                        <Bird className="w-4 h-4 text-emerald-400" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-emerald-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Register Interest <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Mark your calendars for these conservation activities</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 group">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 transition-colors duration-300">
                    <Calendar className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-emerald-600 text-sm font-medium mb-1">{event.type}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">
                          {new Date(event.date).toLocaleDateString('en-US', { 
                            weekday: 'long',
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-sm mb-4">{event.description}</p>
                    
                    {event.registrationOpen && (
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold text-sm transition-colors duration-300"
                      >
                        Register Now <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Past Events</h2>
            <p className="text-xl text-gray-600">Celebrating our conservation milestones</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="bg-emerald-600 px-3 py-1 rounded-full text-sm font-medium">
                      {event.participants} Participants
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-emerald-600 text-sm font-medium mb-2">
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-700 text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              View Event Gallery <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Help Organize Our Events</h2>
          <p className="text-xl text-emerald-200 mb-8">
            Volunteer with us to organize impactful conservation events and activities in your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-involved#volunteer"
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Volunteer for Events
            </Link>
            <Link
              to="/contact"
              className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Propose an Event
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;