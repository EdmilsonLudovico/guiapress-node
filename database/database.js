

const Sequelize = require("sequelize");
const conexao = new Sequelize('guiapress','root','120573',  {
    host: 'localhost',
    dialect: 'mysql'
  }
);
module.exports = conexao;