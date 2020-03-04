<?php
	$path = $_SERVER['DOCUMENT_ROOT'] . '/8_MVC_CRUD/';
    include($path . "model/connect.php");
    
	class DAOSong{		
		function select_all_songs(){
			$sentence = connect::sentence("SELECT id, id_song, song_name, singer, album FROM songs");
            return $sentence;
		}
		
	}