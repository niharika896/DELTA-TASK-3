import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const DB_URL=process.env.DB_URL;

let r = mongoose.createConnection(DB_URL,{
    dbName:'EventsTimings'
});

r.on('connected', () => {
    console.log('MongoDB connected to ET');
});

export default r;