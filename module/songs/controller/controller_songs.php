<?php
	$path = $_SERVER['DOCUMENT_ROOT'] . '/SONGNOWv2/';
	include($path . "module/songs/model/DAOSongs.php");

	session_start();

	switch($_GET['op']){
		case 'list':
			include("module/songs/view/songs.html");
			break;
			
		case 'data':
			if($_GET['filter']){
				try {
					$daoshop = new DAOsongs();
					$rlt = $daoshop->select_product_filter($_GET['filter'], $_GET['filterb'], $_GET['filter2']);
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
			}else{
				try {
					$daoshop = new DAOsongs();
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
			}
			break;
			
		case 'read':
			try {
				$daoshop = new DAOsongs();
				$rlt = $daoshop->select_product($_GET['modal']);

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

		case 'map':
			try {
				$daomap = new DAOsongs();
				$rlt = $daomap->select_all_map();
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

		case 'filter':
            try{
                $daosongs = new DAOsongs();
                $rdo = $daosongs->filters($_GET['checks']);
            }catch (Exception $e){
                echo json_encode("error");
                exit;
            }if(!$rdo){
                echo json_encode("error");
                exit;
            }else{
				// echo "come here";
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