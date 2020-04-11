<?php
	$path = $_SERVER['DOCUMENT_ROOT'] . '/SONGNOWv2/';
    include_once($path . "model/connect.php");
    
	class DAOcart{
		function products(){
			$sentence = connect::sentence("SELECT * FROM premium");
            return $sentence;
		}
		function shopping($id_product,$quantity,$id_user, $id_shopping){
			$sentence = connect::sentence("INSERT INTO shopping (id_product, quantity, id_user, id_shopping) VALUES ('$id_product', '$quantity', '$id_user', '$id_shopping')");
            return $sentence;
		}
		function id_shopping(){
			$sentence = connect::sentence("SELECT id_shopping FROM shopping ORDER BY id_shopping DESC LIMIT 1")->fetch_object();
            return $sentence;
		}

	}