import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  avatar: {
    type: String,
    default:
      "https://i.pinimg.com/736x/55/6e/2e/556e2edc7518c0e5cb4d59aef6729b24.jpg",
  },
});

export default mongoose.model("User", userSchema);
