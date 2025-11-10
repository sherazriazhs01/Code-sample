const mongoose = require("mongoose");


const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database Connected Successfuly");
    }   
    catch (error) {
        console.log("Database Connection Failed");
    }
};
module.exports = connectDb;