import "dotenv/config";

import "./config/connection.js";

import cors from "cors";
import express from "express";

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () =>
  console.log(`Listening on port: http://localhost:${port}`),
);
