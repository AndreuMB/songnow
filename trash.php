<?php
				$find_a=in_array("Rock", $afi);
					if($find_a){
			?>
			<input type="checkbox" id="genre[]" name="genre[]" value="Rock" checked>Rock<br>
			<?php
            	}else{
        	?>
			<input type="checkbox" id="genre[]" name="genre[]" value="Rock">Rock<br>
			<?php
            	}
			?>
			
			<?php
				$find_a=in_array("Pop", $afi);
					if($find_a){
			?>
			<input type="checkbox" id="genre[]" name="genre[]" value="Pop" checked>Pop<br>
			<?php
            	}else{
        	?>
			<input type="checkbox" id="genre[]" name="genre[]" value="Pop">Pop<br>
			<?php
            	}
			?>
			
			<?php
				$find_a=in_array("Blues", $afi);
					if($find_a){
			?>
			<input type="checkbox" id="genre[]" name="genre[]" value="Blues" checked>Blues<br>
			<?php
            	}else{
        	?>
			<input type="checkbox" id="genre[]" name="genre[]" value="Blues">Blues<br>
			<?php
            	}
            ?>





//     //  .done(function(data) {
//     //         //  $('#contenido').empty();
//     //         //  $('<div></div>').attr('id','table').appendTo('#contenido');
            
//     //         //  $("#table").html(
//     //         //     '<div class="container">'+
//     //         //     '<div class="row">'+
//     //         //             '<h3 data-tr="List songs"></h3>'+
//     //         //     '</div>'+
//     //         //     '<a href="index.php?page=controller_song&op=create"><img id="add" src="view/img/anadir2.png"></a>'+
//     //         //     '<div class="row">'+
//     //         //         '<table id="table_list">'+
//     //         //             '<thead>'+
//     //         //                 '<tr>'+
//     //         //                     '<td width=1px><b></b></th>'+
//     //         //                     '<td width=125 data-tr="ID song"><b></b></th>'+
//     //         //                     '<td width=125 data-tr="Name"><b></b></th>'+
//     //         //                     '<td width=125 data-tr="Singer"><b></b></th>'+
//     //         //                     '<th width=350 data-tr="Action"><b></b></th>'+
//     //         //                 '</tr>'+
//     //         //             '</thead>'+
//     //         //             '<tbody>'+
//     //         //                     '<tr id="line">'+
//     //         //                     '<form method="post" name="select_songs" id="select_songs">'+
//     //         //                     '<td width=125>'+data.id_song+'</td>'+
//     //         //                     '<td width=125>'+data.song_name+ '</td>'+
//     //         //                     '<td width=125>'+data.singer+'</td>'+
//     //         //                     '<td width=350>'+

//     //         //                     '<div class="Button_list" id="'+data.id_song+'">Read</div>")'+
//     //         //                     '</td>'+
//     //         //                     '</tr>'+
//     //         //             '</tbody>'+
//     //         //         '</table>'+
//     //         //     '</div>'+
//     //         //     '<br>'+
//     //         //     '<img id="trash" name="Submit" type="button" value="Registrar" onclick="validate_song_delete()" src="view/img/trash.png"></a>'+
//     //         //     '</form>'+
//     //         // '</div>'
//     //         //  )

//     //         // modal_tabla();
//     //  })
//     //  .fail(function( jqXHR, textStatus, errorThrown ) {
//     //      if ( console && console.log ) {
//     //          console.log( "La solicitud ha fallado: " +  textStatus);
//     //      }
//     // });


    
//     $('.Button_list').click(function () {
//         var id = this.getAttribute('id');
//         console.log(id);



//         $.ajax({
//             //data: {"parametro1" : "valor1"},
//             type: "GET",
//             dataType: "json",
//             url: "module/song/controller/controller_song_list.php?op=read_modal&modal=" + id,
//         })
//          .done(function(data) {
//                  $('#user_modal').empty();
//                 //  $('#nombre').html(data.nombre);
//                  $('<div></div>').attr('id','Div1').appendTo('#user_modal');
//                 //  $('<div></div>').attr('id','Div2').appendTo('#modalcontent');
//                 //  $('<div></div>').attr('id','preciocasa').appendTo('#modalcontent');
                
