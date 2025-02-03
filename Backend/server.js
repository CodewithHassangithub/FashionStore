import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoute.js";
// app Config
const app = express();
const port = process.env.PORT || 4000;
// middlewares
app.use(express.json());
app.use(cors());
connectDB();
connectCloudinary();
// Api Endpoints
app.use("/api/user", userRouter);
app.use("/api/product",productRouter)
app.get("/", (req, res) => {
  res.send("Response is live on port 4000");
});
app.listen(port, () => console.log(`listening on: ${port}`));
