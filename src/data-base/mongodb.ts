import { MongoClient } from "mongodb";
import { configDotenv } from "dotenv";
configDotenv();

const uri = process.env.MONGO_URL || "";

console.log("URI", uri);

const client = new MongoClient(uri);

export async function run() {
  try {
    await client.connect();
    const database = client.db("sample_mflix");
    const collection = database.collection("movies");
    const findQuery = {
      year: { $gt: 2015 },
    };

    const movies = await collection.find().limit(2).toArray();
    return movies;
  } catch (error) {
    console.log("ERRORR", error);
  } finally {
    await client.close();
  }
}
