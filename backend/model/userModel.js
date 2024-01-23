const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    nameField:String,
    email:String,
    mobileNumber:String,
    Pizza:String,
    quatity:Number,
    status:String
});


// module.exports = mongoose.model('User',userSchema);