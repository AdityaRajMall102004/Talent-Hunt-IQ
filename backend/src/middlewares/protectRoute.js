// Import Clerk’s authentication middleware
// WHY: Clerk handles session validation, token verification,
// expiry, and security for us.
import { requireAuth } from "@clerk/express";
import User from "../modals/User.js";

// Export protectRoute as an array of middlewares
// WHY: Express executes middlewares in order.
// First authentication → then user lookup.
export const protectRoute=[
  // Clerk authentication middleware
  // WHY: Blocks unauthenticated users immediately.
  // If auth fails, request never reaches our code.
  requireAuth(),

  // Custom middleware to attach MongoDB user
  async (req, res, next) => {
    try {
      const clerkId = req.auth().userId;
      if (!clerkId) return res.status(401).json({ message: "Unauthorized - invalid token" });
      // find user in db by clerk ID
      const user = await User.findOne({ clerkId });
      if (!user) return res.status(404).json({ message: "User not found" });

      // attach user to req
      // Attach MongoDB user to request object
      // WHY: So controllers can access user info
      // without querying the database again.
      req.user = user;

      // Continue to the next middleware or controller
      next();
    } catch (error) {
      console.error("Error in protectRoute middleware", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
];