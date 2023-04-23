const conn= require('../data_sample');
let DataNew= function(){
  return  new Promise(function(resolve, reject){
        let query= `
        select * from book_table 
        order by book_view desc
        limit 3;`;
        conn.query(query, function(err, result){
            if(err){
                 reject(err);
            } 
            else{
                resolve(result['rows']);
            }
        }
    
        );
     /*   let query1=`select * from book_table 
        order by book_view desc
        limit 3;`;
        conn.query(query1, function(err, result){
            if(err){
                reject(err);
            } 
            else{
                resolve(result);
            }
        }
    
        );*/

    })
  

};


module.exports= DataNew;
