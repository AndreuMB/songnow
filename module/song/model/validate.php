<?php
    function validate_id_song(){
        $daouser = new DAOSong();
        $rdo = $daouser->select_song($_POST["id_song"]);
        return $rdo;
    }
    

    function validate(){
        $check=true;

        if(validate_id_song()){
            $error = "Repeated ID";
            $check=false;
        }else{
            $e_id_song = "";
            $check=true;
        }
        $array=['check'=>$check,'error'=>$error];
        return $array;
    }