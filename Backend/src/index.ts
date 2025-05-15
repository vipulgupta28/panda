import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import { randomUUID } from 'crypto'; // For unique IDs

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

const io = new Server(server, {
  cors: {
    origin: '*', // Change this to your frontend domain in production
  },
});

let waitingUserSocketId: string | null = null;

// Generate unique room ID
const generateRoomId = () => randomUUID();

// Generate unique user ID
const generateUserId = () => randomUUID();

// WebSocket connection
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
    if (waitingUserSocketId === socket.id) {
      waitingUserSocketId = null;
    }
  });
});

//@ts-ignore
app.post('/api/match', (req, res) => {
  const userId = generateUserId();
  const userSocketId = req.body.socketId;

  if (!userSocketId) {
    return res.status(400).json({ error: 'socketId is required in body' });
  }

  if (waitingUserSocketId) {
    const roomId = generateRoomId();
    io.to(waitingUserSocketId).emit('match', { roomId });
    io.to(userSocketId).emit('match', { roomId });
    waitingUserSocketId = null;
    return res.json({ matched: true, roomId });
  } else {
    waitingUserSocketId = userSocketId;
    return res.json({ matched: false, message: 'Waiting for a user...' });
  }
});

server.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});
