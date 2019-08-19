var express = require('express');
var bodyparser = require("body-parser");
var bkrouter = require("./routes/bookrouter");
var authrouter = require("./routes/authrouter");
var mongoose = require('mongoose');

var url = "mongodb://localhost/library"

const app =express();
//var app = new express();
const chalk = require('chalk');
const path = require('path');

mongoose.connect(url,{useNewUrlParser:true},function(err){
    if(err) throw err
    else{
        console.log("db connected");
    }
})

app.set("view engine","ejs");
app.set("views","./src/views");

app.listen(8976,function(req,res){
    console.log("server started"+chalk.red('8976'));
});
app.use(express.static(path.join(__dirname,"/public")));
app.use(bodyparser.urlencoded({extended:true}));
app.use("/books",bkrouter);
app.use("/authors",authrouter);
app.get("/",function(req,res){
    // res.sendFile(__dirname+"/src/views/index.html");
    res.render("index",{
        ptitle:"Library",
        nav:[{link:"/books",title:"Books"},{link:"/authors",title:"Authors"}]
    });
});
// app.get("/books",function(req,res){
//     res.render("books",{
//         ptitle:"Books",
//         nav:[{link:"/books",title:"Books"},{link:"/authors",title:"Authors"}],
//         bookslist:book_array
//     });
// });
// app.get("/book/:id",function(req,res){
//     var id = req.params.id;
//     console.log(id);
//     console.log(book_array[id].bktitle);
//     res.render("book",{
//         ptitle:"Books",
//         nav:[{link:"/books",title:"Books"},{link:"/authors",title:"Authors"}],
//         book:book_array[id]
//     });
// });