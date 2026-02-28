import express from 'express';
import dotenv from 'dotenv';//load env files from .env to process.env
import cors from 'cors';//Allows frontend (running on a different port) to talk to backend.
import path from 'path';//Needed when serving frontend files in production.
import {serve} from 'inngest/express';//To run long tasks (code execution, recordings) asynchronously.
import {inngest,functions} from './lib/inngest.js';//These define background jobs handled by Inngest.
import {connectDB} from './lib/db.js';//connect mongodb before start of server
import {clerkMiddleware} from '@clerk/express';//Automatically verifies user and attaches req.auth info to requests.
import sessionRoutes from './routes/sessionRoute.js';
import chatRoutes from './routes/chatRoutes.js';
const port=process.env.PORT||5000;
dotenv.config({quiet:true});
const app = express();
const __dirname = path.resolve();//Needed for serving frontend build files
console.log("Updated version");
// middleware
app.use(express.json());//Allows server to read JSON data from requests.
// credentials:true meaning?? => server allows a browser to include cookies on request
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

app.use(clerkMiddleware()); // this adds auth field to request object: req.auth()

app.use("/api/inngest", serve({ client: inngest, functions }));
// Runs background jobs
// Long tasks (API calls, recordings, async jobs)

// Why Express uses Middleware-based Routing?
// Separate logic
// Reuse code
// Add security & validation easily
// Scale like real-world production apps (Zomato, Swiggy, Paytm style architecture)
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "api is up and running" });
});

app.post("/api/compile", async (req, res) => {
  try {
    const { language, files } = req.body;

    const jdoodleLanguageMap = {
      javascript: "nodejs",
      python: "python3",
      java: "java",
      cpp: "cpp17"
    };

    const response = await fetch(process.env.JDOODLE_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clientId: process.env.JDOODLE_CLIENT_ID,
        clientSecret: process.env.JDOODLE_CLIENT_SECRET,
        script: files[0].content,
        language: jdoodleLanguageMap[language] || "nodejs",
        versionIndex: "0"
      }),
    });

    const data = await response.json();

    res.json({
      run: {
        output: data.output || "",
        stderr: data.error || ""
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Compilation failed" });
  }
});



// make our app ready for deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}
//“In production, the frontend is built into static files. This code lets Express serve those files 
// and ensures that React Router works correctly by handling all routes on the client side.”

const startServer = async () => {
  try {
    await connectDB();
    app.listen(process.env.PORT, () => console.log("Server is running on port:", process.env.PORT));
  } catch (error) {
    console.error("💥 Error starting the server", error);
  }
};
//await used in async functions
//await why use
// 👉 It pauses the current function
// 👉 Waits until the Promise is resolved or rejected
// 👉 Then continues execution
startServer();