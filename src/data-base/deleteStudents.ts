import { MongoClient } from "mongodb";
import { configDotenv } from "dotenv";

export async function Delete() {
  configDotenv();

  const uri = process.env.MONGO_URL || "";
  console.log("URI", uri);
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = await client.db("School");
    const collection = database.collection("Collection");

    await collection.deleteOne({ name: "Batzorig" });
  } catch (error) {
    console.log("ERRORR", error);
  }
}
