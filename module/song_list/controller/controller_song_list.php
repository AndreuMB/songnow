<?php
	$path = $_SERVER['DOCUMENT_ROOT'] . '/8_MVC_CRUD/';
    include($path . "module/song_list/model/DAOSong.php");
	session_start();

	switch($_GET['op']){
		case 'list':
			include("module/song_list/view/list_song.php");
		break;

		case 'dades':
				try{
					$daouser = new DAOSong();
					$rdo = $daouser->select_all_songs();
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

					// $lines2=get_object_vars($lines);
					// echo json_encode($lines2);
					echo json_encode($lines);
					exit;
				}
		break;

		default:
			include("view/inc/error404.php");
		break;
	}
?>