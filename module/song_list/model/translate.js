// data = {
//   "es": {
//     "Home" : "Inicio",
//     "User" : "Usuario",
//     "Song" : "Canciones",
//     "Change language:" : "Cambiar idioma:",
//     "Spanish" : "Español",
//     "English" : "Inglés",
//     "Valencian" : "Valenciano",
//     "ID song": "ID cancion",
//     "Name": "Nombre",
//     "Singer": "Cantante",
//     "Action": "Acción",
//     "About us" : "Sobre Nosotros",
//     "Contact us" : "Contactanos",
//     "Services" : "Servicios",
//     "List songs" : "Lista de canciones",
//     "Change lenguage:" : "Cambiar idioma:",
//   },
//   "va": {
//     "Home" : "Inicio",
//     "User" : "Usuario",
//     "Song" : "Canciones",
//     "Change language:" : "Cambiar idioma:",
//     "Spanish" : "Espanyol",
//     "English" : "Ingles",
//     "Valencian" : "Valencia",
//     "ID song": "ID canço",
//     "Name": "Nom",
//     "Singer": "Cantant",
//     "Action": "Acció",
//     "About us" : "Sobre nosaltres",
//     "Contact us" : "Contactans",
//     "Services" : "Serveis",
//     "List songs" : "Llista de cançons",
//     "Change lenguage:" : "Cambiar idioma:",
//   }
// };
function lang(lang) {
  // Habilita las 2 siguientes para guardar la preferencia.
  lang = lang || localStorage.getItem('app-lang') || 'english';
  localStorage.setItem('app-lang', lang);

  var allang = document.querySelectorAll('[data-tr]');

// if(lang!="en"){
  $.ajax({
      // url: '../../../view/langs/' + lang + '.json',
      url: 'view/langs/' + lang + '.json',
      type: 'POST',
      dataType: 'JSON',
      success: function (data) {
        for (var i = 0; i < allang.length; i++) {
          allang[i].innerHTML = data.hasOwnProperty(lang)
          ? data[lang][allang[i].dataset.tr]
          : allang[i].dataset.tr;
          // allang[i].innerHTML = data["strings"][allang[i].dataset.tr]
        }
      }
  });
  // console.log(url);
}


$(document).ready(function(){
  lang();

  $("#btn-es").on("click", function(){
    lang('spanish');
  });
  $("#btn-en").on("click", function(){
    lang('english');
  });
  $("#btn-va").on("click", function(){
    lang('valencian');
  });
});
// window.onload = function(){
//   cambiarIdioma();
//   document.getElementById('btn-es').addEventListener('click', cambiarIdioma.bind(null, 'es'));
//   document.getElementById('btn-en').addEventListener('click', cambiarIdioma.bind(null, 'en'));
//   document.getElementById('btn-va').addEventListener('click', cambiarIdioma.bind(null, 'va'));
// }
