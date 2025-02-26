import { MongoClient } from "mongodb";
import { configDotenv } from "dotenv";

export async function Edit() {
  configDotenv();

  const uri = process.env.MONGO_URL || "";
  console.log("URI", uri);
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("School");
    const collection = database.collection("Collection");

    // await collection.updateOne({ name: "Horloo" }, { $set: { age: 31 } });
    // const students=collection.find({age:{$gte:25}}).toArray()
    await collection.updateMany(
      { courses: { $eq: "Mathematics" } },
      { $set: { gpa: 4 } }
    );
  } catch (error) {
    console.log("ERRORR", error);
  }
}
