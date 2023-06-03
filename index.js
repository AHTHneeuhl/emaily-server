import express from "express";
import mongoose from "mongoose";
import cookieSession from "cookie-session";
import passport from "passport";

import "./services/passport.js";
import authRoutes from "./routes/authRoutes.js";
import { mongoDbUri, cookieKey } from "./config/keys.js";

mongoose.connect(mongoDbUri);

const app = express();
const PORT = process.env.PORT || 8080;

app.use(
  cookieSession({
    maxAge: 7 * 24 * 60 * 60 * 1000,
    keys: [cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is ready at http://localhost:${PORT}`);
});
