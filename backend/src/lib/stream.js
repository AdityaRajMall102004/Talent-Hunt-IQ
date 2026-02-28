import { StreamChat } from "stream-chat";//Used for text chat Channels, messages, typing indicators
import { StreamClient } from "@stream-io/node-sdk";
//Used for video / audio calls,Meetings, calls, live sessions
const apiKey = process.env.STREAM_API_URL;
const apiSecret = process.env.STREAM_API_SECRET_KEY;

if (!apiKey || !apiSecret) {
  console.error("STREAM_API_KEY or STREAM_API_SECRET is missing");
}
export const chatClient = StreamChat.getInstance(apiKey, apiSecret); // will be used chat features
export const streamClient = new StreamClient(apiKey, apiSecret); // will be used for video calls

export const upsertStreamUser = async (userData) => {
  try {
    await chatClient.upsertUser(userData);
    console.log("Stream user upserted successfully:", userData);
  } catch (error) {o
    console.error("Error upserting Stream user:", error);
  }
};
export const deleteStreamUser = async (userId) => {
  try {
    await chatClient.deleteUser(userId);
    console.log("Stream user deleted successfully:", userId);
  } catch (error) {
    console.error("Error deleting the Stream user:", error);
  }
};

// This file initializes Stream’s chat and video SDKs using server-side credentials. 
// It acts as a service layer that exposes reusable Stream clients and helper functions
//  like user upsertion and deletion. Controllers use this layer to generate tokens and 
//  manage users securely without exposing secrets to the frontend.