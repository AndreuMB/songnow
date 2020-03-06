$(document).ready(function () {
    $.ajax({ 
        type: "GET",
        dataType: "json",
        url: "module/search/controller/controller_search.php?op=firstdrop" 
    })
    .done(function(data) {
        var notrepeat = [];
        console.log( data );
         $.each(data, function(i, item) {///bucle para rellenar el dropdown1
            // console.log( item);
            var array = item.genre.split(":");
            for(var i=0;i<array.length-1;i++){
                 console.log("array: " + array[i]);
                 console.log("norepeat: " + notrepeat[i]);
                 if (notrepeat.indexOf(array[i]) == -1) {
                    notrepeat.push(array[i]);
                    console.log('Array no repeat: ' + notrepeat);
                }
                //  for(var y=0;y<notrepeat.length;y++){
                //     //  if(notrepeat[y]!=array[i]){
                //     //      notrepeat[y]=array[i]
                //     //  }
                //  }
             }

        });
        var $drop = $("#drop1");
        // $drop.empty();
        for (var i=0;i<notrepeat.length;i++){
            $drop.append("<option>" + notrepeat[i] + "</option>")        
        }
    });

    $("#drop1").on("change", function () {
        var genre = $(this).val();
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "module/search/controller/controller_search.php?op=seconddrop&id=" + genre, 
        })
        .done(function(data) {
            console.log(data);
            var $drop2 = $("#drop2");
            $drop2.empty();
            $drop2.append("<option value=false>" + "Select singer" + "</option>");
            for (var i=0;i<data.length;i++){
                $drop2.append("<option>" + data[i].singer + "</option>")        
            }
        });
    });

    $("#autocom").on("keyup", function () {
        var auto=$(this).val();///valor de lo que estamos escribiendo
        var drop2=$("#drop2").val();// valor del combo de localidades
        console.log(auto + " : " + drop2);
        var autCom = {auto: auto, drop2: drop2}; 
        $.ajax({
            type: "POST",
            url: "module/search/controller/controller_search.php?op=autocomplete",  
            data: autCom,
        })
        .done(function(data) {
            console.log(data);
            $('#optionsauto').fadeIn(1000).html(data);// se ve
            ///si selecciono valor
            $('.autoelement').on('click', function(){
                var id = $(this).children('a').attr('id');
                $('#autocom').val(id);
                $('#autocom').val($('#'+id).attr('data'));
                $('#optionsauto').fadeOut(1000);
                var drop = $("#drop1").val();
                var drop2=$("#drop2").val();
                var auto=$("#autocom").val();
                console.log(drop);
                console.log(drop2);
                console.log(auto);
                console.log(id);
                localStorage.setItem('genre', drop); // save data
                localStorage.setItem('singer', drop2); // save data
                localStorage.setItem('song', auto); // save data
                localStorage.setItem('id', id); // save data

                window.location.href = 'index.php?page=controller_songs&op=list';

            });
        });
    });

    $("#searchlist").on("click", function (){
        var drop = $("#drop1").val();
        var drop2=$("#drop2").val();
        var auto=$("#autocom").val();
        console.log(drop);
        console.log(drop2);
        console.log(auto);
        
        localStorage.setItem('genre', drop); // save data
        localStorage.setItem('singer', drop2); // save data

        // if((drop==0)&&(drop2==0)&&(auto==="")){
        //     // console.log("ingresa criterios de busqueda");
        //     toastr["info"]("Ingresa criterios de busqueda"),{"iconClass":'toast-info'};
        // }else{
            window.location.href = 'index.php?page=controller_songs&op=list';
        // }
    });
});