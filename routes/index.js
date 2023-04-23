var express = require('express');
var router = express.Router();
let homedata = require('../modules/homedata');
let headerdata= require('../modules/headerfooterdata');



/* GET home page. */

router.get('/',headerdata, function(req, res, next, ) {
  let browsedata= req.body.headerfooterdata;
  console.log(browsedata)

    homedata().then(function(rsp){
      console.log(rsp);
      
      res.render('index',{
        title: 'Home Page',
        pageSlug: 'homepage',
        booklist: rsp[0].json_build_object,
        headerfooterdata: browsedata

      })
     
      
     
    })
  
  
 
  
 


});
router.post('/', function(req, res, next){
  console.log(req.body)
})
/*router.get('/',function(req,res, next){
    trenddata().then(function(rsp){
      console.log(rsp);
      res.render('index',{
        title: 'Home Page',
        pageSlug: 'homepage',
        booknew: rsp
      })

    })
})*/



module.exports = router;
