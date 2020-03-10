$(document).ready(function () {
    $('body').on('click', '#delete_button', function () {
        console.log("delete");

        if (confirm('Are You Sure?')){
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "module/song/controller/controller_song.php?op=delete_all",
            })
             .done(function(data) {
                 console.log(data);
             });
            }else{
            window.alert("Canceled");
            return 0;
        }


        });
    });