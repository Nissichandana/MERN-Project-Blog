const express = require("express");
const routes = express.Router();
const SignUp = require("../models/signup.js");
const Comments = require('../models/comment/comments.js')

routes.get("/about", (req, res) => {
  res.render("aboutUs");
});

routes.get("/", (req, res) => {
  res.render("blogHomePage");
});



routes.get('/Comment', async (req, res) => {
    res.render('comment');
    
    });
    
    // Create comment
    routes.post('/PostAComment', async (req, res) => {
    const messages=" you are not memeber, sign up";
    
    try {
        const{name,email,opinion}=req.body;
        const checkForMembership= await SignUp.find();
         const result=checkForMembership.filter((member)=>{
          return email===member.email;
        })
       
       if (result==[]|| result==0) { return res.render('posts/SignUp',{messages:messages})}
    
       const  newComment=new Comments({
        name,
        email,
        opinion
      })  
       const val=await newComment.save();
       console.log(val);
       const message="thank you for your contribution"
       res.render('blogHomePage',{messages:message});
    } catch (error) {
      console.log(error);
      res.status(500).send('Internal Server Error');
    }
    });
routes.get("/Login", (req, res) => {
  res.render("Login");
});
routes.post('/loginForm', async(req,res)=>{
    try {
        const {email, password} = req.body;
        const loginDetails = await SignUp.find();
        console.log(loginDetails);

        const result = loginDetails.filter((details)=>{
            return password===details.password
        })
        console.log(result)
        if(result==0||result==[]){
            const message="You are not a member, signup here!";
            return res.render('posts/SignUp', {messages:message,color:"red"})

        }
        res.render('blogHomePage', {messages:"Welcome!"})
    }catch (error) {
        console.log(error);
        res.status(500).send('internal server error')
    }
})

routes.get("/signup", (req, res) => {
  res.render("posts/SignUp");
});

// routes.post("/SignUpClient", async (req, res) => {
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

routes.get('/Contributions',async(req, res) => {
    const allComments= await Comments.find();
    res.render('contributions',{myComments:allComments})
    
    })

    routes.get('/edit/:_id', async (req, res) => {
      try {
      const myId = req.params.id;
      const myOutput = await Comments.findById(myId);
      if(myOutput==0 || myOutput==[]){ res.render('homePage/sign-up',{messages:"you are not a member of this site, sign in here"})}
      res.render('places/update', { commentInfo:myOutput });
      
      } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
      }
      });
      
      //update comment to database

      routes.post('/update/:_id', async (req, res) => {
      try {
      const { name,email,opinion } = req.body;
      
        // Convert "on" to true and an empty string to false
      
         await Comments.findByIdAndUpdate(req.params.id, { name,email,opinion});
        
        
      } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
      }
      });
// Delete

routes.get('/delete/:id', async (req, res) => {
  try {
  const message="Removed an update";
  await Comments.findByIdAndDelete(req.params.id);
  res.render('blogHomePage',{messages:message});
  } catch (error) {
  console.log(error);
  res.status(500).send('Internal Server Error');
  }
  });


//update a comment on web form..........................................................
routes.get('/edit/:id', async (req, res) => {
try {
const myId = req.params.id;
const myOutput = await Comments.findById(myId);
if(myOutput==0 || myOutput==[]){ res.render('posts/SignUp',{messages:"you are not a member of this site, sign in here"})}
console.log(myOutput);
res.render('places/anotherUpdate', {myOutput , messages:""});

} catch (error) {
  console.log(error);
  res.status(500).send('Internal Server Error');
}
});

//update comment to database
routes.post('/update/:id', async (req, res) => {
try {
const { name,email,opinion } = req.body;

  // Convert "on" to true and an empty string to false

   await Comments.findByIdAndUpdate(req.params.id, { name,email,opinion});
  
  res.render('blogHomePage',{messages:"Thank you for your contribution!"});
} catch (error) {
  console.log(error);
  res.status(500).send('Internal Server Error');
}
});
module.exports = routes;
