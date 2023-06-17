import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { notFound, errorHandler } from "./middleware/ErrorMiddleWare.js";
import connectDB from "./config/db.js";
import ProductRoutes from "./routes/ProductRoutes.js";
import UserRoutes from "./routes/UserRoutes.js";
import OrderRoutes from "./routes/OrderRoutes.js";
import cors from "cors";
import path from "path";

// const frontendPath = path.join(__dirname, "../frontend/build");
app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.use(cors());
// app.use(
//   cors({
//     origin: "https://cafe-management-system.onrender.com", // Specify the allowed origin
//     methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], // Specify the allowed HTTP methods
//     allowedHeaders: ["Content-Type", "Authorization"] // Specify the allowed headers
//   })
// );

// app.use((req, res, next) => {
//   res.setHeader(
//     "Access-Control-Allow-Origin",
//     "https://cafe-management-system.onrender.com"
//   );
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   res.set("Referrer-Policy", "strict-origin-when-cross-origin");
//   next();
// });

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is Running.....");
});

app.use("/api/products", ProductRoutes);
app.use("/api/users", UserRoutes);
app.use("/api/orders", OrderRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} mode On Port ${PORT}`.white.bold
  )
);
