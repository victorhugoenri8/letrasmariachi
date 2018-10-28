 document.addEventListener("DOMContentLoaded", contenidoAlDom);


  //quitar los acentos
function quitaacentos(texto) 
{
    let x=texto
           .normalize('NFD')
           .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
           .normalize();

   return x.toLowerCase();
};


//buscar y pintar el resultado
 function cambio(e)
 {
 
    let r = e.replace(/^\s+|\s+$/g, "");
    let uu= quitaacentos(r);

 
     fetch('./letras1.json')
         .then( function (res) 
         {
            return res.json();
         })
         .then(function (response) 
         {
              let dibujar="";
             for (i in response)
              {
                  if (uu===i) 
                     {
                          let miCadena =response[uu].letra.replace(/(\r\n|\n|\r)/gm,  "</br>");
                           dibujar=`
                              <div class="card" >
                                <div class="card-body">
                                  <h2 class="card-title text-justify">${uu.toUpperCase()}</h2>
                                  <h4 class="card-text text-justify">${miCadena}</h4>
                                </div>
                               </div>`;
                     };
               };

              if(dibujar=="")
                 {
                    dibujar=`
                         <div class="alert alert-danger" role="alert">
                            <h4 class="alert-heading">ALERTA</h4>
                            <p class="card-text">Cancion no encontrada intenta con otra..GRACIAS.</p>
                        </div>`
                 }
                   document.getElementById('mostrar').innerHTML=dibujar;
          });

         agregarDatosaLocalStorage(e);

    
};



//seleccion del menu
 function listar(e)
 {
 
   if (e === "pedro_lista") {
      lista(e);
   } else if(e === "vicente_lista"){
     lista(e);
   }else if(e === "negrete_lista"){
     lista(e);
   }else if(e === "josealfredo_lista"){
     lista(e);
   }else if(e === "antonio_lista"){
     lista(e);
   }else if(e === "javier_lista"){
     lista(e);
   }else if(e === "rocio_lista"){
     lista(e);
   }else if(e === "juanga_lista"){
     lista(e);
   }else if(e === "alex_lista"){
     lista(e);
   }else if(e === "joan_lista"){
     lista(e);
   }else if(e === "lucha_lista"){
     lista(e);
   }else if(e === "banda_lista"){
     lista(e);
   }else if(e === "vargas_lista"){
     lista(e);
   }
}

//funcion para pintar las listas

//  function lista () {


//             let ee=""
//   fetch(`./vargass.json`)
//          .then( function (res) {
//         console.log(res)
//             return res.json();
//          })
//          .then((response)=> {
//           console.log(response)
//                let ii= response.sort();
//           ii.forEach( function(element) {

//               ee+=`
//               <div class="list-group">
                  
//                 <button type="button" onclick="cambio('${element}')" class="list-group-item list-group-item-action"><h4>${element}</h4></button>
//                </div>
//               `;
             
//               document.getElementById('mostrar').innerHTML=ee;
//           });
            
//          })
// };



function lista (lista) 
{
   var ajax2 = new XMLHttpRequest();
       ajax2.onreadystatechange = function() 
       {
          if (ajax2.readyState == 4 && ajax2.status == 200) 
          {
              var response = ajax2.responseText;
             //let r=response[e];
            document.getElementById('mostrar').innerHTML=response;
                 
         }
       };
      ajax2.open("GET",  `${lista}.html`, true);
      ajax2.send();
}




function agregarDatosaLocalStorage(e) {
                             // datos de localstorage
                                let t;
                                  t = obtenerDatosLocalStorage();
                                  t.push(e);
                                  
                                let r=new Set();

                                t.forEach((element) => {
                                  r.add(element)
                                  r.add(e)
                                });

                                let f=[...r];
                              // Añadir el nuevo tweet
                                 // t.push(e);
                              // Convertir a String y agregarlo a Local Storage
                                   localStorage.setItem('Datos', JSON.stringify(f));
    
                                };


function obtenerDatosLocalStorage() {
                               let tweets;
                       // Revisar valores de localstorage
                                 if(localStorage.getItem('Datos' ) === null) {
                                                 tweets = [];
                               } else {
                                       tweets = JSON.parse(localStorage.getItem('Datos') );
                                 }
                             return tweets;
                               };


 
   function contenidoAlDom () {
       let ee="";
      let objetos;
      objetos= obtenerDatosLocalStorage();
                      
      objetos.forEach(function (e) {
            
             ee+=`
              <div class="list-group">
                  
                <button type="button" onclick="cambio('${e}')" class="list-group-item list-group-item-action"><h4>${e}</h4></button>
               </div>
              `;
             
              document.getElementById('mostrar').innerHTML=ee;
      });
    };                             




$(function() {
      App.init();
});
var App = {
      init: function() {
             this.side.nav(),  this.navigation(), this.hyperlinks()
      },
     
      title: function(e) {
            return $(".header>.title").text(e)
      },
      side: {
            nav: function() {
                  this.toggle(), this.navigation()
            },
            toggle: function() {
                  $(".ion-ios-navicon").on("touchstart click", function(e) {
                        e.preventDefault(), $(".sidebar").toggleClass("active"), $(".nav").removeClass("active"), $(".sidebar .sidebar-overlay").removeClass("fadeOut animated").addClass("fadeIn animated")
                  }), $(".sidebar .sidebar-overlay").on("touchstart click", function(e) {
                        e.preventDefault(), $(".ion-ios-navicon").click(), $(this).removeClass("fadeIn").addClass("fadeOut")
                  })
            },
            navigation: function() {
                  $(".nav-left a").on("click", function(e) {
                        e.preventDefault();
                        var t = $(this).attr("href").replace("#", "");
                        $(".sidebar").toggleClass("active"), $(".html").removeClass("visible"), "home" == t || "" == t || null == t ? $(".html.welcome").addClass("visible") : $(".html." + t).addClass("visible"), App.title($(this).text())
                  })
            }
      },
     
      navigation: function() {
            $(".nav .mask").on("touchstart click", function(e) {
                  e.preventDefault(), $(this).parent().toggleClass("active")
            })
      },
      hyperlinks: function() {
            $(".nav .nav-item").on("click", function(e) {
                  e.preventDefault();
                  var t = $(this).attr("href").replace("#", "");
                  $(".html").removeClass("visible"), $(".html." + t).addClass("visible"), $(".nav").toggleClass("active"), App.title($(this).text())
            })
      }
};




//eliminar hitorial
 document.getElementById("borrar_storage").addEventListener("click", eliminastorage);

function eliminastorage () {
  console.log("esesesse")
  
    localStorage.removeItem("Datos");
    document.getElementById('mostrar').innerHTML="";

  // body... 
}

