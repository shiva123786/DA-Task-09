// ===============================
//  FULL MERN BACKEND SERVER
// ===============================

import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

import productRoutes from "./src/routes/productRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import orderRoutes from "./src/routes/orderRoutes.js";

const app = express();

// ===============================
//  MIDDLEWARE
// ===============================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// ===============================
//  HEALTH CHECK
// ===============================
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "Arena Developers MERN Backend Running 🚀",
    time: new Date().toISOString(),
  });
});

// ===============================
//  API ROUTES
// ===============================
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

// ===============================
//  GLOBAL ERROR HANDLER
// ===============================
app.use((err, req, res, next) => {
  console.error("SERVER ERROR:", err);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error: err.message,
  });
});

// ===============================
//  SERVER START
// ===============================
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🔥 Backend running at http://localhost:${PORT}`);
});
