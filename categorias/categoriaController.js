const express = require("express");
const router = express.Router();
const moduloCategoria = require("./Categoria");
const slugify = require("slugify");


router.get("/admin/categorias/new", (req,res)=> {
    res.render("admin/categorias/new")
});

router.post("/categorias/deletar", (req,res)=> {
    var id = req.body.id;
    if(id != undefined){
        if(!isNaN(id)) {   //for um numero
          moduloCategoria.destroy({ where: { id: id}  })
          .then(() =>{
            res.redirect("/admin/categorias/index");
          });     
    }else{
        res.redirect("/admin/categorias/index");
    }
    }else{
        res.redirect("/admin/categorias/index");
    }

});

router.post("/categorias/salvar", (req,res) => {
    var titulo = req.body.titulo;
     if(titulo != ""){
         moduloCategoria.create({
             titulo: titulo,
             slug: slugify(titulo)
         }).then(() => {
             res.redirect("/admin/categorias/index");
           })
     }else{
         res.redirect("/admin/categorias/new");
     }
    
});

router.get("/admin/categorias/index", (req,res)=> {

    moduloCategoria.findAll().then(Tbcategorias => {
        res.render("admin/categorias/index",{Tbcategorias:Tbcategorias});
    })

  
})

router.get("/admin/categorias/alterar/:id", (req, res) => {
    var id = req.params.id;
    // if(isNaN(id)){   //se id não é um número
    //     res.redirect("/admin/categorias/index");
    // }
    
    moduloCategoria.findByPk(id).then(tb_Categorias => {
       if(tb_Categorias != undefined) {
            res.render("admin/categorias/alterar", {tb_Categorias: tb_Categorias});
       }else{
        res.redirect("/admin/categorias/index");
       }
     }).catch(erro => {
        res.redirect("/")
    });
});

router.post("/categorias/update", (req,res) => {
   var id = req.body.id;
   var titulo = req.body.titulo;

   moduloCategoria.update({titulo: titulo, slug: slugify(titulo)},{
       where: {
           id: id 
       }
   }).then(() => {
    res.redirect("/admin/categorias/index");
   })
});

module.exports = router;