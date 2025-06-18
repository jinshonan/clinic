// for client side actions
// fix suggested: (client-side) patient creation
import { Client, Account, ID } from "appwrite";

const client = new Client();
client
  .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID!);

// in a browser environment (like Next.js frontend), 
// environment variables must be prefixed with NEXT_PUBLIC_ to be included in the frontend build. 
// Otherwise, they’re undefined at runtime.

const account = new Account(client);

export const createUser = async (user: CreateUserParams) => {
  try {
    return await account.create(
        ID.unique(), 
        user.email, 
        'TempPassword123!', 
        user.name);
  } catch (err) {
    console.error('Account create error:', err);
    throw err; 
  }
};