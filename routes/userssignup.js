var express = require('express');
const conn= require('../data_sample');
var router = express.Router();
var app=express();
var passport = require('passport');
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

router.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
  })
);
// app.use(passport.initialize)
// app.use(passport.session)

// router.use(passport.initialize());
// router.use(passport.session());
// router.use(flash());


router.get('/', function(req, res, next)
{
    res.render('usersignup',{
        title: 'USER-SIGN_UP',
    pageSlug: 'user-signup'});

});




router.post("/", async function(req, res){
  let { Rusername, Remail, Rpassword, Rpassword2 } = req.body;

  let errors = [];

  console.log({
    Rusername,
    Remail,
    Rpassword,
    Rpassword2
  });

  if (!Rusername || !Remail || !Rpassword || !Rpassword2) {
  // alert('Please enter all fields');
     errors.push({message: "Please Entre All Fields"});
  }

  if (Rpassword.length < 6) {
    // alert('Password must be a least 6 characters long');
    errors.push({ message: "Password must be a least 6 characters long" });
  }

  if (Rpassword !== Rpassword2) {
    // alert('passwords do not match');
    errors.push({ message: "Passwords do not match" });
  }  

  if (errors.length > 0) {
    res.render("usersignup",{ errors, Rusername, Remail, Rpassword, Rpassword2 });
  } 
else {
    hashedPassword = await bcrypt.hash(Rpassword, 10);
    console.log(hashedPassword);
    // Validation passed
    conn.query(
      `SELECT * FROM user_table
        WHERE user_name = $1`,
      [Remail],
      (err, results) => {
        if (err) {
          console.log(err);
        }
        console.log(results.rows);

        if (results.rows.length > 0) {
          const name = results.rows[0];
          if(Rusername == name.user_name){
           res.redirect("/user-signup")
           errors.push({ message: "username already exist" });
          }
          
        } else {

          let success = [];
          conn.query(
            `INSERT INTO user_table (user_name, user_email, user_passward)
                VALUES ($1, $2, $3)
                RETURNING user_id, user_passward`,
            [Rusername, Remail, hashedPassword],
            (err, results) => {
              if (err) {
                throw err;
              }
              console.log(results.rows);
              // success.push({message: "You are registered now, please login"});
             
              
             
           
              // alert('you are now registered,  please login');
                //  res.render("usersignin")
              success.push({message: "You are registered now, please login"});

              if (success.length > 0){
                res.render("usersignin",{success, Remail, Rpassword});
              }
            }
            
          );
          
        }
      }
    );
  }
});








module.exports = router;