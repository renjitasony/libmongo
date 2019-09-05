var express = require('express');
var author = require('../model/author');
var multer = require('multer');
var path = require('path');

const router = express.Router();
module.exports = router;

var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'/../public/uploads/'));          
    },
    filename:function(req,file,cb){                
        cb(null,"auth_"+req.body.authid+".jpg");
    }
});
 var upload = multer({storage:storage});

router.get("/",(req,res)=>{
    res.render("newauthor",{
        ptitle:"New Author",
        nav:[{link:"/books",title:"Books"},{link:"/authors",title:"Authors"},{link:"/crudbk",title:"New Book"},{link:"/crudauth",title:"New Author"}]
    });
});
router.post("/add",upload.single('authimage'),(req,res)=>{
    var b1 = new author();    
    b1.authid = req.body.authid;
    b1.authname = req.body.authname;
    b1.authlang = req.body.authlang;
    b1.authgenre = req.body.authgenre;
    
    if(req.file != undefined){
        console.log(req.file)
        b1.authimage = "auth_"+req.body.authid+".jpg";
    }    
    b1.save((err)=>{
        if(err) throw err;
        else{
            console.log(path.join(__dirname,'/../public/uploads/'));
            console.log("added author");
            res.redirect("/authors");
        }
    })
})
router.get("/edit/:id",(req,res)=>{
    author.findOne({authid:req.params.id},(err,result)=>{
        if(err) throw err;
        else{
            res.render("editauthor",{
                ptitle:"Update Author",
                nav:[{link:"/books",title:"Books"},{link:"/authors",title:"Authors"},{link:"/crudbk",title:"New Book"},{link:"/crudauth",title:"New Author"}],
                author:result
            })
        }
    })   
});
router.post("/update",upload.single('authimage'),(req,res)=>{
    var authimage="";
    if((req.file != undefined) || (req.body.authimage != "")){
        authimage = "auth_"+req.body.authid+".jpg";
    }
    author.updateOne({authid:req.body.bid},
                   {$set:{authname:req.body.authname,
                          authlang:req.body.authlang,
                          authgenre:req.body.authgenre,
                          authimage:authimage
                        }},
                   (err)=>{
                       if(err) throw err;
                       else{
                        console.log("updated");
                        res.redirect("/authors");
                       }                       
                   })
});
router.get("/delete/:id",(req,res)=>{
    author.deleteOne({authid:req.params.id},(err)=>{
        if(err) throw err;
        else{
            console.log("deleted");
            res.redirect("/authors");
        }
    })
})