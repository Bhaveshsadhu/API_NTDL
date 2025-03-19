import express from "express";
import {
  DeleteQuery,
  InsertQuery,
  UpdateQuery,
  ViewData,
} from "../models/Taskmodel/taskModel.js";

const PORT = 8000;
const router = express.Router();

// router.all("/", (req, res, next) => {
//   // write your code here
//   //   res.json({
//   //     status: "success",
//   //     Message: "request from all",
//   //   });
//   //   this all method will check if you have anything to do
//   // before request pass for this purpose we are using otherwise there is not use of all()
//   next();
// });

// POST REQUEST -- INSERT
router.post("/", async (req, res, next) => {
  try {
    const result = await InsertQuery(req.body);
    console.log(result);
    res.json({
      status: "success",
      Message: "New Task has been added successfully...",
      task: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});
// GET REQUEST
router.get("/", async (req, res, next) => {
  try {
    const tasks = await ViewData();
    res.json({
      status: "success",
      Message: "task lists:",
      tasks,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});
// patch REQUEST
router.patch("/", async (req, res, next) => {
  try {
    const { _id, ...rest } = req.body;
    const result = await UpdateQuery(_id, rest);
    res.json({
      status: "success",
      Message: "Updated Successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});
// delete REQUEST
router.delete("/:_id", async (req, res, next) => {
  try {
    const { _id } = req.params;
    const result = await DeleteQuery(_id);
    res.json({
      status: "success",
      Message: "Task deleted",
      result,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
