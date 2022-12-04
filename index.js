// const express = require("express");
// const port = 4000


// const handleHomeRequest = (req,res) =>{
//     res.send("<h1>Welcome to Home page</h1>")
// }

// const handleSignupRequest = (req,res) =>{
//     res.send("<h1>Welcome to SignUp page</h1>")
// }

// const handleSigninRequest = (req,res) =>{
//     res.send("<h1>Welcome to SignIn page</h1>")
// }

// const handleAboutRequest = (req,res) =>{
//     res.send("<h1>Welcome to About page</h1>")
// }

// const app = express();

// app.post("/about", handleAboutRequest);
// app.get("/signup", handleSignupRequest);
// app.delete("/signin", handleSigninRequest)


// app.listen(port, ()=>{
//     console.log("Serve is ready")
// })



const express = require('express');

function handleAllRequest(requestObject, responseObject){
    console.log("server is good to go");
    console.log(requestObject)

    const url = requestObject.url;
    responseObject.setHeader("content-type","text/html");
   

    responseObject.end()
}


const handleHomeRequest =(req,res)=>{
    res.send("<h1>Welcome to the Home page</h1>");
}

const handleLogininRequest =(req,res)=>{
    res.send("<h1>Welcome to the Login In page</h1>");
}

const handleSignupRequest =(req,res)=>{
    res.send("<h1>Welcome to the Sign Up page</h1>");
}

const handleProfileRequest =(req,res)=>{
    res.send("<h1>Welcome to the Profile page</h1>");
}

const handleError = (req,res)=>{
    res.send("<h1>Page not found</h1>")
}

const server = express();


server.get("/signup", handleSignupRequest);
server.post("/profile", handleProfileRequest);
server.delete("/profile", handleProfileRequest);
server.get("/login", handleLogininRequest);
server.put("/", handleHomeRequest);
server.put("/*", handleError);



server.listen(3000 , ()=>{
    console.log("server is ready to accept request")
})
