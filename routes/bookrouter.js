var express = require('express');
const router = express.Router();
var book = require('../model/book');
module.exports = router;

router.get("/",(req,res)=>{  
    book.find({},function(err,result){
        if(err) throw err;
        else{
            res.render("books",{
                ptitle:"Books",
                nav:[{link:"/books",title:"Books"},{link:"/authors",title:"Authors"},{link:"/crudbk",title:"New Book"},{link:"/crudauth",title:"New Author"}],
                bookslist:result
            });
        }
    });  
});
router.get("/:bktitle",(req,res)=>{
          
    book.findOne({bktitle:req.params.bktitle},function(err,result){
        if(err) throw err;
        else{
            res.render("book",{
                ptitle:"Book",
                nav:[{link:"/books",title:"Books"},{link:"/authors",title:"Authors"},{link:"/crudbk",title:"New Book"},{link:"/crudauth",title:"New Author"}],
                book:result
            });
        }
    })
    
});