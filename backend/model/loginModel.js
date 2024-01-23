const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  userId: {
    type: Number,
  },
  email: {
    type: String,
    lowercase: true,
  },
  mobile: {
    type: String,
  },
  password: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// userSchema.pre("save", async function (next) {
//   if (this.isModified("password") || this.isNew) {
//     const saltRounds = 10;
//     try {
//       const hashedPassword = await bcrypt.hash(this.password, saltRounds);
//       this.password = hashedPassword;
//       next();
//     } catch (error) {
//       return next(error); 
//     }
//   } else {
//     return next();
//   }
// });

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;