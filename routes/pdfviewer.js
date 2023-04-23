var express = require('express');
var router = express.Router();
let pdfData= require('../modules/pdfdata')

router.get('/:BookId',function(req, res, next)
{
    let BookId= req.params.BookId;
    pdfData(BookId).then(function(resp)
    {
        res.render('pdfviewer',{
            title: 'The Story',
        pageSlug: 'viewer',
        fullpdf: resp[0]});
    })
  

});
module.exports = router;