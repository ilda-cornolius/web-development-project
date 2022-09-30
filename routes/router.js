const express = require('express');

const router = express.Router()

router.get('/', function(req, res, next){

    res.render("index",{title:"Assignment 1"})
})

// app.get("/", (req, res) => {
// //   res.send("Hello, World!");

//   res.render("index",{title:"Assignment 1"})


// });


router.get("/index", (req, res) => {
    //   res.send("Hello, World!");
    var query=req.query;

    console.log("QUERY:");
    console.log(req.query);
      //res.render("index",{title:"Assignment 1"})
      if(query){
        var s = "";
        for(var p in query){
            s+=p+" : "+query[p]+" <br>";
        }
        //res.render("index",{title: JSON.stringify(query)})
        res.render("index",{title: s})

      }
      else{
      res.render("index",{title:"Assignment 1"})
    }
    
    });




router.get("/home", (req, res) => {

    res.render("index");

  });

  router.get("/about", (req, res) => {
    res.render("about");

  });

  router.get("/projects", (req, res) => {
    res.render("projects");
  });

  router.get("/services", (req, res) => {
    res.render("services");
  });

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});
router.get("/process_get", function (req, res) {
  response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name,
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

module.exports = router;