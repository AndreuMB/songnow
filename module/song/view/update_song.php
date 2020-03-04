<div id="contenido">
<form method="post" name="update_song" id="update_song">
        <h1>Edit song</h1>
		<?php
		if(isset($error)){
			print ("<BR><span CLASS='styerror'>" . "* ".$error . "</span><br/>");
		}
		?>
		<p>
			<label for="id_song">id_song</label>
			<input name="id_song" id="id_song" type="text" placeholder="id_song" value="<?php  echo $user['id_song']?>" readonly />
			<span id="e_id_song" class="styerror"></span>
		</p>
        <p>
			<label for="name">song_name</label>
			<input name="name" id="name" type="text" placeholder="name" value="<?php  echo $user['song_name']?>"/>
			<span id="e_name" class="styerror"></span>
		</p>
        <p>
			<label for="singer">singer</label>
			<input name="singer" id="singer" type="text" placeholder="singer" value="<?php  echo $user['singer']?>"/>
			<span id="e_singer" class="styerror"></span>
		</p>
        <p>
			<label for="album">album</label>
			<input name="album" id="album" type="text" placeholder="album" value="<?php  echo $user['album']?>"/>
			<span id="e_album" class="styerror"></span>
		</p>
		<p>
		Music genre:
		</p>
		<span id="e_genre" class="error"></span>
		<?php
        	$afi=explode(":", $user['genre']);
        ?>
		<p>
			<?php
				$find_a=in_array("Rock", $afi);
					if($find_a){
			?>
			<input type="checkbox" id="genre[]" name="genre[]" value="Rock" checked>Rock<br>
			<?php
            	}else{
        	?>
			<input type="checkbox" id="genre[]" name="genre[]" value="Rock">Rock<br>
			<?php
            	}
			?>
			
			<?php
				$find_a=in_array("Pop", $afi);
					if($find_a){
			?>
			<input type="checkbox" id="genre[]" name="genre[]" value="Pop" checked>Pop<br>
			<?php
            	}else{
        	?>
			<input type="checkbox" id="genre[]" name="genre[]" value="Pop">Pop<br>
			<?php
            	}
			?>
			
			<?php
				$find_a=in_array("Blues", $afi);
					if($find_a){
			?>
			<input type="checkbox" id="genre[]" name="genre[]" value="Blues" checked>Blues<br>
			<?php
            	}else{
        	?>
			<input type="checkbox" id="genre[]" name="genre[]" value="Blues">Blues<br>
			<?php
            	}
            ?>
			<!-- <input type="checkbox" id="genre[]" name="genre[]" value="Rock">Rock<br>
			<input type="checkbox" id="genre[]" name="genre[]" value="Pop">Pop<br>
			<input type="checkbox" id="genre[]" name="genre[]" value="Blues">Blues<br> -->
		</p>

		<label>Choose a playlist:</label>
		<select id="playlists" name="playlists">

		</select>

		<p>
			<label for="relase_date">relase_date</label>
			<input id="relase_date" type="text" name="relase_date" readonly="readonly" value="<?php  echo $user['relase_date']?>">
			<span id="e_relase_date" class="styerror"></span>
		</p>
		<input name="Submit" type="button" value="Edit" onclick="validate_song_update()" />
	</form>
</div>