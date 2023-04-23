var express = require('express');
var router = express.Router();
let bookdata = require('../modules/bookdata');
let headerfooterdata= require('../modules/headerfooterdata');


/* GET home page. */
router.get('/:BookId',headerfooterdata, function(req, res, next, ) {
  browsedata= req.body.headerfooterdata
  console.log(browsedata)
  let BookId= req.params.BookId;
  
  bookdata(BookId).then(function(rsp){
    console.log(JSON.stringify(rsp[0]));
    res.render('book',{
      title: 'Book Page',
      pageSlug: 'bookpage',
      bookdetails: rsp[0].json_build_object,
      headerfooterdata: browsedata
     } )
    },function(err){
      res.render('book',{
        title: 'Book Page',
        pageSlug: 'bookpage',
        bookdetails: {}
       } )

    })
   
    
   
  })
  
 





module.exports = router;
