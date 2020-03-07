<?php
	$path = $_SERVER['DOCUMENT_ROOT'] . '/SONGNOWv2/';
   include_once($path . "model/connect.php");
    
	class DAOSearch{
        function readGenre(){
			$sentence = connect::sentence("SELECT DISTINCT genre FROM songs ORDER BY genre ASC");
            return $sentence;
         }

         function readSinger($genre){
            $sentence = connect::sentence("SELECT DISTINCT singer FROM songs WHERE genre LIKE '%$genre%' ORDER BY singer ASC");
            return $sentence;
         }

         function autocomplete(){
            $val = $_POST['auto'];
            $singer = $_POST['drop2'];
            $sentence = connect::sentence("SELECT *  FROM songs WHERE singer='$singer' and song_name LIKE '%" .$val. "%'");
            return $sentence;
         }
    }