import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
     <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
      transition-all duration-300 w-[95%] md:w-[90%] lg:w-2/3
      rounded-full 
      ${isScrolled ? ' bg-white text-black p-2 ' : ' text-black '}
    `}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex gap-20 justify-center items-center">
          <div className="flex items-center">
            <span className={`text-xl font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>
  WHISPR
</span>

          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
           <a
  href="#features"
  className={`hover:bg-zinc-400 p-3 rounded-[100px] transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}
>Features</a>
           <a
  href="#how-it-works"
  className={`hover:bg-zinc-400 p-3 rounded-[100px] transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}
>How It Works</a>
             <a
  href="#how-it-works"
  className={`hover:bg-zinc-400 p-3 rounded-[100px] transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}
>About</a>
           
            <Button>Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg pt-2 pb-4 px-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-gray-800 hover:text-black py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="text-gray-800 hover:text-black py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#about" 
                className="text-gray-800 hover:text-black py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <div className="flex flex-col space-y-3 pt-2">
                <Button primary={false}>Log In</Button>
                <Button>Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;