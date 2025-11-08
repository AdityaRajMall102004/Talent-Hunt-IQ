import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import {serve} from 'inngest/express';
import {inngest,functions} from './lib/inngest.js';
import {connectDB} from './lib/db.js';
import {clerkMiddleware} from '@clerk/express';
import sessionRoutes from './routes/sessionRoute.js';
import chatRoutes from './routes/chatRoutes.js';
const port=process.env.PORT||5000;
dotenv.config({quiet: true} );
const app = express();

const __dirname = path.resolve();

// middleware
app.use(express.json());
// credentials:true meaning?? => server allows a browser to include cookies on request
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(clerkMiddleware()); // this adds auth field to request object: req.auth()

app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "api is up and running" });
});

// make our app ready for deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

const startServer = async () => {
  try {
    await connectDB();
    app.listen(process.env.PORT, () => console.log("Server is running on port:", process.env.PORT));
  } catch (error) {
    console.error("💥 Error starting the server", error);
  }
};

startServer();


// {
//   "name": "backend",
//   "version": "1.0.0",
//   "description": "TalentHunt",
//   "license": "ISC",
//   "author": "Aditya Raj Mall",
//   "type": "module",
//   "main": "src/index.js",
//   "scripts": {
//     "dev": "nodemon src/index.js",
//     "start": "nodemon src/index.js"
//   },
//   "dependencies": {
//     "@clerk/express": "^1.7.43",
//     "@stream-io/node-sdk": "^0.7.12",
//     "cors": "^2.8.5",
//     "dotenv": "^17.2.3",
//     "express": "^5.1.0",
//     "inngest": "^3.44.3",
//     "mongoose": "^8.19.1",
//     "nodemon": "^3.1.10",
//     "stream-chat": "^9.25.0"
//   }
// }