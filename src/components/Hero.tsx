import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setSocket } from './socket';

const Hero: React.FC = () => {


    const navigate = useNavigate()
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

   const [connecting, setConnecting] = useState(false);

  const handleStartChatting = () => {
    setConnecting(true);

    const socket = new WebSocket("ws://localhost:3000");

    socket.onopen = () => {
      console.log("Connected to server...");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
         setSocket(socket);
      if (data.type === "waiting") {
        console.log("Waiting for partner...");
      }

      if (data.type === "match") {
        const { roomId } = data;
        navigate('/chatpage', { state: { roomId } }); // Pass roomId and socket
      }

      if (data.type === "partner-disconnected") {
        alert("Your partner has disconnected.");
      }
    };

    socket.onerror = (err) => {
      console.error("WebSocket error:", err);
    };
  };



  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[800px] rounded-full bg-white/30 blur-3xl z-0" />

      
    
      
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
             <button
      className="w-full bg-white p-4 text-black font-medium rounded-[100px] sm:w-auto"
      onClick={handleStartChatting}
      disabled={connecting}
    >
      {connecting ? "Connecting..." : "Start Chatting Now"}
    </button>
            
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