const mongoose = require("mongoose");
// import bcrypt from "bcryptjs";

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
// UserSchema.pre("save", async function () {
//   if (this.isModified("password") || this.isNew) {
//     const salt = await bcrypt.genSalt();
//     const hash = await bcrypt.hash(this.password, salt);
//     this.password = hash;
//   }
// });
export default new mongoose.model("User", UserSchema);
