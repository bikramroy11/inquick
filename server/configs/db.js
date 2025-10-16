
import mongoose from 'mongoose';

const connectDB=async()=>{
    try {
        mongoose.connection.on('connected', ()=> console.log("Database connected"))
        // mongoose.connection, This is the connection object that represents your MongoDB connection in Mongoose.
        // .on() is a method used to listen for events.
        // 'connected' is one of the built-in Mongoose events that fires when the database connection is successfully established.
        // () => console.log("Database connected") This is a callback function. It runs automatically when the 'connected' event occurs.
        await mongoose.connect(`${process.env.MONGODB_URI}/inquick`);
    } catch (error) {
        console.log(error.message);
    }
}
export default connectDB;