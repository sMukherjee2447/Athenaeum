const conn= require('../data_sample');
const headerfooterdata = require('../modules/headerfooterdata');
const router = require('../routes/search');
let searchdata= function(search_text){
    
    return new Promise(function(resolve, reject)
    {
       
        let query=  ` SELECT *
                     from book_table
                    WHERE book_name ILIKE '%${search_text}%'
                  OR book_category ILIKE '%${search_text}%'
                  OR book_author ILIKE '%${search_text}%';
                        `; 
    
        conn.query(query, function(err, result){
            if(err){
                
                reject(err);
                
            }
            else{

                resolve(result['rows']);
                console.log(result['rows']);
              
            }
        });
    })
  
    }
 
/*let headerdata= function(){
    return new Promise(function(resolve, reject){
        let query=  ` select * from category_table;`; 

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
}*/
module.exports= searchdata;