<?php
if (isset($_GET['page'])){
	switch($_GET['page']){
		case "controller_home":
			include("module/home/controller/".$_GET['page'].".php");
			include("module/search/controller/controller_search.php");
		break;
		case "controller_user":
			include("module/user/controller/".$_GET['page'].".php");
		break;
		case "controller_songs":
			include("module/songs/controller/".$_GET['page'].".php");
		break;
		case "controller_song":
			if(isset($_SESSION['type'])){
				if(($_SESSION['type'])=="admin"){
					include("module/song/controller/".$_GET['page'].".php");
				}else{
					include("view/inc/error404.php");
				}
			}else{
				include("view/inc/error404.php");
			}
		break;
		case "controller_song_list":
			include("module/song_list/controller/".$_GET['page'].".php");
		break;
		case "aboutus":
			include("module/aboutus/".$_GET['page'].".php");
		break;
		case "controller_contact":
			include("module/contact/controller/".$_GET['page'].".php");
		break;
		case "controller_shop":
			include("module/shop/controller/".$_GET['page'].".php");
		break;
		case "controller_login":
			include("module/login/controller/".$_GET['page'].".php");
		break;
		case "controller_cart":
			include("module/cart/controller/".$_GET['page'].".php");
		break;
		case "404":
			include("view/inc/error".$_GET['page'].".php");
		break;
		case "503":
			include("view/inc/error".$_GET['page'].".php");
		break;
		default:
			include("module/home/view/home.html");
		break;
	}
}else{
	include("module/home/view/home.html");
}
	
?>