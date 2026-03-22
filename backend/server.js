import express from "express";
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRouter.js"
import userRouter from "./routes/userRouter.js"
import cartRouter from "./routes/cartRouter.js"
import "dotenv/config.js"
import orderRouter from "./routes/orderRouter.js";
import authRouter from "./routes/authRouter.js";


//config

const app = express()
const port = process.env.PORT || 4000


//middlewarwe

app.use(express.json())
app.use(cors())


//db connection

connectDB();

//api endpoint

app.use("/api/food", foodRouter)
app.use("/images", express.static("uploads"))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)
app.use("/api/auth", authRouter)


app.get("/", (req,res)=>{
  res.send("api works")
})

app.listen(port, ()=> {
    console.log(`server started at http://localhost:${port}`);
    
})