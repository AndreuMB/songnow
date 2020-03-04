
function validate_genre(array){
    var i;
    var ok=0;
    for(i=0; i<array.length;i++){
        if(array[i].checked){
            ok=1
        }
    }
 
    if(ok==1){
        return true;
    }
    if(ok==0){
        return false;
    }
}


function validate_song_delete() {
	

    var genre = document.getElementsByName('id_check[]');
    console.log(genre);

    var v_genre = validate_genre(genre);

    if (!v_genre) {
        window.alert("Select some id");
        return 0;
    }

    // document.select_songs.action="index.php?page=controller_song&op=list";
    document.select_songs.submit();


}

// function delete_mult(){
//     console.log("select");
//     var genre = document.getElementsByName('id_check[]');
//     var v_genre = validate_genre(genre);
//     console.log(v_genre);
//     $.ajax({
//         type: "GET",
//         dataType: "json",
//         url: "module/song/controller/controller_song.php?op=delete_mult",
//     })
//      .done(function(data) {         
//          console.log(data);      
//     })
// }

// $(document).ready(function () {
//     $(document).on('click','#trash',function () {
//         delete_mult(); 

//     });

// })