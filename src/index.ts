import bodyParser from "body-parser";
import express from "express";
import { run } from "./data-base/mongodb";
import { createFoods } from "./data-base/createFood";
import { school } from "./data-base/school";

const app = express();

app.use(bodyParser.json());
const port = 4000;

app.get("/movies", async function (req, res) {
  const movies = await run();
  res.status(200).send(movies);
});

app.post("/foods", async function (req, res) {
  const movies = await createFoods();
  res.status(201).send(movies);
});

app.post("/school", async function (req, res) {
  await school();
  res.status(202).send("success");
});

app.listen(port, () => {
  console.log(`$erver running on port: ${port}`);
});
