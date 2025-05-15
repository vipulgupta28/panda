import React, { useState } from 'react';
import { Globe, Shield, Zap } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  active: boolean;
  onClick: () => void;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, active, onClick }) => {
  return (
    <div
      onClick={(e) => {
  e.preventDefault();
  e.stopPropagation(); // Optional but ensures no bubbling causes scroll
 onClick();
}}

      className={`shrink-0 w-72 h-96 cursor-pointer transform transition-all duration-500 p-6 mx-4 
        rounded-2xl border border-zinc-700 shadow-xl text-white
        bg-gradient-to-br from-zinc-900 to-black 
        ${active ? 'scale-105 -translate-y-10 opacity-100 shadow-2xl' : 'opacity-30'}`
      }
    >
      <div className="mb-4 p-3 bg-gradient-to-br from-gray-900 to-black rounded-full text-white inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Default active is the middle card

  const featuresData = [
    {
      icon: <Shield size={28} />,
      title: '100% Anonymous',
      description: 'Chat freely without revealing your identity. Your personal information stays private.',
    },
    {
      icon: <Globe size={28} />,
      title: 'Global Reach',
      description: 'Connect with people from over 150 countries, experiencing diverse cultures and perspectives.',
    },
    {
      icon: <Zap size={28} />,
      title: 'Instant Connection',
      description: 'Just one click to start chatting with someone new from anywhere in the world.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-black">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose WHISPR</h2>
        <p className="text-white max-w-2xl mx-auto">
          Our platform offers a unique way to connect with people around the world while maintaining your privacy.
        </p>
      </div>

      <div className="flex justify-center px-6 py-10 space-x-6">
        {featuresData.map((feature, index) => (
          <Feature
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            active={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
