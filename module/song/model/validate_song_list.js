$(document).ready(function () {
    $('#table_list').DataTable();
    $('body').on('click', '.Button_read', function () {
        var id = this.getAttribute('id');
        console.log(id);



        $.ajax({
            //data: {"parametro1" : "valor1"},
            type: "GET",
            dataType: "json",
            url: "module/song/controller/controller_song.php?op=read_modal&modal=" + id,
        })
         .done(function( data) {
                 $('#user_modal').empty();
                //  $('#nombre').html(data.nombre);
                 $('<div></div>').attr('id','Div1').appendTo('#user_modal');
                //  $('<div></div>').attr('id','Div2').appendTo('#modalcontent');
                //  $('<div></div>').attr('id','preciocasa').appendTo('#modalcontent');
                
                 $("#Div1").html(
                            '<span>ID:   <span id="id">'+data.id+'</span></span></br>'+
                            '<span>ID song:   <span id="id_song">'+data.id_song+'</span></span></br>'+
                            '<span>Song name:     <span id="song_name">'+data.song_name+'</span></span></br>'+
                            '<span>Singer:     <span id="singer">'+data.singer+'</span></span></br>'+
                            '<span>Album:     <span id="album">'+data.album+'</span></span></br>'+
                            '<span>Relase date:    <span id="relase_date">'+data.relase_date+'</span></span></br>'+
                            '<span>Genre:     <span id="genre">'+data.genre+'</span></span></br>'
                 )

                modal(data.nombre);
         })
         .fail(function( jqXHR, textStatus, errorThrown ) {
             if ( console && console.log ) {
                 console.log( "La solicitud ha fallado: " +  textStatus);
             }
        });
    });
 });

function modal(data){
                $("#details_user").show();
                
                $("#user_modal").dialog({
                    width: 500, //<!-- ------------- ancho de la ventana -->
                    height: 500, //<!--  ------------- altura de la ventana -->
                    //show: "scale", <!-- ----------- animación de la ventana al aparecer -->
                    //hide: "scale", <!-- ----------- animación al cerrar la ventana -->
                    resizable: "false", //<!-- ------ fija o redimensionable si ponemos este valor a "true" -->
                    position: "right",
                    modal: "true", //<!-- ------------ si esta en true bloquea el contenido de la web mientras la ventana esta activa (muy elegante) -->
                    buttons: {
                        Ok: function () {
                            $(this).dialog("close");
                        }
                    },
                    show: {
                        effect: "blind",
                        duration: 100
                    },
                    hide: {
                        effect: "explode",
                        duration: 800
                    }
                });

            }


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