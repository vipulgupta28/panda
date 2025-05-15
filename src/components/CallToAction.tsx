import React from 'react';
import Button from './Button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-90 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Connect with the World?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Join thousands of users already making anonymous connections. It's free to start!
          </p>
          
          <Button className="bg-white text-black hover:bg-gray-100 border-0">
            Start Chatting Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;