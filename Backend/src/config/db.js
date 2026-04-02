const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDb Connected")
    }catch(error){
        res.status(500).json({"error":error.message})
    }
}

module.exports = connectDB
