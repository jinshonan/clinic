// At the very top of lib/appwrite.config.ts
// console.log('=== ENV DEBUG ===');
// console.log('process.env keys:', Object.keys(process.env));
// console.log('NEXT_PUBLIC vars:', Object.keys(process.env).filter(key => key.startsWith('NEXT_PUBLIC')));
// console.log('NEXT_PUBLIC_ENDPOINT:', process.env.NEXT_PUBLIC_ENDPOINT);
// console.log('Raw process.env:', JSON.stringify(process.env, null, 2));
// console.log('=== END DEBUG ===');

import * as sdk from 'node-appwrite';

// Use direct assignment instead of destructuring
const PROJECT_ID = process.env.PROJECT_ID;
const API_KEY = process.env.API_KEY;
const DATABASE_ID = process.env.DATABASE_ID;
const PATIENT_COLLECTION_ID = process.env.PATIENT_COLLECTION_ID;
const DOCTOR_COLLECTION_ID = process.env.DOCTOR_COLLECTION_ID;
const APPOINTMENT_COLLECTION_ID = process.env.APPOINTMENT_COLLECTION_ID;
const BUCKET_ID = process.env.NEXT_PUBLIC_BUCKET_ID;
const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT;

// const {
//     PROJECT_ID, API_KEY, 
//     DATABASE_ID, 
//     PATIENT_COLLECTION_ID, 
//     DOCTOR_COLLECTION_ID, 
//     APPOINTMENT_COLLECTION_ID,
//     NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
//     NEXT_PUBLIC_ENDPOINT: ENDPOINT,
// } = process.env;

// hard coding works
// const ENDPOINT = "https://cloud.appwrite.io/v1";

// debug
// console.log('All env vars:', process.env);
// console.log('NEXT_PUBLIC_ENDPOINT:', process.env.NEXT_PUBLIC_ENDPOINT);
// console.log('NODE_ENV:', process.env.NODE_ENV);
// if (!ENDPOINT) {
//   throw new Error('NEXT_PUBLIC_ENDPOINT is not defined');
// }

const client = new sdk.Client();

client
    .setEndpoint(ENDPOINT!)
    .setProject(PROJECT_ID!)
    .setKey(API_KEY!);

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);