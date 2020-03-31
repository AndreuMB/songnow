<?php
	$path = $_SERVER['DOCUMENT_ROOT'] . '/SONGNOWv2/';
	include_once($path . "module/cart/model/DAOcart.php");
	// session_start();

	switch($_GET['op']){
		case 'list':
			include("module/cart/view/cart.html");
		break;

		default:
			include("view/inc/error404.php");
		break;
	}
?>