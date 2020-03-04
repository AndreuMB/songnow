$(document).ready(function () {
    $.ajax({ 
        type: "GET",
        dataType: "json",
        url: "module/search/controller/controller_search.php?op=firstdrop" 
    })
    .fail(function(data) {
        console.log( data );
        console.log("fail")
     //    var $drop = $("#drop1");
     //    //$drop.empty();
     //      $.each(data, function(i, item) {///bucle para rellenar el dropdown1
     //         //console.log( item);
     //         $drop.append("<option>" + item.provincia + "</option>")        
     //     });
     })
    .done(function(data) {
       console.log( data );
       console.log("adfsfassearhc")
    //    var $drop = $("#drop1");
    //    //$drop.empty();
    //      $.each(data, function(i, item) {///bucle para rellenar el dropdown1
    //         //console.log( item);
    //         $drop.append("<option>" + item.provincia + "</option>")        
    //     });
    });

    $("#searchlist").on("click", function (){
        var drop = $("#drop1").val();
        var drop2=$("#drop2").val();
        var auto=$("#autocom").val();
        console.log(drop);
        console.log(drop2);
        console.log(auto);
        // sessionStorage.setItem('provincia', drop); // save data
        // sessionStorage.setItem('local', drop2); // save data
        // sessionStorage.setItem('val', auto); // save data

        // if((drop==0)&&(drop2==0)&&(auto==="")){
        //     // console.log("ingresa criterios de busqueda");
        //     toastr["info"]("Ingresa criterios de busqueda"),{"iconClass":'toast-info'};
        // }else{
        //     window.location.href = 'index.php?page=controllershop&op=view';
        // }
    });
});