import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const DB_URL=process.env.DB_URL;

let r = mongoose.createConnection(DB_URL,{
    dbName:'Seats'
});

r.on('connected', () => {
    console.log('MongoDB connected to Seats');
});

export default r;