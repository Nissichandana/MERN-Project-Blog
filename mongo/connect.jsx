const express = require('express');
const mongoose = require('mongoose');


const connectDB = async => {
    try {
        mongoose.connect(//process.env.DATABASE_URL,
          // place your mongoose connection link here
          "mongodb+srv://nissineerudu:h696Qfk8aEwu2aM8@cluster0.tvrdyv4.mongodb.net/project-blog-nissi",
            {useNewUrlParser: true, useUnifiedTopology: true}
 
        )
        console.log("mongo is connected")
    } catch (error) {
        console.log("error connecting to database", error)
    }
}
module. exports = connectDB