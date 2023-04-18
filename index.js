const express = require("express");
const app = express();
const boryParser = require("body-parser");
const conexao = require("./database/database");
const categoriaController = require("./categorias/categoriaController");
const artigoController = require("./artigos/artigosController");

const Artigo    = require("./artigos/Artigo");
const Categoria = require("./categorias/Categoria");


//view engine
app.set('view engine','ejs');

//static
app.use(express.static('public'));


//bory-parser
app.use(boryParser.urlencoded({extended: false}));
app.use(boryParser.json());

//database
conexao.authenticate()
.then(() => {
    console.log("Conexão feita com sucesso!")
}).catch((error) =>{
    console.log(error);
})

app.use("/",categoriaController);
app.use("/",artigoController);

app.get("/", (req,res) => {
   res.render("index");
});

app.listen(8080, () => {
    console.log("Servidor esta rodando na porta 8080!");
});


