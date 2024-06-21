const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://inotebook:inotebook@cluster0.w4hty7l.mongodb.net"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;