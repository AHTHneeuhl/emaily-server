import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.listen(PORT, () => {
  console.log(`Server is ready at http://localhost:${PORT}`);
});
