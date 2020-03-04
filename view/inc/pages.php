<?php
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
			include("module/song/controller/".$_GET['page'].".php");
		break;
		case "controller_song_list":
			include("module/song_list/controller/".$_GET['page'].".php");
		break;
		case "services":
			include("module/services/".$_GET['page'].".php");
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
		case "404":
			include("view/inc/error".$_GET['page'].".php");
		break;
		case "503":
			include("view/inc/error".$_GET['page'].".php");
		break;
		default:
			include("module/home/view/home.php");
		break;
	}
?>