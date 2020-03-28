<?php
	$path = $_SERVER['DOCUMENT_ROOT'] . '/SONGNOWv2/';
    include_once($path . "model/connect.php");
    
	class DAOlogin{
		function register($username,$email,$psswd){
            $hashemail=md5( strtolower( trim( $email ) ) );
            $avatar="https://www.gravatar.com/avatar/" . $hashemail;
            $psswdhash =  password_hash($psswd, PASSWORD_DEFAULT);
			$sentence = connect::sentence("INSERT INTO users (username, email, psswd, avatar)
            VALUES ('$username','$email','$psswdhash', '$avatar');");
            return $sentence;
        }
        function login($username){
			$sentence = connect::sentence("SELECT * FROM users WHERE username='$username'")->fetch_object();
            return $sentence;
        }
    }
?>