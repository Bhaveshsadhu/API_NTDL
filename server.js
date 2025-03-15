import express from "express";
import router from "./src/routers/router.js";
import morgan from "morgan";
const app = express();
const PORT = 8000;

app.listen(PORT, (error) => {
  error
    ? console.log("Error running the server")
    : console.log(`Your server is running at http://localhost:${PORT}`);
});

// to make log
// app.use(morgan("dev"));

// middleware to get json request from server and to understand by server
app.use(express.json());

app.use("/api/v1/tasks", router);
