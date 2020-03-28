<?php
	$path = $_SERVER['DOCUMENT_ROOT'] . '/SONGNOWv2/';
    include($path . "model/connect.php");
    
	class DAOsongs{
		function select_all_products(){
			$sentence = connect::sentence("SELECT * FROM songs ORDER BY views DESC");
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
			$sentence = connect::sentence("$checks");
			return $sentence;
		}
		function sum_view($id){
			$sentence = connect::sentence("UPDATE songs set views=views+1 WHERE songs.id_song='$id'");
            return $sentence;
		}
		function pagination(){
			$sentence = connect::sentence("SELECT count(*) tsongs FROM songs");
			return $sentence;
		}
		function page_now($records_per_page,$sql,$start){
			// echo "$sql ORDER BY views DESC LIMIT $records_per_page OFFSET $start";
			$sentence = connect::sentence("$sql ORDER BY views DESC LIMIT $records_per_page OFFSET $start");
			return $sentence;
		}
		function check_like($like, $user){
			$sentence = connect::sentence("SELECT * FROM favorites WHERE likes='$like' AND users='$user'")->fetch_object();
			return $sentence;
		}
		function add_like($like, $user){
			$sentence = connect::sentence("INSERT INTO favorites (likes, users) VALUES ('$like', '$user')");
			return $sentence;
		}
		function delete_like($like, $user){
			$sentence = connect::sentence("DELETE FROM favorites WHERE likes='$like' AND users='$user'");
			return $sentence;
		}
	}