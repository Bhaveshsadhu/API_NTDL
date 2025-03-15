import express from "express";
const app = express();
const PORT = 8000;

app.listen(PORT, (error) => {
  error
    ? console.log("Error running the server")
    : console.log(`Your server is running at http://localhost:${PORT}`);
});

app.use("/", (req, res) => {
  res.json({
    status: "success",
    Message: "get request is success",
  });
});
