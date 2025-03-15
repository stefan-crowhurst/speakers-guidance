import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Test");
});

app.listen(process.env.PORT, (e) => {
  console.log(`Listening on ${process.env.PORT}`);
  if (e) {
    console.error(e);
  }
});
