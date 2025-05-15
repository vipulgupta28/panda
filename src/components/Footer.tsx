import React from 'react';
import { Github, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-bold mb-4">WHISPR</div>
            <p className="text-gray-600 mb-4">
              Anonymous chat platform connecting people worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-black transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">How It Works</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Community Guidelines</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} WHISPR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;