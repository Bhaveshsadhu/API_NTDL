import mongoose from "mongoose";

// DB URL
const dburl = "mongodb://127.0.0.1:27017/online_NTDL";

export const connectMongoDB = async () => {
  try {
    const conn = await mongoose
      .connect(dburl)
      .then(() => console.log("DB Connected!"));
  } catch (error) {
    console.log(error);
  }
};
