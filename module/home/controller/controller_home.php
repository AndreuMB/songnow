<?php
	$path = $_SERVER['DOCUMENT_ROOT'] . '/SONGNOWv2/';
	include_once($path . "module/home/model/DAOimg.php");
	// session_start();

	switch($_GET['op']){
		case 'list':
			include("module/home/view/home.html");
		break;

		case 'carousel':
				try{
		 			$daouser = new DAOimg();
	 				$rdo = $daouser->select_all_img();
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

		case 'scroll':
				$page					=	intval( $_GET['p'] );
				$current_page			=	$page;
				$records_per_page		=	3; // records to show per page
				$start					=	$current_page * $records_per_page;
				$html					=	"";
				try{
					$daouser = new DAOimg();
					$rdo = $daouser->categ_scroll($start, 0);
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
		// }
		break;
		case 'sum_view':
			try{
				$daouser = new DAOimg();
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

		case 'categories':
			try{
				 $daouser = new DAOimg();
				 $rdo = $daouser->select_img_categ();
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
		case 'sum_view':
			try{
				$daouser = new DAOimg();
				$rdo = $daouser->sum_view($_GET['id']);
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
		default:
			include("view/inc/error404.php");
		break;
	}
?>