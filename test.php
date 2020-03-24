<?php
$_SESSION['time']=time();
sleep (5);
$test = time()-$_SESSION['time'];
echo time() . "-" . $_SESSION['time'] . "=" . $test;
?>