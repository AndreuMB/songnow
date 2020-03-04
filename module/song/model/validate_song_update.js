
function validate_id_song(id_song) {
    if (id_song.length > 0) {
        var regexp = /^[a-zA-Z0-9]*$/;
        return regexp.test(id_song);
    }
    return false;
}

function validate_name(name) {
    if (name.length > 0) {
        var regexp = /^[a-zA-Z0-9]*$/;
        return regexp.test(name);
    }
    return false;
}

function validate_singer(singer) {
    if (singer.length > 0) {
        var regexp = /^[a-zA-Z0-9]*$/;
        return regexp.test(singer);
    }
    return false;
}

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

function validate_album(album) {
    if (album.length > 0) {
        var regexp = /^[a-zA-Z0-9]*$/;
        return regexp.test(album);
    }
    return false;
}

function validate_password(password) {
    if (password.length > 0) {
        var regexp = /^[a-zA-Z0-9]*$/;
        return regexp.test(password);
    }
    return false;
}
function validate_password2(password, password2) {
	if(password === password2){
		return true;
    }
    return false;
}

function validate_song_update() {
	


	var result = true;



	var id_song = document.getElementById('id_song').value;
    var name = document.getElementById('name').value;
	var singer = document.getElementById('singer').value;
    var album = document.getElementById('album').value;
    var genre = document.getElementsByName('genre[]');


    var v_id_song = validate_id_song(id_song);
    var v_name = validate_name(name);
	var v_singer = validate_singer(singer);
    var v_album = validate_album(album);
    var v_genre = validate_genre(genre);

	
    if (!v_id_song) {
        document.getElementById('e_id_song').innerHTML = "The introduced id not is valid (A01)";
        return 0;
    } else {
        document.getElementById('e_id_song').innerHTML = "";
    }
    	
	if (!v_name) {
        document.getElementById('e_name').innerHTML = "Los name introducidos no son validos";
        return 0;
    } else {
        document.getElementById('e_name').innerHTML = "";
    }

	if (!v_singer) {
        document.getElementById('e_singer').innerHTML = "El singer introducido no es valido";
        return 0;
    } else {
        document.getElementById('e_singer').innerHTML = "";
    }

    if (!v_album) {
        document.getElementById('e_album').innerHTML = "Los album introducidos no son validos";
        return 0;
    } else {
        document.getElementById('e_album').innerHTML = "";
    }

    if (!v_genre) {
        document.getElementById('e_genre').innerHTML = "Introduce some genre";
        return 0;
    } else {
        document.getElementById('e_genre').innerHTML = "";
    }

    document.update_song.submit();
    document.update_song.action="index.php?page=controller_songs&op=update";

    return result;

}

function select(){
    console.log("select");
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "module/song/controller/controller_song.php?op=playlist",
    })
     .done(function(data) {
        console.log("playlist");
        console.log(data);
        var playlist="";
        for(var i=0;i<data.length;i++){
			playlist= playlist + '<option value="' + data[i].id + '">' + data[i].name + '</option>'
        }
        $("#playlists").html(
            playlist
        )                 
    })
}

$(document).ready(function () {
select();
})