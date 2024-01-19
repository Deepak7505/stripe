const mongoose = require("mongoose");
const {url} = require("../constants/index")

const connectDB = async () => { 
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};


module.exports = connectDB;