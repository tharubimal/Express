import mongoose, { Schema } from "mongoose";

//* user schema
//? schema is a blueprint for the data that will be stored in the database
const userSchema = new Schema(
  {
    full_name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 100,
    },
  },
  {
    timestamps: true,
  },
);

//* create collection/model
//* collection name will be "users" (plural of model name)
const User = mongoose.model("user", userSchema);

export default User;