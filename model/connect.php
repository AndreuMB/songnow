<?php
	class connect{
		public static function consong(){
			$host = 'localhost';  
    		$user = "php";                     
    		$pass = "php";                             
    		$db = "music";                      
    		$port = 3306;                           
    		$tabla="songs";
    		
    		$conexion = mysqli_connect($host, $user, $pass, $db, $port)or die(mysql_error());
			return $conexion;
		}

		public static function close($conexion){
			mysqli_close($conexion);
		}

		public static function sentence($sql){
			// echo "<br>" . $sql . "<br>";
			$conexion = connect::consong();
			$res = mysqli_query($conexion, $sql);
            connect::close($conexion);
			return $res;
		}
	}