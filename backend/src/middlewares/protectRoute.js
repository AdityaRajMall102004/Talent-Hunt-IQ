import { requireAuth } from '@clerk/express'
import User from '../modals/User.js';
export const protectRoute=[
    requireAuth(),
    async (req,res,next)=>{
        try{
            const clerkId=req.auth().userId;
            if(!clerkId){
                return res.status(401).json({msg:"Unauthorized"});
            }
            //find user in db
            const user=await User.findOne({clerkId});
            if(!user){
                return  res.status(401).json({msg:"User not found"});
            }
            //attach user to request object
            req.user=user;
            next();
        }
        catch(err){
            console.error('Error in protectRoute middleware:',err.message);
            res.status(500).json({msg:"Server Error"});
        }
    }
]