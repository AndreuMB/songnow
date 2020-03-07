<?php
	$path = $_SERVER['DOCUMENT_ROOT'] . '/SONGNOWv2/';
    include_once($path . "model/connect.php");
    
	class DAOimg{
		function select_all_img(){
			$sentence = connect::sentence("SELECT img.*, songs.id_song FROM img, songs WHERE type='carousel' AND songs.id_img=img.id");
            return $sentence;
		}
		function select_img_categ(){
			$sentence = connect::sentence("SELECT * FROM img WHERE type='categories'");
            return $sentence;
		}
		
	}