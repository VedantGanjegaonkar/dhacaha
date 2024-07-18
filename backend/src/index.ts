import express from "express"
import mongoose from 'mongoose';
import cors from 'cors'
import userRoutes from "./routes/user.routes"

import path from 'path'
import{adminOnly,anyLogedIn} from "./middleware/auth.middleware"


const app = express()
app.use(cors());
const port = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL as string;

// Middlewares
app.use("/public/uploads",express.static(path.join(__dirname,'/public/uploads')))
app.use(express.json());

//routes

app.use("/user",userRoutes)


mongoose.connect('mongodb+srv://vedantsg112233:MzUFmOl5GA6oCL77@cluster0.rfaqwkb.mongodb.net/shaligram?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('connected to DB');
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})