import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  image: {
    type: String,
  },
  city:{
    type:String,
  },
  pastBookings: {
    type: Array,
    default: [],
  },
  wallet: {
    type: Number,
  },
  profiletype:{
    type:String,
  }
});

const UserModel = mongoose.model("Auth", UserSchema, "Auth");

export default UserModel;
