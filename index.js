const express = require("express");

const app = express();

app.get("/", function (req, resp){
    resp.send("Bem-vindo ao meu app");
})

app.listen(8001, function(){
    console.log("Servidor funcionando na url http://localhost:8081");
});