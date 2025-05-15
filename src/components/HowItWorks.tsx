import React from 'react';

interface StepProps {
  number: number;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, title, description }) => {
  return (
    <div className="relative flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-black text-white text-xl font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      {number < 3 && (
        <div className="hidden md:block absolute top-24 left-6 h-20 w-0.5 bg-gray-300"></div>
      )}
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Getting started with WHISPR is simple. Follow these steps to begin connecting with people worldwide.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-12 md:space-y-16">
          <Step 
            number={1}
            title="Create Your Profile"
            description="Sign up with just a username. No email, phone number, or personal information required."
          />
          
          <Step 
            number={2}
            title="Set Your Preferences"
            description="Choose your interests or let our algorithm match you randomly with people from around the world."
          />
          
          <Step 
            number={3}
            title="Start Chatting"
            description="Connect instantly with someone new and start a conversation. If you want to switch, just click 'Next'."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;