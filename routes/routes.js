const express = require('express');
const routes = express.Router();




routes.get('/about', (req, res) =>{
    res.render('aboutUs')
});

routes.get('/', (req, res) =>{
    res.render('blogHomePage')
})

routes.get('/comment', (req, res) =>{
    res.render('comment')
})

routes.get('/Login', (req, res) =>{
    res.render('posts/Login')
})

routes.get('/signup', (req, res) =>{
    res.render('posts/SignUp')
})

routes.get('/place1', (req, res) =>{
    res.render('places/place1')
})

routes.get('/place2', (req, res) =>{
    res.render('places/place2')
})

routes.get('/place3', (req, res) =>{
    res.render('places/place3')
})

routes.get('/flower1', (req, res) =>{
    res.render('flowers/flower1')
})

routes.get('/flower2', (req, res) =>{
    res.render('flowers/flower2')
})

routes.get('/flower3', (req, res) =>{
    res.render('flowers/flower3')
})

routes.get('/post1', (req, res) =>{
    res.render('posts/post1')
})

routes.get('/post2', (req, res) =>{
    res.render('posts/post2')
})

routes.get('/post3', (req, res) =>{
    res.render('posts/post3')
})





 module.exports = routes