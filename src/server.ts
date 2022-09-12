import express from "express";

const app = express();

app.get("/ads", (req, res) => {
  console.log("acessou Ads!");
  res.status(200).json({
    message: "Hello World",
  });
});

app.listen(3333);
