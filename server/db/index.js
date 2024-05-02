import mongoose from "mongoose";

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://govindrajput9819:kDZcHvE3kzetorCk@cluster0.1dpieik.mongodb.net/"
  )
  .then(() => console.log("connected mongo db"))
  .catch((e) => console.log(e));
