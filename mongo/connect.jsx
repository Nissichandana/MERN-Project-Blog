const express = require('express');
const mongoose = require('mongoose');


const connectDB = async => {
    try {
        mongoose.connect(process.env.DATABASE_URL,
          // place your mongoose connection link here
            {useNewUrlParser: true, useUnifiedTopology: true}
 
        )
        console.log("mongo is connected")
    } catch (error) {
        console.log("error connecting to database", error)
    }
}
module. exports = connectDB