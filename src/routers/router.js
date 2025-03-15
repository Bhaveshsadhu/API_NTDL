import express from "express";
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

let FakeDB = [];

// POST REQUEST
router.post("/", (req, res, next) => {
  FakeDB.push(req.body);
  console.log(FakeDB);
  res.json({
    status: "success",
    Message: "New Task has been added successfully...",
  });
});
// GET REQUEST
router.get("/", (req, res, next) => {
  // write your code here
  res.json({
    status: "success",
    Message: "task lists:",
    tasks: FakeDB,
  });
});
// put REQUEST
router.patch("/", (req, res, next) => {
  console.log(req.body);
  const { id, type } = req.body;
  FakeDB.map((item) => {
    if (item.id === id) {
      return (item.type = type);
    } else {
      return item;
    }
  });
  // write your code here
  res.json({
    status: "success",
    Message: "Updated Successfully",
    tasks: FakeDB,
  });
});
// delete REQUEST
router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  FakeDB = FakeDB.filter((item) => item.id != id);
  res.json({
    status: "success",
    Message: "Task deleted",
    users: FakeDB,
  });
});

export default router;
