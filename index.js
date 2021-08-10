const express = require('express');
const app = express();
const port = 8000;
const path = require('path')
const ejs = require('ejs');

//set up ejs as view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use('/',require('./routers/index'));

 app.listen(port,function(err){
     if(err){
         console.log("Server Error",err);
         return;
     }
     console.log("Successfully connected to EXpress Server at port : ",port);
 })