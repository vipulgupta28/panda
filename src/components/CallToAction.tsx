import React from 'react';
import Button from './Button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 relative bg-gblack">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Go Ads Free</h2>
          <p className="text-lg text-gray-300">
            Choose the experience that suits you best
          </p>
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-white">
            <h3 className="text-2xl font-bold mb-4">Free Plan</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Ads in between chats</li>
              <li>Slower experience</li>
              <li>Limited personalization</li>
              <li>Occasional distractions</li>
            </ul>
            <div className="mt-6 text-xl font-semibold text-gray-400">Free Forever</div>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-zinc-700 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-white relative overflow-hidden">
            {/* Optional glow effect */}
            <div className="absolute - rounded-2xl pointer-events-none"></div>

            <h3 className="text-2xl font-bold mb-4">Premium Plan</h3>
            <ul className="space-y-3 text-white">
              <li>Ad-free chatting</li>
              <li>Faster performance</li>
              <li>Enhanced customization</li>
              <li>Priority notifications</li>
            </ul>
            <div className="mt-6 text-xl font-semibold">$2 / month</div>

            <button className="mt-6 bg-white p-4 rounded-[50px] font-medium hover:cursor-pointer text-black hover:bg-gray-200 border-0">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
