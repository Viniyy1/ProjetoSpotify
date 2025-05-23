import { MongoClient } from "mongodb";

const URL =
  "mongodb+srv://Arth:GkpFux4vjl1GzSqE@cluster0.froclnc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URL);
export const db = client.db("spotifyAula");

// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
