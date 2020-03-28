<?php
	$path = $_SERVER['DOCUMENT_ROOT'] . '/SONGNOWv2/';
	include($path . "module/songs/model/DAOSongs.php");

	// session_start();

	switch($_GET['op']){
		case 'list':
			include("module/songs/view/songs.html");
			break;
			
		case 'data':
			if(isset($_GET['filter'])){
				try {
					$daoshop = new DAOsongs();
					if(isset($_GET['filter2'])){
						$rlt = $daoshop->select_product_filter($_GET['filter'], $_GET['filterb'], $_GET['filter2']);
					}else{
						$rlt = $daoshop->select_product_filter($_GET['filter'], $_GET['filterb'],null);
					}
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
                $lawyer = array();
                foreach ($rdo as $row){
                    array_push($lawyer, $row);
                }
                echo json_encode($lawyer);
                exit;
			}
		break;

		case 'pages':
			$page					=	intval( $_GET['num_page'] );
			$current_page			=	$page - 1;
			$records_per_page		=	$_GET['show_songs']; // records to show per page
			$start					=	$current_page * $records_per_page;
			$sql 					= 	$_GET['sql'];

		try{
			$daouser = new DAOsongs();
			$rdo = $daouser->page_now($records_per_page, $sql, $start);
		}catch (Exception $e){
			echo json_encode("error");
			exit;
		}
		if(!$rdo){
			echo json_encode("error");
			exit;
		}else{
			$lines=array();
			foreach($rdo as $row){
				array_push($lines, $row);
			}
			echo json_encode($lines);
			exit;
		}
		break;

		case 'pagination':
			try{
				$daosongs = new DAOsongs();
				$rdo = $daosongs->pagination();
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

		case 'sum_view':
			try{
				$daouser = new DAOsongs();
				$rdo = $daouser->sum_view($_GET['id']);
		   }catch (Exception $e){
			   echo json_encode("error");
			   exit;
		   }
		   if(!$rdo){
			   echo json_encode("error");
			   exit;
		   }else{
			echo json_encode("done");
			   exit;
		   }
		break;

		case 'check_like':
			try{
				$daouser = new DAOsongs();
				$rdo = $daouser->check_like($_GET['id_like'],$_GET['id_user']);
			}catch (Exception $e){
			   echo json_encode("error");
			   exit;
			}
			if(!$rdo){
				echo json_encode("not_exist");
			}else{
				echo json_encode("exist");
			}
		break;
		case 'check_likes':
			$id_like1=str_replace("[", "", $_GET['id_like']);
			$id_like2=str_replace("]", "", $id_like1);
			$id_like3=str_replace("\"", "", $id_like2);
			$id_likes = explode(",", $id_like3);
			// print_r ($id_likes);
			$result=array();
			for($i=0;$i<count($id_likes);$i++){
				try{
					$daouser = new DAOsongs();
					$rdo = $daouser->check_like($id_likes[$i],$_GET['id_user']);
				}catch (Exception $e){
					echo json_encode("error");
				exit;
				}
				if(!$rdo){
					array_push($result, "not_exist");
				}else{
					array_push($result, "exist");
				}
			}
			echo json_encode($result);
		break;
		case 'add_like':
			try{
				$daouser = new DAOsongs();
				$rdo = $daouser->add_like($_GET['id_like'],$_GET['id_user']);
			}catch (Exception $e){
			   echo json_encode("error");
			   exit;
			}
			if(!$rdo){
				echo json_encode("error2");
			}else{
				echo json_encode("done");
			}
		break;
		case 'delete_like':
			try{
				$daouser = new DAOsongs();
				$rdo = $daouser->delete_like($_GET['id_like'],$_GET['id_user']);
			}catch (Exception $e){
			   echo json_encode("error");
			   exit;
			}
			if(!$rdo){
				echo json_encode("error2");
			}else{
				echo json_encode("done");
			}
		break;
		default:
			include("view/inc/error404.php");
			break;
	}
?>