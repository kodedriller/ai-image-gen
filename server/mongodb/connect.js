import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);

  mongoose.connect(url)
    .then(() => console.log("MongoDb Connected"))
    .then(() => console.log(err));
};

export default connectDB;
