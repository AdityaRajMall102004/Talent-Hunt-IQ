import express from 'express';
const router=express.Router();//express.Router() creates a new mini-Express app
//Express gives you a machine to create routers, not a ready-made router.
// It has its own routes
// Its own middleware
// Its own request flow

import { getStreamToken } from '../controllers/chatController.js';
import { protectRoute } from '../middlewares/protectRoute.js';
//---/api/chat/token
router.get('/token',protectRoute,getStreamToken)

export default router; 

//Each route file needs its own router 
// so that routes and middleware stay modular, reusable, and scalable.