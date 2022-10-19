(async () =>{
    const database = require ('./model/service/dborm');
    const Cliete = require ('./model/entidade/cliente');

    console.log(' Criar tabela =======================================');
    const resultado = await database.sequelize.sync();
    console.log (resultado);
})();