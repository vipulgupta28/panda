import React from 'react';
import { Github, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto text-center">
          <div className="text-2xl font-bold text-white mb-3">Panda</div>
          <p className="text-gray-500 mb-6">
            Anonymous chat platform connecting people worldwide.
          </p>

          <div className="flex justify-center space-x-4 mb-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
          </div>

          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>

          <p className="mt-6 text-xs text-gray-600">&copy; {new Date().getFullYear()} WHISPR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
