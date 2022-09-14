const express = require("express");

const app = express();

app.get("/", function (req, resp){
    resp.send("Bem-vindo ao meu app");
})

app.get("/teste", function (req,resp){
    resp.send("Página de contato do meu app");
})

app.get("/produto", function (req,resp){
    resp.send("Pagina de produto do meu app");
})



//Esse app.listen deve ser a ultima linha sempre (Isso é apenas uma boa prática, não é necessariamente obrigatório)
app.listen(8081, () =>{
    console.log("Servidor funcionando na url http://localhost:8081");
});

