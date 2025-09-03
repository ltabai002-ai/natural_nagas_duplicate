import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-green-700 rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">Natural Nagas</span>
                <span className="text-xs text-emerald-400 font-medium">Conservation Initiative</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              Protecting Nagaland's nature and empowering communities through 
              wildlife conservation and community-led action since 2012.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-emerald-400 transition-colors">Our Programs</Link></li>
              <li><Link to="/education" className="hover:text-emerald-400 transition-colors">Education</Link></li>
              <li><Link to="/events" className="hover:text-emerald-400 transition-colors">Events</Link></li>
              <li><Link to="/publications" className="hover:text-emerald-400 transition-colors">Publications</Link></li>
              <li><Link to="/impact" className="hover:text-emerald-400 transition-colors">Impact</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li><Link to="/get-involved" className="hover:text-emerald-400 transition-colors">Donate</Link></li>
              <li><Link to="/get-involved#volunteer" className="hover:text-emerald-400 transition-colors">Volunteer</Link></li>
              <li><Link to="/get-involved#partnership" className="hover:text-emerald-400 transition-colors">Partnership</Link></li>
              <li><Link to="/gallery" className="hover:text-emerald-400 transition-colors">Gallery</Link></li>
              <li><Link to="/faq" className="hover:text-emerald-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Wokha, Nagaland, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <a href="mailto:info@naturalnagas.org" className="text-sm hover:text-emerald-400 transition-colors">
                  info@naturalnagas.org
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Natural Nagas Conservation Initiative. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-emerald-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-emerald-400 transition-colors">Terms of Service</Link>
            <Link to="/accessibility" className="text-gray-400 hover:text-emerald-400 transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;