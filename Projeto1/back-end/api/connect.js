import { MongoClient } from "mongodb";

const URL =
  "mongodb+srv://Arth:Arthur16@cluster0.froclnc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URL);
export const db = client.db("spotifyAula");

// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
