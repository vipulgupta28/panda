import express from 'express';
import cors from 'cors';
import { WebSocketServer, WebSocket } from 'ws';
import http from 'http';

const app = express();
app.use(cors());
app.use(express.json());

// Create a HTTP server to attach WebSocket server
const server = http.createServer(app);

// WebSocket Server
const wss = new WebSocketServer({ server });

// Store waiting clients
let waitingClient: WebSocket | null = null;

// Assign room IDs
let roomCounter = 1;

// Map to store rooms: roomId -> [client1, client2]
const rooms = new Map<string, WebSocket[]>();

// Handle new WebSocket connections
wss.on('connection', (ws: WebSocket) => {
  console.log('A user connected');

  if (waitingClient === null) {
    // No one is waiting, put this client in the queue
    waitingClient = ws;
    ws.send(JSON.stringify({ type: 'waiting', message: 'Waiting for a match...' }));
  } else {
    // Match found
    const roomId = `room-${roomCounter++}`;
    const client1 = waitingClient;
    const client2 = ws;

    rooms.set(roomId, [client1, client2]);

    client1.send(JSON.stringify({ type: 'match', roomId }));
    client2.send(JSON.stringify({ type: 'match', roomId }));

    console.log(`Matched two users in ${roomId}`);

    // Remove from queue
    waitingClient = null;

    // Relay messages within room
    const relayMessage = (sender: WebSocket, data: string) => {
      const room = rooms.get(roomId);
      if (!room) return;
      const receiver = room.find(client => client !== sender);
      if (receiver && receiver.readyState === WebSocket.OPEN) {
        receiver.send(data);
      }
    };

    // Message listeners
    client1.on('message', (data) => relayMessage(client1, data.toString()));
    client2.on('message', (data) => relayMessage(client2, data.toString()));

    // Handle disconnects
    const closeRoom = () => {
      const room = rooms.get(roomId);
      room?.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: 'leave', message: 'Your partner disconnected.' }));
        }
      });
      rooms.delete(roomId);
    };

    client1.on('close', closeRoom);
    client2.on('close', closeRoom);
  }

  // Cleanup on connection error
  ws.on('error', () => {
    if (waitingClient === ws) waitingClient = null;
  });
});

// Start server
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
