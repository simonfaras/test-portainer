import express from "express";

const app = express();

app.use(express.static('public'))

app.get("/", (req, res) => {
  res.json({ success: true });
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
