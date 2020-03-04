<?php
	$path = $_SERVER['DOCUMENT_ROOT'] . '/SONGNOWv2/';
    include($path . "model/connect.php");
    
	class DAOshop{
		function select_all_products(){
			$sentence = connect::sentence("SELECT premium.*, img.rute FROM premium, img WHERE img.id=premium.id_img AND type='premium'");
            return $sentence;
		}
		function select_product_img($id_img){
			$sentence = connect::sentence("SELECT * FROM img WHERE id='$id_img'")->fetch_object();
            return $sentence;
		}
		function select_product($id){
			$sentence = connect::sentence("SELECT premium.*, img.rute FROM premium, img WHERE img.id=premium.id_img AND premium.id='$id'")->fetch_object();
            return $sentence;
		}
		
	}