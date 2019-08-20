var express = require('express');
var muser = require('../model/user');
const router = express.Router();
module.exports = router;

router.post("/login",function(req,res){
 
    muser.findOne({username:req.body.uname,password:req.body.pwd},
            (err,result)=>{
                if(err) throw err;
                else if(result == null){
                    res.redirect("/");
                    //res.send("invalid username or password");
                }else{
                    res.redirect("/index");
                }
            });
    
});
router.get("/signup",function(req,res){
    res.render("registration")
});
router.post("/register",function(req,res){
    var u1 = new muser(); 
    u1.name = req.body.uname;
    u1.mob = req.body.mob;
    u1.username = req.body.usname;
    u1.role = req.body.urole
    u1.mail = req.body.uemail;
    u1.password = req.body.pwd;
    u1.save((err)=>{
        if(err) throw err;
        else{
            res.redirect("/");
        }
    });
});