import { MongoClient } from "mongodb";

const URL =
  "SUA URL DO MONGODB";

const client = new MongoClient(URL);
export const db = client.db("spotifyAula");

// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
