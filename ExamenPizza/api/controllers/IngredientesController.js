/**
 * IngredientesController
 *
 * @description :: Server-side logic for managing Ingredientes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {






  crearIngredienteQuemado: function (req, res) {
    // http://localhost:1337/Saludo/crearUsuarioQuemado
    // /Saludo/crearUsuarioQuemado ->RELATIVE PATH
    var parametros = req.allParams();
    sails.log.info("Parametros", parametros);
    //  Ejemplo para crear por parametros query
    // http://localhost:1337/Saludo/crearUsuarioQuemado?nombres=Vicente&fechaNacimiento=2016-01-02
    var nuevoIngrediente = {
      nombres: parametros.nombres,
      precio:parametros.precio
          };
    // 1 - Query Parameters ?nombre=Adrian&apellidos=Eguez
    // 2 - Forms Parameters
    /*let nuevoUsuario = {
     nombre:"Adrian",
     apellidos:"Eguez",
     password:"1234",
     correo:"1@1.com",
     fechaNacimiento:new Date()
     };
     */
    // NombreModelo.metodo(parametros).exec((err,registros)=>{})
    Ingrediente.create(nuevoUsuario)
      .exec(function (error, usuarioCreado) {
        if (error) {
          return res.serverError(error);
        }
        else {
          return res.redirect("/");
          /*

           Usuario.find().exec((err,usuarios)=>{
           if(err) return res.negotiate(err);

           sails.log.info("Usuarios",usuarios);

           return res.view('homepage',{
           usuarios:usuarios
           })
           })
           */
          //return res.ok(usuarioCreado);
        }
      });
  },


  };

