const express = require("express")
const dotenv = require ("dotenv")
const mongoose =require("mongoose")
const app= express()
dotenv.config()

const PORT =process.env.PORT || 3000

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URL),()=>{
    console.log('DB IS SUCCESFULLLY CONNECTED');
}


app.listen(PORT, ()=>{
    console.log(`serve running at port ${PORT} ` );
})