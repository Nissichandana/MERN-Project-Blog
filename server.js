const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
app.set ('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
const PORT = process.env.PORT || 5555
const LogMarkUp = require('./routes/routes.js')
// app.get('/', (req, res) => {
//     res.send("Hello");

// })

app.use('/Nissi', LogMarkUp);

app.listen(PORT, function(){
    console.log(`Express app is running on port: ${PORT}`)
})