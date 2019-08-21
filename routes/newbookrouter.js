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
        nav:[{link:"/books",title:"Books"},{link:"/authors",title:"Authors"},{link:"/nwbk",title:"New Book"}]
    });
});
router.post("/add",upload.single('bimage'),(req,res)=>{
    var b1 = new book();
    
    b1.bkid = req.body.bid;
    b1.bktitle = req.body.bname;
    b1.bkauthor = req.body.bauthor;
    b1.bkcategory = req.body.bcategory;
    b1.bkimage = "image_"+req.body.bid+".jpg";
    b1.save((err)=>{
        if(err) throw err;
        else{
            console.log(path.join(__dirname,'/../public/uploads/'));
            console.log("added book");
            res.redirect("/books");
        }
    })
})
router.get("/viewimage/:image",(req,res)=>{
    console.log("viewing")
    
    path.join(__dirname,'/../public/uploads/',req.params.image);
    console.log(path.join(__dirname,'/../public/uploads/',req.params.image));
    res.sendFile(path.join(__dirname,'/../public/uploads/',req.params.image));
})