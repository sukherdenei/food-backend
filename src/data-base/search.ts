import { MongoClient } from "mongodb";
import { configDotenv } from "dotenv";

export async function Search() {
  configDotenv();
  const uri = process.env.MONGO_URL || "";

  console.log("URI", uri);
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = await client.db("School");
    const collection = database.collection("Collection");

    const search = collection
      //   .find({ courses: { $eq: "Matematics" } })
      .find({
        $and: [{ gpa: { $gt: 3 } }, { courses: { $ed: "Mathematics" } }],
      })
      //   .find({ gpa: { $gt: 3 } })
      .toArray();
    return search;
  } catch (error) {
    console.log("ERRORR", error);
  }
}
