import React, { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';

type Marker = {
  lat: number;
  lng: number;
  size: number;
  color: string;
};

type Arc = {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  color: [string, string]; // Two-color gradient
};


const arcs:Arc[] = [
  { startLat: 37.7749, startLng: -122.4194, endLat: 28.6139, endLng: 77.209, color: ['#6366f1', '#818cf8'] },
  { startLat: 28.6139, startLng: 77.209, endLat: -33.8688, endLng: 151.2093, color: ['#6366f1', '#818cf8'] },
  { startLat: -33.8688, startLng: 151.2093, endLat: 45.4215, endLng: -75.6972, color: ['#6366f1', '#818cf8'] },
  { startLat: 45.4215, startLng: -75.6972, endLat: 37.7749, endLng: -122.4194, color: ['#6366f1', '#818cf8'] },
];
const markers:Marker[] = [
    { lat: 37.7749, lng: -122.4194, size: 0.5, color: 'white' },
    { lat: 28.6139, lng: 77.209, size: 0.5, color: 'white' },
    { lat: -33.8688, lng: 151.2093, size: 0.5, color: 'white' },
    { lat: 45.4215, lng: -75.6972, size: 0.5, color: 'white' },
  ];


const WhoAreWe: React.FC = () => {
  const globeEl = useRef<any>(null);

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
    }
  }, []);

  

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Who Are We?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            WHISPR is a space where anonymity sparks authenticity. Here's what makes us different:
          </p>
        </div>

        {/* Flex container with globe and text side by side */}
        <div className="flex flex-col lg:flex-row items-center justify-center  gap-5">
          {/* Globe */}
          <div className="w-full lg:w-1/2 h-[500px]">
            <Globe
      ref={globeEl}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      backgroundColor="rgba(0,0,0,0)"
      pointsData={markers}
      pointLat={(d) => (d as Marker).lat}
    pointLng={(d) => (d as Marker).lng}
    pointAltitude={() => 0.01}
    pointColor={(d) => (d as Marker).color}
    pointRadius={(d) => (d as Marker).size}
      arcsData={arcs}
      arcStartLat={(d) => (d as Arc).startLat}
    arcStartLng={(d) => (d as Arc).startLng}
    arcEndLat={(d) => (d as Arc).endLat}
    arcEndLng={(d) => (d as Arc).endLng}
    
  arcAltitude={0.6}
  arcStroke={0.8}
  arcDashLength={0.4}
  arcDashGap={2}
  arcDashInitialGap={() => Math.random() * 2}
  arcDashAnimateTime={2000}
  width={500}
  height={500}
/>

          </div>

          {/* Text content */}
          <div className="w-full lg:w-[28rem] bg-gradient-to-br from-[#1f1f1f]/80 to-black/80 border border-white/10 rounded-2xl p-6 text-white text-lg leading-relaxed shadow-xl backdrop-blur-md hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
  {/* Glow border animation */}
  <div className="absolute inset-0 border border-zinc-700 rounded-2xl  transition-all duration-300 pointer-events-none"></div>

  {/* Subtle background glow */}
  <div className="absolute -inset-1 bg-indigo-500/10 blur-2xl opacity-30 group-hover:opacity-50 transition duration-500 rounded-2xl pointer-events-none"></div>

  <p className="relative z-10">
   Panda is an open-source organization with a mission to build anonymous, inclusive, and empowering digital spaces. 
    <br /><br />
    We believe in the power of authentic human expression, where people can share their thoughts without fear, connect with others from around the globe, and foster real, unfiltered conversations.
    <br /><br />
    Our global community is built by the people, for the people — with transparency, respect, and collaboration at its core.
  </p>
</div>

        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
