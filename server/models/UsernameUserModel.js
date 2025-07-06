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
  },
  username:{
    type:String
  },
  password:{
    type:String
  }
},{collection:"Auth"});


export default mongoose.model("UsernameModel",UserSchema,"Auth");
