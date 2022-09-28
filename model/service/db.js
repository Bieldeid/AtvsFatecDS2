const Connection = require("mysql2/typings/mysql/lib/Connection")
async function connect(){

    //Confirma se está conectado com a variavel global

    if(global.connection && global.connection.state !== 'disconnected')

        return global.connection;



    const mysql = require ("mysql2/promise");

    const connection = await mysql.createConnection ("mysql://root:root@localhost:3306/webii");

    console.log("Conectou no MySQL!")

    global.connection = connection;

    return connection;

}

async function selectUsuario(){
    const conn = await Connection();
    const [rows] = await Connection.query ('SELECT * FROM usuario');
    return rows
}

module.exports={selectUsuario}