import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://food-del:11223344@cluster0.mzkmi7g.mongodb.net/food-del?appName=Cluster0").then(() => console.log("db connected"));
    
}

