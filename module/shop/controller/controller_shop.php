<?php
	$path = $_SERVER['DOCUMENT_ROOT'] . '/SONGNOWv2/';
	include($path . "module/shop/model/DAOimg.php");
	session_start();

	switch($_GET['op']){
		case 'list':
			include("module/shop/view/shop.php");	
			break;
			
		case 'data':
			try {
				$daoshop = new DAOshop();
				$rlt = $daoshop->select_all_products();
			} catch (Exception $e) {
				echo json_encode("error");
			}
			
			if (!$rlt) {
				echo json_encode("error");
			}else{
				$prod = array();
				foreach ($rlt as $value) {
					array_push($prod, $value);
				}
				echo json_encode($prod);
				exit;
			}
			break;
			
		case 'read':
			try {
				$daoshop = new DAOshop();
				$rlt = $daoshop->select_product($_GET['modal']);
				// print_r ($rlt);

			} catch (Exception $e) {
				echo json_encode("error");
				exit;
			}
			
			if (!$rlt) {
				echo json_encode("error");
				exit;
			}else{
				$user=get_object_vars($rlt);
				echo json_encode($user);
				exit;
			}
			break;

		default:
			include("view/inc/error404.php");
			break;
	}
?>