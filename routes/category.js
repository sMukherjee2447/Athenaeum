var express = require('express');
var router = express.Router();
let CategoryData = require('../modules/categorydata');
let headerfooterdata= require('../modules/headerfooterdata');


/* GET home page. */
router.get('/:CagId',headerfooterdata, function(req, res, next, ) {

    let browsedata= req.body.headerfooterdata

    console.log(browsedata.cag_name);
    let CagId= req.params.CagId;
  
    CategoryData(CagId).then(function(rsp){
      console.log(rsp)
   
    res.render('category',{
      title: 'Category Page',
      pageSlug: 'categorypage',
      categorydata: rsp,
      headerfooterdata: browsedata
     } )
    },function(err){
        res.render('category',{
            title: 'Category Page',
            pageSlug: 'categorypage',
            categorydata: {}
           } )

    })
   
    
   
  })
  
 





module.exports = router;
