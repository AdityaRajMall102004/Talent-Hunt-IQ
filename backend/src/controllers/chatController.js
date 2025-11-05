import { chatClient } from "../lib/stream.js";
export async function getStreamToken(req,res){
    try{
        //use clerkId as user id not mongodb id because stream token is created using clerkId
        const token=chatClient.createToken(req.user.clerkId);
        res.status(200).json({
            token,
            userId:req.user.clerkId,
            userName:req.user.name,
            userImage:req.user.image
        });
    }
    catch(error){
        console.log("Error in getStreamToken",error.message);
        req.status(500).json({message:"internal server error"});
    }
};
