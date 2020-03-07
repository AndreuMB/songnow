<?php
	$path = $_SERVER['DOCUMENT_ROOT'] . '/SONGNOWv2/';
    include_once($path . "model/connect.php");
    
	class DAOSong{		
		function select_all_songs(){
			$sentence = connect::sentence("SELECT id, id_song, song_name, singer, album FROM songs");
            return $sentence;
		}
		
	}