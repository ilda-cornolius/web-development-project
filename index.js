// Index 
// Ildaphonse Cornolius
// Date: October 21st, 2022

//the index javascript
//loading the express / path and other objects to use 
const { render } = require("ejs");
const express = require("express");
const path = require("path")
const router = require('./routes/router');
// const router = express.Router()


//creating an express instance
const app = express();
//using the router package in our app
app.use(router);

app.use(express.static("public"));


app.set('view engine', 'ejs');
//using port 3000
const port = 3000;



//setting the path for our css files 
router.use(
    "/css",
    express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css"))
  )

  //setting the path for our javascript files 
  router.use(
    "/js",
    express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js"))
  )
  router.use("/js", express.static(path.join(__dirname, "../node_modules/jquery/dist")))
  
app.use(router);

//listening for the webpage on port 3000, or a custom port set by a cloud service 
app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

