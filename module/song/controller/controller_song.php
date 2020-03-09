<?php
	$path = $_SERVER['DOCUMENT_ROOT'] . '/SONGNOWv2/';
    include($path . "module/song/model/DAOSong.php");
	// session_start();

	switch($_GET['op']){
		case 'list';

		if($_POST){
			// die("POST DELETE");
			try{
				$daouser = new DAOSong();
				$rdo = $daouser->delete_song_mult($_POST);
				// die($_GET['id']);
			}catch (Exception $e){
				$callback = 'index.php?page=503';
				die('<script>window.location.href="'.$callback .'";</script>');
			}
			
			if($rdo){
				echo '<script language="javascript">alert("Borrado en la base de datos correctamente")</script>';
				$callback = 'index.php?page=controller_song&op=list';
				die('<script>window.location.href="'.$callback .'";</script>');
			}else{
				$callback = 'index.php?page=503';
				die('<script>window.location.href="'.$callback .'";</script>');
			}
		}


            try{
				$daouser = new DAOSong();
				$rdo = $daouser->select_all_songs();
				// $rdo = DAOSong::select_all_songs();
            }catch (Exception $e){
                $callback = 'index.php?page=503';
			    die('<script>window.location.href="'.$callback .'";</script>');
            }
            
            if(!$rdo){
    			$callback = 'index.php?page=503';
			    die('<script>window.location.href="'.$callback .'";</script>');
    		}else{
				include("module/song/view/list_song.php");
			}

            break;
            
		case 'create';
		include("module/song/model/validate.php");
            
		$check = true;

		if ($_POST) {
			$result=validate();
			$check=false;

			if ($result['check']){
				$_SESSION['song']=$_POST;
				try{
					$daouser = new DAOSong();
					$rdo = $daouser->insert_song($_POST);
				}catch (Exception $e){
					$callback = 'index.php?page=503';
					die('<script>window.location.href="'.$callback .'";</script>');
				}
				
				if($rdo){
					echo '<script language="javascript">alert("Registrado en la base de datos correctamente")</script>';
					$callback = 'index.php?page=controller_song&op=list';
					die('<script>window.location.href="'.$callback .'";</script>');
				}else{
					// die($rdo);
					$callback = 'index.php?page=503';
					die('<script>window.location.href="'.$callback .'";</script>');
				}
			}
			else{
				echo "ERROR";
			}
		}
		include("module/song/view/create_song.php");
		break;

        case 'update';
            include("module/user/model/validate.php");
            
            // $check = true;
            if ($_POST) {
				$result=validate();
                if ($result['check']){
                    $_SESSION['song']=$_POST;
                    try{
						$daouser = new DAOSong();
						$rdo = $daouser->update_song($_POST);
					}catch (Exception $e){
                        $callback = 'index.php?page=503';
        			    die('<script>window.location.href="'.$callback .'";</script>');
                    }
                    
		            if($rdo){
            			echo '<script language="javascript">alert("Actualizado en la base de datos correctamente")</script>';
            			$callback = 'index.php?page=controller_song&op=list';
        			    die('<script>window.location.href="'.$callback .'";</script>');
            		}else{
            			$callback = 'index.php?page=503';
    			        die('<script>window.location.href="'.$callback .'";</script>');
            		}
                }
            }
            
            try{
				$daouser = new DAOSong();
            	$rdo = $daouser->select_song($_GET['id']);
            	$user=get_object_vars($rdo);
            }catch (Exception $e){
                $callback = 'index.php?page=503';
			    die('<script>window.location.href="'.$callback .'";</script>');
            }
            
            if(!$rdo){
    			$callback = 'index.php?page=503';
    			die('<script>window.location.href="'.$callback .'";</script>');
    		}else{
        	    include("module/song/view/update_song.php");
    		}
            break;
            
        case 'read';
            try{
                $daouser = new DAOSong();
            	$rdo = $daouser->select_song($_GET['id']);
            	$user=get_object_vars($rdo);
            }catch (Exception $e){
                $callback = 'index.php?page=503';
			    die('<script>window.location.href="'.$callback .'";</script>');
            }
            if(!$rdo){
    			$callback = 'index.php?page=503';
    			die('<script>window.location.href="'.$callback .'";</script>');
    		}else{
                include("module/song/view/read_song.php");
    		}
            break;
            
        case 'delete';
            if (isset($_POST['delete'])){
				
                try{
                    $daouser = new DAOSong();
					$rdo = $daouser->delete_song($_GET['id']);
					// die($_GET['id']);
                }catch (Exception $e){
                    $callback = 'index.php?page=503';
    			    die('<script>window.location.href="'.$callback .'";</script>');
                }
            	
            	if($rdo){
        			echo '<script language="javascript">alert("Borrado en la base de datos correctamente")</script>';
        			$callback = 'index.php?page=controller_song&op=list';
    			    die('<script>window.location.href="'.$callback .'";</script>');
        		}else{
        			$callback = 'index.php?page=503';
			        die('<script>window.location.href="'.$callback .'";</script>');
        		}
			}
			try{
				$daouser = new DAOSong();
            	$rdo = $daouser->select_song($_GET['id']);
            	$user=get_object_vars($rdo);
            }catch (Exception $e){
                $callback = 'index.php?page=503';
			    die('<script>window.location.href="'.$callback .'";</script>');
            }
            
            if(!$rdo){
    			$callback = 'index.php?page=503';
    			die('<script>window.location.href="'.$callback .'";</script>');
    		}else{
				include("module/song/view/delete_song.php");
    		}
            
			break;

		case 'read_modal':
			try{
				$daouser = new DAOSong();
				$rdo = $daouser->select_song($_GET['modal']);
			}catch (Exception $e){
				echo json_encode("error");
				exit;
			}
			if(!$rdo){
				echo json_encode("error");
				exit;
			}else{
				$user=get_object_vars($rdo);
				echo json_encode($user);
				exit;
			}
		break;

		case 'delete_all':
			try{
				$daouser = new DAOSong();
				// die('HERE');
				$rdo = $daouser->delete_all();
				//  $rdo = $daouser->delete_song("A11");
			}catch (Exception $e){
				echo json_encode("error");
				exit;
			}
			if(!$rdo){
				echo json_encode("error");
				exit;
			}else{
				// $user=get_object_vars($rdo);
				echo json_encode("enter");
				exit;
			}

		break;

		case 'playlist':
			try {
				$daomap = new DAOSong();
				$rlt = $daomap->select_playlist();
			} catch (Exception $e) {
				echo json_encode("error1");
			}
			
			if (!$rlt) {
				echo json_encode("error2");
			}else{
				$prod = array();
				foreach ($rlt as $value) {
					array_push($prod, $value);
				}
				echo json_encode($prod);
				exit;
			}
		break;

		case 'delete_mult':
			try{
				$daouser = new DAOSong();
				$rdo = $daouser->delete_song_mult($_POST);
			} catch (Exception $e) {
				echo json_encode("error1");
			}
			
			echo json_encode($_POST);
		default:
            include("view/inc/error404.php");
        break;
	}
?>