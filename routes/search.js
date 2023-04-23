var express = require('express');
var router = express.Router();
let SearchData = require('../modules/searchdata');
let headerfooterdata= require('../modules/headerfooterdata');


/* GET home page. */
/*router.get('/',headerfooterdata, function(req, res, next, ) {

    let browsedata= req.body.headerfooterdata

    console.log(browsedata);
    let search_text= req.query.search_text
  
    SearchData(search_text).then(function(rsp){
      
      console.log(rsp)
   
    res.render('search',{
      title: 'Search Page',
      pageSlug: 'searchpage',
      categorydata: rsp,
      headerfooterdata: browsedata
     } )
    },function(err){
        res.render('search',{
            title: 'Search Page',
            pageSlug: 'searchpage',
            categorydata: {}
           } )

    })
   
    
   
  }) */
 router.get('/',headerfooterdata,function(req, res, next)
 {
   const search_text= req.query.search_text;
   console.log(search_text);
  let browsedata= req.body.headerfooterdata;
  if(search_text != null)
  {
    SearchData(search_text).then(function(rsp)
    {
      console.log(rsp);
      console.log(browsedata)
      res.render('search',{
          title:  'Search',
      pageSlug: 'search',
      searchdata: rsp,
      headerfooterdata: browsedata
     
   })
    })
  }
  
  
 
});

 





module.exports = router;
