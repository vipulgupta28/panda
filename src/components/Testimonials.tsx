import React from 'react';

interface TestimonialProps {
  quote: string;
  name: string;
  location: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, location }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
      <svg className="w-8 h-8 text-gray-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-gray-600 mb-4">{quote}</p>
      <div className="font-medium">{name}</div>
      <div className="text-gray-500 text-sm">{location}</div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from people who have made meaningful connections through WHISPR.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial 
            quote="I've met some amazing people through WHISPR. The anonymity lets us have real conversations without judgment."
            name="Alex"
            location="United States"
          />
          
          <Testimonial 
            quote="As someone who travels often, WHISPR helps me connect with locals and get authentic insights about different cultures."
            name="Mia"
            location="Canada"
          />
          
          <Testimonial 
            quote="I love the random matching feature. I've had deep philosophical conversations with people I would never have met otherwise."
            name="David"
            location="Australia"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;