import express from "express";
import dotenv from "dotenv";
import { connectdb } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import ticketRoutes from "./routes/ticketRoutes.js";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectdb();

app.get("/", (req, res) => {
  res.send("Welcome to Ticket Management System");
});

app.use("/auth", authRoutes);
app.use("/tickets", ticketRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
