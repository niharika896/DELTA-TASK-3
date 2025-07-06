
import mongoose from "mongoose";

const VendorSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  image: {
    type: String,
  },
  vendor_id:{
    type:String,
  },
  profiletype:{
    type:String,
  },
  listings:{
    type:Object
  },
  status:{
    type:String
  }
});

const VendorModel = mongoose.model("Vendors", VendorSchema, "Vendors");

export default VendorModel;
