import express from "express";
import morgan from "morgan";
import sequelize from "./config/database.js";
import userRoutes from "./routes/user.routes.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true, // إذا كنت تستخدم الكوكيز أو الهيدر Authorization
    })
);

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/user", userRoutes);

// Sync DB and Start Server
sequelize.sync().then(() => {
    console.log("📦 Database synced");
    app.listen(3000, () =>
        console.log("🚀 Server running on http://localhost:3000")
    );
});
