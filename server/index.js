import express from "express";
import cors from "cors";
import "./db/index.js";
import { blogRouter } from "./route/blog-route.js";
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/blogs", blogRouter);

app.use("/api", (req, res) => {
  res.send("Hello developer");
});

app.listen(5000, () => console.log(`App is running at 5000...`));
