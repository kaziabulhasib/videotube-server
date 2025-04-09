import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";
const port = process.env.PORT || 8000;

dotenv.config();

connectDB()
  .then(() =>
    app.listen(port, () => {
      console.log(`server is running on port : ${port}`);
    })
  )
  .catch((err) => console.log("mongodb connection failed", err));
