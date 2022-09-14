const express = require("express");

const app = express();

app.get("/teste", function (req, resp){
    resp.send("Bem-vindo ao meu app");
})

app.listen(8081, function(){
    console.log("Servidor funcionando na url http://localhost:8081");
});