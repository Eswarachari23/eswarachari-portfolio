import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Brand */}
          <div className="mb-6 md:mb-0">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              UE
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">
              © {currentYear} Uppaluri Eswarachari. All rights reserved.
            </p>
            <div className="flex items-center justify-center md:justify-end space-x-2 text-sm text-gray-500">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and</span>
              <Code className="w-4 h-4 text-blue-400" />
              <span>in Bengaluru</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center text-gray-500 text-sm">
            <p>Computer Science & AI/ML Student | Passionate Developer | Problem Solver</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;