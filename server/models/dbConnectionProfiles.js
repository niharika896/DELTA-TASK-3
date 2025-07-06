import mongoose from "mongoose";

import dotenv from 'dotenv';
dotenv.config();
const DB_URL=process.env.DB_URL;

let r = mongoose.connect(DB_URL,{
    dbName:'Profiles'
});

r.then(()=>{
    console.log(`MongoDB connected Profiles`);
}).catch((err)=>{
    console.log(err)
})