const conn= require('../data_sample');

let categoryData= function(CatId){
    return new Promise(function(resolve, reject){
        let query=  `
            select * from book_table
            where bookcag_id= ${CatId};`; 

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
module.exports= categoryData;