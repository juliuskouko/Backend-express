

// midware lession

// const express = require('express');

// function handleAllRequest(requestObject, responseObject){
//     console.log("server is good to go");
//     console.log(requestObject)

//     const url = requestObject.url;
//     responseObject.setHeader("content-type","text/html");
   

//     responseObject.end()
// }


// const handleHomeRequest =(req,res)=>{
//     res.send("<h1>Welcome to the Home page</h1>");
// }

// const handleLogininRequest =(req,res)=>{
//     res.send("<h1>Welcome to the Login In page</h1>");
// }

// const handleSignupRequest =(req,res)=>{
//     res.send("<h1>Welcome to the Sign Up page</h1>");
// }

// const handleProfileRequest =(req,res)=>{
//     res.send("<h1>Welcome to the Profile page</h1>");
// }

// const handleError = (req,res)=>{
//     res.send("<h1>Page not found</h1>")
// }

// const middlewareFunction = (req,res,next) =>{
//     console.log(req);
//         // res.send("<h1>this is middleware response</h1>")
//         // make some checks
//             next();
// }

// // route middleware
// const middlewareSignupFunction = (req,res,next) =>{
//     console.log("middleware route has been passed");
//     next();
// }

// const middlewareLoginFunction = (req,res,next) =>{
//     console.log("middleware route has been passed");
//     next();
// }
// const server = express();

// // server.use(middlewareFunction);
// server.get("/signup",middlewareSignupFunction, handleSignupRequest);
// // server.post("/signup", handleSignupRequest);
// server.post("/profile", handleProfileRequest);
// server.delete("/profile", handleProfileRequest);
// server.get("/login",middlewareLoginFunction, handleLogininRequest);
// server.put("/", handleHomeRequest);
// server.put("/*", handleError);



// server.listen(3000 , ()=>{
//     console.log("server is ready to accept request")
// })
 




// how to send an html file as a response to a request
// manual approach

 const express = require("express");
 const path = require("path");
//  const path = require("body-parser");
 const bodyParser = require("body-parser");
 const server= express("server");
 

// middleware definition

server.use(express.static(path.join(__dirname, "public")));
server.use(bodyParser.urlencoded({entended: false}))

// const serveHomePage = (req,res)=>{
//     // find the file
//     const homepageFilePath = path.join(__dirname, "public", "index.html");
//     // send the fie as a response
//     res.sendFile(homepageFilePath)
// }

// const serveProfilePage = (req,res)=> {
//     // find the file
//     const profilepageFilePath = path.join(__dirname, "public", "profile.html")
//     // send filr as response
//     res.sendFile(profilepageFilePath)
// }


// routes definition

// server.get("/",serveHomePage);
// server.get("/profile", serveProfilePage)





// handling request body data (body-parser)
// manual approach
// 


const loginRequestHandle =(req,res)=>{
    // let body = ""
    // req.on("data", chunk =>{
    //     body += chunk;
    // });

    // req.on("end", ()=>{
    //     console.log(body);
    // })
    console.log(req.body)
    res.send("Done");
}


// routes definition
server.post("/login", loginRequestHandle)


server.listen(3000,()=>console.log("server is ready"))

