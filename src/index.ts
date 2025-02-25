import bodyParser from "body-parser";
import express from "express";
import { run } from "./data-base/mongodb";
import { createFoods } from "./data-base/createFood";
import { school } from "./data-base/school";
import { Search } from "./data-base/search";

const app = express();

app.use(bodyParser.json());
const port = 4000;

app.get("/movies", async function (req, res) {
  const movies = await run();
  res.status(200).send(movies);
});

app.post("/foods", async function (req, res) {
  await createFoods();
  res.status(201).send("foods");
});

// app.post("/school", async function (req, res) {
//   await school();
//   res.status(202).send("success");
// });

app.post("/school", async (req, res) => {
  try {
    await school();
    res.status(201).json({ message: "Success" });
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
});
// app.get("/search", async function (req, res) {
//   const search = await Search();
//   res.status(200).send(search);
// });

app.get("/search", async (req, res) => {
  try {
    const search = await Search();
    res
      .status(200)
      .json({ massage: "Success", length: search?.length, data: search });
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
});

app.listen(port, () => {
  console.log(`$erver running on port: ${port}`);
});
