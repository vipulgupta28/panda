import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getSocket } from './socket'; // import the global socket

const Chat: React.FC = () => {
  const location = useLocation();
  const { roomId } = location.state || {};
  const socket = getSocket(); // get the socket from global store

  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (!socket) return;

    socket.onmessage = (event: MessageEvent) => {
      setMessages(prev => [...prev, `Partner: ${event.data}`]);
    };

    socket.onclose = () => {
      alert("Chat ended.");
    };

    return () => {
      socket.onmessage = null;
      socket.onclose = null;
    };
  }, [socket]);

  const sendMessage = () => {
    if (input.trim() !== "" && socket?.readyState === WebSocket.OPEN) {
      socket.send(input);
      setMessages(prev => [...prev, `You: ${input}`]);
      setInput("");
    }
  };

  return (
    <div className="p-4 text-white">
      <h2 className="text-2xl mb-4">Room ID: {roomId}</h2>
      <div className="h-[300px] overflow-y-auto border border-gray-400 p-2 mb-4 rounded">
        {messages.map((msg, idx) => (
          <div key={idx} className="mb-1">{msg}</div>
        ))}
      </div>
      <input
        className="text-white p-2 rounded mr-2 border"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage} className="bg-white text-black px-4 py-2 rounded">Send</button>
    </div>
  );
};

export default Chat;
