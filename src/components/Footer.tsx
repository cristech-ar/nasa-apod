import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/80 backdrop-blur-md border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About APOD</h3>
            <p className="text-gray-400 text-sm">
              Each day a different image or photograph of our fascinating universe is
              featured, along with a brief explanation written by a professional astronomer.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="https://www.nasa.gov" className="hover:text-white transition-colors">NASA Official Website</a></li>
              <li><a href="https://apod.nasa.gov/apod/archivepix.html" className="hover:text-white transition-colors">APOD Archive</a></li>
              <li><a href="https://www.nasa.gov/multimedia/guidelines/index.html" className="hover:text-white transition-colors">Image Use Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Developer</h3>
            <p className="text-gray-400 text-sm mb-4">
              Developed by <a href="https://crisdev.tech" className="text-purple-400 hover:text-purple-300 transition-colors">crisdev.tech</a>
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} NASA Astronomy Picture of the Day. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;