import express from "express";
import "./services/passport.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is ready at http://localhost:${PORT}`);
});
