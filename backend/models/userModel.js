import mongoose from "mongoose";
import crypto from "crypto";

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cartData:{type:Object,default:{}},

    resetPasswordToken:String,
    resetPasswordExpire:Date,
},{minimize:false})

userSchema.methods.generateResetToken = function () {
    
    const resetToken = crypto.randomBytes(32).toString("hex")

    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex")

    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000

    return resetToken
}

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;