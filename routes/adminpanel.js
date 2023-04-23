var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next)
{
    res.render('adminpanel',{
        title: 'Admin Panel',
        pageSlug: 'Admin Panel'
    });
});
module.exports= router;