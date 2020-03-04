<div id="contenido">
	<form method="post" name="create_song" id="create_song">
			<label for="id_song">id_song</label>
			<input name="id_song" id="id_song" type="text" placeholder="id_song" value="<?php echo $_POST['id_song']; ?>"/>
			<span id="e_id_song" class="error">
				<?php
					echo "$result[error]";
				?>
			</span>
		</p>
        <p>
			<label for="name">song_name</label>
			<input name="name" id="name" type="text" placeholder="name" value="<?php echo $_POST['name']; ?>"/>
			<span id="e_name" class="error"></span>
		</p>
        <p>
			<label for="singer">singer</label>
			<input name="singer" id="singer" type="text" placeholder="singer" value="<?php echo $_POST['singer']; ?>"/>
			<span id="e_singer" class="error"></span>
		</p>
        <p>
			<label for="album">album</label>
			<input name="album" id="album" type="text" placeholder="album" value="<?php echo $_POST['album']; ?>"/>
			<span id="e_album" class="error"></span>
		</p>
		<p>
		Music genre:
		</p>
		<span id="e_genre" class="error"></span>
		<p>
			<input type="checkbox" id="genre[]" name="genre[]" value="Rock">Rock<br>
			<input type="checkbox" id="genre[]" name="genre[]" value="Pop">Pop<br>
			<input type="checkbox" id="genre[]" name="genre[]" value="Blues">Blues<br><br>
		</p>

		<label>Choose a playlist:</label>
		<select id="playlists" name="playlists">

		</select>

		<p>
			<label for="relase_date">relase_date</label>
			<input id="relase_date" type="text" name="relase_date" readonly="readonly" value="<?php echo $_POST['relase_date']; ?>">
			<span id="e_relase_date" class="error"></span>
		</p>
		<input name="Submit" type="button" value="Registrar" onclick="validate_song_create()" />
	</form>
</div>