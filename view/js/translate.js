function lang(lang) {
  // Habilita las 2 siguientes para guardar la preferencia.
  lang = lang || localStorage.getItem('app-lang') || 'english';
  localStorage.setItem('app-lang', lang);

  var allang = document.querySelectorAll('[data-tr]');

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
