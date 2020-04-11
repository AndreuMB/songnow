<?php
if(!isset($_SESSION)){ 
    session_start(); 
}
$path = $_SERVER['DOCUMENT_ROOT'] . '/SONGNOWv2/';
include_once($path . "module/login/model/DAOlogin.php");

switch($_GET['op']){
    case 'list':
        include("module/login/view/login.html");
    break;
   
    case 'register':
        try{
            $daouser = new DAOlogin();
            $rdo = $daouser->register($_GET['username'], $_GET['email'], $_GET['psswd']);
       }catch (Exception $e){
           echo json_encode("error");
           exit;
       }
       if(!$rdo){
           echo json_encode("error2");
           exit;
       }else{
        echo json_encode("done");
           exit;
       }
    break;

    case 'login':
        try{
            $daouser = new DAOlogin();
            $rdo = $daouser->login($_GET['username']);
        }catch (Exception $e){
            echo json_encode("error");
            exit;
        }
        if(!$rdo){
            echo json_encode("the username not exists");
            exit;
        }else{
            $value = get_object_vars($rdo);
            $_SESSION['username'] = $value['username'];
            $_SESSION['avatar'] = $value['avatar'];
            $_SESSION['type'] = $value['type'];
            // print_r($_GET['psswd']);
            // print_r($value['type']);
            // print_r($_SESSION);
            if (password_verify($_GET['psswd'],$value['psswd'])) {
                echo json_encode(true);
            }else{
                echo json_encode("username or password incorrects");
                exit;
            }
            exit;
        }
    break;
    case 'menut':
        if (isset($_SESSION['type'])){
            echo json_encode($_SESSION);
			exit;
        }else{
            echo json_encode(null);
            exit;
        }
    break;
    case 'reset_time':
        unset($_SESSION['time']);
    break;
    case 'activity_time':
        if(isset($_SESSION['type'])){
            session_regenerate_id();
            if (!$_SESSION['time']){
                $_SESSION['time']=time();
            }else{
                if(time()-$_SESSION['time']>=900){
                    session_destroy();
                    echo json_encode("logout");
                }
            }
        }
    break;
    case 'control_user':
        if (!isset ($_SESSION['type'])||($_SESSION['type'])!='admin'){
            echo json_encode("login");
        }else{
            echo json_encode("ok");
        }
        break;  
    case 'log_out':
        session_destroy();
        include("module/home/view/home.html");
    break;
    case 'info_user':
        try{
            $daouser = new DAOlogin();
            $rdo = $daouser->login($_SESSION['username']);
        }catch (Exception $e){
           echo ("error");
           exit;
        }
        if(!$rdo){
           echo ("error");
        }else{
        echo json_encode($rdo);
        }
    break;
    default:
        include("view/inc/error404.php");
    break;
}
?>