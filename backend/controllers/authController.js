import user from "../models/userModel.js"
import sgMail from "@sendgrid/mail"
import bcrypt from "bcrypt";
import crypto from "crypto";



sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const forgotPassword = async (req,res) => {
    try {
        const {email} = req.body

        const userData = await user.findOne({ email })
        if (!userData) {
            return res.status(404).json({success:false,message:"if this email exists, a reset link has been sent"});
        }
     
        const resetToken = userData.generateResetToken()
        await userData.save()

        const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

        const msg = {
            to: userData.email,
            from: process.env.EMAIL_FROM,
            subject: 'Password Reset Request',
            html: 
            `<h2>Password Reset</h2>
            <p>You requested a password reset.<p/>
            <p>Click the link below to reset your password:</p>
            <a href="${resetUrl}">${resetUrl}<a/>
            <p>This link expires in 15 minutes.</p>`

        };
        await sgMail.send(msg)
        res.status(200).json({success:true,message:"Reset link sent"})

    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:"Server Error"})
        
    }
}



const resetPassword = async (req,res) => {
    try {
        const { token } = req.params;
        const { password } = req.body;
       console.log("token from url:", token);
       
        const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

        const userData = await user.findOne({
            resetPasswordToken: hashedToken,
            resetPasswordExpire: { $gt: Date.now()}

        })
        console.log("user found:", userData);
        
        if (!userData) {
            return res.status(400).json({message: "Invalid or expired token"});
        }
      
        const salt = await bcrypt.genSalt(10);
        userData.password = await bcrypt.hash(password, salt);

        userData.resetPasswordToken = undefined;
        userData.resetPasswordExpire = undefined;

        await userData.save();

        res.status(200).json({success:true, message: "Password reset successful"});


    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message: "Error resetting password"})
        
    } 
}

export {forgotPassword,resetPassword};