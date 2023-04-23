var express = require('express');
const conn= require('../data_sample');
var router = express.Router();
var app=express();
const passport = require("passport");
var flash = require('express-flash');
var session = require('express-session');
var bcrypt = require('bcrypt');
let multer = require('multer');
let upload=multer();

// const initializePassport = require('../passportConfig');
// const { TooManyRequests } = require('http-errors');


// initializePassport(passport);


app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");


app.use(upload.array());

app.use(
    session({
      secret: 'secret',
      resave: false,
      saveUninitialized: false
    })
  );
  // app.use(passport.initialize)
  // app.use(passport.session)
  
  // app.use(passport.initialize());
  // app.use(passport.session());
  // app.use(flash());


router.get("/", function(req, res, next)
{

 
    res.render('usersignin',{
        title: 'USER-SIGN_IN',
    pageSlug: 'user-signin'});

});



router.post("/",  function(req, res){
  let { email, password } = req.body;
  var show = [];
 

  console.log({
    email,
    password,

  }); 
// else {
    
    // Validation passed
    conn.query(

      `SELECT * FROM user_table WHERE user_name = $1`,
      [email],
      (err, results) => {
        if (err) {
          throw err;
        }
        console.log(results.rows);

        if (results.rows.length > 0) {
          const user = results.rows[0];

         bcrypt.compare(password, user.user_passward, (err, isMatch) => {
          
            if (err) {
              throw err;
            }
            if (isMatch) {
              res.redirect("/")
            } else {
              show.push({ message: "Password is incorrect" });
            }
           
          });
        }
         else {
          // No user
          show.push({ message: "no user exists,  please sign up"});
          }
          if (show.length > 0){
            res.render("usersignin",{show, email, password});
          }
        }
        );

        
      // }
    });
  


  

  

  module.exports = router;