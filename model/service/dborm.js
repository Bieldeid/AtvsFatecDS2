const Sequelize = require('sequelize');
const sequelize = new Sequelize('webii','root','root',{dialact: 'mysql', host: 'localhost', port:3306})

module.exports= {sequelize}
