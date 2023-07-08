const express = require('express')

const app = express();
app.use(express.json()); //middleware 

const port = 8080

//function definitions block
function hello(req, res) {
    res.json({"message":"hi this is hello me"});

}
function helloyou(req, res) {
    res.json({"message":"hi this is hello you "});

}
function helloecho(req, res) { 
    console.log(req.body.First_Name);
   // value =req.params.variable   \\\\;// form ko value pauna lai//
   value=req.body
    res.json(value)
}
function listening(){
    console.log("Listening on port 8080")
}
function login(req, res) {
if(req.body.password==="hello"){
    res.json({"message":"Log in successfully"});
}
else{
    res.json({"message":"Invalid password"});
}
}
//url pattern definitions
app.get('/me',hello);
app.get('/you',helloyou);
app.post('/echo',helloecho);
app.post('/login',login);


app.listen(port,listening);
