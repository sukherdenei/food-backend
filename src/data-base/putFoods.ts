import { MongoClient } from "mongodb";
import { configDotenv } from "dotenv";

export async function deleteFoods() {
  configDotenv();
  const uri = process.env.MONGO_URL || "";

  console.log("URI", uri);
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = await client.db("School");
    const collection = database.collection("Collection");

    const search = collection
      // .find({ courses: { $eq: "Matematics" } })
      .find({
        $and: [{ gpa: { $gte: 3 } }, { courses: { $eq: "Computer Science" } }],
      })
      // .find({ gpa: { $gt: 3.5 } })
      .toArray();
    return search;
  } catch (error) {
    console.log("ERRORR", error);
  }
}
