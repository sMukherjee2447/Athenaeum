var express = require('express');
var router = express.Router();
let headerfootdata= require('../modules/headerfooterdata')
let exploreData= require('../modules/exploredata')
router.get('/',headerfootdata, function(req,res, next)
{
    let browsedata= req.body.headerfooterdata

    console.log(browsedata);
    exploreData().then(function(rsp)
    {
        console.log(rsp)
        res.render('explore',{
            title: 'Explore',
            pageSlug: 'explore',
            bookall: rsp,
            headerfooterdata: browsedata
        });
    })

});
module.exports = router;