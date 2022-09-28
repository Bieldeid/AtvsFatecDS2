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
    const [rows] = await Connection.query ('SELECT * FROM t_usuario');
    return rows
}

async function insertUsuario(usuario){
    const conn = await connect();
    const sql = 'INSERT INTO t_usuario (us_nome, us_senha) VALUES (?,?);';
    const values = [usuario.node, usuario.senha];
    return await conn.query(sql, values);
}

async function deleteUsuario(id){
    const conn = await connect();
    const sql = 'DELETE FROM t_usuario where id = ?;';
    return await conn.query(sql, [id]);
}

async function updateUsuario(id, usuario){
    const conn = await connect();
    const sql= 'UPDATE t_usuario SET us_nome=?, us_senha=? WHERE id_usuario=?';
    const values = [usuario.nome, usuario.senha, id];
    return await coon.query(sql, value);
}

module.exports = {selectUsuario, insertUsuario, deleteUsuario, updateUsuario}

