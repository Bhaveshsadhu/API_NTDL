import mongoose from "mongoose";
// databse table selecting
const taskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    hr: {
      type: Number,
      required: true,
      min: 1,
      max: 100,
    },
    type: {
      type: String,
      default: "entry",
      enum: ["entry", "bad"],
    },
  },
  {
    timestamps: true, // it will help to add created and updated date
  }
);
const TaskCollection = mongoose.model("Tasks", taskSchema);

export const InsertQuery = (obj) => {
  return TaskCollection(obj).save();
};

export const ViewData = () => {
  return TaskCollection.find();
};

export const UpdateQuery = (_id, rest) => {
  return TaskCollection.findByIdAndUpdate(_id, rest, {
    new: true,
  });
};

export const DeleteQuery = (_id) => {
  return TaskCollection.findByIdAndDelete(_id);
};
