const express = require("express")
const dotenv = require ("dotenv")
const mongoose =require("mongoose")
const authRouter = require("./controllers/auth")
const app= express()
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT =process.env.PORT || 3000

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URL),()=>{
    console.log('DB IS SUCCESFULLLY CONNECTED');
}

app.use('/auth', authRouter)


app.listen(PORT, ()=>{
    console.log(`serve running at port ${PORT} ` );
})