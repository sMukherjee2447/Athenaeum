const conn= require('../data_sample');

let exploreData= function(){
    return new Promise(function(resolve, reject){
        let query=  ` select * from book_table
        ;`; 

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
module.exports= exploreData;