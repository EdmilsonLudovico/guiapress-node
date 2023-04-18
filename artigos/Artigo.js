const Sequelize = require("sequelize");
const conexao = require("../database/database");

const Categoria = require("../categorias/Categoria");


 const Artigo = conexao.define('artigos',{
     titulo:{
         type: Sequelize.STRING,
         allowNull: false
     },slug:{
         type: Sequelize.STRING,
         allowNull: false
     },corpo:{
         type: Sequelize.TEXT,
         allowNull: false
     }
 });

 //Categoria.hasMany(Artigo);//uma categoria tem muitos artigos
 //Artigo.belongsTo(Categoria);//um artigo pertence a uma categoria

//Artigo.sync({force: true});

module.exports = Artigo;