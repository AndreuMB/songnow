<?php
	$path = $_SERVER['DOCUMENT_ROOT'] . '/8_MVC_CRUD/';
    include($path . "model/connect.php");
    
	class DAOSearch{
        function readGenre(){
			$sentence = connect::sentence("SELECT DISTINCT genre FROM songs ORDER BY genre ASC");
            return $sentence;
         }

         function readMuni($provi){
            $sql = "SELECT DISTINCT localidad FROM casas WHERE provincia='$provi' ORDER BY localidad ASC";
            $conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
            connect::close($conexion);
            return $res;
         }

         function autocomplete(){
            $val = $_POST['auto'];
            $local = $_POST['drop2'];
            $sql = "SELECT *  FROM casas WHERE localidad='$local' and nombre LIKE '".$val. "%'";
            $conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
            connect::close($conexion);
            return $res;
         }
    }