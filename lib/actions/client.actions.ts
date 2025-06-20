// for client side actions (test)
import { Client, Account, Databases, Storage, ID, Query } from "appwrite";
import { parseStringify } from "../utils";

// Public config
const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT!;
const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID!;
const DATABASE_ID = process.env.NEXT_PUBLIC_DATABASE_ID!;
const PATIENT_COLLECTION_ID = process.env.NEXT_PUBLIC_PATIENT_COLLECTION_ID!;
const BUCKET_ID = process.env.NEXT_PUBLIC_BUCKET_ID!;

// Initialize Appwrite client
const client = new Client()
  .setEndpoint(ENDPOINT)
  .setProject(PROJECT_ID);

// Initialize Appwrite services with the client
const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

// GET PATIENT
export const getPatient = async (userId: string) => {
  try {
    const patients = await databases.listDocuments(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      [Query.equal("userId", [userId])]
    );

    return parseStringify(patients.documents[0]);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the patient details:",
      error
    );
  }
};

// Patient registration
export const registerPatient = async ({
  identificationDocument,
  ...patient
}: RegisterUserParams) => {
  try {
    let file;

    if (identificationDocument) {
      const blobFile = identificationDocument.get("blobFile") as File;
      const fileName = identificationDocument.get("fileName") as string;

      file = await storage.createFile(BUCKET_ID!, ID.unique(), blobFile);
    }

    const newPatient = await databases.createDocument(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      ID.unique(),
      {
        identificationDocumentId: file?.$id ?? null,
        identificationDocumentUrl: file?.$id
          ? `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file.$id}/view?project=${PROJECT_ID}`
          : null,
        ...patient,
      }
    );

    return parseStringify(newPatient);
  } catch (error) {
    console.error("An error occurred while creating a new patient:", error);
    throw error;
  }
};

// Patient creation
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

// in a browser environment (like Next.js frontend), 
// environment variables must be prefixed with NEXT_PUBLIC_ to be included in the frontend build. 
// Otherwise, they’re undefined at runtime.