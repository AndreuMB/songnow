<div id="contenido">
    <div class="container">
    	<div class="row">
    			<h3 data-tr="List songs"></h3>
        </div>
        <a class="add" href="index.php?page=controller_song&op=create">
            <img class="add" src="view/img/anadir2.png">
        </a>
        <form method="post" name="select_songs" id="select_songs">
            <div class="row">
                <table id="table_list">
                    <thead>
                        <tr>
                            <td width=1px><b></b></th>
                            <td width=125 data-tr="ID song"><b></b></th>
                            <td width=125 data-tr="Name"><b></b></th>
                            <td width=125 data-tr="Singer"><b></b></th>
                            <th width=350 data-tr="Action"><b></b></th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                            if ($rdo->num_rows === 0){
                                echo '<tr>';
                                echo '<td align="center"  colspan="3">NO HAY NINGUN USUARIO</td>';
                                echo '</tr>';
                            }else{
                                foreach ($rdo as $row) {
                                    // echo '<form method="post" name="select_songs" id="select_songs">';
                                    echo '<tr id="line">';
                                    echo '<td width=1px> <input type="checkbox" id="id_check[]" name="id_check[]" value=' . $row['id_song'] . '> </td>';
                                    echo '<td width=125>'. $row['id_song'] . '</td>';
                                    echo '<td width=125>'. $row['song_name'] . '</td>';
                                    echo '<td width=125>'. $row['singer'] . '</td>';
                                    echo '<td width=350>';

                                    echo "<div class='Button_read' id='".$row['id_song']."'>Read</div>";  //READ

                                    // echo '<a class="Button_list" href="index.php?page=controller_song&op=read&id='.$row['id_song'].'">Read</a>';
                                    echo '&nbsp;';
                                    echo '<a class="Button_list" href="index.php?page=controller_song&op=update&id='.$row['id_song'].'">Update</a>';
                                    echo '&nbsp;';
                                    echo '<a class="Button_list" href="index.php?page=controller_song&op=delete&id='.$row['id_song'].'">Delete</a>';
                                    echo '</td>';
                                    echo '</tr>';
                                }
                            }
                        ?>
                    </tbody>
                </table>
            </div>
        <img id="trash" name="submit_del" type="button" value="Registrar" onclick="validate_song_delete()" src="view/img/trash.png"></a>
        </form>
        <a class="Button_list" id="delete_button">Delete all</a>
    </div>
</div>

<!-- modal window -->
<section id="user_modal">
    <!-- <div id="details_user" hidden>
        <div id="details">
            <div id="container">
                User: <div id="id_song"></div></br>
                Pass: <div id="song_name"></div></br>
                Name: <div id="singer"></div></br>
                Language: <div id="album"></div></br>
                Sexo: <div id="relase_date"></div></br>
                DNI: <div id="genre"></div></br>
            </div>
        </div>
    </div> -->
</section>