//                  $("#Div1").html(
//                             '<br><span>Localidad:   <span id="id">'+data.id+'</span></span></br>'+
//                             '<br><span>Provincia:   <span id="id_song">'+data.id_song+'</span></span></br>'+
//                             '<br><span>Capacidad Total:     <span id="song_name">'+data.song_name+'</span></span></br>'+
//                             '<br><span>Propietario:     <span id="singer">'+data.singer+'</span></span></br>'+
//                             '<br><span>DNI:     <span id="album">'+data.album+'</span></span></br>'+
//                             '<br><span>Teléfono:    <span id="relase_date">'+data.relase_date+'</span></span></br>'+
//                             '<br><span>Email:     <span id="genre">'+data.genre+'</span></span></br>'
//                  )

//                 modal(data.nombre);
//          })
//          .fail(function( jqXHR, textStatus, errorThrown ) {
//              if ( console && console.log ) {
//                  console.log( "La solicitud ha fallado: " +  textStatus);
//              }
//         });
//     });

//     function modal_tabla(){
//         $("#contenido").dialog({
//             width: 850, //<!-- ------------- ancho de la ventana -->
//             height: 500, //<!--  ------------- altura de la ventana -->
//             //show: "scale", <!-- ----------- animación de la ventana al aparecer -->
//             //hide: "scale", <!-- ----------- animación al cerrar la ventana -->
//             resizable: "false", //<!-- ------ fija o redimensionable si ponemos este valor a "true" -->
//             position: "right",
//             modal: "true", //<!-- ------------ si esta en true bloquea el contenido de la web mientras la ventana esta activa (muy elegante) -->
//             buttons: {
//                 Ok: function () {
//                     $(this).dialog("close");
//                 }
//             },
//             show: {
//                 effect: "blind",
//                 duration: 100
//             },
//             hide: {
//                 effect: "explode",
//                 duration: 800
//             }
//         });

//     }
//     function modal(data){
//         $("#user_modal").dialog({
//             width: 850, //<!-- ------------- ancho de la ventana -->
//             height: 500, //<!--  ------------- altura de la ventana -->
//             //show: "scale", <!-- ----------- animación de la ventana al aparecer -->
//             //hide: "scale", <!-- ----------- animación al cerrar la ventana -->
//             resizable: "false", //<!-- ------ fija o redimensionable si ponemos este valor a "true" -->
//             position: "right",
//             modal: "true", //<!-- ------------ si esta en true bloquea el contenido de la web mientras la ventana esta activa (muy elegante) -->
//             buttons: {
//                 Ok: function () {
//                     $(this).dialog("close");
//                 }
//             },
//             show: {
//                 effect: "blind",
//                 duration: 100
//             },
//             hide: {
//                 effect: "explode",
//                 duration: 800
//             }
//         });

//     }

//  });
//         $.get("module/song/controller/controller_song.php?op=read_modal&modal=" + id,
//         function (data, status) {
//             console.log(data);
//             var json = JSON.parse(data);
//             console.log(json);
//             if(json === 'error') {
//                 window.location.href='index.php?page=503';
//             }else{
//                 console.log(json.id);
//                 $("#id_song").html(json.id_song);
//                 $("#song_name").html(json.song_name);
//                 $("#singer").html(json.singer);
//                 $("#album").html(json.album);
//                 $("#relase_date").html(json.relase_date);
//                 $("#genre").html(json.genre);
     
//                 $("#details_user").show();
                
//                 $("#user_modal").dialog({
//                     width: 850, //<!-- ------------- ancho de la ventana -->
//                     height: 500, //<!--  ------------- altura de la ventana -->
//                     //show: "scale", <!-- ----------- animación de la ventana al aparecer -->
//                     //hide: "scale", <!-- ----------- animación al cerrar la ventana -->
//                     resizable: "false", //<!-- ------ fija o redimensionable si ponemos este valor a "true" -->
//                     //position: "down",<!--  ------ posicion de la ventana en la pantalla (left, top, right...) -->
//                     modal: "true", //<!-- ------------ si esta en true bloquea el contenido de la web mientras la ventana esta activa (muy elegante) -->
//                     buttons: {
//                         Ok: function () {
//                             $(this).dialog("close");
//                         }
//                     },
//                     show: {
//                         effect: "blind",
//                         duration: 1000
//                     },
//                     hide: {
//                         effect: "explode",
//                         duration: 1000
//                     }
//                 });
//             }

//         });
//     });
// });





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
  lang = lang || localStorage.getItem('app-lang') || 'spanish';
  localStorage.setItem('app-lang', lang);

  var allang = document.querySelectorAll('[data-tr]');
// if(lang!="en"){
  $.ajax({
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
  console.log(url);
// } else {
//   for(var i = 0; i<allang.length; i++){
//     allang[i].innerHTML =allang[i].dataset.tr;
//   }
}