const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology:true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log("MongoDB Connection Success");
    } catch (error) {
        console.error("MongoDB Connection Fail");
        process.exit(1);
    }
}

module.exports = connectDB;
