const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
app.set ('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
const PORT = process.env.PORT || 5555
app.get('/', (req, res) => {
    res.send("Hello");

})

app.get('/about', (req, res) => {
    res.render ('aboutUs');
})


app.listen(PORT, function(){
    console.log(`Express app is running on port: ${PORT}`)
})