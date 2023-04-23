const conn= require('../data_sample');
let HomeData= function(){
  return  new Promise(function(resolve, reject){
        let query= `
        select json_build_object(
            'newadded', (select coalesce(array(select json_build_object(
            'book_id',book_id,
                'book_name', book_name,
                'book_author', book_author,
                'book_category',book_category,
                'book_about',book_about,
                'bookcag_id',bookcag_id,
                'book_cover', book_cover,
                'book_pdf',book_pdf
            ) from book_table 
                    order by book_id desc
                    limit 3),'{}')),
                'trend',(select coalesce(array(select json_build_object(
                    'book_id',book_id,
                'book_name', book_name,
                'book_author', book_author,
                'book_category',book_category,
                'book_about',book_about,
                'bookcag_id',bookcag_id,
                'book_cover', book_cover,
                'book_pdf',book_pdf
                )from book_table 
                    order by book_view desc
                    limit 3),'{}'))
                
            )`;
        conn.query(query, function(err, result){
            if(err){
                 reject(err);
            } 
            else{
                resolve(result['rows']);
            }
        }
    
        );
    

    })
  

};



module.exports= HomeData;
   
    

