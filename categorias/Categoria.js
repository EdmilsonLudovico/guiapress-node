const Sequelize = require("sequelize");
const conexao = require("../database/database");


 const Categoria = conexao.define('categorias',{
     titulo:{
         type: Sequelize.STRING,
         allowNull: false
     },slug:{
         type: Sequelize.STRING,
         allowNull: false
     }
 });

 //Categoria.sync({force: true});

module.exports = Categoria;
