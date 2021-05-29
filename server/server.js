require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/products', productRoutes);
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, '../client/build')))

    app.get('*', (req,res)=>{
        res.sendFile(__dirname, "client", "build", "index.html");
    })
}else{
    app.get('/', (req,res) =>{
        res.send("api up")
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`server running on ${PORT}`))