import express from "express";
import usersRouters from "./routes/users.routes.js";
import indexRoutes from "./routes/index.routes.js";
import cors from "cors";

import { PORT } from "./config.js"

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log("Server running on port" + PORT);
});

// Routes
app.use("/index", indexRoutes);
app.use("/api", usersRouters);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});
