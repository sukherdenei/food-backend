import bodyParser from "body-parser";
import express from "express";
import { run } from "./data-base/mongodb";

const app = express();

app.use(bodyParser.json());
const port = 4000;
app.get("/movies", async function (req, res) {
  const movies = await run();
  res.status(200).send(movies);
});
app.listen(port, () => {
  console.log(`2000 asaalaa${port}`);
});
