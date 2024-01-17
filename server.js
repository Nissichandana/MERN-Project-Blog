
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const LogMarkUp = require('./routes/routes.js');
const connectDB = require('./mongo/connect.jsx');
require('dotenv').config();


app.use(morgan ('tiny'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.set ('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

const PORT = process.env.PORT || 5555;

// app.get('/', (req, res) => {
//     res.send("Hello");

// })

app.use('/Nissi', LogMarkUp);
connectDB();

app.listen(PORT, function(){
    console.log(`Express app is running on port: ${PORT}`)
})