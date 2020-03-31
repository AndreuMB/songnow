<?php
session_start();
    if (isset($_GET['page'])){
		if ($_GET['page']==="controller_song"){
			include("view/inc/top_page_song.php");
		}elseif($_GET['page']==="controller_song_list"){
			include("view/inc/top_page_song_list.php");
		}elseif($_GET['page']==="controller_home"){
			include("view/inc/top_page_home.php");
		}elseif($_GET['page']==="controller_shop"){
			include("view/inc/top_page_shop.php");
		}elseif($_GET['page']==="controller_songs"){
			include("view/inc/top_page_songs.php");
		}elseif($_GET['page']==="controller_login"){
			include("view/inc/top_page_login.php");
		}elseif($_GET['page']==="controller_cart"){
			include("view/inc/top_page_cart.php");
		}else{
			include("view/inc/top_page.php");
		}
	}else{
		include("view/inc/top_page.php");
	}
?>
<div id="wrapper">		
    <div id="header">    	
    	<?php
    	    include("view/inc/header.php");
    	?>        
	</div> 
	<div id="menu">    	
    	<?php
    	    include("view/inc/menu.php");
    	?>        
	</div> 
	<div id="page">
		<?php 
			include("view/inc/pages.php"); 
		?>        
	</div>
	<div id="footer">   	   
		<?php
			include("view/inc/footer.php");
		?>        
	</div>
</div>
<?php
    include("view/inc/bottom_page.php");
?>
    