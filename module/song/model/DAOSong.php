<?php
	$path = $_SERVER['DOCUMENT_ROOT'] . '/SONGNOWv2/';
    include($path . "model/connect.php");
    
	class DAOSong{
		function insert_song($datos){
			$id_song=$datos[id_song];
        	$song_name=$datos[name];
        	$singer=$datos[singer];
			$album=$datos[album];
			// $genre=$datos[genre];
			foreach ($datos[genre] as $indice) {
        	    $mgenre=$mgenre."$indice:";
        	}
			$relase_date=$datos[relase_date];
			$duration=rand(1,5) . ":" . rand(10,59);
			$playlists=$datos[playlists];

			$sentence = connect::sentence("INSERT INTO songs(id_song, song_name, singer, album, relase_date, genre, duration, playlists, views) 
			VALUES ( '$id_song', '$song_name', '$singer', '$album', '$relase_date', '$mgenre', '$duration', '$playlists', '0')");
			return $sentence;
		}
		
		function select_all_songs(){
			$sentence = connect::sentence("SELECT * FROM songs");
            return $sentence;
		}
		
		function select_song($user){
			$sentence = connect::sentence("SELECT * FROM songs WHERE id_song='$user'")->fetch_object();
            return $sentence;
		}
		
		function delete_all(){
			$sentence = connect::sentence("SELECT * FROM songs");
			return $sentence;
		}

		function update_song($datos){

			$id_song=$datos[id_song];
        	$song_name=$datos[name];
        	$singer=$datos[singer];
			$album=$datos[album];
			foreach ($datos[genre] as $indice) {
        	    $mgenre=$mgenre."$indice:";
        	}
			$relase_date=$datos[relase_date];
			$playlists=$datos[playlists];

			$sentence = connect::sentence("UPDATE songs SET song_name='$song_name', singer='$singer', album='$album', 
			genre='$mgenre', relase_date='$relase_date', playlists='$playlists' where id_song='$id_song'");
			return $sentence;
		}
		
		function delete_song($user){
			$sentence = connect::sentence("DELETE FROM songs WHERE id_song='$user'");
            return $sentence;
		}
		function delete_song_mult($datos){
			foreach ($datos[id_check] as $indice) {
				$mgenre=$mgenre."$indice:";
			}
			// die ('checked = ' . $mgenre);
			// $sentence = connect::sentence("DELETE FROM songs WHERE id_song='$user'");
			// die("DELETE FROM songs WHERE id_song='$mgenre'");
			$ids= (explode(":",$mgenre));
			// die(print_r($ids));

			for ($i = 0; $i < count($datos[id_check]); $i++) {
				$sentence = connect::sentence("DELETE FROM songs WHERE id_song='$ids[$i]'");
			}
            return $sentence;
		}

		function select_playlist(){
			$sentence = connect::sentence("SELECT id, name FROM img WHERE type='categories'");
			return $sentence;
		}
	}