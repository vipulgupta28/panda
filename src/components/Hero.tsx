import React, { useEffect, useRef, useState } from 'react';


const Hero: React.FC = () => {
  const bubblesRef = useRef<HTMLDivElement>(null);

 const [currentOption, setCurrentOption] = useState(0);
const [fade, setFade] = useState(true);

const options = ["World", "People", "Your ex may be"];

useEffect(() => {
  const interval = setInterval(() => {
    setFade(false); // Start fade-out

    setTimeout(() => {
      setCurrentOption(prev => (prev + 1) % options.length);
      setFade(true); // Trigger fade-in after change
    }, 200); // Matches fade duration
  }, 3000); // Change every 3s

  return () => clearInterval(interval);
}, []);

  
  useEffect(() => {
    const createBubble = () => {
      if (!bubblesRef.current) return;
      
      const bubble = document.createElement('div');
      const size = Math.random() * 60 + 20;
      const left = Math.random() * 100;
      const animDuration = Math.random() * 15 + 10;
      
      bubble.classList.add('bubble');
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${left}%`;
      bubble.style.animationDuration = `${animDuration}s`;
      bubble.style.opacity = `${Math.random() * 0.3 + 0.1}`;
      
      bubblesRef.current.appendChild(bubble);
      
      setTimeout(() => {
        if (bubble && bubblesRef.current?.contains(bubble)) {
          bubblesRef.current.removeChild(bubble);
        }
      }, animDuration * 1000);
    };
    
    const interval = setInterval(createBubble, 800);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[800px] rounded-full bg-white/30 blur-3xl z-0" />

      
      {/* Animated Bubbles */}
      <div ref={bubblesRef} className="absolute inset-0 z-10 overflow-hidden" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 md:mb-6">
            <span className="block">Connect <span className='bg-black  p-3 rounded-xl inline-block -rotate-3'>Anonymously</span></span>
            <div className='flex justify-center gap-6'>
        With<span className={`block mt-2 bg-clip-text text-white bg-gradient-to-r from-gray-800 to-black transition-opacity duration-200 ${fade ? 'opacity-100' : 'opacity-0'}`}>
   {options[currentOption]}
</span>
            </div>
            


          </h1>
          
          <p className="text-lg md:text-xl text-white mb-8 md:mb-10">
            Chat with random people all over the globe without revealing your identity.
            Make new friends, share stories, and have meaningful conversations.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full bg-white p-4 text-black font-medium rounded-[100px] sm:w-auto">Start Chatting Now</button>
            
          </div>
         
          <div className="mt-12 md:mt-16">
            <p className="text-white  mb-4">Trusted by thousands of users worldwide</p>
            <div className="flex justify-center space-x-6 md:space-x-10">
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-2xl font-bold">150+</div>
              <div className="text-2xl font-bold">4.8★</div>
            </div>
            <div className="flex justify-center space-x-4 md:space-x-8 text-sm text-white">
              <div>Daily Users</div>
              <div>Countries</div>
              <div>Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;