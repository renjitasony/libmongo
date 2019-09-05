var express = require('express');
var book = require('../model/book');
var multer = require('multer');
var path = require('path');

const router = express.Router();
module.exports = router;

var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'/../public/uploads/'));          
    },
    filename:function(req,file,cb){
        // let fileExtension = file.mimetype.split("/").pop();        
        cb(null,"image_"+req.body.bid+".jpg");
    }
});
 var upload = multer({storage:storage});

router.get("/",(req,res)=>{
    res.render("newbook",{
        ptitle:"New Book",
        nav:[{link:"/books",title:"Books"},{link:"/authors",title:"Authors"},{link:"/crudbk",title:"New Book"},{link:"/crudauth",title:"New Author"}]
    });
});
router.post("/add",upload.single('bimage'),(req,res)=>{
    var b1 = new book();    
    b1.bkid = req.body.bid;
    b1.bktitle = req.body.bname;
    b1.bkauthor = req.body.bauthor;
    b1.bkcategory = req.body.bcategory;
    if(req.file != undefined){
        b1.bkimage = "image_"+req.body.bid+".jpg";           
    }        
    b1.save((err)=>{
        if(err) throw err;
        else{
            console.log(path.join(__dirname,'/../public/uploads/'));
            console.log("added book");
            res.redirect("/books");
        }
    })
})
router.get("/edit/:id",(req,res)=>{
    book.findOne({bkid:req.params.id},(err,result)=>{
        if(err) throw err;
        else{
            res.render("editbook",{
                ptitle:"Update Book",
                nav:[{link:"/books",title:"Books"},{link:"/authors",title:"Authors"},{link:"/crudbk",title:"New Book"},{link:"/crudauth",title:"New Author"}],
                book:result
            })
        }
    })   
});
router.post("/update",upload.single('bimage'),(req,res)=>{
    var bkimage="";
    if((req.file != undefined) || (req.body.bimage != "")){
        bkimage = "image_"+req.body.bid+".jpg";
    }
    book.updateOne({bkid:req.body.bid},
                   {$set:{bktitle:req.body.bname,
                          bkauthor:req.body.bauthor,
                          bkcategory:req.body.bcategory,
                          bkimage:bkimage
                        }},
                   (err)=>{
                       if(err) throw err;
                       else{
                        console.log("updated");
                        res.redirect("/books");
                       }                       
                   })
});
router.get("/delete/:id",(req,res)=>{
    book.deleteOne({bkid:req.params.id},(err)=>{
        if(err) throw err;
        else{
            console.log("deleted");
            res.redirect("/books");
        }
    })
})