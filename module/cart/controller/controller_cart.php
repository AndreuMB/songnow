<?php
	$path = $_SERVER['DOCUMENT_ROOT'] . '/SONGNOWv2/';
	include_once($path . "module/cart/model/DAOcart.php");
	// session_start();

	switch($_GET['op']){
		case 'list':
			include("module/cart/view/cart.html");
		break;
		case 'products':
			// echo $_GET['id'];
			try{
				$daosongs = new DAOcart();
				$rdo = $daosongs->products();
			}catch (Exception $e){
				echo json_encode("error");
				exit;
			}if(!$rdo){
				echo json_encode("error");
				exit;
			}else{
				$lawyer = array();
				foreach ($rdo as $row){
					array_push($lawyer, $row);
				}
				echo json_encode($lawyer);
				exit;
			}
		break;
		default:
			include("view/inc/error404.php");
		break;
	}
?>