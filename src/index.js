import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3306, () => {
  console.log("Server running on port 3306");
});

// Routes
app.use("/index", indexRoutes);
app.use("/api", employeesRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});
