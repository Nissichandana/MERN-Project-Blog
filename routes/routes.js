const express = require("express");
const routes = express.Router();
const SignUp = require("../routes/routes.js");

routes.get("/about", (req, res) => {
  res.render("aboutUs");
});

routes.get("/", (req, res) => {
  res.render("blogHomePage");
});

routes.get("/comment", (req, res) => {
  res.render("comment");
});

routes.get("/Login", (req, res) => {
  res.render("posts/Login");
});

routes.get("/signup", (req, res) => {
  res.render("posts/SignUp");
});

// routes.post("/signUpClient", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     if (!name || !email || !password) {
//       const message = "Please provide the required fields";
//       return res
//         .status(400)
//         .render("posts/SignUp", { messages: message, color: "red" });
//     }
//     const newMember = new SignUp({ name, email, password });
//     await newMember.save();
//     const message = "registration successful!";
//     return res.render("posts/SignUp", { messages: message, color: "green" });
//   } catch (error) {
//     const message = "Oops! something went wrong, please try again";
//     console.log(error);
//     return res.render("posts/SignUp", { messages: message });
//   }
// });

routes.post('/SignUpClient', async (req, res) => {
    try {
    const { name, email, password } = req.body;
    
        // Validate that required fields are present
        if (!name || !email || !password) {
            const message = "Please provide all required fields.";
            return res.status(400).render('posts/SignUp', { messages: message, color:"red"});
        }
    
        const newMember = new SignUp({ name, email, password });
        const val= await newMember.save();
        console.log(val);
    
        const message = "Registration successful!";
        return res.render('posts/SignUp', { messages: message, color:"green"});
    } catch (error) {
        const message = "Oops! Something went wrong. Please try again.";
        console.error(error);
        return res.status(500).render('posts/SignUp', { messages: message });
    }
    });

routes.get("/place1", (req, res) => {
  res.render("places/place1");
});

routes.get("/place2", (req, res) => {
  res.render("places/place2");
});

routes.get("/place3", (req, res) => {
  res.render("places/place3");
});

routes.get("/flower1", (req, res) => {
  res.render("flowers/flower1");
});

routes.get("/flower2", (req, res) => {
  res.render("flowers/flower2");
});

routes.get("/flower3", (req, res) => {
  res.render("flowers/flower3");
});

routes.get("/post1", (req, res) => {
  res.render("posts/post1");
});

routes.get("/post2", (req, res) => {
  res.render("posts/post2");
});

routes.get("/post3", (req, res) => {
  res.render("posts/post3");
});

module.exports = routes;
