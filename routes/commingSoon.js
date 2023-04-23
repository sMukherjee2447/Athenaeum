
var express= require('express');
var router= express.Router();
let headerfooterdata= require('../modules/headerfooterdata');
router.get('/',headerfooterdata, function(req, res, next){
    let browsedata= req.body.headerfooterdata;
    console.log(browsedata)
    
    res.render('commingSoon',{
        title: 'Library',
        pageSlug: 'library',
        headerfooterdata: browsedata
    });
});
module.exports = router;