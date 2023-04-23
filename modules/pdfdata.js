const conn= require('../data_sample');

let pdfData= function(BookId){
    return new Promise(function(resolve, reject){
        let query=  ` select book_pdf from book_table
        where book_id= ${BookId};`; 

        conn.query(query, function(err, result){
            if(err){
                reject(err);
           } 
           else{
               resolve(result['rows']);
               console.log(result['rows']);
           }

    })
});
}
module.exports= pdfData;