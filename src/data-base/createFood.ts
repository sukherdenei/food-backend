import { MongoClient } from "mongodb";
import { configDotenv } from "dotenv";

export async function createFoods() {
  configDotenv();
  const uri = process.env.MONGO_URL || "";

  console.log("URI", uri);
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("sample_mflix");
    const collection = database.collection("foods");

    await collection.insertOne({ name: "Egg", rate: 9, price: "2000" });

    // await collection.insertMany([
    //   { name: "Pizza", rate: 5, price: "35k" },
    //   { name: "Curry", rate: 9, price: "20K" },
    //   { name: "Гуляш", rate: 9.1, price: "15k" },
    // ]);
  } catch (error) {
    console.log("ERRORR", error);
  } finally {
    await client.close();
  }
}
