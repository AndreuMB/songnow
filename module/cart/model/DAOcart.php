<?php
	$path = $_SERVER['DOCUMENT_ROOT'] . '/SONGNOWv2/';
    include_once($path . "model/connect.php");
    
	class DAOcart{
		function products(){
			$sentence = connect::sentence("SELECT * FROM premium");
            return $sentence;
		}
	}