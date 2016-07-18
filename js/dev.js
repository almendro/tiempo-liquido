/* 

Tiempo Fluido
-------------

Martín Ochoa
2016-03-17

Dev 2016-07-05

*/


var tiempoFluido = window.tiempoFluido || {};

tiempoFluido.dev = (function($){

  var dev = {
    iniciar : function(){

      trace('iniciamos Dev');
      
      $("#dev_borrar_todo").bind(
        "click.misEventos",
        {soy: "#dev_borrar_todo"},
        this.borrarTodo
      );
    } /* /iniciar */
    ,   
    borrarTodo: function(e){
      trace( "DEV: borrarTodo "+e.data.soy );
      var target = e.data.soy;
      tiempoFluido.ui.mostrarDialogoConfirmar({
        target: target,
        mensaje: "Borrar todos los datos ¿Estás MUY seguro? ¡Esto no se puede deshacer!",
        callbackSi: function(e){
          trace("Si");
          tiempoFluido.io.borrarTodo();          
          tiempoFluido.ui.mostrarDialogoResultado({
            target: target,
            mensaje: "Todos los datos locales fueron borrados.",
            callbackOk: function(e){
              trace("callbackOk");
            } /* /callbackOk */
          })
        } /* /callbackSi */
        ,
        callbackNo: function(e){
          trace("Cancelar");
        }
      }); /* /mostrarDialogoConfirmar */
    } /* /borrarTodo */
    ,
    borrarObjeto: function (e){
      // var tmp = io.borrarObjeto(perfil.id+".preferencias");  
    } /* /borrarObjeto */

  }; /* /var dev */

  return dev;

})(jQuery); /* /tiempoFluido.dev */

trace("cargado dev.js");

/* fin js */