import * as sdk from 'node-appwrite';

// is config should only be for server side
// looks like the app got updated and the tutorial is outdated.
// Use direct assignment instead of destructuring
const API_KEY = process.env.API_KEY;
export const DATABASE_ID = process.env.NEXT_PUBLIC_DATABASE_ID;
export const PATIENT_COLLECTION_ID = process.env.NEXT_PUBLIC_PATIENT_COLLECTION_ID;
export const DOCTOR_COLLECTION_ID = process.env.NEXT_PUBLIC_DOCTOR_COLLECTION_ID;
export const APPOINTMENT_COLLECTION_ID = process.env.APPOINTMENT_COLLECTION_ID;
export const BUCKET_ID = process.env.NEXT_PUBLIC_BUCKET_ID;
export const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID;
export const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT;

const client = new sdk.Client();

client
    .setEndpoint(ENDPOINT!)
    .setProject(PROJECT_ID!)
    .setKey(API_KEY!);

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);