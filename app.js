const express = require('express');
const bodyParser = require("body-parser");
const app=express();
PORT=process.env.PORT||8000;

var db = require('./model');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extented:true}));
app.use(bodyParser.text());

app.use(express.static("public"));

db.sequelize.sync({force:true}).then(()=>{
    app.listen(PORT,()=>{
        console.log('connected');
    });
});



