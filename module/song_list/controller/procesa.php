<?php
	echo "PROCESSA";
	require_once("../model/DAOSong.php");
	session_start();
	//print_r($_SESSION);
	//die();
	
	// $nuevo = new song();
	// echo "HERE1";
	echo "<br>TEST ";
	echo $_POST['id_song'];
	echo $_SESSION['id_song'];
	// $song = DAOSong::insert_song($_SESSION['id_song'],$_SESSION['song_name'],$_SESSION['singer'],$_SESSION['album'],$_SESSION['relase_date']);
	$song = DAOSong::insert_song($_SESSION);

	// $song = song::new_song('aaa','song_name','singer','album','relase_date');
	// $song = song::new_song('A99', 'amazing', 'andreu', 'andreus', '20/10/2020');


	// $rdo = $nuevo->new_song($_SESSION['id_song'],$_SESSION['song_name'],$_SESSION['singer'],$_SESSION['album'],$_SESSION['relase_date']);
	// print_r($song);
	// echo "HERE";
	// echo "<br>";
	echo '<br>HELLO I AM A SELECT<br>';
	$songsel = DAOSong::select_all_songs();
	// print_r($songsel);
	echo "<br> SELECT <br> $songsel";
	
	// $rdo = $nuevo->list_fetch_assoc_comentario();
	// echo $rdo;
	// echo "<br>";
	
	// $rdo = $nuevo->list_fetch_array_comentario();
	// echo $rdo;
?>