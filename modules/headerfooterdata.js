const conn= require('../data_sample');
let headerdata= function(req, res, next){
    let query=  ` select * from category_table;`; 

    conn.query(query, function(err, result){
        if(err){
            req.body.error= err;
            next();
        }
        else{
            req.body.headerfooterdata= result['rows'];
            console.log(result['rows']);
            next();
        }
    });
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
module.exports= headerdata;