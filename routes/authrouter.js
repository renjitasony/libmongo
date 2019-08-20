var express = require('express');
const router = express.Router();
var author = require('../model/author');

module.exports = router;

router.get("/",(req,res)=>{
    author.find({},(err,result)=>{
        if(err) throw err;
        else{
            res.render("authors",{
                ptitle:"Authors",
                nav:[{link:"/books",title:"Books"},{link:"/authors",title:"Authors"},{link:"/nwbk",title:"New Book"}],
                authorslist:result
            });
        }
    });    
});
router.get("/:id",(req,res)=>{      
    author.findOne({authid:eq.params.id},(err,result)=>{
       if(err) throw err;
       else{
        res.render("author",{
            ptitle:"Authors",
            nav:[{link:"/books",title:"Books"},{link:"/authors",title:"Authors"},{link:"/nwbk",title:"New Book"}],
            author:result
        });
       }
    })
   
});