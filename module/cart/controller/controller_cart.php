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
		case 'shopping':
			// echo json_encode("error2");
			try{
				$daosongs = new DAOcart();
				$rdo = $daosongs->id_shopping();
			}catch (Exception $e){
				echo json_encode("error");
				exit;
			}
			// echo json_encode($rdo['id_shopping']);
			// print_r($rdo);
			if($rdo){
				$id_shopping=$rdo -> {'id_shopping'}+1;
				// echo json_encode($id_shopping);
			}else{
				$id_shopping=0;
				// echo json_encode($id_shopping);
			}

			for ($i=0;$i<count($_POST['data_a']);$i++){
				try{
					$daosongs = new DAOcart();
					$rdo = $daosongs->shopping($_POST['data_a'][$i][0], $_POST['data_a'][$i][1], $_POST['data_a'][$i][2], $id_shopping);
				}catch (Exception $e){
					echo "error";
					exit;
				}
			}
			echo json_encode("done");
		break;
		default:
			include("view/inc/error404.php");
		break;
	}
?>