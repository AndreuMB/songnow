
// // function validate_genre(array){
// //     var i;
// //     var ok=0;
// //     for(i=0; i<array.length;i++){
// //         if(array[i].checked){
// //             ok=1
// //         }
// //     }
 
// //     if(ok==1){
// //         return true;
// //     }
// //     if(ok==0){
// //         return false;
// //     }
// // }
// // function adelete() {
// //     confirm("Are you sure?");
// // }


// function validate_delete_all() {
	


// 	var result = true;

//     if (confirm('Are You Sure?')){
//         // window.location ="index.php?page=controller_songs&op=delete_all";
//      }else{
//         window.alert("Canceled");
//         return 0;
//      }
//     // if (!adelete()) {
//     //     // document.getElementById('e_genre').innerHTML = "";
//     //     window.alert("Select some id");
//     //     return 0;
//     // }

//     // document.delete_button.submit();
//     document.delete_button.action="index.php?page=controller_songs&op=delete_all";
    


//     return result;


// }

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