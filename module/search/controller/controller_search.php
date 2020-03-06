<?php
	$path = $_SERVER['DOCUMENT_ROOT'] . '/SONGNOWv2/';
	include($path . "module/search/model/DAOSearch.php");
	session_start();

	switch($_GET['op']){
		case 'firstdrop':
			try{
				$DAOsearch = new DAOSearch();
				$rdo = $DAOsearch->readGenre();
			}catch (Exception $e){
				echo json_encode("error");
				exit;
			}
			if(!$rdo){
				echo json_encode("error");
				exit;
			}else{
				print_r(explode(":",$rdo));
				$favor = array();///inicializamos el array
				foreach ($rdo as $row) {
					array_push($favor, $row);//lo rellenamos con array_push
				}
				echo json_encode($favor);///lo pasamos a json
				exit;
			}
			break;
			
		case 'seconddrop':
			try{
				$DAOsearch = new DAOsearch();
				$rdo = $DAOsearch->readSinger($_GET['id']);
	
			}catch (Exception $e){
				echo json_encode("error");
				exit;
			}
			if(!$rdo){
				echo json_encode("error");
				exit;
			}else{
				$favor = array();///inicializamos el array
				foreach ($rdo as $row) {
					array_push($favor, $row);//lo rellenamos con array_push
				}
				echo json_encode($favor);///lo pasamos a json
				exit;
			}
			break;
		
		case 'autocomplete':
				try{
					$DAOsearch = new DAOsearch();
					$rdo = $DAOsearch->autocomplete();
				}catch (Exception $e){
					echo json_encode("error");
					exit;
				}
				if(!$rdo){
					echo json_encode("error");
					exit;
				}else{
					foreach ($rdo as $row) {
							echo 
							'<div class="autoelement">
								<a  class="element" data="'.$row['song_name'].'" id="'.$row['id_song'].'">'.utf8_encode($row['song_name']).'</a>
							</div>';
					}
					exit;
				}
				break;
			
		default:
			include("view/inc/error/error404.php");
			break;
	}
?>