import { Inngest } from 'inngest';
import connectDB from './db.js';
import User from '../modals/User.js';

export const inngest = new Inngest({ id: "TalentHunt-IQ" });


const syncUser = inngest.createFunction(
  { id: "sync-user" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    try {
      await connectDB();
      const { id, email_addresses, first_name, last_name, image_url } = event.data;

      const newUser = {
        clerkId: id, 
        email: email_addresses?.[0]?.email_address || "",
        name: `${first_name || ""} ${last_name || ""}`.trim(),
        profileImage: image_url || "",
      };

      // Save to DB
      await User.create(newUser);
      console.log("✅ User synced to DB:", newUser.email);
    } catch (error) {
      console.error("❌ Error syncing user:", error.message);
    }
  }
);

const deleteUserFromDB = inngest.createFunction(
  { id: "delete-user" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    try {
      await connectDB();
      const { id } = event.data;

      const deleted = await User.deleteOne({ clerkId: id });
      console.log("🗑️ User deleted:", deleted);
    } catch (error) {
      console.error("❌ Error deleting user:", error.message);
    }
  }
);

export const functions = [syncUser, deleteUserFromDB];
