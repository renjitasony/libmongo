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
                nav:[{link:"/books",title:"Books"},{link:"/authors",title:"Authors"},{link:"/nwbk",title:"New Book"}],
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
                ptitle:"Books",
                nav:[{link:"/books",title:"Books"},{link:"/authors",title:"Authors"},{link:"/nwbk",title:"New Book"}],
                book:result
            });
        }
    })
    
});