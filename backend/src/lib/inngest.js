import {Inngest} from 'inngest';
import connectDB from './db.js';
import User from '../modals/User.js';

export const inngest = new Inngest({ id: "TalentHunt-IQ" });
const syncUser=inngest.createFunction(
    {id:"sync-user"},
    {    event:"clerk/user.created"},
    async({event})=>{
        await connectDB();
        const {clerkId,email_addresses,first_name,last_name,image_url}=event.data;
        const newuser={
            clerkId,
            email:email_addresses[0]?.email_address,
            name:'${first_name || ""} ${last_name || ""}',
            profileImage:image_url||'',
        };
        await User.create(newuser);
    }
    //todo something to sync user creation from clerk to our db
);
const deleteUserFromDB=inngest.createFunction(
    {id:"delete-user"},
    {    event:"clerk/user.deleted"},
     async({event})=>{
        await connectDB();
        const {clerkId}=event.data;
        await User.deleteOne({clerkId});
    }
    //todo something to handle user deletion from our db when user is deleted from clerk
);
export const functions=[syncUser,deleteUserFromDB];