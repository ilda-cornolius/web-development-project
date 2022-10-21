const { render } = require('ejs');
const express = require('express');

const router = express.Router()

const fs = require('fs');

const path = 'info.txt'



router.get('/', function(req, res, next){

    res.render("index",{title:"UserInfo"})
})



router.get('/index', function(req, res, next){

  res.render("index",{title:"UserInfo"})
})


router.get('/data', function(req, res, next){


  console.log("reading file");
  try{
   console.log("Trying to read file now");
   var data = fs.readFileSync("info.txt",
   {encoding:'utf8', flag:'r'});
   var content = JSON.parse(data)
   console.log("Calling Contact Now", data);
  //  res.send(content);

    res.render("data",{data:content})
  }catch(err){
   // console.log(err);
   console.log('File Does not Exist');
   var content = "File not found";
  //  res.send(content);
    res.render("data",{data:content})
  }

})


router.get('/delete', function(req,res,next){
  console.log("Delete")
  try {
    if (fs.existsSync(path)) {
      //file exists
      try {
        fs.unlinkSync(path)
    
        res.render("contact",{title:"UserInfo"})
        //file removed
      } catch(err) {
        console.error(err)
      }
      
    }
  } catch(err) {
    console.error(err)
  }



  
})
// app.get("/", (req, res) => {
// //   res.send("Hello, World!");

//   res.render("index",{title:"Assignment 1"})


// });


router.get("/contact", (req, res) => {
    //   res.send("Hello, World!");
    var query=req.query;

    console.log("QUERY:");
    console.log(req.query);
      //res.render("index",{title:"Assignment 1"})
      if(query && Object.keys(query).length!=0){
        var s = "";
        for(var p in query){
            s+=p+" : "+query[p]+" <br>";
        }
        var content = JSON.stringify(s);
       
console.log("writing to file");

        try {
          fs.writeFileSync("info.txt", content);
          // file written successfully
        } catch (err) {
          console.error(err);
        }
       
        //res.render("index",{title: JSON.stringify(query)})
        res.render("contact",{title: s})

      }
      
      else{
        console.log("reading file");
       try{
        console.log("Trying to read file now");
        var data = fs.readFileSync("info.txt",
        {encoding:'utf8', flag:'r'});
        var content = JSON.parse(data)
        console.log("Calling Contact Now", data);
        res.render("contact",{title:content})
       }catch(err){
        // console.log(err);
        console.log('File Already Deleted');
        var content = "Customer Info";
        res.render("contact",{title:content})
       }
        
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