var express = require('express');
var router = express.Router();
let headerfooterdata= require('../modules/headerfooterdata');
router.get('/',headerfooterdata,function(req, res, next)
{
    let browsedata= req.body.headerfooterdata;
    res.render('library',{
        title: 'My Library',
    pageSlug: 'library',
    headerfooterdata: browsedata
    });

});
module.exports = router;