const conn= require('../data_sample');
let BookData= function(BookId){
  return  new Promise(function(resolve, reject){
       /* let query= `
        select json_build_object(
            'new', (select coalesce(array(select json_build_object(
                'book_id',book_id,
                'book_name', book_name,
                'book_author', book_author,
                'book_category',book_category,
                'book_about',book_about,
                'bookcag_id',bookcag_id,
                'book_cover', book_cover,
                'book_pdf',book_pdf
            ) from book_table 
            where book_table.book_id = ${BookId} 
            limit 1 ),'{}')),
            'category',(select coalesce(array(select json_build_object(
                    'book_id',book_id,
                'book_name', book_name,
                'book_author', book_author,
                'book_category',book_category,
                'book_about',book_about,
                'bookcag_id',bookcag_id,
                'book_cover', book_cover,
                'book_pdf',book_pdf
                )from book_table 
                   where book_table.bookcag_id= ${Bookcat}
                    limit 3),'{}'))
                
            )`;
        
           let query= `
            select * from book_table
             where book_id= ${BookId} limit 1;`; */
        let query=`
            select json_build_object(
                'book_id',a.book_id,
                'book_name',a.book_name,
                'book_author',a.book_author,
                'book_category',a.book_category,
                'book_chapters',a.book_chapters,
                'book_about',a.book_about,
                'book_view',a.book_view,
                'bookcag_id',a.bookcag_id,
                'book_cover',a.book_cover,
                'book_pdf',a.book_pdf, 
                'related_books',(
                    select coalesce(array(
                        select json_build_object(
                            'book_id',b.book_id,
                            'book_name',b.book_name,
                            'book_author',b.book_author,
                            'book_category',b.book_category,
                            'book_chapters',b.book_chapters,
                            'book_about',b.book_about,
                            'book_view',b.book_view,
                            'bookcag_id',b.bookcag_id,
                            'book_cover',b.book_cover,
                            'book_pdf',b.book_pdf
                        )
                        from book_table as b
                        where b.bookcag_id= a.bookcag_id 
                        and b.book_id != a.book_id
                        limit 3
                    ),'{}')
                )
            )
            from book_table as a
            where a.book_id=${BookId}
        `;
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



module.exports= BookData;
   
    

