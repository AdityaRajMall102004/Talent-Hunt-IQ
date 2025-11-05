import {StreamChat} from 'stream-chat';
const apiKey = process.env.STREAM_API_URL;
const apiSecret = process.env.STREAM_API_SECRET_KEY;
if(!apiKey || !apiSecret){
    throw new Error("Stream API key or secret is not defined in environment variables");
}
export const ChatClient = StreamChat.getInstance(apiKey, apiSecret);
export const upsertStreamUser = async (userData) => {
    try{
        await ChatClient.upsertUser(userData);
        console.log(`User ${userData} upserted to Stream successfully.`);
    }
    catch(error){
        console.error("Error upserting user to Stream:", error);
        throw error;
    }
}

export const deleteStreamUser = async (userId) => {
    try{
        await ChatClient.delete(userId);
        console.log(`User with ID ${userId} deleted from Stream successfully.`);
    }
    catch(error){
        console.error("Error deleting user from Stream:", error);
        throw error;
    }
}
//todo add another method to generate token