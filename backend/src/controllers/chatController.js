import { chatClient } from "../lib/stream.js";
export async function getStreamToken(req,res){
    try{
        //use clerkId as user id not mongodb id because stream token is created using clerkId
        const token=chatClient.createToken(req.user.clerkId);
        res.status(200).json({
            token,
            userId:req.user.clerkId,
            userName:req.user.name,
            userImage:req.user.image,
        });
    }
    catch(error){
        console.log("Error in getStreamToken",error.message);
        res.status(500).json({message:"internal server error"});
    }
};

// getStreamToken is a backend controller responsible for securely generating Stream Chat 
// authentication tokens. It is called by the frontend after user authentication. 
// The function uses Clerk user IDs, generates a Stream token using the
// server-side secret key, and returns it to the client so the user can establish a 
// real-time chat connection securely.
