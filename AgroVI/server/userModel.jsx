import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    userName: String,
    userEmail: String,
    userPhone: String,
    userPass: String
})


const User = mongoose.model("user",userSchema);

export default User;