<?php
	$path = $_SERVER['DOCUMENT_ROOT'] . '/SONGNOWv2/';
    include($path . "model/connect.php");
    
	class DAOsongs{
		function select_all_products(){
			$sentence = connect::sentence("SELECT * FROM songs");
            return $sentence;
		}
		function select_product_filter($filter,$filterb,$filter2){
			if(isset($filter2)){
				$sentence = connect::sentence("SELECT * FROM songs WHERE $filterb='$filter' AND genre LIKE '%$filter2%'");
			}else{
				$sentence = connect::sentence("SELECT * FROM songs WHERE $filterb LIKE '%$filter%'");
			}
            return $sentence;
		}
		function select_product($id){
			$sentence = connect::sentence("SELECT songs.*, img.rute FROM songs, img WHERE id_song='$id' AND songs.playlists=img.id")->fetch_object();
            return $sentence;
		}
		function select_all_map(){
			$sentence = connect::sentence("SELECT * FROM map");
            return $sentence;
		}
		function filters($checks){
			// echo "ENTER1";
			$sentence = connect::sentence("SELECT * FROM songs $checks ORDER BY id_song ASC");
			// echo "ENTER2";
			return $sentence;


		}
		
	}